import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom";

import colors from "../common/colors";
import FooterComp from "../component/FooterComp";

const menuAnimation = keyframes`
  0% { letter-spacing: 0px; transform: translateX(-5px); }
  50%{ letter-spacing: 5px; }
  100% { letter-spacing: 0px; transform: translateX(0px); }
`;

const MainWrap = styled.main`
    background-color: ${ colors.mainColor };
    border: 1px solid ${ colors.fontColor };
    color: ${ colors.fontColor };
    height: 100vh;
    font-family: 'Noto Sans', 'Noto Sans KR';
    width: 100vw;
`;

const MainSection = styled.section`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative; 
    width: 100%;
`;

const TitleArticle = styled.article`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 0px;
        width: 100%;
    };
`;

const ArticleBox = styled.div`
    width: 50%;
    
    h1 {
        font-size: 48px;
        font-weight: 900;
        font-family: 'Noto Sans KR';
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            font-size: 45px;
            margin-bottom: 15px;
        };  
    }

    h1:nth-child(2) { color: ${ colors.pointColor } }

    @media screen and (max-width: 768px) { width: 100%; };
`;

const ParagraphBox = styled.div`
    font-size: 14px;
    margin-top: 70px;
    width: 380px;

   p {
        font-weight: 500;
        line-height: 1.8;
        margin-bottom: 10px;

        @media screen and (max-width: 768px) {  font-weight: 100; };

        a { 
            color: ${ colors.pointColor };
            cursor: pointer;
            text-decoration: underline;

            &:hover { color: ${ colors.pointColor }; }
            &:active { color: ${ colors.pointColor }; }
        }
            
    } 
    @media screen and (max-width: 768px) { width: 100%; };
`;

const MenuArticle = styled.article`
    border-top: 1px solid ${ colors.fontColor };
    display: flex;
    justify-content: space-between;
    flex: .6;
    width: 100%;

    div:last-child { 
        border-right: none;

        @media screen and (max-width: 768px) { border-bottom: none; } 
    }

    @media screen and (max-width: 768px) { flex-direction: column; }
`;

const MenuButton = styled.div`
    border-right: 1px solid ${ colors.fontColor };
    display: flex;
    height: 100%;
    padding: 8px 10px;
    width: 100%;

    button {
        color: ${ colors.fontColor };
        cursor: pointer;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 48px;
        font-weight: 900;

        &:hover { 
            animation: ${menuAnimation} .6s ease infinite; 
            color: ${ colors.pointColor }; 
        }

        @media screen and (max-width: 768px) { font-size: 45px; }
    }

    @media screen and (max-width: 768px) {
        align-items: center;
        border-bottom: 1px solid ${ colors.fontColor };
        border-right: none;
        /* margin-bottom: 15px;  */
    };
`;

function HomePage() {

    return(
        <MainWrap>
            <MainSection>
                    {/* ---------- 인적사항 ---------- */}
                    <TitleArticle>
                        <ArticleBox>
                            {/* <p style={{ fontFamily: 'Noto Sans TC' }}>李胤永</p> */}
                            <h1>이윤영</h1>
                            <h1>프론트엔드 개발</h1>
                            <h1>포트폴리오</h1>
                        </ArticleBox>
                    </TitleArticle>
                
                    {/* ---------- 포트폴리오 메뉴 ---------- */}
                    <MenuArticle>
                        <MenuButton>
                            <Link to="/project">
                                <button>프로젝트</button>
                            </Link>
                        </MenuButton>

                        <MenuButton>
                            <Link to="/skillStack">
                                <button>기술 스택</button>
                            </Link>
                        </MenuButton>
                        <MenuButton>
                            <Link to="/about">
                                <button>더보기</button>
                            </Link>
                        </MenuButton>
                    </MenuArticle>
            </MainSection>

            {/* ---------- 푸터 ---------- */}
            <FooterComp />
        </MainWrap>
    )

}

export default HomePage;