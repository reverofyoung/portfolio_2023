import { styled } from "styled-components";
import colors from "../common/colors";

const FooterSection = styled.section`
    bottom: 20px;
    color: ${ colors.mainColor };
    left: 20px;
    position: absolute;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    };
`;

function FooterComp() {

    return(
        <FooterSection>Copyright 2023. 260 all rights reserved.</FooterSection>
    )
}

export default FooterComp;