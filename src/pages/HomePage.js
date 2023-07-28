import { useState } from "react";
import styled, { keyframes } from "styled-components"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import colors from "../common/colors";
import { Link } from "react-router-dom";
import MenuComp from "../component/MenuComp";
import FooterComp from "../component/FooterComp";

const textAnimation = keyframes`
  0% { letter-spacing: 0px; transform: translateX(-40px); }
  50%{ letter-spacing: 10px; }
  100% { letter-spacing: 0px; transform: translateX(0px); }
`;

const moveAnimation = keyframes`
  0% { opacity:1; }
  50% { opacity:0; }
  100% { opacity:1; }
`;

const MainWrap = styled.main`
    background-color: ${ colors.mainColor };
    height: 100vh;
    font-family: 'Noto Sans', 'Noto Sans KR';
    width: 100vw;
`;

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 20px 60px 20px;
    position: relative; 
    width: 100%;
`;

const PersonalArticle = styled.article`
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
    padding-bottom: 15px;
    width: fit-content;
    
    p {
        font-family: 'Noto Sans KR';
        margin-bottom: 20px;
/* 
        span:nth-of-type(1) {  animation: ${ moveAnimation } .8s ease-in-out; animation-delay: .3s;}
        span:nth-of-type(2) {  animation: ${ moveAnimation } .8s ease-in-out; animation-delay: .5s;}
        span:nth-of-type(3) {  animation: ${ moveAnimation } .8s ease-in-out; animation-delay: .7s;}
        span:nth-of-type(4) {  animation: ${ moveAnimation } .8s ease-in-out; animation-delay: .9s;}
        span:nth-of-type(5) {  animation: ${ moveAnimation } .8s ease-in-out; animation-delay: 1.1s;} */

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

        &:hover { animation: ${textAnimation} .8s ease infinite; }

        @media screen and (max-width: 768px) { font-size: 50px;  margin-bottom: 40px; };

    }

    @media screen and (max-width: 768px) { align-items: center; width: 100%; };

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