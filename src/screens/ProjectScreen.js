import { keyframes, styled } from "styled-components";

import colors from "../common/colors";

import { PiXLight } from 'react-icons/pi'; 

const scaleAnimation = keyframes`
    0% { transform: scale(1) } 
    5% { transform: scale(1.2) } 
    100% { transform: scale(1) }
`;

const ModalWrap = styled.main`
    height: 100%;
    padding: 20px;
    width: 100%;
`;

const ModalSection = styled.section`
    font-family: 'Pretendard-Regular';
    height: 100%;
    width: 100%;

    @media screen and (max-width: 768px) { 
        overflow-y: scroll;
        padding: 20px; 
        width: 100%; 
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

const ContentsSection = styled.section`
    padding-right: 30px;

    article:nth-child(4) {
        margin: 40px 0px;
    };

    article:nth-child(5) {
        flex-direction: column;
    }

    @media screen and (max-width: 768px) {  
        overflow-y: scroll;
        padding: 0px;
    };

`;

const ProjectArticle = styled.article`
    width: 100%;

    h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    };

    h2 {
        font-size: 15px;
        font-weight: light;

        @media screen and (max-width: 768px) { 
            margin-bottom: 16px;
        };
    };

    h3 {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 20px;
    };

    p {
        font-family: 'Pretendard-Regular';
        font-size: 13px;
        font-weight: lighter;
        line-height: 1.4;
        margin-bottom: 5px;
        text-align: right;

        @media screen and (max-width: 768px) { 
            font-size: 14px; 
            text-align: left;
        };
    };

    button {
        background-color: ${ colors.pointColor };
        border-radius: 60px;
        bottom: 40px;
        color: ${ colors.mainColor };
        cursor: pointer;
        font-weight: 600;
        height: 60px;
        text-decoration: underline;
        position: absolute;
        right: 60px;
        width: 60px;
        
        &:hover { animation: ${ scaleAnimation } .9s ease-in infinite };

        @media screen and (max-width: 768px) { font-size: 16px};
    };

`;

const SkillBox = styled.div`
    display: flex;

    span {
        border: 1px solid black;
        border-radius: 50px;
        box-sizing: border-box;
        font-size: 12px;
        font-weight: 400;
        margin-right: 5px;
        padding: 6px 10px;
    }

    @media screen and (max-width: 768px) { 
        margin-top: 30px;
    };
`;

const DisplaySection = styled.section`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) { 
        flex-direction: column;
    };
`;

const FunctionArticle = styled.article`
    width: 50%;

    ul {
        li {
            font-size: 13px;
            font-weight: 400;
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: 768px) { 
        width: 100%;
    };
   
`;

const ProjectImageArticle = styled.article`
    width: 40%;

    img { width: 100%; }

    @media screen and (max-width: 768px) { 
        margin-top: 40px;
        width: 100%;
    };
`;

function ProjectScreen({ onClose, project }) {
    const functionList = project.function;
    const skillList = project.skill;

    return(
        <ModalWrap>
            <ModalSection>
                {/* ---------- 닫기버튼 영역 ---------- */}
                <CloseButtonSection>
                    <CloseButton onClick={ onClose }><PiXLight size={ 22 } /></CloseButton>
                </CloseButtonSection>

                {/* ---------- 모달 컨텐츠 영역 ---------- */}
                <ContentsSection>
                    <ProjectArticle>
                        <h1>{ project.name }</h1>
                        <h2>{ project.subTitle }</h2>
                    </ProjectArticle>
                
                    <ProjectArticle>
                        <p>{ project.date }</p>
                        <p>{ project.part }</p>
                    </ProjectArticle>

                    <ProjectArticle>
                        <SkillBox>
                            {
                                skillList ? skillList.map((skillContent) => {
                                    return(
                                        <span key={ skillContent }>{ skillContent }</span>
                                    )
                                }) : null
                            }
                        </SkillBox>
                    </ProjectArticle>

                    <ProjectArticle>
                        <h3>기획 의도</h3>
                        <p style={{ textAlign: "left" }}>{ project.describtion }</p>
                    </ProjectArticle>

                    <ProjectArticle>
                        <h3>기능 소개</h3>
                        <DisplaySection>
                            <FunctionArticle>
                                    <ul>
                                    {
                                        functionList ? functionList.map((functionContent) => {
                                            return(
                                                <li key={ functionContent }>- { functionContent }</li>
                                            )
                                        }) : null
                                    }
                                </ul>
                            </FunctionArticle>

                            <ProjectImageArticle>
                                { project.image === undefined ? <p>이미지 준비중 😢</p> :  <img src={ project.image } alt={ project.alt } ></img> }
                            </ProjectImageArticle>
                        </DisplaySection>
                    </ProjectArticle>
                </ContentsSection>
            </ModalSection>
        </ModalWrap>
    )
};

export default ProjectScreen;