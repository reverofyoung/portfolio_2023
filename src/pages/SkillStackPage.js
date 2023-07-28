import { useState } from "react";
import { styled } from "styled-components";

import colors from "../common/colors";
import FooterComp from "../component/FooterComp";
import HomeButtonComp from "../component/HomeButtonComp";

import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";

const MainWrap = styled.main`
    font-family: 'Noto Sans KR', sans-serif;
    height: 100vh;
    padding: 20px;
    width: 100vw;
`;

const SectionTitle = styled.div`
    color: ${ colors.fontColor };
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 30px;
    font-weight: 900;
    height: fit-content;
    margin-bottom: 50px;
`;

const AboutSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        width: 100%;
    };
`;

const SkillWrap = styled.article`
    background-color: lightgray;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-right: 40px;
    padding: 20px;
    width: 300px;

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
        margin-right: 0px;
        width: 100%;
    };
`;

const SkillName = styled.div`
    color: ${ colors.fontColor };
    display: flex;
    font-family: 'Noto Sans', sans-serif;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 60px;
    min-width: 150px;

    @media screen and (max-width: 768px) {
        display: flex;
        font-size: 18px;
        font-weight: 300;
        margin-right: 0px;
    };
`;

const SkillDesc = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 13px;
    justify-content: flex-end;

    p {
        line-height: 1.5;
    }

`;

function SkillStackPage () {

    return(
        <MainWrap>
            <SectionTitle>기술 스택</SectionTitle>
                <AboutSection>
                    <SkillWrap >
                        <SkillName>
                            <BiLogoHtml5 /> HTML5</SkillName>
                        <SkillDesc>
                            <p>웹 표준성, 웹 접근성을 고려하여 문서를 주어진 데이터에 따라 구조적으로 표시할 수 있습니다.</p>
                            <p>검색 엔진 최적화 경험이 있습니다.</p>
                        </SkillDesc>
                    </SkillWrap>
                    <SkillWrap >
                        <SkillName><BiLogoCss3 /> CSS3</SkillName>
                        <SkillDesc>
                            <p>다양한 레이아웃 구성 및 기기의 사이즈에 따른 반응형 레이아웃을 구성할 수 있습니다.</p>
                            <p>선택자를 사용하여 스타일을 적용할 수 있습니다. </p>
                            <p>내부, 외부, 인라인 등 다양한 방법으로 CSS를 작성할 수 있습니다.</p>
                        </SkillDesc>
                    </SkillWrap>
                    <SkillWrap >
                        <SkillName><BiLogoJavascript /> JavaScript</SkillName>
                        <SkillDesc>
                            <p>배열, 객체를 다룰 수 있으며, 다양한 이벤트를 처리할 수 있습니다.</p>
                            <p>조건문을 활용할 수 있습니다.</p>
                            <p>라이브러리를 활용하여 개발할 수 있습니다.</p>
                        </SkillDesc>
                    </SkillWrap>
                    <SkillWrap >
                        <SkillName><BiLogoReact /> React</SkillName>
                        <SkillDesc>
                            <p>재사용성을 고려하여 컴포넌트를 생성할 수 있습니다.</p>
                            <p>useState를 활용하여 컴포넌트 상태를 관리할 수 있습니다.</p>
                            <p>useEffect를 활용하여 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있습니다. </p>
                            <p>styled-components를 활용하여 컴포넌트를 스타일링 할 수 있습니다.</p>
                        </SkillDesc>
                    </SkillWrap>
                    <SkillWrap >
                        <SkillName><BiLogoReact /> React Native</SkillName>
                        <SkillDesc>
                            <p>기본 개념과 사용법을 알고 있으며, react-navigation 등의 라이브러리를 활용하여 개발한 경험이 있습니다.</p>
                            <p>StyelSheet를 활용하여 컴포넌트를 스타일링 할 수 있습니다.</p>
                        </SkillDesc>
                    </SkillWrap>
                    <SkillWrap >
                        <SkillName><BiLogoRedux /> Redux/ Redux Toolkit</SkillName>
                        <SkillDesc>
                            <p>기본 개념과 사용법을 알고 있으며 여러 개의 컴포넌트 상태를 관리할 수 있습니다.</p>
                        </SkillDesc>
                    </SkillWrap>

                    {/* {
                        skillList.map((skill) => {
                            const dataId = skill.name;

                            return(
                                <SkillWrap key={ dataId }>
                                    <SkillName><BiLogoRedux /></SkillName>
                                    <SkillName>{ skill.name }</SkillName>
                                     <SkillDesc>{ skill.describtion }</SkillDesc>
                                </SkillWrap>
                            )
                        })
                    } */}
                </AboutSection>
            <HomeButtonComp />
            <FooterComp />
        </MainWrap>
    )
};

export default SkillStackPage;