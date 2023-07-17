import { useState } from "react";
import styled from "styled-components"
import colors from "../common/colors";
import freitag from "../image/freitag.png"
import chamkit from "../image/chamkit.png"

const MainWrap = styled.div`
    /* background-color: ${colors.mainBg}; */
    /* display: flex; */
    font-family: 'Noto Sans', sans-serif;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 850px) {
        flex-direction: column;
        overflow-y: scroll;
        height: 100%;
        width: 100vw;
    };
`;

const HorizontalDivide = styled.div`
    box-sizing: border-box;
    padding: 20px;
    /* height: 100vh; */
    height: fit-content;
    /* width: 50%; */
    /* width: 50%; */
`;

const FixedArea = styled(HorizontalDivide)`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* position: fixed; */
    width: 50%;

    @media screen and (max-width: 850px) {
        width: 100%;
    };

    @media screen and (max-width: 500px) {
        height: fit-content;
        position: relative;
    }
`;

const PersonalArea = styled.div`
    color: ${colors.mainColor};
    display: flex;
    flex-direction: column;
    font-size: 30px;
    font-weight: 900;

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

const InfoArea = styled.div`
    /* background-color: grey; */
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 95%;

    @media screen and (max-width: 500px) {
        /* flex-direction: column; */
        margin-bottom: 0px;
        width: 100%;
    };
`;

const NameArea = styled.div`
    div {
        margin-bottom: 10px;
    }

    @media screen and (max-width: 500px) {
        margin-bottom: 30px;
    };
`;

const JopArea = styled.div`
  
`;

const AccountArea = styled.div`
    font-size: 16px;
    font-weight: 100;
    margin-bottom: 40px;
    width: 450px;

    div {
        padding: 5px 0px;

        &:hover {
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 500px) {
        font-size: 13px;
    }
`;

const IntroduceArea = styled.div`
    background-color: #fff;
    font-family: 'Noto Sans KR';
    font-size: 15px;
    font-weight: 300;
    line-height: 1.5;
    width: 80%;
    /* z-index: 100; */
`;

const ScrollArea = styled(HorizontalDivide)`
    padding-top: 20px;
    /* position: absolute; */
    /* right: 0px; */

    @media screen and (max-width: 500px) {
        position: relative;
        width: 100%;
    };
`;

const ProjectTitle = styled.div`
  color: ${colors.mainColor};
  cursor: pointer;
  /* text-align: right; */
  font-size: 30px;
  font-weight: 900;

  @media screen and (max-width: 500px) {
        font-size: 12px;
    };
`;

const ProjectArea = styled.div`
    display: flex;
    justify-content: space-between;
    height: fit-content;
    width: 100%;
`;

const ProjectContent = styled.div`
    /* background-color: ${colors.mainColor}; */
    box-sizing: border-box;
    height: fit-content;
    margin-bottom: 20px;
    padding: 20px 0px;
    /* width: 100%; */
    width: 47%;

    @media screen and (max-width: 500px) {
        font-size: 12px;
        height: fit-content;
        position: relative;
        width: 100%;
    };
`;
const ProjectName = styled.div`

`;

const ProjectImage = styled.img`
    width: 50%;
`;

const ProjectDesc = styled.div`

`;

function Portfolio() {
    const [projectVisible, serProjectVisible] = useState(false);

    const onClickProjectBtn = () => {
        serProjectVisible(!projectVisible);
    };

    const projectList = [
        {
            title: '프라이탁 ',
            src: freitag,
            describtion: '스위스의 업사이클 브랜드인 프라이탁의 브랜드 스토리텔링을 목적으로 기획하였고,',
            alt: '프라이탁 웹사이트 이미지'
        },
        {
            title: '참킷',
            src: chamkit,
            describt: 'HTML, CSS, Jquery를 사용한 ',
            alt: '참킷 웹사이트 이미지'
        }
    ];


    return(
        <MainWrap>
            <FixedArea>
                <PersonalArea>
                    <InfoArea>
                        <NameArea>
                            <div>LEEYUNYOUNG</div>
                            <div style={{ fontFamily: 'Noto Sans KR' }}>이윤영</div>
                            <div style={{ fontFamily: 'Noto Sans TC' }}>李胤永</div>
                        </NameArea>
                        <JopArea>
                            <div>FRONTEND DEVELOPER</div>
                        </JopArea>
                    </InfoArea>
                    <AccountArea>
                        <div>
                            <a href="https://github.com/reverofyoung" target="_blank">https://github.com/reverofyoung</a>
                        </div>
                        <div>
                            <a href="https://velog.io/@reverofyoung" target="_blank">https://velog.io/@reverofyoung</a>
                        </div>
                        <div>
                            <a href="mailto:reverofyoung@gmail.com">reverofyoung@gmail.com</a>
                        </div>
                    </AccountArea>
                </PersonalArea>
                <IntroduceArea>
                    {/* <div>
                        <p>신뢰할 수 있는 개발자가 되고자 합니다. </p>
                            <br />
                        <p>
                            학부생 시절 처음 HTMl, CSS를 javascript를 접하게 되었고, 졸업 후에는 약 2년간 타직종에서 근무 경험이 있습니다.
                            하지만 개발에 대한 아쉬움이 남아 퇴사 후 이직을 결심했고, IT 스타트업 입사를 시작으로 프론트엔드 개발자로 첫걸음을 내딛을 수 있었습니다. 
                            약 1년 2개월간 프론트엔드 개발을 담당하며 전반적인 마크업과 Javascript, React, REST Api를 사용한 서버와의 소통, Redux를 통한 전역 상태 관리 등 다양한 실무 경험을 쌓을 수 있었습니다.
                        </p>
                            <br />
                        <p>
                            처음엔 화면을 구성하는 것에 흥미를 느꼈다면, 최근엔 서버에 요청하여 데이터를 받아오고, 데이터를 가공하는 과정에 흥미가 생겨
                            각종 api를 활용한 개인 작업을 진행했습니다. 
                        </p>
                            <br />
                        <p>
                            개인적으로 공부한 프레임워크로는 React Native가 있습니다. 
                        </p>
                    </div> */}
                </IntroduceArea>
            </FixedArea>

            <ScrollArea>
                <ProjectTitle onClick={ onClickProjectBtn }>PROJECT</ProjectTitle>
                    <ProjectArea>
                        {
                            projectList.map((thisResult) => {
                                const dataId = thisResult.src;
                                return(
                                    <ProjectContent key={ dataId }>
                                        <ProjectName>{ thisResult.title }</ProjectName>
                                        <ProjectDesc>{ thisResult.describtion }</ProjectDesc>
                                        {/* <ProjectImage src={ thisResult.src } alt={ thisResult.alt }></ProjectImage> */}
                                    </ProjectContent>
                                )
                            })

                        }
                    </ProjectArea>
            </ScrollArea>
        </MainWrap>
    )

}

export default Portfolio;