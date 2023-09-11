import { styled } from "styled-components";

import colors from "../common/colors";

import { PiXLight } from 'react-icons/pi'; 
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";

const MainWrap = styled.main`
    color: ${ colors.fontColor };
    font-family: 'Pretendard-Regular';
    height: 100%;
    padding: 20px;
    width: 100%;

    ::selection {
        background-color: #16FF00;
        color: black;
    }
    
    @media screen and (max-width: 768px) {
        height: 100%;
    };
`;

const CloseButtonSection = styled.section`
    display: none;
    position: relative;
    margin-bottom: 20px;
    width: 100%;

    @media screen and (max-width: 768px) {  
        display: block;
    };
`;

const CloseButton = styled.button`
    color: ${ colors.fontColor };
    font-size: 18px;
    float: right;

    &:hover { color: ${ colors.pointColor }; }
`;  

const SectionTitle = styled.article`
    height: fit-content;
    margin-bottom: 70px;
    width: 100%;
    
    h1 {
        font-family: 'Pretendard-Regular';
        font-size: 24px;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            font-size: 24px;
            margin-bottom: 60px;
        };
    }  

    @media screen and (max-width: 768px) { 
        margin-bottom: 40px;
        width: 100%; 
    };
`;

const SkillSection = styled.section`
    cursor: grab;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        grid-template-columns: repeat(1, 1fr);
        padding-bottom: 30px;
        width: 100%;
    };
`;

const SkillWrap = styled.article`
    border: 1px solid ${ colors.fontColor };
    height: 100%;
    padding: 20px;

    &:hover {
        border-radius: 40px;
        transition: all .3s linear;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
        margin-right: 0px;
        width: 100%;
    };
`;

const SkillName = styled.div`
    align-items: center;
    color: ${ colors.fontColor };
    display: flex;
    font-family: 'Pretendard-Regular';
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 60px;
    min-width: 150px;

    div { margin-right: 8px; }

    @media screen and (max-width: 768px) {
        display: flex;
        font-size: 18px;
        font-weight: 300;
        margin-right: 0px;
    };
`;

const SkillDesc = styled.div`
    font-family: 'Pretendard-Regular';
    font-size: 13px;
    justify-content: flex-end;

    p {
        display: inline;
        line-height: 1.5;
    }
`;

function SkillStackScreen ({ onClose }) {
    return(
        <MainWrap>
            <CloseButtonSection>
                <CloseButton onClick={ onClose }><PiXLight size={ 22 } /></CloseButton>
            </CloseButtonSection>

            <SectionTitle>
                <h1>기술 스택</h1>
            </SectionTitle>

            <SkillSection>
                <SkillWrap>
                    <SkillName>
                        <div> <BiLogoHtml5 size={ 35 } /> </div>                           
                        <p>HTML5</p>
                    </SkillName>
                    <SkillDesc>
                        <p>
                            웹 표준성, 웹 접근성을 고려하여 문서를 주어진 데이터에 따라 구조적으로 표시할 수 있습니다. 검색 엔진 최적화 경험이 있습니다.
                        </p>
                    </SkillDesc>
                </SkillWrap>
                <SkillWrap>       
                    <SkillName>
                        <div> <BiLogoCss3 size={ 35 } /> </div>     
                        <p>CSS3</p>
                    </SkillName>
                    <SkillDesc>
                        <p>
                            다양한 레이아웃 구성 및 기기의 사이즈에 따른 반응형 레이아웃을 구성할 수 있습니다. 
                            선택자를 사용하여 스타일을 적용할 수 있습니다.
                            내부, 외부, 인라인 등 다양한 방법으로 CSS를 작성할 수 있습니다.
                        </p>
                    </SkillDesc>
                </SkillWrap>
                <SkillWrap>
                    <SkillName>
                        <div> <BiLogoJavascript size={ 35 } /> </div>     
                        <p>JavaScript</p>
                    </SkillName>
                    <SkillDesc>
                        <p>
                            배열, 객체를 다룰 수 있으며, 다양한 이벤트를 처리할 수 있습니다.
                            조건문을 활용할 수 있습니다.
                            라이브러리를 활용하여 개발할 수 있습니다.
                        </p>
                    </SkillDesc>
                </SkillWrap>
                <SkillWrap>
                    <SkillName>
                        <div><BiLogoReact size={ 35 }/></div>
                        <p>React</p>
                    </SkillName>
                    <SkillDesc>
                        <p>
                            재사용성을 고려하여 컴포넌트를 생성할 수 있습니다.
                            useState를 활용하여 컴포넌트 상태를 관리할 수 있습니다.
                            useEffect를 활용하여 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있습니다. 
                            styled-components를 활용하여 컴포넌트를 스타일링 할 수 있습니다.
                        </p>
                    </SkillDesc>
                </SkillWrap>
                <SkillWrap >
                    <SkillName>
                        <div><BiLogoReact size={ 35 } /> </div>
                        <p>React Native</p>
                    </SkillName>
                    <SkillDesc>
                        <p>
                            기본 개념과 사용법을 알고 있으며, react-navigation 등의 라이브러리를 활용하여 개발한 경험이 있습니다. 
                            StyelSheet를 활용하여 컴포넌트를 스타일링 할 수 있습니다.
                        </p>
                    </SkillDesc>
                </SkillWrap>
                <SkillWrap >
                    <SkillName>
                        <div><BiLogoRedux size={ 35 } /></div>
                        <p>Redux / Redux Toolkit</p>
                    </SkillName>
                    <SkillDesc>
                        <p>기본 개념과 사용법을 알고 있으며 여러 개의 컴포넌트 상태를 관리할 수 있습니다.</p>
                    </SkillDesc>
                </SkillWrap>
            </SkillSection>
        </MainWrap>
    )
};

export default SkillStackScreen;