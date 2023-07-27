import { styled } from "styled-components";
import colors from "../../common/colors";

const ModalWrap = styled.div`
    align-items: center;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

const MainWrap = styled.main`
    background-color: ${ colors.mainColor };
    box-sizing: border-box;
    display: flex;
    font-family: 'Noto Sans KR', sans-serif;
    flex-direction: column;
    height: 90%;
    padding: 20px;
    width: 95%;
`;

const ProjectSection = styled.section`
    box-sizing: border-box;
    width: 100%;
`;

const ProjectArticle = styled.article`
    display: flex;
    justify-content: space-between;

    p {
        font-family: 'Noto Sans KR', 'Noto Sans ';
        font-size: 14px;
        font-weight: 300;
        line-height: 1.4;
        /* margin-bottom: 10px; */
    };

    button {
        cursor: pointer;

        &:hover {
            color: lightgray;
        }
    };
`;

const ArticleColumn = styled.div`

`;

function Project01() {

    return(
        <ModalWrap>
            <MainWrap>
                <ProjectSection style={{ height: '30%' }}>
                    <ProjectArticle>
                        <ArticleColumn style={{ width: '25%' }}>
                            <p style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: '900', fontSize: '28px' }}>READ</p>
                            <p style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: '100', fontSize: '16px' }}>: 독서 일기 관리 어플리케이션</p>
                        </ArticleColumn>

                        <ArticleColumn  style={{ width: '14%' }}>
                            {/* <p>독서 일기 관리 어플리케이션</p> */}
                            <div style={{ marginBottom: '20px' }}>
                                <p>2023.04 - 2023.07</p>
                                <p>기획 80%, 개발 100% 참여</p>
                            </div>
                            <div>
                                <p>HTML, CSS, React Native, Redux Toolkit, expo</p>
                            </div>
                        </ArticleColumn>

                        <ArticleColumn  style={{ width: '24%' }}>
                            <p>
                                평소 독서 관련 앱을 사용하면서 독후감 뿐만 아니라 읽기 전(독전감), 읽는 중(독중감)에도 작성할 수 있는 
                                독서 일기 형태면 좋겠다는 생각을 시작으로 기획하게 되었다.
                            </p>
                            <br />
                            <p>
                                단계별로 '독전감'을 반드시 작성해야만 '독중감', 그 후에 '독후감'으로 넘어갈 수 있도록 하여
                                약간의 강제성을 부여하면서 사용자가 독서에 대한 책임감을 느낄 수 있도록 하는 것이 목표이다.
                            </p>
                        </ArticleColumn>

                        <ArticleColumn  style={{ width: '18%' }}>
                            <p>카카오 API를 활용한 책 검색 기능</p>
                            <p>Redux Toolkit을 활용한 독서 상태 및 독서 일기 관리</p>
                            <p>Stack Navigator를 활용한 화면 전환</p>
                            <p>메인에 현재 읽는 중인 도서 불러오기</p>
                            <p>독후감(완독)을 작성하면 자동으로 독서 상태 '완독'으로 변경</p>
                        </ArticleColumn>

                        <ArticleColumn>
                            <button onClick={()=>{window.open('https://reverofyoung.github.io/read-project/')}}>바로 보기</button>
                        </ArticleColumn>
                    </ProjectArticle>
                </ProjectSection>

                <ProjectSection style={{ flex: '1', width: '100%', backgroundColor: 'lightgray' }}>
                    
                </ProjectSection>
        </MainWrap>
        </ModalWrap>
    )
};

export default Project01;