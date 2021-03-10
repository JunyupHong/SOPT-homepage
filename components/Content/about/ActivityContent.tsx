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
        margin: 120px 0 160px 0;
    `,
};
const ActivityContent = () => {
    return (
        <>
            <Styled.Content>
                <div>
                    <Styled.SubTitle>솝트에 빠지면 섭한 활동들,</Styled.SubTitle>
                    <Styled.Title>ACTIVITY</Styled.Title>
                </div>
            </Styled.Content>
            <Styled.CardWrapper>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' alt='activity-1' />
                    <Styled.CardTitle>SOPKATHON</Styled.CardTitle>
                    <Styled.CardDesc>
                        모든 파트가 무박 2일로
                        <br />
                        진행되는 단기간 해커톤
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' alt='activity-2' />
                    <Styled.CardTitle>FESTIVAL</Styled.CardTitle>
                    <Styled.CardDesc>
                        공식행사를 통한 홈파티, 게임 등
                        <br />
                        다양한 네트워킹을 진행
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' alt='activity-3' />
                    <Styled.CardTitle>MT</Styled.CardTitle>
                    <Styled.CardDesc>
                        1박2일간 진행하는 MT
                        <br />
                        다양한 파트원들과 친목을 다짐
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' alt='activity-4' />
                    <Styled.CardTitle>STUDY</Styled.CardTitle>
                    <Styled.CardDesc>
                        동아리 내에서 자발적으로 진행되는
                        <br />
                        스터디 겸 네트워킹의 시간
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' alt='activity-5' />
                    <Styled.CardTitle>SPECIAL SEMINAR</Styled.CardTitle>
                    <Styled.CardDesc>
                        다양한 직무의 현직자가
                        <br />
                        들려주는 특별한 멘토링
                    </Styled.CardDesc>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardImg src='/assets/images/aboutpage_activity_5.png' alt='activity-6' />
                    <Styled.CardTitle>SIDE PROJECT</Styled.CardTitle>
                    <Styled.CardDesc>
                        매 기수 10개 이상의 자발적
                        <br />
                        사이드 프로젝트 진행
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
