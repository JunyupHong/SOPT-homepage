import styled from '@emotion/styled';

const Styled = {
    Content: styled.div`
        color: white;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 100px;
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
    CardWrapper: styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 344px);
        row-gap: 100px;
        justify-content: space-between;
    `,
    Card: styled.div`
        width: 100%;
        color: white;
    `,
    CardTitle: styled.h4`
        font-size: 30px;
        font-weight: 600;
        margin: 64px 0 30px 0;
    `,
    CardDesc: styled.p`
        font-size: 19px;
        font-weight: 300;
        line-height: 30px;
    `,
    CardImg: styled.img`
        width: 100%;
    `,

    Desc: styled.p`
        font-size: 19px;
        font-weight: 300;
        line-height: 36px;
        color: white;
        text-align: center;
        margin: 120px 0;
    `,
};
const ActivityContent = () => {
    return (
        <>
            <Styled.Content>
                <div>
                    <Styled.SubTitle>솝트에 빠지면 섭합 활동들,</Styled.SubTitle>
                    <Styled.Title>ACTIVITY</Styled.Title>
                </div>
            </Styled.Content>
            <Styled.CardWrapper>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' />
                    <Styled.CardTitle>SOPKATHON</Styled.CardTitle>
                    <Styled.CardDesc>
                        모든 파트가 무박 2일로
                        <br />
                        진행되는 단기간 해커톤
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' />
                    <Styled.CardTitle>SOPKATHON</Styled.CardTitle>
                    <Styled.CardDesc>
                        모든 파트가 무박 2일로
                        <br />
                        진행되는 단기간 해커톤
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' />
                    <Styled.CardTitle>SOPKATHON</Styled.CardTitle>
                    <Styled.CardDesc>
                        모든 파트가 무박 2일로
                        <br />
                        진행되는 단기간 해커톤
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' />
                    <Styled.CardTitle>SOPKATHON</Styled.CardTitle>
                    <Styled.CardDesc>
                        모든 파트가 무박 2일로
                        <br />
                        진행되는 단기간 해커톤
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' />
                    <Styled.CardTitle>SOPKATHON</Styled.CardTitle>
                    <Styled.CardDesc>
                        모든 파트가 무박 2일로
                        <br />
                        진행되는 단기간 해커톤
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' />
                    <Styled.CardTitle>SOPKATHON</Styled.CardTitle>
                    <Styled.CardDesc>
                        모든 파트가 무박 2일로
                        <br />
                        진행되는 단기간 해커톤
                    </Styled.CardDesc>
                </Styled.Card>
            </Styled.CardWrapper>
            <Styled.Desc>
                정규 세션 이외에도 솝트원들이 자발적으로 참여하는
                <br />
                번개, 소규모 프로젝트, 스터디 등 다양한 네트워킹을 제공합니다.
                <br />
                서로 다른 분야의 사람들이 모여 다양한 인적 네트워크를 형성하고
                <br />
                각자의 가치를 공유하며 하나되는 SOPT를 경험할 수 있습니다.
            </Styled.Desc>
        </>
    );
};
export default ActivityContent;
