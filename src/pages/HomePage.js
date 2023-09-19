import styled, { keyframes } from "styled-components"
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCodeOutline } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

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
  50% { transform: scale(1.2); } 
  100% { transform: scale(1); }
`;

const titleSpinAni = keyframes`
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
`;

const iconTranslateAni = keyframes`
    0% { transform: translateX(0px); }
    100% { transform: translateX(8px); }
`;

const iconSpinAni = keyframes`
    0% { transform: rotateZ(0deg); }
    100% { transform: rotateZ(360deg); }
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

    @media screen and (max-width: 768px) {
        overflow-y: scroll;
    };
`;

const MainSection = styled.section`
    justify-content: space-between;
    display: flex;
    height: 100%;
    /* overflow: hidden; */
    padding: 40px;
    position: relative; 
    width: 100%;

     @media screen and (max-width: 768px) {
        flex-direction: column;
    };
`;

const SideSection = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    width: 25%;
    z-index: 10;

    @media screen and (max-width: 768px) {
        width: 100%;
    };
`;

const NavArticle = styled.article`
    width: 100%;
`;

const TitleArticle = styled.article`
    &:hover {   
        /* animation: ${ titleSpinAni } 1.2s linear infinite; */
        color: lightgray;
    } 
    
    h1 {
        font-size: 16px;     
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

const AccountArticle = styled.article`
    cursor: pointer;
    height: fit-content;
    width: 100%;

    div:nth-child(2) { 
        span {
            animation: ${ iconTranslateAni } 0.8s linear infinite;
        }
    }

    div:nth-child(3) { 
        span {
            animation: ${ iconSpinAni } 1.5s linear infinite;
        }
    }

    div {
        display: flex;

        &:hover { 
            color: ${ colors.pointColor };
            transition: all .3s linear;
        }

        a{
            display: flex;
            line-height: 1.5;
            font-size: 13px;
            font-weight: lighter;
            @media screen and (max-width: 768px) {
                font-size: 16px;  
            };
        }

        span {
            align-items: center;
            display: flex; 
            margin-left: 5px;
        }
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
        font-size: 14px;
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
            font-size: 12px;

            &:hover { 
                animation: ${ fadeAnimation } .2s step-end; 
                color: ${ colors.pointColor }; 
            }

            @media screen and (max-width: 768px) {
                font-size: 14px;  
            };
        }
    }
`;

const ContentSection = styled.section`
    height: 100%;
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

    @media screen and (max-width: 768px) { font-size: 14px};
