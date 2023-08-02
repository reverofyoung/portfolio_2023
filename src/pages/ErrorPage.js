import { styled } from "styled-components";
import colors from "../common/colors";

const MainWrap = styled.main`
    background-color: ${ colors.pointColor };
    padding: 30px;
    height: 100vh;
    width: 100vw;
    
    h3 {
        color: white;
        font-family: 'Noto Sans', 'Noto Sans KR';
        font-size: 36px;
    }
`;


function ErrorPage() {
    return(
        <MainWrap>
            <h3>잘못된 페이지 입니다 : - (</h3>
        </MainWrap>
    )

};

export default ErrorPage;