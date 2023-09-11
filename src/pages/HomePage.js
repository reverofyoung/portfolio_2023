import styled, { keyframes } from "styled-components"
import { useState } from "react";
import { Link } from "react-router-dom";

import colors from "../common/colors";

import InfoScreen from "../screens/InfoScreen";
import SkillStackScreen from "../screens/SkillStackScreen";
import ProjectScreen from "../screens/ProjectScreen";

import FooterComp from "../components/FooterComp";

import MainImg from "../image/MainImg.png";
import portfolio from "../image/portfolio.png"
import dashboard from "../image/dashboard.png"
import freitag from "../image/freitag.png"
import chamkit from "../image/chamkit.png"

const fadeAnimation = keyframes`
  0% { opacity: 1; }
  50%{ opacity: 0; }
  100% { opacity: 1; }
`;

const textAnimation = keyframes`
  0% { letter-spacing: 0px; transform: translateX(5px); }
  50%{ letter-spacing: 2px; }
  100% { letter-spacing: 0px; transform: translateX(0px); }
`;

const scaleAnimation = keyframes`
  0% { transform: scale(1); } 
  5% { transform: scale(1.2); } 
  100% { transform: scale(1); }
`;

const spinAnimation = keyframes`
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
`;

const MainWrap = styled.main`
    background-color: ${ colors.mainColor };
    color: ${ colors.fontColor };
    height: 100vh;
    font-family: 'Pretendard-Regular';
    overflow: hidden;
    width: 100vw;

    ::selection {
        background-color: #16FF00;
        color: black;
    }
`;

const MainSection = styled.section`
    justify-content: space-between;
    display: flex;
    height: 100%;
    overflow: hidden;
    padding: 40px;
    position: relative; 
    width: 100%;
`;

const NavSection = styled.section`
    height: 100%;
    width: 25%;
    z-index: 10;

    @media screen and (max-width: 768px) {
        width: 100%;
    };
`;

const ContentSection = styled.section`
    height: 100%;
    overflow: hidden;
    width: 75%;
    z-index: 10;

    @media screen and (max-width: 768px) {
        background-color: ${ colors.mainColor };
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    };
`;

const TitleArticle = styled.article`
    h1 {
        font-size: 16px;     

        &:hover {   
            animation: ${ spinAnimation } 3s linear infinite;
        } 
    }
`;

const JopArticle = styled.article`    
    margin: 30px 0px;

    :nth-child(2){
        font-size: 12px;
    }

    p {
        font-size: 16px;
        line-height: 1.5; 
    }

    span {
        background-color: black;
        color: white;
    }
`;

const MenuArticle = styled.article`
    button {
        cursor: pointer; 
        display: block;

        &:hover { 
            animation: ${ textAnimation } .9s ease infinite; 
            color: ${ colors.pointColor }; 
        }
    }
`;

const ProjectMenuArticle = styled.article`
    margin-top: 60px;

    h3 { 
        font-size: 16px;
        font-weight: bold;
    }
    
`;

const ProjectList = styled.ul`
    margin-left: 10px;
    margin-top: 20px;

    li {
        cursor: pointer;
        padding: 3px;

       
        p {
            font-size: 14px;

            &:hover { 
                animation: ${ fadeAnimation } .2s ease-in; 
                color: ${ colors.pointColor }; 
            }

            @media screen and (max-width: 768px) {
                font-size: 14px;  
            };
        }
    }
`;

const LinkButton = styled.button`
    background-color: ${ colors.pointColor };
    border-radius: 60px;
    bottom: 80px;
    color: ${ colors.mainColor };
    cursor: pointer;
    font-weight: 600;
    height: 60px;
    text-decoration: underline;
    position: absolute;
    right: 70px;
    width: 60px;
    z-index: 15;
    
    &:hover { animation: ${ scaleAnimation } .9s ease-in infinite };

    @media screen and (max-width: 768px) { font-size: 16px};
`;

const MoveImage = styled.div`
    img {
        transition: all .7s linear;
    }
`;

