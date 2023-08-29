import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom";

import colors from "../common/colors";
import FooterComp from "../component/FooterComp";

import MainImg from "../image/MainImg.png";
import { useState } from "react";

const menuAnimation = keyframes`
  0% { letter-spacing: 0px; transform: translateX(5px); }
  50%{ letter-spacing: 2px; }
  100% { letter-spacing: 0px; transform: translateX(0px); }
`;

const MainWrap = styled.main`
    background-color: ${ colors.mainColor };
    color: ${ colors.fontColor };
    height: 100vh;
    font-family: 'Noto Sans', 'Noto Sans KR';
    overflow: hidden;
    width: 100vw;
`;

const MainSection = styled.section`
    justify-content: space-between;
    display: flex;
    height: 100%;
    padding: 20px;
    position: relative; 
    width: 100%;
`;

const LayoutArticle = styled.article`
    height: 100%;
    width: 33.3%;
    z-index: 5;
`;

const LeftArticle = styled(LayoutArticle)`
    h1 {
        font-size: 16px;
    }
`;

const CenterArticle = styled(LayoutArticle)`    
    p {
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
    }
    span {
        background-color: black;
        color: white;
    }
`;

const RightArticle = styled(LayoutArticle)`
    ul {
        text-align: right;
    }

    button {
        font-size: 16px;
        line-height: 1.5;

        &:hover { 
            animation: ${menuAnimation} .9s ease infinite; 
            color: ${ colors.pointColor }; 
        }
    }
`;

const MoveImage = styled.div`
`;


function HomePage() {
    const [xy, setXY] = useState({x:0, y:0});

    const HandleMouseMove = (e) => {
        console.log(e);
        setXY({x:e.clientX, y:e.clientY});
    };

    return(
        <MainWrap onMouseMove={ (e) => HandleMouseMove(e) }>
            <MainSection>
                    <LeftArticle>
                        <h1><span>이윤영</span> / Yunyoung Lee</h1>
                    </LeftArticle>

                    <CenterArticle>
                        <p><span>프론트엔드 개발자</span></p>
                        <p>Front-end Developer</p>
                    </CenterArticle>
                
                    <RightArticle>
                        <ul>
                            <li>
                                <Link to="/project"><button>프로젝트 / project</button></Link>
                            </li>
                            <li>
                                <Link to="/skillStack"><button>기술 스택 / skill stack</button></Link>
                            </li>
                            <li>
                                <Link to="/about"><button>더보기 / about</button></Link>
                            </li>
                        </ul>
                    </RightArticle>
                    <MoveImage>
                        <img src={ MainImg } style={{ position: "absolute", left: xy.x, top: xy.y }}/>
                    </MoveImage>
            </MainSection>

            {/* ---------- 푸터 ---------- */}
            <FooterComp />
        </MainWrap>
    )

}

export default HomePage;