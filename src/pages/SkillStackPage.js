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
background-color: #FBD85D;
    font-family: 'Noto Sans KR', sans-serif;
    height: 100vh;
    padding: 20px;
    width: 100%;
    
    @media screen and (max-width: 768px) {
        height: 100%;
    };
`;

const SectionTitle = styled.article`
    height: fit-content;
    margin-bottom: 70px;
    width: 50%;

    h1 {
        color: ${ colors.fontColor };
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 50px;
        font-weight: 900;

        @media screen and (max-width: 768px) {
            font-size: 60px;
            margin-bottom: 60px;
        };
    }  

    @media screen and (max-width: 768px) { width: 100%; };

`;


const SkillSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        padding-bottom: 30px;
        width: 100%;
    };
`;

const SkillWrap = styled.article`
    background-color: #F1C93B;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 30px;
    padding: 20px;
    width: 300px;

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
    font-family: 'Noto Sans', sans-serif;
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
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 13px;
    justify-content: flex-end;

    p {
        display: inline;
        line-height: 1.5;
    }
`;

function SkillStackPage () {

    return(
        <MainWrap>
              <SectionTitle>
                    <h1>기술 스택</h1>
                </SectionTitle>
                <SkillSection>
                    <SkillWrap >
                        <SkillName>
                            <div> <BiLogoHtml5 size={ 35 } /> </div>                           
                            <p>HTML5</p>
                        </SkillName>
                        <SkillDesc>
                            <p>웹 표준성, 웹 접근성을 고려하여 문서를 주어진 데이터에 따라 구조적으로 표시할 수 있습니다.</p>
                            <p>검색 엔진 최적화 경험이 있습니다.</p>
                        </SkillDesc>
                    </SkillWrap>
                    <SkillWrap >       
                        <SkillName>
                            <div> <BiLogoCss3 size={ 35 } /> </div>     
                            <p>CSS3</p>
                        </SkillName>
                        <SkillDesc>
                            <p>다양한 레이아웃 구성 및 기기의 사이즈에 따른 반응형 레이아웃을 구성할 수 있습니다.</p>
                            <p>선택자를 사용하여 스타일을 적용할 수 있습니다. </p>
                            <p>내부, 외부, 인라인 등 다양한 방법으로 CSS를 작성할 수 있습니다.</p>
                        </SkillDesc>
                    </SkillWrap>
                    <SkillWrap >
                        <SkillName>
                            <div> <BiLogoJavascript size={ 35 } /> </div>     
                            <p>JavaScript</p>
                        </SkillName>
                        <SkillDesc>
                            <p>배열, 객체를 다룰 수 있으며, 다양한 이벤트를 처리할 수 있습니다.</p>
                            <p>조건문을 활용할 수 있습니다.</p>
                            <p>라이브러리를 활용하여 개발할 수 있습니다.</p>
                        </SkillDesc>
                    </SkillWrap>
                    <SkillWrap >
                        
                        <SkillName>
                            <div><BiLogoReact size={ 35 }/></div>
                            <p>React</p>
                        </SkillName>
                        <SkillDesc>
                            <p>재사용성을 고려하여 컴포넌트를 생성할 수 있습니다.</p>
                            <p>useState를 활용하여 컴포넌트 상태를 관리할 수 있습니다.</p>
                            <p>useEffect를 활용하여 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있습니다. </p>
                            <p>styled-components를 활용하여 컴포넌트를 스타일링 할 수 있습니다.</p>
                        </SkillDesc>
                    </SkillWrap>
                    <SkillWrap >
                        <SkillName>
                            <div><BiLogoReact size={ 35 } /> </div>
                            <p>React Native</p>
                        </SkillName>
                        <SkillDesc>
                            <p>기본 개념과 사용법을 알고 있으며, react-navigation 등의 라이브러리를 활용하여 개발한 경험이 있습니다.</p>
                            <p>StyelSheet를 활용하여 컴포넌트를 스타일링 할 수 있습니다.</p>
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
                </SkillSection>
            <HomeButtonComp />
            <FooterComp />
        </MainWrap>
    )
};

export default SkillStackPage;