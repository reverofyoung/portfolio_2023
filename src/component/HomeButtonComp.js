import { Link } from "react-router-dom";
import { keyframes, styled } from "styled-components";

import colors from "../common/colors";

import { PiArrowLeftThin } from 'react-icons/pi';  

const homeBtnAnimation = keyframes`
  0% { transform: rotate(5deg) }
  100% { transform: rotate(-5deg) }
`;


const HomeButton = styled.button`
    bottom: 20px;
    color: ${ colors.fontColor };
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 50px;
    font-weight: 600;
    left: 20px;
    position: absolute;

    &:hover {
        color: ${ colors.pointColor };
        animation: ${ homeBtnAnimation } .2s ease-in-out infinite;
    }

    @media screen and (max-width: 768px) {
        bottom: initial;
        font-size: 24px;  
        left: initial;
        right: 20px;
        top: 20px;
    };
`;

function HomeButtonComp() {

    return(
    <HomeButton>  
        <Link to="/" style={{ display: 'flex',alignItems: 'center' }}><PiArrowLeftThin />홈</Link>
    </HomeButton>
    )
};

export default HomeButtonComp;