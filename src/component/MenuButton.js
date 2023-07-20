import { styled } from "styled-components";
import colors from "../common/colors";
import MenuComp from "./MenuComp";

const MenuButton = styled.button`
    background-color: ${ colors.mainColor };
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


function MenuButton() {
    // const [isMenuVisible, setisMenuVisible] = useState(false);
    
    // const onClickMenuBtn = () => {
    //     console.log('클릭');
    //     setisMenuVisible(!isMenuVisible);
    // };

    return(
        <>
            {/* { isMenuVisible ? <MenuButton onClick={ onClickMenuBtn }>닫기</MenuButton> : <MenuButton onClick={ onClickMenuBtn }>열기</MenuButton> } */}
            {/* { isMenuVisible && <MenuComp />  }         */}
        </>
    )

};

export default MenuButton;