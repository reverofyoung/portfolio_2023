import { useState } from "react";
import styled, { keyframes } from "styled-components"

import colors from "../common/colors";
import FooterComp from "../component/FooterComp";
import ProjectModal from "../component/ProjectModal";
import HomeButtonComp from "../component/HomeButtonComp";

import freitag from "../image/freitag.png"
import chamkit from "../image/chamkit.png"

const fadeAnimation = keyframes`
  0% { opacity: 1; }
  50%{ opacity: 0; }
  100% { opacity: 1; }
`;

const MainWrap = styled.main`
    background-color: ${ colors.mainColor };
    color: ${ colors.fontColor };
    font-family: 'Noto Sans', 'Noto Sans KR';
    height: 100vh;
    padding: 20px;
    position: relative;
    width: 100vw;
`;

const ProjectSection = styled.section`
    display: flex;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 768px) { flex-direction: column; };
`;

const SectionTitle = styled.article`
    height: fit-content;
    width: 50%;

    h1 {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 50px;
        font-weight: 900;

        @media screen and (max-width: 768px) {
            font-size: 44px;
            margin-bottom: 60px;
        };
    }   
    @media screen and (max-width: 768px) { width: 100%; }; 
`;

const ProjectArticle = styled.article`
    height: fit-content;
    width: 50%;

    @media screen and (max-width: 768px) {
        flex: 1;
        margin-bottom: 100px;
        width: 100%;
    };
`;

const ProjectList = styled.ul`
    li {
        cursor: pointer;
        font-size: 50px;
        font-weight: 900;
        margin-bottom: 22px;

        &:hover { 
            animation: ${ fadeAnimation } .2s ease-in; 
            color: ${ colors.pointColor }; 
        }

        @media screen and (max-width: 768px) {
            font-size: 24px;  
            line-height: 1.3;
        };
    }
`;

const GuideText = styled.p`
font-size: 12px;
    font-weight: 100;
`;


function ProjectPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    {/* ---------- 프로젝트 목록 클릭 이벤트 ---------- */}
    const showModal = (project) => {
        setSelectedProject(project);
    };

      {/* ---------- 프로젝트 목록 클릭 ---------- */}
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
                약간의 강제성을 부여하면서 사용자가 독서에 대한 책임감을 느낄 수 있도록 하는 것이 목표이다.` ,
            function: [
                '카카오 API를 활용한 책 검색 기능',
                'Redux Toolkit을 활용한 독서 상태 및 독서 일기 관리',
                'Stack Navigator를 활용한 화면 전환',
                '메인에 현재 읽는 중인 도서 불러오기',
                '독후감(완독)을 작성하면 자동으로 독서 상태 완독으로 변경'
            ],
            src: 'https://reverofyoung.github.io/read-project/',
            image: freitag,
            alt: '독서 일기 기록 어플리케이션 메인 이미지'
        },
        {
            name: '대시보드',
            subTitle: '프리랜서를 위한 웹 대시보드',
            date: '2023.06 - (진행중)',
            part: '개인 프로젝트 | 100% 참여',
            skill: 'HTML, CSS, JavaScript, React',
            describtion: '카페에서 작업하는 프리랜서를 위한 웹 대시보드',
            function: [
                '카카오 API를 활용한 책 검색 기능',
                'Redux Toolkit을 활용한 독서 상태 및 독서 일기 관리',
                'Stack Navigator를 활용한 화면 전환',
                '메인에 현재 읽는 중인 도서 불러오기',
                '독후감(완독)을 작성하면 자동으로 독서 상태 완독으로 변경'
            ],
            src: 'https://reverofyoung.github.io/dashboard-project/',
            alt: '참킷 웹사이트 메인 이미지',
            image: chamkit,
        },
        {
            name: '포트폴리오',
            subTitle: '2023년 포트폴리오 웹 사이트',
            date: '2023.07',
            part: '개인 프로젝트 | 100% 참여',
            skill: 'HTML, CSS, JavaScript, React',
            describtion: '포트폴리오 웹 사이트이다. ',
            function: [
                'React Route, Link 컴포넌트를 활용한 화면 전환',
            ],
            src: 'https://reverofyoung.github.io/portfolio_2023/',
            image: chamkit,
            alt: '포트폴리오 웹사이트 메인 이미지',
        },
        {
            name: '프라이탁',
            subTitle: '프라이탁의 브랜드 스토리텔링 웹 사이트',
            date: '2018 졸업작품',
            part: '개인 프로젝트 | 100% 참여',
            skill: 'HTML, CSS, JavaScript, jQuery',
            describtion: '기여도 개발 100% / 기획 100%',
            function: [
                '메뉴 호버 애니메이션',
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
            describtion: 'HTML, CSS, Jquery를 사용한 ',
            function: [
                '쇼핑몰 레이아웃 구현',
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
                    <h1>프로젝트</h1>
                </SectionTitle>

                {/* ---------- 프로젝트 목록 ---------- */}
                <ProjectArticle>
                    <ProjectList>
                        {
                            projectMenu?.map((project) => {
                                const dataId = project.name;

                                return(
                                    <li key={ dataId } onClick={ () => showModal(project) }>{ project.subTitle }</li>
                                )
                            })
                        }
                    </ProjectList>
                    <GuideText>모든 소스 코드는 <a href="https://github.com/reverofyoung" target="_blank">https://github.com/reverofyoung</a> 이곳에서 보실 수 있어요!</GuideText>
                </ProjectArticle>
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