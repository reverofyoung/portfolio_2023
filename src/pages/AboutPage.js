import { keyframes, styled } from "styled-components";

import colors from "../common/colors";
import FooterComp from "../component/FooterComp";
import HomeButtonComp from "../component/HomeButtonComp";

const MainWrap = styled.section`
    background-color: ${ colors.mainColor };
     border: 1px solid ${ colors.fontColor };
    color: ${ colors.fontColor };
    font-family: 'Noto Sans KR', sans-serif;
    height: 100vh;
    padding: 20px;
    width: 100%;

    @media screen and (max-width: 768px) { 
        flex-direction: column;
        padding: 20px;
    };
`;

const SectionTitle = styled.article`
    height: fit-content;
    margin-bottom: 70px;
    width: 50%;

    h1 {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 48px;
        font-weight: 900;

        @media screen and (max-width: 768px) {
            font-size: 44px;
            margin-bottom: 60px;
        };
    }  

    @media screen and (max-width: 768px) { width: 100%; };
`;


const AboutSection = styled.section`
    display: flex;

    @media screen and (max-width: 768px) { flex-direction: column; };
`;


const AboutArticle = styled.section`
    display: flex;
    width: 50%;

    @media screen and (max-width: 768px) { 
        flex-direction: column; 
        width: 100%;
    };
`;

const AboutContents = styled.article`
        font-size: 22px;

        p {
            font-weight: 100;
            line-height: 1.8;
            margin-bottom: 10px;

            a { 
                color: ${ colors.pointColor };
                cursor: pointer;
                text-decoration: underline;

                &:hover { color: ${ colors.pointColor }; }
                &:active { color: ${ colors.pointColor }; }
            }
            
    } 
    
    @media screen and (max-width: 768px) {font-size: 16px; width: 100% };
`;


function AboutPage() {

    return(
        <MainWrap>
            <AboutSection>
                <SectionTitle>
                    <h1>이윤영</h1>
                </SectionTitle>
                {/* <AboutArticle>
                    <AboutContents>
                        <p style={{ fontSize: '12px', marginBottom: '10px' }}>2019.02 계원예술대학교 디지털미디어디자인과 졸업</p>
                        <p style={{ fontSize: '12px',  }}>2021.07 - 2022.09 IT 스타트업 '디케이랩' 프론트엔드 개발팀 근무</p>
                        <h1 style={{ fontFamily: 'Noto Sans TC' }}>李胤永</h1>
                    </AboutContents>
                </AboutArticle> */}

                <AboutArticle>
                    <AboutContents>
                        {/* <p>안녕하세요.</p> */}
                        {/* <p>프론트엔드 개발자로 성장중인 이윤영입니다.</p> */}
                        <p>저의 포트폴리오에 찾아와주셔서 감사합니다! </p>
                        <p>진행했던 프로젝트들의 코드는 <a href="https://github.com/reverofyoung" target="_blank">깃허브</a>에서 볼 수 있어요.
                        개인적으로 공부하는 내용이나 어려웠던 부분은 <a href="https://velog.io/@reverofyoung" target="_blank">벨로그</a>에 조금씩 기록하고 있습니다. 
                        궁금하신 사항이 있다면 <a href="mailto:reverofyoung@gmail.com">메일</a>로 연락 해주세요!
                        언제든 환영입니다 :-)</p>

                    </AboutContents>
                </AboutArticle>
            </AboutSection>

            <HomeButtonComp />
            <FooterComp />
        </MainWrap>
    )
};

export default AboutPage;