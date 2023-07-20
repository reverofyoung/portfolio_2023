import { useState } from "react";
import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom";
import colors from "../common/colors";
import freitag from "../image/freitag.png"
import chamkit from "../image/chamkit.png"

const MainWrap = styled.div`
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

function ProjectPage() {
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
            프로젝트 페이지
            <Link to="/skillStack"><div>클릭</div></Link>
            {/* <ScrollArea>
                <ContentsTitle>프로젝트</ContentsTitle>
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
            </ScrollArea> */}
        </MainWrap>
    )

}

export default ProjectPage;