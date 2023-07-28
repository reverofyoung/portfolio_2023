import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom";

import colors from "../common/colors";
import FooterComp from "../component/FooterComp";

const textAnimation = keyframes`
  0% { letter-spacing: 0px; transform: translateX(-40px); }
  50%{ letter-spacing: 10px; }
  100% { letter-spacing: 0px; transform: translateX(0px); }
`;

const MainWrap = styled.main`
    background-color: ${ colors.mainColor };
    color: ${ colors.fontColor };
    height: 100vh;
    font-family: 'Noto Sans', 'Noto Sans KR';
    width: 100vw;
`;

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    position: relative; 
    width: 100%;
`;

const PersonalArticle = styled.article`
    display: flex;
    font-weight: 900;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 50%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 0px;
        width: 100%;
    };
`;

const InfoBox = styled.div`
    font-size: 30px;
    padding-bottom: 15px;
    width: fit-content;
    
    p {
        font-family: 'Noto Sans KR';
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            font-size: 40px;
            margin-bottom: 15px;
        };  
    }

    @media screen and (max-width: 768px) { width: 100%; };
`;

const MenuArticle = styled.article`
    /* background-color: aliceblue; */
    align-items: flex-end;
    display: flex;
    flex: 1;
    width: 50%;

    ul { :first-child{ margin-top: 0px; } }
    
    li {
        cursor: pointer;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 60px;
        font-weight: 900;
        margin-top: 20px;

        &:hover { 
            animation: ${textAnimation} .6s ease infinite; 
            color: ${ colors.pointColor }; 
        }

        @media screen and (max-width: 768px) { 
            font-size: 40px;  
            margin-bottom: 30px; 
        };
    };

    @media screen and (max-width: 768px) { 
        align-items: flex-start; 
        width: 100%; 
    };
`;

function HomePage() {

    return(
        <MainWrap>
            <MainSection>
                    {/* ---------- 인적사항 ---------- */}
                    <PersonalArticle>
                        <InfoBox>
                            <p>안녕하세요</p>
                            <p>이윤영입니다.</p>
                        </InfoBox>
                        <InfoBox>
                            <p>프론트엔드 개발자</p>
                        </InfoBox>   
                    </PersonalArticle>
                
                    {/* ---------- 포트폴리오 메뉴 ---------- */}
                    <MenuArticle>
                        <ul>
                            <Link to="/project"><li>프로젝트</li></Link>
                            <Link to="/skillStack"><li>기술 스택</li></Link>
                            <Link to="/about"><li>더보기</li></Link>
                        </ul>
                    </MenuArticle>
            </MainSection>

            {/* ---------- 푸터 ---------- */}
            <FooterComp />
        </MainWrap>
    )

}

export default HomePage;