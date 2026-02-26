import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import Container from "../Components/Container"

import { COLORS } from "../style";

type Slide9Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

type StockPoint = {
  timestamp: number;
  date: string;
  close: number;
};

const CHART_WIDTH = 760;
const CHART_HEIGHT = 340;
const CHART_PADDING = 24;

const Slide9 = ({ onPrevious, onNext }: Slide9Props) => {
  const [points, setPoints] = useState<StockPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "/api/yahoo/v8/finance/chart/AAPL34.SA?range=max&interval=1wk",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Falha ao buscar cotação.");
        }

        const data = await response.json();
        const result = data?.chart?.result?.[0];
        const timestamps: number[] = result?.timestamp ?? [];
        const closes: Array<number | null> = result?.indicators?.quote?.[0]?.close ?? [];

        const parsedPoints = timestamps
          .map((timestamp, index) => {
            const close = closes[index];

            if (typeof close !== "number" || close <= 0) {
              return null;
            }

            return {
              timestamp,
              date: new Date(timestamp * 1000).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }),
              close,
            };
          })
          .filter((point): point is StockPoint => point !== null);

        if (!parsedPoints.length) {
          throw new Error("Sem dados para exibir.");
        }

        setPoints(parsedPoints);
      } catch (loadError) {
        if ((loadError as Error).name !== "AbortError") {
          setError("Não foi possível carregar o gráfico agora.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();

    return () => controller.abort();
  }, []);

  const { chartPoints, polyline, min, max, startDate, endDate, plotWidth, plotHeight } = useMemo(() => {
    if (!points.length) {
      return {
        chartPoints: [] as Array<StockPoint & { x: number; y: number }>,
        polyline: "",
        min: 0,
        max: 0,
        startDate: "",
        endDate: "",
        plotWidth: 0,
        plotHeight: 0,
      };
    }

    const closes = points.map((point) => point.close);
    const minClose = Math.min(...closes);
    const maxClose = Math.max(...closes);
    const range = Math.max(maxClose - minClose, 1);
    const localPlotWidth = CHART_WIDTH - CHART_PADDING * 2;
    const localPlotHeight = CHART_HEIGHT - CHART_PADDING * 2;

    const mappedChartPoints = points
      .map((point, index) => {
        const x = CHART_PADDING + (index / Math.max(points.length - 1, 1)) * localPlotWidth;
        const y = CHART_PADDING + ((maxClose - point.close) / range) * localPlotHeight;
        return {
          ...point,
          x,
          y,
        };
      });

    const polylinePoints = mappedChartPoints.map((point) => `${point.x},${point.y}`).join(" ");

    return {
      chartPoints: mappedChartPoints,
      polyline: polylinePoints,
      min: minClose,
      max: maxClose,
      startDate: points[0].date,
      endDate: points[points.length - 1].date,
      plotWidth: localPlotWidth,
      plotHeight: localPlotHeight,
    };
  }, [points]);

  const hoveredPoint = hoverIndex !== null ? chartPoints[hoverIndex] : null;

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!chartPoints.length) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const normalizedX = Math.min(Math.max(mouseX, CHART_PADDING), CHART_WIDTH - CHART_PADDING);
    const relativeX = normalizedX - CHART_PADDING;
    const index = Math.round((relativeX / plotWidth) * (chartPoints.length - 1));
    const clampedIndex = Math.min(Math.max(index, 0), chartPoints.length - 1);

    setHoverIndex(clampedIndex);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Tema>Capital aberto: <span>AAPL34</span></Tema>
        <ChartWrapper>
          {loading && <Status>Carregando gráfico...</Status>}

          {!loading && error && <Status>{error}</Status>}

          {!loading && !error && (
            <>
              <ChartInfo>
                <span>R$ {min.toFixed(2)}</span>
                <span>{startDate} - {endDate}</span>
                <span>R$ {max.toFixed(2)}</span>
              </ChartInfo>
              <ChartArea>
                <ChartSvg
                  viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
      
                  <Line points={polyline} />

                  {hoveredPoint && (
                    <>
                      <HoverLine
                        x1={hoveredPoint.x}
                        y1={CHART_PADDING}
                        x2={hoveredPoint.x}
                        y2={CHART_HEIGHT - CHART_PADDING}
                      />
                      <HoverDot cx={hoveredPoint.x} cy={hoveredPoint.y} r={5} />
                    </>
                  )}
                </ChartSvg>

                {hoveredPoint && (
                  <HoverTooltip
                    style={{
                      left: `${hoveredPoint.x}px`,
                      top: `${hoveredPoint.y}px`,
                    }}
                  >
                    <strong>R$ {hoveredPoint.close.toFixed(2)}</strong>
                    <span>{hoveredPoint.date}</span>
                  </HoverTooltip>
                )}
              </ChartArea>
            </>
          )}
        </ChartWrapper>
    </Container>
  )
}

export default Slide9;


const Tema = styled.h1`
    position: absolute;
    top: 0;
    font-size: 24px;
    font-weight: 400;
    margin: 16px;

    span {
      color: ${COLORS.blue};
      font-weight: 700;
    }
  `;

    const ChartWrapper = styled.div`
      position: absolute;
      top: 54%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 820px;
      height: 440px;
      border-radius: 16px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 8px;
    `;

    const ChartArea = styled.div`
      position: relative;
      width: ${CHART_WIDTH}px;
      height: ${CHART_HEIGHT}px;
      margin: 0 auto;
    `;

    const ChartSvg = styled.svg`
      width: ${CHART_WIDTH}px;
      height: ${CHART_HEIGHT}px;
      cursor: crosshair;
    `;

    const Line = styled.polyline`
      fill: none;
      stroke: ${COLORS.blue};
      stroke-width: 3;
      stroke-linejoin: round;
      stroke-linecap: round;
    `;

    const HoverLine = styled.line`
      stroke: ${COLORS.blue};
      stroke-width: 1;
      stroke-dasharray: 4 4;
    `;

    const HoverDot = styled.circle`
      fill: ${COLORS.white};
      stroke: ${COLORS.blue};
      stroke-width: 3;
    `;

    const HoverTooltip = styled.div`
      position: absolute;
      transform: translate(-50%, calc(-100% - 12px));
      background: ${COLORS.black};
      border-radius: 10px;
      padding: 6px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      pointer-events: none;
      min-width: 120px;

      strong {
        color: ${COLORS.blue};
        font-size: 14px;
      }

      span {
        color: ${COLORS.white};
        font-size: 12px;
      }
    `;

    const ChartInfo = styled.div`
      display: flex;
      justify-content: space-between;
      margin: 0 12px 8px;
      color: ${COLORS.black};
      font-size: 24px;
      font-weight: 300;
    `;

    const Status = styled.p`
      text-align: center;
      color: ${COLORS.black};
      font-size: 18px;
      font-weight: 400;
    `;