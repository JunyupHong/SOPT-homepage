import styled from '@emotion/styled';

const Styled = {
    Content: styled.div`
        color: white;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 160px;
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
};
const AppjamContent = () => {
    return (
        <>
            <Styled.Content>
                <div>
                    <Styled.SubTitle>하나의 서비스를 직접 구현하는,</Styled.SubTitle>
                    <Styled.Title>APP-JAM</Styled.Title>
                    <Styled.Desc>
                        2~3주의 SOPT 자체 장기 해커톤 APPPJAM.
                        <br />
                        기획/디자인/개발 파트가 모여 협업팀을 이루고
                        <br />
                        치열하게 함께 고민하여 하나의 서비스를 완성해냅니다.
                        <br />
                        최종적으로 대규모 오픈 컨퍼런스를 통해 선보입니다.
                    </Styled.Desc>
                </div>
                <img src='/assets/images/service_part.png' alt='appjam-service-part' />
            </Styled.Content>
            <img src='/assets/images/appjam_process.png' width='100%' alt='appjam-process' />
        </>
    );
};

export default AppjamContent;
