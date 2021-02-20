import styled from '@emotion/styled';

const Styled = {
    Content: styled.div`
        color: white;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 80px 0;
    `,

    Title: styled.h3`
        font-size: 70px;
        font-weight: 600;
        margin-bottom: 40px;
    `,
    SubTitle: styled.div`
        font-size: 26px;
        font-weight: 300;
    `,
    Desc: styled.p`
        font-size: 19px;
        font-weight: 300;
        line-height: 36px;
    `,
    Card: styled.div`
        width: 360px;
        background: rgba(255, 255, 255, 0.25);
        padding: 80px 40px;
    `,
    CardTitle: styled.div`
        font-size: 33px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 51px;
    `,
    CardDesc: styled.p`
        font-size: 18px;
        font-weight: 300;
        text-align: center;
        line-height: 30px;
    `,
};
const SeminarContent = () => {
    return (
        <>
            <Styled.Content>
                <div>
                    <Styled.SubTitle>서로의 지식을 공유하는,</Styled.SubTitle>
                    <Styled.Title>SEMINAR</Styled.Title>
                    <Styled.Desc>
                        매주 토요일에 이루어지는 정기 세미나를 통해 각 파트의 전문적인 지식과 실력을 쌓습니다.
                        <br />
                        파트장의 강연을 통해 전문적인 지식을 배우고 실습을 통해 이를 활용합니다.
                        <br />
                        단순히 지식을 전달하는 형식에서 벗어나 주체적으로 학습하고 서로의 지식을 함께 공유합니다.
                    </Styled.Desc>
                </div>
            </Styled.Content>
            <Styled.Content>
                <Styled.Card>
                    <Styled.CardTitle>PLAN</Styled.CardTitle>
                    <Styled.CardDesc>
                        고객 중심 사고를 바탕으로
                        <br />
                        비즈니스 모델, 서비스 설계 등을 배워
                        <br />
                        실제 시장에 출시합니다
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardTitle>DESIGN</Styled.CardTitle>
                    <Styled.CardDesc>
                        UX/UI에 대해 학습하며
                        <br />
                        실제 협업을 통해
                        <br />
                        시각적인 디자인을 구현합니다
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardTitle>DEVELOP</Styled.CardTitle>
                    <Styled.CardDesc>
                        Android, iOS, Web, Server 파트로
                        <br />
                        나뉘며 웹/앱 서비스 개발을 위한
                        <br />
                        이론을 배우고 실습합니다
                    </Styled.CardDesc>
                </Styled.Card>
            </Styled.Content>
        </>
    );
};

export default SeminarContent;
