import styled from "styled-components";
import Container from "../Components/Container"

type SlideRefsProps = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const SlideRefs = ({ onPrevious, onNext }: SlideRefsProps) => {
  return (
    <Container onPrevious={onPrevious} onNext={onNext}>
        <Pedro>
          <Title>Referências</Title>
          <NameList>
            <li><a href="https://s2.q4cdn.com/470004039/files/doc_financials/2025/ar/_10-K-2025-As-Filed.pdf">https://s2.q4cdn.com/470004039/files/doc_financials/2025/ar/_10-K-2025-As-Filed.pdf</a></li>
            <li><a href="https://www.apple.com/iphone/?afid=p240%7Cgo~cmp-14648718653~adg-126654828629~ad-775231686945_kwd-12742661~dev-m~ext-~prd-~mca-~nt-search&cid=wwa-us-kwgo-iphone-noncore_iphonefamily-iphonefamily-iphone_hero_buy_092225-iPhone-iPhone-iphone">https://www.apple.com/iphone/?afid=p240%7Cgo~cmp-14648718653~adg-126654828629~ad-775231686945_kwd-12742661~dev-m~ext-~prd-~mca-~nt-search&cid=wwa-us-kwgo-iphone-noncore_iphonefamily-iphonefamily-iphone_hero_buy_092225-iPhone-iPhone-iphone</a></li>
            <li><a href="https://businessmodelanalyst.com/apple-target-market/">https://businessmodelanalyst.com/apple-target-market/</a></li>
          </NameList>
        </Pedro>
    </Container>
  )
}

export default SlideRefs;

const Pedro = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const Title = styled.div`
    font-size: 64px;
    font-weight: 800;

    @media (max-width: 1224px) {
        display: none;
    }
`;

const NameList = styled.ul`
    width: 50%;

      li {
        font-size: 24px;
        margin: 16px 0;
        font-weight: 500;
        list-style: decimal;
        overflow-wrap: break-word;
      }

  @media (max-width: 1224px) {
    width: 95vw;

    li {
      font-size: 20px;
    }
  }
`;