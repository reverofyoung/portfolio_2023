import { useState } from "react";
import { styled } from "styled-components";
import MenuComp from "../component/MenuComp";
import colors from "../common/colors";
import FooterComp from "../component/FooterComp";

const AccountSection = styled.section`
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    height: 100%;
    padding: 20px;
    width: 100%;
`;

const SectionTitle = styled.div`
    color: ${ colors.mainColor };
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 50px;
`;

const Accountarticle = styled.article`
    font-size: 18px;
    width: 50%;

    a {
        color: grey;
        /* text-decoration: underline; */
    }
`;

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


function AccountPage() {
    const [menuState, setMenuState] = useState(false);

    {/* ---------- 메뉴 버튼 클릭 이벤트 ---------- */}
    const onClickMenuBtn = () => {
        setMenuState(!menuState);
    };

    return(
        <AccountSection>
            <SectionTitle>
                <div>이윤영</div>
                <div>李胤永</div>
            </SectionTitle>
            <Accountarticle>
                {/* <div>
                    <a href="https://github.com/reverofyoung" target="_blank">https://github.com/reverofyoung</a>
                </div>
                <div>
                    <a href="https://velog.io/@reverofyoung" target="_blank">https://velog.io/@reverofyoung</a>
                </div>
                <div>
                    <a href="mailto:reverofyoung@gmail.com">reverofyoung@gmail.com</a>
                </div> */}
                <div>
                    <p>진행한 프로젝트의 코드는 <a href="https://github.com/reverofyoung" target="_blank">Github</a>에서 볼 수 있어요.</p>
                    <p>개인적으로 공부하는 내용은 <a href="https://velog.io/@reverofyoung" target="_blank">velog</a>에 조금씩 기록하고 있습니다. </p>
                    <p>아차, 메일은 <a href="mailto:reverofyoung@gmail.com">reverofyoung@gmail.com</a> 이쪽입니다!</p>
                </div>

            </Accountarticle>

        { menuState ? <MenuButton onClick={ onClickMenuBtn }>닫기</MenuButton> : <MenuButton onClick={ onClickMenuBtn }>열기</MenuButton> }
        { menuState && <MenuComp />  } 

        <FooterComp />

        </AccountSection>
    )
};

export default AccountPage;