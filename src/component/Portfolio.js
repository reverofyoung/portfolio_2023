import styled from "styled-components"
import colors from "../common/colors";

const MainWrap = styled.div`
    /* background-color: ${colors.mainBg}; */
    display: flex;
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
    height: 100vh;
    width: 50%;

    @media screen and (max-width: 850px) {
        width: 100%;
    };
`;

const PersonalArea = styled.div`
    color: #B70404;
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
    z-index: 100;
`;

function Portfolio() {

    return(
        <MainWrap>
            <HorizontalDivide style={{ display:'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                        <p>신뢰할 수 있는 개발자가 되고자 합니다. </p>
                        <br />
                        <p>
                            학부생 시절 처음 HTMl, CSS를 javascript를 접하게 되었고, 졸업 후에는 약 2년간 타직종에서 근무 경험이 있습니다.
                            하지만 개발에 대한 아쉬움이 남아 퇴사 후 따로 준비를 하였고, IT 스타트업에서 근무를 시작하며 프론트엔드 개발자로 첫걸음을 내딛을 수 있었습니다. 
                            스마트공장 자동화 솔루션을 제공하는 기업에서 약 1년 2개월간 프론트엔드 개발을 담당하며 전반적인 마크업과 Javascript, React, REST Api 실무 경험을 쌓을 수 있었습니다.
                        </p>
                        <br />
                        <p>
                            처음엔 화면을 구성하는 것에 재미를 느꼈다면, 최근엔 서버에 요청하여 데이터를 받아오는 것, 데이터를 가공하는 과정이 몹시 재밌다고 느껴집니다. 
                            그래서 각종 Api를 활용한 개인 작업을 진행하였습니다. 
                        </p>
                    </div>
                </IntroduceArea>
            </HorizontalDivide>
            <HorizontalDivide>
                
            </HorizontalDivide>
        </MainWrap>
    )

}

export default Portfolio;