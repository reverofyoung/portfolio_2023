import { useState } from "react";
import { styled } from "styled-components";

import colors from "../common/colors";
import FooterComp from "../component/FooterComp";
import HomeButtonComp from "../component/HomeButtonComp";

const MainWrap = styled.main`
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
    height: 100%;
    padding: 20px;
    width: 100%;
`;

const SectionTitle = styled.div`
    color: ${ colors.fontColor };
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 50px;
`;

const AboutSection = styled.section`
    width: 60%;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    };
`;

const SkillWrap = styled.article`
    display: flex;
    margin-bottom: 18px;

    @media screen and (max-width: 768px) { margin-right: 30px; };
`;

const SkillName = styled.div`
    align-items: center;
    border: 1px solid ${ colors.fontColor };
    border-radius: 30px;
    box-sizing: border-box;
    color: ${ colors.fontColor };
    display: flex;
    font-family: 'Noto Sans', sans-serif;
    font-size: 25px;
    font-weight: 100;
    justify-content: center;
    margin-right: 30px;
    min-width: 150px;
    padding: 10px 20px;
    /* width: fit-content; */

    &:hover, &:focus{
        background-color: ${ colors.fontColor };
        color: ${ colors.mainColor };
    }

    @media screen and (max-width: 768px) {
        display: flex;
        font-size: 20px;
        font-weight: 200;
        margin-right: 0px;
        padding: 10px 20px;
    };
`;

const SkillDesc = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    line-height: 1.3;
`;

function SkillStackPage () {
    const [showDesc, setShowDesc] = useState({});

    // 마우스 들어올 때
    const onMouseOverName = (id) => {
        setShowDesc((preState) => ({
            ...preState,
            [id] : !preState[id],
        }));
    };

    // 마우스가 벗어날 떄
    const onMouseLeaveName = () => {
        setShowDesc(false);
    };

    const skillList = [
        {
            name: 'HTML5',
            describtion: '웹 표준성, 웹 접근성을 고려하여 문서를 주어진 데이터에 따라 구조적으로 표시할 수 있습니다. 검색 엔진 최적화 경험이 있습니다.'
        },
        {
            name: 'CSS3',
            describtion: '다양한 레이아웃 구성 및 기기의 사이즈에 따른 반응형 레이아웃을 구성할 수 있습니다. 선택자를 사용하여 스타일을 적용할 수 있습니다. 내부, 외부, 인라인 등 다양한 방법으로 CSS를 작성할 수 있습니다.'
        },
        {
            name: 'JavaScript',
            describtion: '배열, 객체를 다룰 수 있습니다. 다양한 이벤트를 처리할 수 있습니다. 조건문을 활용할 수 있습니다. 라이브러리를 활용하여 개발할 수 있습니다.'
        },
        {
            name: 'React',
            describtion: 'props를 사용하여 컴포넌트에 값을 전달할 수 있습니다. useState를 활용하여 컴포넌트 상태를 관리할 수 있습니다. useEffect를 활용하여 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있습니다. styled-components를 활용하여 컴포넌트를 스타일링 할 수 있습니다.'
        },
        {
            name: 'React Native',
            describtion: '기본 개념과 사용법을 알고 있으며 react-navigation 등의 라이브러리를 활용하여 개발한 경험이 있습니다. StyelSheet를 활용하여 컴포넌트를 스타일링 할 수 있습니다.'
        },
        {
            name: 'Redux/ Redux Toolkit',
            describtion: '기본 개념과 사용법을 알고 있으며 여러 개의 컴포넌트 상태를 관리할 수 있습니다. '
        },

    ];
    
    return(
        <MainWrap>
            <SectionTitle>기술 스택</SectionTitle>
                <AboutSection>
                    {
                        skillList.map((skill) => {
                            const dataId = skill.name;
                            
                            return(
                                <SkillWrap key={ dataId }>
                                    <SkillName onMouseOver={ () => onMouseOverName(dataId) } onMouseLeave={ onMouseLeaveName }>{ skill.name }</SkillName>
                                    { showDesc[dataId] && ( <SkillDesc>{ skill.describtion }</SkillDesc> )}
                                </SkillWrap>
                            )
                        })
                    }
                </AboutSection>
            <HomeButtonComp />
            <FooterComp />
        </MainWrap>
    )
};

export default SkillStackPage;