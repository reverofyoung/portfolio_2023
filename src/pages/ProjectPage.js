import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom";

import colors from "../common/colors";
import freitag from "../image/freitag.png"
import chamkit from "../image/chamkit.png"
import MenuComp from "../component/MenuComp";
import FooterComp from "../component/FooterComp";


const ProjectSection = styled.section`
    box-sizing: border-box;
    display: flex;
    font-family: 'Noto Sans', sans-serif;
    height: 100%;
    padding: 20px;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    };
`;

const ProjectArticle = styled.article`
    height: 100%;
    width: 50%;

    @media screen and (max-width: 768px) {
        margin-bottom: 100px;
        width: 100%;
    };
`;

const SectionTitle = styled.div`
    color: ${ colors.fontColor };
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
       font-size: 28px;
    };
    
`;

const ProjectList = styled.ul`
    li {
        cursor: pointer;
        font-size: 50px;
        font-weight: 900;
        margin-bottom: 15px;

        @media screen and (max-width: 768px) {
            font-size: 28px;  
        };
    }
`;

const ProjectWrap = styled.div`
    border-top: 1px solid ${ colors.fontColor };
    box-sizing: border-box;
    display: flex;
    /* justify-content: space-between; */
    padding: 40px 0px;
`;

const ProjectTitle = styled.div`
    min-width: 15%;
    width: 15%;
`;

const ProjectContents = styled.div`
    line-height: 1.5;
    min-width: 80%;
    width: 80%;
`;

const ProjectSrc = styled.div`
`;

const ProjectImage = styled.img`
`;

const MenuButton = styled.button`
    background-color: ${ colors.mainColor };
    color: white;
    height: 40px;
    position: absolute;
    right: 20px;
    top: 20px;
    width: 40px;
    z-index: 100;

    &:hover {
        background-color: red;
    }
`;


function ProjectPage() {
    const [menuState, setMenuState] = useState(false);
 

    {/* ---------- 메뉴 버튼 클릭 이벤트 ---------- */}
    const onClickMenuBtn = () => {
        setMenuState(!menuState);
    };


    const projectList = [
        {
            title: 'READ',
            subTitle: '독서 일기 관리 어플리케이션',
            image: freitag,
            describtion: '평소 독서 관련 앱을 사용하면서 느낀 아쉬운 점을 보완하고자 기획하게 되었다. ' ,
            function: `
                1. 카카오 책 검색 API 활용 -> 검색한 책 데이터 다음(Daum)에서 JSON으로 받아오기
                2. Redux toolkit을 사용한 도서 관련 데이터 상태 관리
                3. 메인에 현재 읽고 읽는 책 보여주기
                4. 읽기 전, 읽는중, 읽은 후 단계별 독서일기 작성 가능
            `,
            part: '기여도 개발 100% / 기획 50% ',
            src: 'https://reverofyoung.github.io/read-project/',
            alt: '독서 일기 기록 어플리케이션 메인 이미지'
        },
        {
            title: '대시보드',
            subTitle: '카페에서 작업하는 것을 즐기는 프리랜서를 위한 웹 대시보드',
            image: chamkit,
            describtion: '카페에서 작업하는 프리랜서를 위한 웹 대시보드',
            src: 'https://reverofyoung.github.io/dashboard-project/',
            alt: '참킷 웹사이트 메인 이미지'
        },
        {
            title: '프라이탁',
            subTitle: '스위스의 업사이클 브랜드인 프라이탁의 브랜드 스토리텔링 웹 사이트',
            image: freitag,
            describtion: '기여도 개발 100% / 기획 100%',
            src: 'https://reverofyoung.github.io/freitag-project/',
            alt: '프라이탁 웹사이트 메인 이미지'
        },
        {
            title: '참킷',
            subTitle: '커스터마이징 가능한 페스티벌 굿즈 키트 브랜딩 및 웹 쇼핑몰',
            image: chamkit,
            describtion: 'HTML, CSS, Jquery를 사용한 ',
            src: 'https://reverofyoung.github.io/chamkit-project/',
            alt: '참킷 웹사이트 메인 이미지'
        }
    ];

    const ProjectComp = () => {

        return(
            <ProjectArticle>
                <div style={{ display: 'flex', }}>
                    {/* <div style={{ marginRight: '30px' }}>
                        <div style={{ fontWeight: '600' }}>READ</div>
                        <div>Dashboard</div>
                        <div>2023 portfolio</div>
                        <div>FREITAG</div>
                    </div> */}
                    <div>
                        <div>
                            <div>READ</div>
                            <div>독서 일기 관리 어플리케이션</div>
                        </div>
                        <div>2023.04 - 2023.07</div>
                        <div>기획 80%, 개발 100% 참여</div>
                    </div>
                    <div>HTML, CSS, React Native, Redux Toolkit, expo</div>
                    <div>
                        <div>
                            <p>카카오 API를 활용한 책 검색 기능</p>
                            <p>Redux Toolkit을 활용한 독서 상태 및 독서 일기 관리</p>
                            <p>Stack Navigator를 활용한 화면 전환</p>
                            <p>메인에 현재 읽는 중인 도서 불러오기</p>
                            <p>독후감(완독)을 작성하면 자동으로 독서 상태 '완독'으로 변경</p>
                        </div>
                    </div>
                    <div>
                        <div>바로 가기</div>
                    </div>
                </div>
            </ProjectArticle>
        )
    };

    return(
        <ProjectSection>
            <ProjectArticle>
                <SectionTitle>프로젝트</SectionTitle>
            </ProjectArticle>

            <ProjectArticle>
                <ProjectList>
                    <li>1. 독서 일기 어플리케이션 'READ'</li>
                    <li>2. 프리랜서를 위한 웹 대시보드</li>
                    <li>3. 포트폴리오 2023</li>
                    <li>4. 프라이탁 브랜드 스토리텔링</li>
                </ProjectList>
            </ProjectArticle>
           

                {/* {
                    projectList.map((thisResult) => {
                        const dataId = thisResult.src;
                        return(
                            <ProjectWrap key={ dataId }>
                                <ProjectTitle>
                                    <div style={{ fontSize: '25px' }}>{ thisResult.title }</div>
                                    <div style={{ fontSize: '14px' }}>{ thisResult.subTitle }</div>
                                </ProjectTitle>
                                <ProjectContents>
                                    <div>{ thisResult.describtion }</div>
                                    <div>{ thisResult.function }</div>
                                </ProjectContents>
                                <ProjectSrc>
                                    <button onClick={()=>{window.open(thisResult.src)}}>바로 보기</button>
                                </ProjectSrc>
                                <ProjectImage src={ thisResult.image } alt={ thisResult.alt }></ProjectImage>
                            </ProjectWrap>
                        )
                    })
                } */}

        { menuState ? <MenuButton onClick={ onClickMenuBtn }>닫기</MenuButton> : <MenuButton onClick={ onClickMenuBtn }>열기</MenuButton> }
        { menuState && <MenuComp />  }   

        <FooterComp /> 
        </ProjectSection>
    )

}

export default ProjectPage;