function HomePage() {
    const [xy, setXY] = useState({ x: 0, y: 0 });
    const [projectData, setProjectData] = useState(null);
    const [infoState, setInfoState] = useState(false);
    const [skillState, setSkillState] = useState(false);
    const [projectState, setProjectState ] = useState(false);
    

    const HandleMouseMove = (e) => {
        setXY({ x:e.clientX, y:e.clientY });
    };
    
    {/* ---------- 스킬 메뉴 클릭 이벤트 ---------- */}
    const showSkill = () => {
        setProjectData(null);
        setInfoState(false);
        setSkillState(true);
    };

    {/* ---------- 소개 메뉴 클릭 이벤트 ---------- */}
      const showInfo = () => {
        setSkillState(false);
        setProjectData(null)
        setInfoState(true);
    };
    
    {/* ---------- 프로젝트 목록 클릭 이벤트 ---------- */}
    const showProject = (project) => {
        setProjectData(project);
        setSkillState(false);
        setInfoState(false);
        setProjectState(true);
    };

    {/* ---------- 프로젝트 목록 ---------- */}
    const projectMenu = [
        {
            name: 'READ',
            subTitle: '독서 일기 관리 어플리케이션',
            date: '2023.04 - 2023.07',
            part: '팀 프로젝트(개발 1, 디자인 1) | 기획 95% / 개발 100% 참여 ',
            skill: [
                'HTML', 'CSS', 'React Native', 'Redux Toolkit', 'Expo'
            ],
            describtion: ` 
                평소 독서 관련 앱을 사용하면서 독후감 뿐만 아니라 읽기 전(독전감), 읽는 중(독중감)에도 작성할 수 있는 
                독서 일기 형태면 좋겠다는 생각을 시작으로 기획하게 되었다.
                단계별로 '독전감'을 반드시 작성해야만 '독중감', 그 후에 '독후감'으로 넘어갈 수 있도록 하여
                약간의 강제성을 부여하면서 사용자가 독서에 대한 책임감을 느낄 수 있도록 하는 것이 목표이다.
            ` ,
            function: [
                '카카오 API를 활용한 책 검색 기능',
                'Redux Toolkit을 활용한 독서 상태 및 독서 일기 관리',
                'Stack Navigator를 활용한 화면 전환',
                '메인에 현재 읽는 중인 도서 불러오기',
                '독후감(완독)을 작성하면 자동으로 독서 상태 완독으로 변경'
            ],
            src: 'https://reverofyoung.github.io/read-project/',
            // image: freitag,
            alt: '독서 일기 기록 어플리케이션 메인 이미지'
        },
        {
            name: 'On My Dashboard!',
            subTitle: '프리랜서를 위한 웹 대시보드',
            date: '2023.06 - 2023.07',
            part: '개인 프로젝트 | 100% 참여',
            skill: [
                'HTML', 
                'CSS', 
                'JavaScript', 
                'React'
            ],
            describtion: ` 
                최근 '카공족'이라는 신조어가 급격히 떠오르고 있다. 당장 주위만 둘러봐도 카페에서 공부나 작업하는 모습을 쉽게 볼 수 있다.
                나 역시도 주로 카페에 가서 작업을 하기 때문에 이러한 상황을 반영하여 프리랜서들을 위한 웹 대시보드를 기획하게 되었다.` 
            ,
            function: [
                '반응형 레이아웃 적용',
                '사용자 이름 등록',
                '현재 시간 및 날짜 확인',
                'OpenWeather API를 활용한 현재 날씨 정보 받아오기',
                '투두 리스트 추가, 수정, 삭제',
                '투두 리스트 로컬스토리지에 저장',
                '카카오맵 API를 활용한 현재 나의 위치 근처 카페 정보 받아오기'
            ],
            src: 'https://reverofyoung.github.io/dashboard-project/',
            alt: '웹 대시보드 메인 이미지',
            image: dashboard,
        },
        {
            name: 'Web portfolio(2023)',
            subTitle: '2023년 포트폴리오 웹 사이트',
            date: '2023.07',
            part: '개인 프로젝트 | 100% 참여',
            skill: [
                'HTML', 
                'CSS', 
                'JavaScript', 
                'React'
            ],
            describtion: ` 
                그동안의 작업물들을 모아둔 포트폴리오 웹 사이트이다. 리액트의 컴포넌트를 다양하게 사용해보는 것을 목표로 제작하였다. 
                홈에서는 각 화면으로 이동 가능한 메뉴 버튼을 볼 수 있다. 프로젝트는 작업물을 볼 수 있는 메뉴이며, 기술 스택은 현재 사용 가능한, 사용해본 경험이 있는 기술을 작성해뒀다.
                더보기에서는 이메일, 개발 블로그 등의 계정과 함께 간단한 자기소개를 볼 수 있다.
            `, 
            function: [
                '반응형 레이아웃 적용',
                '모든 화면에서 사용되는 홈버튼, 푸터 컴포넌트 분리', 
                '배열을 활용한 프로젝트 데이터 정리',
                '클릭된 프로젝트 항목의 id와 같은 id를 가진 데이터 props로 모달에 전달',
                '반복문을 사용하여 props로 전달 받은 데이터 렌더링',
            ],
            src: 'https://reverofyoung.github.io/portfolio_2023/',
            image: portfolio,
            alt: '포트폴리오 웹사이트 메인 이미지',
        },
        {
            name: 'FREITAG STORY',
            subTitle: '프라이탁의 브랜드 스토리텔링 웹 사이트',
            date: '2018 졸업작품',
            part: '개인 프로젝트 | 100% 참여',
            skill: [
                'HTML', 
                'CSS', 
                'JavaScript', 
                'jQuery'
            ],
            describtion: `
                스위스의 업사이클링 브랜드인 프라이탁의 브랜드 스토리텔링을 목적으로 기획한 웹 사이트다. 
                CSS를 활용한 기본적인 애니메이션과 애니메이션 라이브러리인 GSAP를 사용하여 컨텐츠를 강조하는 것에 힘썼다. 
            `,
            function: [
                'menu : 각 항목의 호버 애니메이션',
                'story, process : 다양한 레이아웃과 스크롤 높이에 따라 컨텐츠가 나타나는 애니메이션',
                'product : 마우스 클릭 이벤트 활용, 각 제품 클릭시 제품 상세 페이지 모달의 class 값을 변경하여 모달 보이기, 숨기기 구현',
            ],
            src: 'https://reverofyoung.github.io/freitag-project/',
            image: freitag,
            alt: '프라이탁 웹사이트 메인 이미지',
        },
        {
            name: 'CHAMKIT',
            subTitle: '커스터마이징 가능한 페스티벌 굿즈 키트 브랜딩 및 웹 쇼핑몰',
            date: '2018 졸업작품',
            part: '팀 프로젝트(5인) | 기획 90%, 개발 100% 참여',
            skill: [
                'HTML', 
                'CSS', 
                'JavaScript', 
                'jQuery'
            ],
            describtion: `
                페스티벌에 필요한 굿즈를 키트로 제공하는 브랜드를 기획하였다.
                각 페스티벌에 맞는 키트 구성품을 커스터마이징 할 수 있다는 것이 특징이고, 
                브랜드의 특징인 커스터마이징을 가장 잘 보여줄 수 있는 것이 직접 커스터마이징 과정을 경험할 수 있는 쇼핑몰 형태의 웹이라 생각하여 웹 쇼핑몰을 개발하게 되었다.
            `,
            function: [
                '브랜드의 아이덴티티를 엿볼 수 있는 home', 
                '팀 소개를 볼 수 있는 about', 
                '쇼핑몰 레이아웃을 적용한 shop',
                '키트 구성품을 직접 커스텀 할 수 있는 custom',
            ],
            src: 'https://reverofyoung.github.io/chamkit-project/',
            image: chamkit,
            alt: '참킷 웹사이트 메인 이미지'
        }
    ];

    return(
        <MainWrap onMouseMove={ (e) => HandleMouseMove(e) }>
            <MainSection>
                <NavSection>
                    <TitleArticle>
                        <Link to="/">
                            <h1>이윤영/ YUNYOUNG LEE</h1>
                        </Link>
                    </TitleArticle>

                    <JopArticle>
                        <p><span>프론트엔드 개발자</span></p>
                        <p>Front-end Developer</p>
                    </JopArticle>

                    <MenuArticle>
                        <button onClick={ showSkill }>기술 스택 / skill stack</button>
                        <button onClick={ showInfo }>소개 / info</button>
                        {/* <Link to="/skillStack"><button>기술 스택 / skill stack</button></Link>
                        <Link to="/about"><button>소개 / info</button></Link> */}
                    </MenuArticle>

                    <ProjectMenuArticle>
                        <h3>프로젝트 / project</h3>
                        <ProjectList>
                            <ul>
                                {
                                    projectMenu?.map((project, index) => {
                                        const dataId = project.name;
                                        const dataNo = index + 1;

                                        return(
                                            <li key={ dataId } onClick={ () => showProject(project) }>
                                                <p>{ dataNo }. { project.name }</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </ProjectList>
                    </ProjectMenuArticle>

                </NavSection>
                
                <ContentSection>
                    {
                        infoState  === true ?  <InfoScreen /> 
                        : skillState === true ? <SkillStackScreen /> 
                        : projectData &&  
                        <>
                            <ProjectScreen project={ projectData } onClose={ () => setProjectData(null) } />
                            <LinkButton onClick={ ()=>{ window.open(projectData.src) } }>바로 가기</LinkButton>  
                        </>
                    }
                </ContentSection>
                {/* 소개 컴포넌트 */}
                {/* {
                    infoState &&
                    <ContentSection>
                        <InfoScreen />
                    </ContentSection>
                } */}

                {/* 기술 스택 컴포넌트 */}
                {/* {
                    skillState &&
                    <ContentSection>
                        <SkillStackScreen />
                    </ContentSection>
                } */}


                {/* 프로젝트 컴포넌트 */}
                {
                    // projectData &&
                    // <ContentSection className={ `${ projectState ? "content-show" : "" }` }>
                    //     <ProjectScreen project={ projectData } onClose={ () => setProjectData(null) } />

                    //     <LinkButton onClick={ ()=>{ window.open(projectData.src) } } >
                    //         바로 가기
                    //     </LinkButton>  
                    // </ContentSection> 
                }
            </MainSection>

            {/* ---------- 움직이는 이미지 ---------- */}
            <MoveImage>
                <img src={ MainImg } style={{ position: "absolute", left: xy.x, top: xy.y }}/>
            </MoveImage>

            {/* ---------- 푸터 ---------- */}
            <FooterComp />
        </MainWrap>
    )

}

export default HomePage;