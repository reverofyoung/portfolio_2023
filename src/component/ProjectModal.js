import { styled } from "styled-components";
import colors from "../common/colors";
import { PiXLight } from 'react-icons/pi'; 

const ModalWrap = styled.main`
    align-items: center;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
`;

const ModalSection = styled.section`
    background-color: ${ colors.mainColor };
    border: 1px solid ${ colors.fontColor };
    box-sizing: border-box;
    display: flex;
    font-family: 'Noto Sans KR', 'Noto Sans';
    flex-direction: column;
    height: 90%;
    padding: 20px;
    position: relative;
    width: 95%;

    @media screen and (max-width: 768px) { width: 100%; };
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

    ::-webkit-scrollbar { width: 0px; };

    ::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: rgb(0,0,0,1);
        border: 1px solid transparent;
    };

    ::-webkit-scrollbar-track {
        background-color: rgb(0,0,0,0.2);
        border-radius: 3px;
    };
`;

const ProjectDescSection = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
    width: 100%;

    article { margin-right: 40px; }
    article:first-of-type { width: 60%; @media screen and (max-width: 768px) { width: 100%; }; } 
    article:nth-child(2) { width: 50%; @media screen and (max-width: 768px) { width: 100%; }; } 
    article:nth-child(3) { width: 60%; @media screen and (max-width: 768px) { width: 100%; }; } 
    article:nth-child(4) { width: 75%; @media screen and (max-width: 768px) { width: 100%; }; } 
    article:last-of-type { min-width: 100px; }
   
    @media screen and (max-width: 768px) {
        justify-content: initial;
        flex-direction: column;
        margin-bottom: 50px;
    };
`;

const DescArticle = styled.article`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 24px;
        font-weight: 900;
        margin-bottom: 15px;
    };

    h3 {
        font-weight: 300;
    };

    span {
        font-weight: 100;
        margin-bottom: 17px;
        
        @media screen and (max-width: 768px) {  margin-bottom: 10px; };
    }

    p {
        font-family: 'Noto Sans KR', 'Noto Sans ';
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
        margin-bottom: 5px;

        @media screen and (max-width: 768px) { font-size: 16px; };
    };

    button {
        color: ${ colors.fontColor };
        cursor: pointer;
        text-decoration: underline;
        
        &:hover { color: ${ colors.pointColor }; }
        @media screen and (max-width: 768px) { font-size: 16px};
    };

    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
        width: 100%;
    };
`;

const FunctionList = styled.ul`
    li {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
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

    return(
        <ModalWrap>
            <ModalSection>
                {/* ---------- 모달 버튼 영역 ---------- */}
                <ModalButtonSection>
                    <CloseButton onClick={ onClose }><PiXLight size={ 22 } /></CloseButton>
                </ModalButtonSection>

                {/* ---------- 모달 컨텐츠 영역 ---------- */}
                <ModalContentsSection>
                    {/* ---------- 프로젝트 설명 ---------- */}
                    <ProjectDescSection>
                        <DescArticle>
                            <h1>{ project.name }</h1>
                            <h3>{ project.subTitle }</h3>
                        </DescArticle>

                        <DescArticle>
                            <span>{ project.date }</span>
                            <span>{ project.part }</span>
                            <span>{ project.skill }</span>
                        </DescArticle>

                        <DescArticle>
                            <p>{ project.describtion }</p>
                        </DescArticle>

                        <DescArticle>
                            <FunctionList>
                            {
                                functionList ? functionList.map((thisFunction) => {
                                    return(
                                        <li>{ thisFunction }</li>
                                    )
                                }) : null
                            }
                            </FunctionList>
                        </DescArticle>

                        <DescArticle>
                            <button onClick={()=>{window.open(project.src)}}>바로 보기</button>
                        </DescArticle>
                    </ProjectDescSection>
                        
                    {/* ---------- 프로젝트 이미지 ---------- */}
                    <ProjectImageSection>
                        <img src={ project.image } alt={ project.alt } ></img>
                    </ProjectImageSection>
                </ModalContentsSection>
            </ModalSection>
        </ModalWrap>
    )
};

export default ProjectModal;