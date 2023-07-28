import { styled } from "styled-components";

import colors from "../common/colors";
import FooterComp from "../component/FooterComp";
import HomeButtonComp from "../component/HomeButtonComp";

const AccountSection = styled.section`
    background-color: ${ colors.mainColor };
    color: ${ colors.fontColor };
    font-family: 'Noto Sans KR', sans-serif;
    height: 100vh;
    padding: 20px;
    width: 100%;
`;

const SectionTitle = styled.article`
    height: fit-content;
    margin-bottom: 70px;
    width: 50%;

    h1 {
        color: ${ colors.fontColor };
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 50px;
        font-weight: 900;
        margin-bottom: 25px;

        @media screen and (max-width: 768px) {
            font-size: 44px;
            margin-bottom: 20px;
        };
    }    
    @media screen and (max-width: 768px) { width: 100%; };
`;

const ContentSection = styled.section`
    display: flex;

    article {
        width: 33.3%;
        @media screen and (max-width: 768px) { width: 100%; };
    }
    @media screen and (max-width: 768px) { flex-direction: column; };
`;

const MyArticle = styled.article`
    font-weight: 100;
`;

const TwoArticle = styled.article`

`;

const Accountarticle = styled.article`
    font-family: 'Noto Sans', sans-serif;
    font-size: 18px;
    font-weight: 100;

    div { margin-bottom: 5px; } 

    a { 
        &:active {
            color: red;
        }
    }
    
    @media screen and (max-width: 768px) { width: 100% };
`;


function AboutPage() {

    return(
        <AccountSection>
            <SectionTitle>
                <h1>이윤영</h1>
                <h1 style={{ fontFamily: 'Noto Sans TC' }}>李胤永</h1>
            </SectionTitle>

            <ContentSection>
                <TwoArticle>
                    <p>나만의 규칙으로 코드를 작성하는 것을 좋아합니다. </p>
                </TwoArticle>
                <Accountarticle>
                    <div>
                        <a href="https://github.com/reverofyoung" target="_blank">https://github.com/reverofyoung</a>
                    </div>
                    <div>
                        <a href="https://velog.io/@reverofyoung" target="_blank">https://velog.io/@reverofyoung</a>
                    </div>
                    <div>
                        <a href="mailto:reverofyoung@gmail.com">reverofyoung@gmail.com</a>
                    </div>
                    {/* <div>
                        <p>진행한 프로젝트의 코드는 <a href="https://github.com/reverofyoung" target="_blank">Github</a>에서 볼 수 있어요.</p>
                        <p>개인적으로 공부하는 내용은 <a href="https://velog.io/@reverofyoung" target="_blank">velog</a>에 조금씩 기록하고 있습니다. </p>
                        <p>아차, 메일은 <a href="mailto:reverofyoung@gmail.com">reverofyoung@gmail.com</a> 이쪽입니다!</p>
                    </div> */}
                </Accountarticle>
            </ContentSection>

            <HomeButtonComp />
            <FooterComp />
        </AccountSection>
    )
};

export default AboutPage;