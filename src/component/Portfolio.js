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

const HorizontalDivide = styled.section`
    box-sizing: border-box;
    padding: 20px;
    /* height: 100vh; */
    height: fit-content;
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

const PersonalArea = styled.article`
    color: ${colors.mainColor};
    display: flex;
    flex-direction: column;
    font-size: 30px;
    font-weight: 900;

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

const InfoArea = styled.article`
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

const AccountArea = styled.article`
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

const IntroduceArea = styled.article`
    background-color: #fff;
    font-family: 'Noto Sans KR';
    font-size: 15px;
    font-weight: 300;
    line-height: 1.5;
    width: 80%;
    /* z-index: 100; */
`;

const ContentArea = styled.section`
    box-sizing: border-box;
    padding: 20px;
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

const ContentsTitle = styled.div`
  color: ${colors.mainColor};
  cursor: pointer;
  /* text-align: right; */
  font-size: 30px;
  font-weight: 900;

  @media screen and (max-width: 500px) {
        font-size: 12px;
    };
`;
const SkillWrap = styled.article`
    /* background-color: green; */
    box-sizing: border-box;
    padding: 20px 0px;
    width: 80%;

`;
const SkillBox = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const SkillName = styled.div`
    font-weight: 100;
    font-size: 18px;
    min-width: 150px;
    width: 150px;
`;

const SkillDesc = styled.div`
    font-weight: 100;
    width: calc(80%-150px);
`;

const ProjectWrap = styled.article`
    display: flex;
    flex-wrap : wrap;
    font-family: 'Noto Sans KR';
    height: fit-content;
    justify-content: space-between;
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
const ProjectTitle = styled.div`
    font-size: 22px;
`;

const ProjectImage = styled.img`
    width: 50%;
`;

const ProjectDesc = styled.div`

`;
const ProjectSrc = styled.div`
    div {
        cursor: pointer;
    }
`;

function Portfolio() {
    const [projectVisible, serProjectVisible] = useState(false);

    const onClickProjectBtn = () => {
        serProjectVisible(!projectVisible);
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
            describtion: '다양한 이벤트를 처리할 수 있습니다. 배열, 객체를 다룰 수 있습니다. 변수에 대해 이해하고 있습니다. 조건문을 활용할 수 있습니다. 라이브러리를 활용하여 개발할 수 있습니다.'
        },
        {
            name: 'React',
            describtion: 'props를 사용하여 컴포넌트에 값을 전달할 수 있습니다. useState를 활용하여 컴포넌트 상태를 관리 할 수 있습니다. useEffect를 활용하여 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있습니다. styled-components를 활용하여 컴포넌트를 스타일링 할 수 있습니다.'
        },
        {
            name: 'Redux/ Redux Toolkit',
            describtion: '기본 개념과 사용법을 알고 있습니다. 여러 개의 컴포넌트 상태를 관리할 수 있습니다. '
        },
        {
            name: 'React Native',
            describtion: '기본 개념과 사용법을 알고 있습니다. react-navigation 등의 라이브러리를 활용하여 개발한 경험이 있습니다. StyelSheet를 활용하여 컴포넌트를 스타일링 할 수 있습니다.'
        },

    ];

    const projectList = [
        {
            title: '독서 일기 기록 어플리케이션 READ',
            image: freitag,
            describtion: 'HTML, CSS, JavaScript, Jquery를 ',
            src: 'https://reverofyoung.github.io/read-project/',
            alt: '독서 일기 기록 어플리케이션 메인 이미지'
        },
        {
            title: '대시보드',
            image: chamkit,
            describtion: '카페에서 작업하는 프리랜서를 위한 웹 대시보드',
            src: 'https://reverofyoung.github.io/dashboard-project/',
            alt: '참킷 웹사이트 메인 이미지'
        },
        {
            title: '프라이탁',
            image: freitag,
            describtion: '스위스의 업사이클 브랜드인 프라이탁의 브랜드 스토리텔링을 목적으로 기획하였고,',
            src: 'https://reverofyoung.github.io/freitag-project/',
            alt: '프라이탁 웹사이트 메인 이미지'
        },
        {
            title: '참킷',
            image: chamkit,
            describtion: 'HTML, CSS, Jquery를 사용한 ',
            src: 'https://reverofyoung.github.io/chamkit-project/',
            alt: '참킷 웹사이트 메인 이미지'
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
                    <div>
                        {/* <p>신뢰할 수 있는 개발자가 되고자 합니다. </p>
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
                        </p> */}

                        <p>
                            오버 엔지니어링을 지양하는 개발자를 꿈꿉니다. 
                        </p>
                    </div>
                </IntroduceArea>
            </FixedArea>

            <ContentArea style={{ width: '50%' }}>
                <ContentsTitle>기술 스택</ContentsTitle>
                <SkillWrap>
                    {
                        skillList.map((skillResult) => {
                            const dataId = skillResult.name;
                            return(
                                <SkillBox key={ dataId }>
                                    <SkillName>{ skillResult.name }</SkillName>
                                    <SkillDesc>{ skillResult.describtion }</SkillDesc>
                                </SkillBox>
                            )
                        })
                    }
                </SkillWrap>
            </ContentArea>

            <ScrollArea>
                <ContentsTitle onClick={ onClickProjectBtn }>프로젝트</ContentsTitle>
                    <ProjectWrap>
                        {
                            projectList.map((thisResult) => {
                                const dataId = thisResult.src;
                                return(
                                    <ProjectContent key={ dataId }>
                                        <ProjectTitle>{ thisResult.title }</ProjectTitle>
                                        <ProjectDesc>{ thisResult.describtion }</ProjectDesc>
                                        <ProjectSrc>
                                            <div onClick={()=>{window.open(thisResult.src)}}>바로 보기</div>
                                        </ProjectSrc>
                                        <ProjectImage src={ thisResult.image } alt={ thisResult.alt }></ProjectImage>
                                    </ProjectContent>
                                )
                            })

                        }
                    </ProjectWrap>
            </ScrollArea>
        </MainWrap>
    )

}

export default Portfolio;