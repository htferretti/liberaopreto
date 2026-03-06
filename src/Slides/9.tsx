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
const STOCK_CACHE_KEY = "slide9:aapl34sa:points";

let memoryCache: StockPoint[] | null = null;

const parseStockPoints = (data: any): StockPoint[] => {
  const result = data?.chart?.result?.[0];
  const timestamps: number[] = result?.timestamp ?? [];
  const closes: Array<number | null> = result?.indicators?.quote?.[0]?.close ?? [];

  return timestamps
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
};

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

      if (memoryCache?.length) {
        setPoints(memoryCache);
        setLoading(false);
        return;
      }

      const cached = localStorage.getItem(STOCK_CACHE_KEY);

      if (cached) {
        try {
          const parsed = JSON.parse(cached) as StockPoint[];

          if (Array.isArray(parsed) && parsed.length) {
            memoryCache = parsed;
            setPoints(parsed);
            setLoading(false);
            return;
          }
        } catch {
          localStorage.removeItem(STOCK_CACHE_KEY);
        }
      }

      try {
        let response = await fetch(
          "/api/yahoo/v8/finance/chart/AAPL34.SA?range=max&interval=1wk",
          { signal: controller.signal }
        );

        if (response.status === 429) {
          await new Promise((resolve) => setTimeout(resolve, 800));
          response = await fetch(
            "/api/yahoo/v8/finance/chart/AAPL34.SA?range=max&interval=1wk",
            { signal: controller.signal }
          );
        }

        if (!response.ok) {
          throw new Error(response.status === 429 ? "Limite de requisições temporário." : "Falha ao buscar cotação.");
        }

        const data = await response.json();
        const parsedPoints = parseStockPoints(data);

        if (!parsedPoints.length) {
          throw new Error("Sem dados para exibir.");
        }

        memoryCache = parsedPoints;
        localStorage.setItem(STOCK_CACHE_KEY, JSON.stringify(parsedPoints));
        setPoints(parsedPoints);
      } catch (loadError) {
        if ((loadError as Error).name !== "AbortError") {
          setError((loadError as Error).message || "Não foi possível carregar o gráfico agora.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();

    return () => controller.abort();
  }, []);

  const { chartPoints, polyline, min, max, startDate, endDate, plotWidth } = useMemo(() => {
    if (!points.length) {
      return {
        chartPoints: [] as Array<StockPoint & { x: number; y: number }>,
        polyline: "",
        min: 0,
        max: 0,
        startDate: "",
        endDate: "",
        plotWidth: 0,
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
    };
  }, [points]);

  const hoveredPoint = hoverIndex !== null ? chartPoints[hoverIndex] : null;

  const updateHoverByClientX = (clientX: number, rect: DOMRect) => {
    if (!chartPoints.length) {
      return;
    }

    const relativeClientX = clientX - rect.left;
    const svgX = (relativeClientX / rect.width) * CHART_WIDTH;
    const normalizedX = Math.min(Math.max(svgX, CHART_PADDING), CHART_WIDTH - CHART_PADDING);
    const relativeX = normalizedX - CHART_PADDING;
    const index = Math.round((relativeX / plotWidth) * (chartPoints.length - 1));
    const clampedIndex = Math.min(Math.max(index, 0), chartPoints.length - 1);

    setHoverIndex(clampedIndex);
  };

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    updateHoverByClientX(event.clientX, rect);
  };

  const handleTouchMove = (event: React.TouchEvent<SVGSVGElement>) => {
    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    updateHoverByClientX(touch.clientX, rect);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Tema>Capital aberto: <span>AAPL34</span><br /><p>NASDAQ</p></Tema>
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
                  onTouchStart={handleTouchMove}
                  onTouchMove={handleTouchMove}
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
                      left: `${(hoveredPoint.x / CHART_WIDTH) * 100}%`,
                      top: `${(hoveredPoint.y / CHART_HEIGHT) * 100}%`,
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
    font-size: 40px;
    font-weight: 900;
    margin: 16px;

    span {
      color: ${COLORS.blue};
    }

    p {
      text-align: center;
      font-size: 24px;
    }

    @media (max-width: 1223px) {
      display: none;
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

      @media (max-width: 1223px) {
        top: 50%;
        width: 96vw;
        height: auto;
        padding: 8px;
        gap: 6px;
      }
    `;

    const ChartArea = styled.div`
      position: relative;
      width: ${CHART_WIDTH}px;
      height: ${CHART_HEIGHT}px;
      margin: 0 auto;

      @media (max-width: 1223px) {
        width: 100%;
        height: auto;
        aspect-ratio: ${CHART_WIDTH} / ${CHART_HEIGHT};
      }
    `;

    const ChartSvg = styled.svg`
      width: ${CHART_WIDTH}px;
      height: ${CHART_HEIGHT}px;
      cursor: crosshair;

      @media (max-width: 1223px) {
        width: 100%;
        height: 100%;
        cursor: pointer;
        touch-action: none;
      }
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

      @media (max-width: 1223px) {
        min-width: 100px;
        padding: 5px 8px;

        strong {
          font-size: 12px;
        }

        span {
          font-size: 11px;
        }
      }
    `;

    const ChartInfo = styled.div`
      display: flex;
      justify-content: space-between;
      margin: 0 12px 8px;
      color: ${COLORS.black};
      font-size: 24px;
      font-weight: 900;

      @media (max-width: 1223px) {
        margin: 0 4px 6px;
        font-size: 14px;
        gap: 8px;
      }
    `;

    const Status = styled.p`
      text-align: center;
      color: ${COLORS.black};
      font-size: 18px;
      font-weight: 400;

      @media (max-width: 1223px) {
        font-size: 14px;
      }
    `;