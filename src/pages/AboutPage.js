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

    width: 100%;

    @media screen and (max-width: 768px) { 
        flex-direction: column;
        padding: 20px;
    };
`;


const AboutSection = styled.section``;

const TitleArticle = styled.article`
    height: fit-content;
    margin-bottom: 70px;
    width: 100%;

    h1 {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 43px;
        font-weight: 900;

        @media screen and (max-width: 768px) {
            font-size: 45px;
            margin-bottom: 60px;
        };
    }  

    @media screen and (max-width: 768px) { width: 100%; };
`;

const AboutArticle = styled.section`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) { 
        flex-direction: column; 
        width: 100%;
    };
`;

const PersonalCon = styled.div`
    margin-bottom: 30px;
    width: 50%;

    p {
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 10px;

        @media screen and (max-width: 768px) { font-size: 12px; width: 100%; };
    }
`;

const AboutCon = styled.article`
    font-size: 22px;
    width: 50%;

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
                <TitleArticle>
                    <h1>이윤영</h1>
                </TitleArticle>

                <AboutArticle>
                    <PersonalCon>
                        <p>2019.02 계원예술대학교 디지털미디어디자인과 졸업</p>
                        <p>2021.07 - 2022.09 IT 스타트업 '디케이랩' 프론트엔드 개발팀 근무</p>
                        {/* <h1 style={{ fontFamily: 'Noto Sans TC' }}>李胤永</h1> */}
                    </PersonalCon>
                    <AboutCon>
                        <p>저의 포트폴리오에 찾아와주셔서 감사합니다! </p>
                        <p>진행했던 프로젝트들의 코드는 <a href="https://github.com/reverofyoung" target="_blank">깃허브</a>에서 볼 수 있어요.
                        개인적으로 공부하는 내용이나 어려웠던 부분은 <a href="https://velog.io/@reverofyoung" target="_blank">벨로그</a>에 조금씩 기록하고 있습니다.</p>
                        <p>궁금하신 사항이 있다면 <a href="mailto:reverofyoung@gmail.com">메일</a>로 연락 해주세요!
                        언제든 환영입니다 :-)</p>
                    </AboutCon>
                </AboutArticle>
            </AboutSection>

            <HomeButtonComp />
            <FooterComp />
        </MainWrap>
    )
};

export default AboutPage;