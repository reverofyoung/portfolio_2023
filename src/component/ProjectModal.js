import { keyframes, styled } from "styled-components";
import colors from "../common/colors";
import { PiXLight } from 'react-icons/pi'; 

const scaleAnimation = keyframes`
  0% { transform: scale(1) } 
  5% { transform: scale(1.2) } 
  100% { transform: scale(1) }
`;

const ModalWrap = styled.main`
    /* align-items: center; */
    /* background-color: rgba(0,0,0,0.7); */
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: end;
    right: 40px;
    position: absolute;
    top: 40px;
    width: 75%;
`;

const ModalSection = styled.section`
    /* background-color: ${ colors.mainColor }; */
    /* border: 1px solid ${ colors.fontColor }; */
    box-sizing: border-box;
    display: flex;
    font-family: 'Noto Sans KR', 'Noto Sans';
    flex-direction: column;
    height: 90%;
    /* padding: 40px; */
    position: relative;
    width: 90%;
    z-index: 12;

    @media screen and (max-width: 768px) { padding: 20px; width: 100%; };
`;

const ModalButtonSection = styled.section`
    position: relative;
    margin-bottom: 20px;
    width: 100%;

    @media screen and (max-width: 768px) {  margin-bottom: 0px; };
`;

const CloseButton = styled.button`
    color: ${ colors.fontColor };
    font-size: 18px;
    float: right;

    &:hover { color: ${ colors.pointColor }; }
`;  

const ModalContentsSection = styled.section`
    overflow-y: scroll;
    padding-right: 30px;
`;

const ProjectArticle = styled.article`
    width: 100%;

    h1 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
    };

    h2 {
        font-size: 15px;
        font-weight: 100;
    };

    h3 {
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    p {
        font-family: 'Noto Sans KR', 'Noto Sans ';
        font-size: 13px;
        font-weight: 400;
        line-height: 1.4;
        margin-bottom: 5px;
        text-align: right;

        @media screen and (max-width: 768px) { font-size: 16px; };
    };

    button {
        background-color: ${ colors.pointColor };
        border-radius: 60px;
        bottom: 60px;
        color: ${ colors.mainColor };
        cursor: pointer;
        text-decoration: underline;
        position: absolute;
        right: 60px;
        width: 60px;
        height: 60px;
        
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
`;

const FunctionArticle = styled.div`
    ul {
        li {
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 10px;
        }
    }
   
`;

const ProjectImageSection = styled.section`
    box-sizing: border-box;
    flex: 1;
    width: 100%;

    img { width: 100%; }
`;

function ProjectModal({ onClose, project }) {
    const functionList = project.function;
    const skillList = project.skill;

    return(
        <ModalWrap>
            <ModalSection>
                {/* ---------- 모달 버튼 영역 ---------- */}
                <ModalButtonSection>
                    <CloseButton onClick={ onClose }><PiXLight size={ 22 } /></CloseButton>
                </ModalButtonSection>

                {/* ---------- 모달 컨텐츠 영역 ---------- */}
                <ModalContentsSection>
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
                                skillList ? skillList.map((thisResult) => {
                                    return(
                                        <span key={ thisResult }>{ thisResult }</span>
                                    )
                                }) : null
                            }
                        </SkillBox>
                    </ProjectArticle>

                    <ProjectArticle style={{ margin: '100px 0px' }}>
                        <h3>기획 의도</h3>
                        <p style={{ textAlign: "left" }}>{ project.describtion }</p>
                    </ProjectArticle>

                    <ProjectArticle>
                        <h3>기능 소개</h3>
                        <div style={{ display: 'flex' }}>
                            <FunctionArticle>
                                    <ul>
                                    {
                                        functionList ? functionList.map((thisFunction) => {
                                            return(
                                                <li key={ thisFunction }>{ thisFunction }</li>
                                            )
                                        }) : null
                                    }
                                </ul>
                            </FunctionArticle>

                            <ProjectImageSection>
                                { project.image === undefined ? <p>이미지 준비중😢</p> :  <img src={ project.image } alt={ project.alt } ></img> }
                            </ProjectImageSection>
                        </div>
                    </ProjectArticle>

                    <ProjectArticle>
                        <button onClick={()=>{window.open(project.src)}}>바로 가기</button> 
                    </ProjectArticle>  

                    {/* <ProjectArticle style={{ margin: '100px 0px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                            <div style={{ width: '50%' }}>
                                <h3>기획 의도</h3>
                                <p style={{ textAlign: "left" }}>{ project.describtion }</p>
                            </div>

                            <div>
                                <h3>기능 소개</h3>
                                <div>
                                    <FunctionArticle>
                                        <ul>
                                            {
                                                functionList ? functionList.map((thisFunction) => {
                                                    return(
                                                        <li key={ thisFunction }>{ thisFunction }</li>
                                                    )
                                                }) : null
                                            }
                                        </ul>
                                    </FunctionArticle>
                                </div>
                            </div>
                        </div>
                    </ProjectArticle>                    */}
                </ModalContentsSection>
            </ModalSection>
        </ModalWrap>
    )
};

export default ProjectModal;