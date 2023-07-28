import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { PiArrowLeftThin } from 'react-icons/pi'; 

const HomeButton = styled.button`
    bottom: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 50px;
    font-weight: 600;
    left: 20px;
    position: absolute;

    &:hover {
        color: red;
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
        <Link to="/" style={{ display: 'flex',alignItems: 'center' }}><PiArrowLeftThin />홈으로</Link>
    </HomeButton>
    )
};

export default HomeButtonComp;