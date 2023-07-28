import { useState } from "react";
import styled, { keyframes } from "styled-components"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import colors from "../common/colors";
import { Link } from "react-router-dom";
import MenuComp from "../component/MenuComp";
import FooterComp from "../component/FooterComp";

const menuAnimation = keyframes`
  0% { letter-spacing: 0px; }
  50%{ letter-spacing: 10px; }
  100% { letter-spacing: 0px; }
`;

const MainWrap = styled.main`
    background-color: ${ colors.mainColor };
    height: 100vh;
    font-family: 'Noto Sans', 'Noto Sans KR';
    width: 100vw;
`;

const MainSection = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 20px 60px 20px;
    position: relative; 
    width: 100%;
`;

const PersonalArticle = styled.article`
    box-sizing: border-box;
    color: ${ colors.fontColor };
    display: flex;
    font-size: 30px;
    font-weight: 900;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 50%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        font-size: 24px;
        width: 100%;
    };
`;


const InfoBox = styled.div`
    box-sizing: border-box;
    padding-bottom: 15px;
    width: fit-content;
    
    p {
        font-family: 'Noto Sans KR';
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            font-size: 24px;
            margin-bottom: 15px;
        };
    }

    @media screen and (max-width: 768px) {
        padding-bottom: 30px;
        width: 100%;
    };
`;

const MenuArticle = styled.article`
    align-items: flex-end;
    display: flex;
    flex: 1;
    width: 50%;
    
    li {
        color: ${ colors.fontColor };
        cursor: pointer;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 60px;
        font-weight: 900;
        margin-bottom: 20px;
        /* text-decoration: underline; */

        &:hover {
            animation: ${menuAnimation} .8s ease infinite;
            letter-spacing: 10px;
        }

        @media screen and (max-width: 768px) { font-size: 50px; };

    }

    @media screen and (max-width: 768px) { width: 100%; };

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
                            {/* <div style={{ fontFamily: 'Noto Sans TC' }}>李胤永</div> */}
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
                            <Link to="/account"><li>더보기</li></Link>
                        </ul>
                    </MenuArticle>
            </MainSection>

            {/* ---------- 푸터 ---------- */}
            <FooterComp />
        </MainWrap>
    )

}

export default HomePage;