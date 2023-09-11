import { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";

import "../common/style.css"
import colors from "../common/colors";

import { PiXLight } from 'react-icons/pi'; 

const MainWrap = styled.section`
    height: 100%;
    padding: 20px;
    width: 100%;

    @media screen and (max-width: 768px) { 
        flex-direction: column;
        padding: 20px;
    };
`;

const InfoSection = styled.section`
    font-family: 'Pretendard-Regular';


    @media screen and (max-width: 768px) {
        padding: 20px;
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

    @media screen and (max-width: 768px) { width: 100%; };
`;

const ContentSection = styled.section`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) { 
        flex-direction: column; 
        width: 100%;
    };
`;

const PersonalCon = styled.div`
    margin-bottom: 30px;
    width: 50%;

    p {
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 10px;

        @media screen and (max-width: 768px) { font-size: 13px; width: 100%; };
    }

    @media screen and (max-width: 768px) { width: 100%; };
`;

const InfoArticle = styled.article`
    width: 50%;
        a { 
            cursor: pointer;
            display: flex;
            line-height: 1.5;
            font-size: 22px;
            font-weight: lighter;

            &:hover { color: ${ colors.pointColor }; }
            &:active { color: ${ colors.pointColor }; }

            span {
                align-items: center;
                display: flex;
            }
        } 
    
    @media screen and (max-width: 768px) { font-size: 16px; width: 100% };
`;

const LanguageBox = styled.div`
    margin-bottom: 10px;

    button { margin-right: 8px; }
`;

function InfoScreen({ onClose }) {
    const [enMode, setEnMode] = useState(false);

    // 한영 전환
    const langConvert = () => {
        setEnMode(!enMode);
    };
    
    return(
        <MainWrap>
            <InfoSection>
                <CloseButtonSection>
                    <CloseButton onClick={ onClose }><PiXLight size={ 22 } /></CloseButton>
                </CloseButtonSection>

                <SectionTitle>
                    <h1>소개</h1>
                </SectionTitle>

                <ContentSection>
                    {/* <PersonalCon>
                        <p>2019.02 계원예술대학교 디지털미디어디자인과 졸업</p>
                        <p>2021.07 - 2022.09 IT 스타트업 '디케이랩' 프론트엔드 개발팀 근무</p>
                    </PersonalCon> */}
                    <InfoArticle>
                      
                    </InfoArticle>

                    {/* <InfoArticle>
                        <LanguageBox>
                            <button onClick={ langConvert } className={ `${ !enMode ? "underline" : ""}`}>KO</button>
                            <button onClick={ langConvert } className={ `${ enMode ? "underline" : ""}`}>ENG</button>
                        </LanguageBox>
                        {
                            enMode ? 
                            <div>
                                <p>Thank you for visiting my portfolio!</p>
                                <p>
                                You can find the code for the projects I've worked on on  <a href="https://github.com/reverofyoung" target="_blank">GitHub.</a>
                                    I also keep track of my personal study materials and challenging experiences on my  <a href="https://velog.io/@reverofyoung" target="_blank">blog.</a>
                                    If you have any questions or inquiries, please feel free to contact me via <a href="mailto:reverofyoung@gmail.com">email.</a>
                                    I welcome any inquiries at any time :-)
                                </p>
                            </div> : <div>
                                <p>저의 포트폴리오에 찾아와주셔서 감사합니다! </p>
                                <p>
                                    진행했던 프로젝트들의 코드는 <a href="https://github.com/reverofyoung" target="_blank">깃허브</a>에서 볼 수 있어요.
                                    개인적으로 공부하는 내용이나 어려웠던 부분은 <a href="https://velog.io/@reverofyoung" target="_blank">벨로그</a>에 조금씩 기록하고 있습니다.
                                    궁금하신 사항이 있다면 <a href="mailto:reverofyoung@gmail.com">메일</a>로 연락 해주세요!
                                </p>
                                <p>언제든 환영해요 :-)</p>
                            </div> 
                        }
                       
                    </InfoArticle> */}
                </ContentSection>
            </InfoSection>
        </MainWrap>
    )
};

export default InfoScreen;