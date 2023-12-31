import { useState } from "react";
import styled, { keyframes } from "styled-components"

import colors from "../common/colors";
import FooterComp from "../component/FooterComp";
import ProjectModal from "../component/ProjectModal";
import HomeButtonComp from "../component/HomeButtonComp";

import portfolio from "../image/portfolio.png"
import dashboard from "../image/dashboard.png"
import freitag from "../image/freitag.png"
import chamkit from "../image/chamkit.png"

const fadeAnimation = keyframes`
  0% { opacity: 1; }
  50%{ opacity: 0; }
  100% { opacity: 1; }
`;

const MainWrap = styled.main`
    background-color: ${ colors.mainColor };
    /* border: 1px solid ${ colors.fontColor }; */
    color: ${ colors.fontColor };
    font-family: 'Noto Sans', 'Noto Sans KR';
    height: 100vh;
    position: relative;
    width: 100vw;
`;

const ProjectSection = styled.section`
    /* display: flex; */
    height: 100%;
    width: 100%;

    @media screen and (max-width: 768px) { flex-direction: column; };
`;

const SectionTitle = styled.article`
    height: fit-content;
    padding: 20px;
    width: 50%;

    h1 {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 18px;
        font-weight: 300;

        @media screen and (max-width: 768px) {
            font-size: 44px;
            margin-bottom: 60px;
        };
    }   
    @media screen and (max-width: 768px) { width: 100%; }; 
`;

const ProjectArticle = styled.article`
    /* border-left: 1px solid ${ colors.fontColor }; */
    /* border-right: 2px solid ${ colors.fontColor }; */
    /* height: 100%; */
    /* background-color: beige; */
    padding-left: 30px;
    width: 50%;

    @media screen and (max-width: 768px) {
        /* border-top: 1px solid ${ colors.fontColor }; */
        /* border-left:none; */
        flex: 1;
        width: 100%;
    };
`;

const ProjectList = styled.ul`
    li {
        /* border-bottom: 1px solid ${ colors.fontColor }; */
        cursor: pointer;
        padding: 3px;

        p {
            font-size: 16px;
            font-weight: 300;

            &:hover { 
                animation: ${ fadeAnimation } .2s ease-in; 
                color: ${ colors.pointColor }; 
            }

            @media screen and (max-width: 768px) {
                font-size: 24px;  
                line-height: 1.3;
            };
        }
    }
`;

function ProjectPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    {/* ---------- 프로젝트 목록 클릭 이벤트 ---------- */}
    const showModal = (project) => {
        setSelectedProject(project);
    };

    {/* ---------- 프로젝트 목록 ---------- */}
    const projectMenu = [
        {
            name: 'READ',
            subTitle: '독서 일기 관리 어플리케이션',
            date: '2023.04 - 2023.07',
            part: '팀 프로젝트(2인) | 기획 95% / 개발 100% 참여 ',
            skill: 'HTML, CSS, React Native, Redux Toolkit, expo',
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
            name: '대시보드',
            subTitle: '프리랜서를 위한 웹 대시보드',
            date: '2023.06 - 2023.07',
            part: '개인 프로젝트 | 100% 참여',
            skill: 'HTML, CSS, JavaScript, React',
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
            name: '포트폴리오',
            subTitle: '2023년 포트폴리오 웹 사이트',
            date: '2023.07',
            part: '개인 프로젝트 | 100% 참여',
            skill: 'HTML, CSS, JavaScript, React',
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
            name: '프라이탁',
            subTitle: '프라이탁의 브랜드 스토리텔링 웹 사이트',
            date: '2018 졸업작품',
            part: '개인 프로젝트 | 100% 참여',
            skill: 'HTML, CSS, JavaScript, jQuery',
            describtion: `
                스위스의 업사이클링 브랜드인 프라이탁의 브랜드 스토리텔링을 목적으로 기획한 웹 사이트다. 
                CSS를 활용한 기본적인 애니메이션과 애니메이션 라이브러리인 GSAP를 사용하여 컨텐츠를 강조하는 것에 힘썼다. 
                menu 항목들에는 호버 애니메이션을 적용했고, story, process에서는 다양한 레이아웃과 스크롤 높이에 따라
                컨텐츠의 opacity 값을 변경하여 컨텐츠가 나타나는 것처럼 보이도록 했다. product에서는 마우스 클릭 이벤트를 활용하여
                각 제품 클릭 시 제품의 내용을 볼 수 있는 모달의 class 값을 변경하여 모달 보이기, 숨기기를 구현했다. 
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
            name: '참킷',
            subTitle: '커스터마이징 가능한 페스티벌 굿즈 키트 브랜딩 및 웹 쇼핑몰',
            date: '2018 졸업작품',
            part: '팀 프로젝트(5인) | 기획 90%, 개발 100% 참여',
            skill: 'HTML, CSS, JavaScript, jQuery',
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
        <MainWrap>
            <ProjectSection>
                {/* ---------- 페이지 타이틀 ---------- */}
                <SectionTitle>
                    <h1>프로젝트 / project</h1>
                </SectionTitle>

                <ProjectArticle>
                    <ProjectList>
                        {
                            projectMenu?.map((project, index) => {
                                const dataId = project.name;
                                const dataNo = index + 1;

                                return(
                                    <li key={ dataId } onClick={ () => showModal(project) }>
                                        <p>{ dataNo }. { project.name }</p>
                                    </li>
                                )
                            })
                        }
                    </ProjectList>
                </ProjectArticle>



                {/* ---------- 프로젝트 목록 ---------- */}
                {/* <ProjectArticle>
                    <ProjectList>
                        {
                            projectMenu?.map((project, index) => {
                                const dataId = project.name;
                                const dataNo = index + 1;

                                return(
                                    <li key={ dataId } onClick={ () => showModal(project) }>
                                        <p>{ dataNo }. { project.subTitle }</p>
                                    </li>
                                )
                            })
                        }
                    </ProjectList>
                </ProjectArticle> */}
                    {/* <GuideText>모든 소스 코드는 <a href="https://github.com/reverofyoung" target="_blank">https://github.com/reverofyoung</a>에서 보실 수 있어요!</GuideText> */}
            </ProjectSection>


            {/* ---------- 프로젝트 자세히 보기 모달 ---------- */}
            { selectedProject && (<ProjectModal onClose={() => setSelectedProject(null)} project={selectedProject} /> ) }

            {/* ---------- 홈 버튼 ---------- */}
            <HomeButtonComp />

            {/* ---------- 푸터 ---------- */}
            <FooterComp /> 
        </MainWrap>
    )

}

export default ProjectPage;