import { useState } from "react";
import { Link } from "react-router-dom";
import { keyframes, styled } from "styled-components";
import colors from "../common/colors";

const menuAnimation = keyframes`
  0% {
    background-color: rgba(0,0,0,0.0);
  }
  100%{
    background-color: rgba(0,0,0,0.8);
  }
`;

const MenuSection = styled.section`
    align-items: center;
    background-color: rgba(0,0,0,0.8);
    /* display: ${ props => props.$isvisible ? 'flex' : 'none' }; */
    display:  flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    animation: ${ menuAnimation } .2s linear ;

    @media screen and (max-width: 768px) {
        align-items: flex-end;
        justify-content: flex-start;
        /* padding: 20px; */
    };
`;

const MenuArticle = styled.article`
    box-sizing: border-box;
    padding: 50px;
    height: fit-content;
    width: 70%;

    li {
        color: ${ colors.mainColor };
        cursor: pointer;
        font-size: 80px;
        font-weight: 900;
        margin-bottom: 30px;
        /* animation: ${menuAnimation} .2s linear ; */

        &:hover {
            font-size: 86px;
        }

        @media screen and (max-width: 768px) {
         font-size: 50px;
         margin-bottom: 20px;
    };
    }

    @media screen and (max-width: 768px) {
        padding: 20px;
    };
`;

function MenuComp() {
    const [isMenuVisible, setisMenuVisible] = useState(false);

    const onClickMenuBtn = () => {
        setisMenuVisible(!isMenuVisible);
    };

    return(
        <MenuSection>
            <MenuArticle>
                <ul>
                    <Link to="/"><li onClick={ onClickMenuBtn }>홈</li></Link>
                    <Link to="/project"><li>프로젝트</li></Link>
                    <Link to="/skillStack"><li>기술 스택</li></Link>
                    <Link to="/account"><li>계정</li></Link>
                </ul>
            </MenuArticle>
        </MenuSection>
    )

};

export default MenuComp;