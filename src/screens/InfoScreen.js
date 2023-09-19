import { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";

import "../common/style.css"
import colors from "../common/colors";

import { PiXLight } from 'react-icons/pi'; 

const MainWrap = styled.section`
    height: 100%;
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
    justify-content: end;
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 80px; */

    @media screen and (max-width: 768px) { 
        flex-direction: column; 
        padding: 20px 0px;
        width: 100%;
    };
`;

const ContentArticle = styled.article`
    font-size: 13px;
    width: 50%;

    p {
        line-height: 1.2;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 768px) { 
        width: 100%;
    };
`;


// const InfoArticle = styled.article`
//     width: 50%;
//         a { 
//             cursor: pointer;
//             display: flex;
//             line-height: 1.5;
//             font-size: 22px;
//             font-weight: lighter;

//             &:hover { color: ${ colors.pointColor }; }
//             &:active { color: ${ colors.pointColor }; }

//             span {
//                 align-items: center;
//                 display: flex;
//             }
//         } 
    
//     @media screen and (max-width: 768px) { font-size: 16px; width: 100% };
// `;

// const LanguageBox = styled.div`
//     margin-bottom: 10px;

//     button { margin-right: 8px; }
// `;

function InfoScreen({ onClose }) {
    // const [enMode, setEnMode] = useState(false);

    // 한영 전환
    // const langConvert = () => {
    //     setEnMode(!enMode);
    // };
    
    return(
        <MainWrap>
            <InfoSection>
                <CloseButtonSection>
                    <CloseButton onClick={ onClose }><PiXLight size={ 22 } /></CloseButton>
                </CloseButtonSection>

                <ContentSection>
                    <ContentArticle>
                        <p>안녕하세요. 1년차 프론트엔드 개발자 이윤영입니다.</p>
                        <p style={{ textDecoration: 'underline' }}>제가 전공한 디지털미디어디자인과에서는 UI/UX의 전반적인 과정을 학습합니다.</p>
                        <p>마지막 두 학기는 기획, 디자인, 프로그래밍 중 한 가지의 세부전공을 선택하여 집중적으로 수업을 듣게 되는데, 저는 프로그래밍을 선택하며 프론트엔드 개발에 첫 발걸음을 내딛게 되었습니다.</p>
                        <p>디자인과의 프로그래밍반 출신인만큼 기획, 디자인, 개발 어느 한 쪽의 의견에 치우치지 않고 모두 만족할 수 있는 결과물을 만들어 내는 것에 늘 욕심을 내곤 합니다.</p>
                        <p style={{ textDecoration: 'underline' }}>졸업 후에는 약 2년간 좋아하던 브랜드의 판매직으로 근무하였습니다.</p>
                        <p>좋아하는 브랜드이다보니 열심히 업무에 임했고, 업무 능력을 인정받아 제주도 지점의 오픈 멤버로 발령되어 약 6개월간 제주도에서 생활하기도 하였습니다.</p>
                        <p>누군가는 단순한 판매직이라고 생각할 수 있지만 함께 일하는 동료, 고객들과 끊임없이 소통하고 현장에서 벌어지는 모든 일들을 관리하고 해결해 나가는 과정을 거치며 
                           많은 것들을 배울 수 있었기에 저의 인생에서 가장 중요한 시기였다고 말하고 싶습니다.</p>
                        <p style={{ textDecoration: 'underline' }}>개발자로서의 이윤영은 끊임없이 탐구하는 사람입니다.</p>
                        <p>만들어 보고 싶은 서비스를 만들어보거나 토이 프로젝트를 진행하며 꾸준히 학습하고 있습니다.</p>
                        <p>최근에는 기록에 대한 중요성을 느끼고 진행해온 프로젝트 코드들을 깃허브에 업로드 하고, 공부하는 내용이나 어려웠던 부분들을 개발 블로그에 조금씩 기록하고 있습니다.</p>
                        <p>늘 지금처럼 끊임없이 공부하고 탐구할 수 있는 개발자가 되고자 합니다.</p>
                    </ContentArticle>

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