`;

const MoveImage = styled.div`
    img {
        transition: all .7s linear;
        width: 150px;
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
                React Native 공부를 위해 토이 프로젝트 주제를 고민하던 중,
                평소 독서 관련 앱을 사용하면서 느낀 아쉬운 점을 보완하고자 기획하게 되었다.
                
                책을 읽은 후 작성하는 독후감 뿐만 아니라 읽기 전(독전감), 읽는 중(독중감)에도 작성할 수 있는 독서 일기 형태면
                좋겠다고 생각하였고, 개인적으로 최근에 각종 어플케이션에서 상용화 되고 있는 소셜미디어 피드 형식이 부담스럽다고
                느껴져서 사용자가 독립적으로 사용할 수 있는 어플리케이션을 목표로 하였다.
                
                독서 일기 관리가 주기능인만큼 독서 일기를 작성하는 과정을 가장 오래 고민하였다.
                단계별로 '독전감'을 반드시 작성해야만 '독중감', 그 후에 '독후감'으로 넘어갈 수 있도록 하여
                어느정도 강제성을 부여하면서 사용자가 독서에 대한 책임감을 느꼈으면 좋겠다고 생각하였고,
                새로운 책을 읽기 전과 읽는 중, 완독한 후의 다양한 독서 경험을 기록할 수 있도록 하였다.
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
            나 역시도 주로 카페에 가서 작업을 하기 때문에 이러한 상황을 반영하여 프리랜서들을 위한 웹 대시보드를 기획하게 되었다.
            웹에서 실행되는 대시보드이기 때문에 장기적이고 복잡한 계획보다는 오늘 해야할 일을 단순하게 보여줬으면 좋겠다고 생각하여 아주 직관적인 UI로
            투두 리스트를 만들었고, 기왕이면 개인 비서, 마치 아이언맨의 '자비스' 같은 역할을 해주면 재미있을 것 같다고 생각해서
            화면 상단에서 '우울한 oo', '일이 많은 oo' 등 자유롭게 사용자의 이름 또는 닉네임을 등록할 수 있게 하여 보다 현재 사용하고 있는
            '나', 내가 돋보일 수 있게 했다. OpenWeather API를 활용하여 위치 기반의 날씨를 보여주는데, 앞서 말했듯이 조금 더 친밀한 느낌을 주기
            위해 날씨마다 조건식을 추가하여 '비가 내리고 있으니 우산을 챙기세요' 와 같은 보조 설명을 덧붙였다.
            ` 
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
                그동안의 작업물들을 모아둔 포트폴리오 웹 사이트이다. 번거로움 없이 작업물을 관람할 수 있게 하는 것을 목표로 하였기 떄문에
                홈화면에서 프로젝트 목록을 바로 볼 수 있고, 각 화면으로 이동 가능한 메뉴 버튼들과 깃허브, 벨로그, 이메일로 연결되는 링크를 배치했다.
                '기술 스택 / skill stack'에서는 사용 가능한 기술들과 활용도를 볼 수 있고, '소개 / info'에서는 간단한 자기소개를 볼 수 있다.
                재미있는 포트폴리오가 되었으면 좋겠단 생각에 곳곳에 다양한 애니메이션을 주었다. 애니메이션을 발견하는 재미가 있었으면 한다.
            `, 
            function: [
                '반응형 레이아웃 적용',
                'keyframes 활용한 애니메이션',
                'styled-components를 활용한 스타일링',
                '클릭된 프로젝트 항목의 데이터를 props로 ProjectScreen에 전달',
                '반복문 map 및 조건문 사용하여 props로 전달 받은 데이터 렌더링',
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
                평소 좋아하는 브랜드인 프라이탁의 브랜드 스토리텔링 웹 사이트를 개발했다.
                프라이탁은 스위스의 업사이클링 브랜드로 버려진 트럭의 타프를 재활용 하여 가방을 만드는 것이 특징이다.
                국내에도 엄청난 매니아층을 보유하고 있는데 브랜드를 시작하게 된 계기가 재밌어서 제품을 구매하는 것뿐만 아니라
                브랜드의 이야기도 많은 사람들이 알았으면 하는 생각에 기획하게 되었다.  
            `,
            function: [
                '가독성을 고려한 다양한 레이아웃',
                'a 링크 마우스 오버 애니메이션',
                'GSAP 라이브러리를 활용한 스크롤 이벤트',
                '각 제품 클릭 시 모달의 class 값을 변경하여 모달 보이기, 숨기기 구현',
                '외부 스타일 시트 사용'
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
                졸업작품으로 페스티벌에 필요한 굿즈를 키트로 제공하는 브랜드를 기획하였다.
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
                <SideSection>
                    <NavArticle>
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
                    </NavArticle>

                    <AccountArticle>
                        <div>
                            <a href="https://github.com/reverofyoung" target="_blank">깃허브</a>
                            <span><IoCodeOutline /></span>
                        </div>
                        <div>
                            <a href="https://velog.io/@reverofyoung" target="_blank">벨로그</a>
                            <span><IoArrowForwardSharp /></span>
                        </div>
                        <div>
                            <a href="mailto:reverofyoung@gmail.com">이메일</a>
                            <span><MdAlternateEmail /></span>
                        </div>
                    </AccountArticle>
                </SideSection>
                
                {
                    infoState  === true ?  
                    <ContentSection >
                        <InfoScreen onClose={ () => setInfoState(false) } /> 
                    </ContentSection>
                    
                    : skillState === true ? 
                    <ContentSection>
                        <SkillStackScreen onClose={ () => setSkillState(false) } />
                    </ContentSection> 

                    : projectState &&  
                    <ContentSection>
                        <ProjectScreen id="projectScreen" project={ projectData } onClose={ () => setProjectState(false) } />
                        <LinkButton onClick={ ()=>{ window.open(projectData.src) } }>바로 가기</LinkButton>  
                    </ContentSection> 
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