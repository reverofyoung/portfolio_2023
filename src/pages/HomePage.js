import { useState } from "react";
import styled, { keyframes } from "styled-components"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import colors from "../common/colors";
import { Link } from "react-router-dom";
import MenuComp from "../component/MenuComp";
import FooterComp from "../component/FooterComp";
import freitag from "../image/freitag.png"


const MainWrap = styled.main`
    height: 100vh;
    width: 100vw;
    background-color: ${ colors.mainColor };
`;

const MainSection = styled.section`
    display: flex;
    font-family: 'Noto Sans', sans-serif;
    height: 100%;
    position: relative; 
    width: 100%;
`;

const Divide = styled.article`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 20px 20px 60px 20px;
    position: relative;
    width: 50%;
`;

const PersonalArticle = styled.article`
    box-sizing: border-box;
    color: ${ colors.fontColor };
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 30px;
    font-weight: 900;
    /* height: 100%; */
    margin-bottom: 40px;
    /* padding: 20px; */
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        font-size: 24px;
        width: 100%;
    };
`;

const ProjectArticle = styled.article`
    justify-content: flex-end;
    display: flex;
        div {
            /* background-color: red; */
            /* height: 400px;
            width: 25%; */
        }
`;

const ProjectCon = styled.div`
    position: relative;
    height: 400px;
    width: 25%;
    overflow: hidden;
 
`;

const DimBox = styled.div`
    background-color: rgba(255,255,255,0);
    cursor: pointer;
    position: absolute;
    height: 100%;
    width: 100%;
    &:hover{
        background-color: rgba(255,255,255,0.4);
    }
`;

const ProjectImage = styled.img`

    height: 100%;
`;

const InfoBox = styled.div`
    box-sizing: border-box;
    padding-bottom: 15px;
    width: fit-content;
    
    div {
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            font-size: 24px;
            margin-bottom: 15px;
        };
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 30px;
        width: 100%;
    };
`;

const MenuButton = styled.button`
    background-color: ${ colors.fontColor };
    color: white;
    height: 40px;
    position: absolute;
    right: 20px;
    top: 20px;
    width: 40px;
    z-index: 100;

    &:hover {
        background-color: red;
    }
`;

const MenuArticle = styled.article`
    justify-content: flex-end;
    width: fit-content;
    
    li {
        color: ${ colors.fontColor };
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 60px;
        font-weight: 900;
        margin-bottom: 20px;
        /* text-decoration: underline; */

        &:hover {
            color: lightgray;
            /* font-size: 21px; */
            letter-spacing: 10px;
        }
    }
`;

const NotificationDot = styled.div`
    align-items: center;
    background-color: red;
    border-radius: 50px;
    box-sizing: border-box;
    color: white;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    height: 20px;
    justify-content: center;
    position: absolute;
    right: -15px;
    top: -15px;
    width: 20px;
`;


function HomePage() {
    const [menuState, setMenuState] = useState(false);

    {/* ---------- 메뉴 버튼 클릭 이벤트 ---------- */}
    const onClickMenuBtn = () => {
        setMenuState(!menuState);
    };

    return(
        <MainWrap>
            <MainSection>
                {/* ---------- 메인 컨텐츠 ---------- */}
                <Divide>
                <PersonalArticle style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <InfoBox>
                        <div style={{ fontFamily: 'Noto Sans KR' }}>안녕하세요</div>
                        <div style={{ fontFamily: 'Noto Sans KR' }}>이윤영입니다.</div>
                        {/* <div style={{ fontFamily: 'Noto Sans TC' }}>李胤永</div> */}
                        {/* <div>LEEYUNYOUNG</div> */}
                    </InfoBox>
                    <InfoBox>
                        <div style={{ fontFamily: 'Noto Sans KR' }}>프론트엔드 개발자</div>
                        {/* <div>FRONTEND DEVELOPER</div> */}
                    </InfoBox>   
                </PersonalArticle>
                {/* <PersonalArticle style={{ fontSize:'16px', fontWeight: '300' }}>
                    <InfoBox>2021.07 - 2022.09 IT 스타트업 '디케이랩' 근무</InfoBox>
                    <InfoBox>2016.03 - 2019.02 계원예술대학교 디지털미디어디자인과 졸업</InfoBox>
                </PersonalArticle> */}

                {/* <ProjectArticle>
                    <ProjectCon>
                        <Link to="/project">
                            <DimBox></DimBox>
                            <ProjectImage src={ freitag } alt={ '캡쳐이미지' }></ProjectImage>
                        </Link> 
                    </ProjectCon>
                    <ProjectCon></ProjectCon>
                    <ProjectCon style={{ backgroundColor: 'lightGrey' }}></ProjectCon>
                    <ProjectCon></ProjectCon>
                </ProjectArticle> */}
                
                <MenuArticle>
                    <ul>
                        <Link to="/project">
                            <li style={{ position: 'relative' }}>
                                <div> 프로젝트 </div>
                                {/* <NotificationDot>4</NotificationDot> */}
                            </li>
                        </Link>
                        <Link to="/skillStack"><li>기술 스택</li></Link>
                        <Link to="/account"><li>더보기</li></Link>
                    </ul>
                </MenuArticle>
                </Divide>
                {/* <Divide style={{ backgroundColor: colors.mainColor }}>dd</Divide> */}
            </MainSection>

            {/* ---------- 메뉴 버튼 및 메뉴 화면 ---------- */}
            {/* { menuState ? <MenuButton onClick={ onClickMenuBtn }>닫기</MenuButton> : <MenuButton onClick={ onClickMenuBtn }>열기</MenuButton> }
            { menuState && <MenuComp />  }     */}

            {/* ---------- 푸터 ---------- */}
            <FooterComp />
        </MainWrap>
    )

}

export default HomePage;