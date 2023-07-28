import { useState } from "react";
import { styled } from "styled-components";

import colors from "../common/colors";
import FooterComp from "../component/FooterComp";
import HomeButtonComp from "../component/HomeButtonComp";

const AccountSection = styled.section`
    font-family: 'Noto Sans KR', sans-serif;
    height: 100vh;
    padding: 20px;
    width: 100%;
`;

const SectionTitle = styled.article`
    color: ${ colors.fontColor };
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 50px;

    p { margin-bottom: 10px; }
`;

const ContentSection = styled.section`
    display: flex;

    article {
        width: 33.3%;
        @media screen and (max-width: 768px) { width: 100%; };
    }
    @media screen and (max-width: 768px) { flex-direction: column; };
`;

const MyArticle = styled.article`
    font-weight: 100;
`;

const TwoArticle = styled.article`

`;

const Accountarticle = styled.article`
    font-family: 'Noto Sans', sans-serif;
    font-size: 18px;
    font-weight: 100;

    div { margin-bottom: 5px; } 

    a { 
        &:active {
            color: red;
        }
    }
    
    @media screen and (max-width: 768px) { width: 100% };
`;

const SkillCon = styled.div`
    display: flex;
    margin-bottom: 20px;

    p{
        &:nth-child(1) { min-width: 150px; margin-right: 30px; }

    }
`;

function AccountPage() {
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
            describtion: '배열, 객체를 다룰 수 있습니다. 다양한 이벤트를 처리할 수 있습니다. 조건문을 활용할 수 있습니다. 라이브러리를 활용하여 개발할 수 있습니다.'
        },
        {
            name: 'React',
            describtion: '재사용성을 고려하여 컴포넌트를 생성할 수 있습니다. useState를 활용하여 컴포넌트 상태를 관리할 수 있습니다. useEffect를 활용하여 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있습니다. styled-components를 활용하여 컴포넌트를 스타일링 할 수 있습니다.'
        },
        {
            name: 'React Native',
            describtion: '기본 개념과 사용법을 알고 있으며 react-navigation 등의 라이브러리를 활용하여 개발한 경험이 있습니다. StyelSheet를 활용하여 컴포넌트를 스타일링 할 수 있습니다.'
        },
        {
            name: 'Redux/ Redux Toolkit',
            describtion: '기본 개념과 사용법을 알고 있으며 여러 개의 컴포넌트 상태를 관리할 수 있습니다. '
        },

    ];

    return(
        <AccountSection>
            <SectionTitle>
                <p>이윤영</p>
                <p style={{ fontFamily: 'Noto Sans TC' }}>李胤永</p>
            </SectionTitle>

            <ContentSection>
                <MyArticle>
                    {
                        skillList.map((skill) => {
                            return(
                                <SkillCon key={ skill.name}>
                                    <p>{ skill.name }</p>
                                    <p>{ skill.describtion }</p>
                                </SkillCon>
                            )
                        })
                    }
                </MyArticle>
                <TwoArticle>
                    ddd
                </TwoArticle>
                <Accountarticle>
                    <div>
                        <a href="https://github.com/reverofyoung" target="_blank">https://github.com/reverofyoung</a>
                    </div>
                    <div>
                        <a href="https://velog.io/@reverofyoung" target="_blank">https://velog.io/@reverofyoung</a>
                    </div>
                    <div>
                        <a href="mailto:reverofyoung@gmail.com">reverofyoung@gmail.com</a>
                    </div>
                    {/* <div>
                        <p>진행한 프로젝트의 코드는 <a href="https://github.com/reverofyoung" target="_blank">Github</a>에서 볼 수 있어요.</p>
                        <p>개인적으로 공부하는 내용은 <a href="https://velog.io/@reverofyoung" target="_blank">velog</a>에 조금씩 기록하고 있습니다. </p>
                        <p>아차, 메일은 <a href="mailto:reverofyoung@gmail.com">reverofyoung@gmail.com</a> 이쪽입니다!</p>
                    </div> */}
                </Accountarticle>
            </ContentSection>

            <HomeButtonComp />
            <FooterComp />
        </AccountSection>
    )
};

export default AccountPage;