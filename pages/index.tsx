import styled from '@emotion/styled';
import ContentContainer from '../components/common/ContentContainer';

const Styled = {
    MainWrapper: styled.div`
        display: flex;
        flex-direction: column;
    `,
    MainSection: styled.section`
        position: relative;
    `,
    BackgroundImage: styled.img`
        width: 100vw;
    `,
    SectionContent: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        ${(props: { withImage?: boolean }) =>
            props.withImage
                ? ` position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    `
                : ''};
    `,
    Button: styled.button`
        padding: 26px 104px;
        border: none;
        outline: none;

        border-radius: 40px;
        font-size: 28px;
        background: #fff;
        box-shadow: 0px 0px 4px 4px #eee;
    `,
};

const Home = () => {
    const section1 = (
        <>
            <div style={{ color: 'white', fontSize: '24px', fontWeight: 100, width: '500px' }}>
                전국 최대 대학생 IT 창업 동아리
            </div>
            <div style={{ color: 'white', fontSize: '180px', fontWeight: 800 }}>SOPT</div>
        </>
    );
    const section2 = (
        <>
            <p style={{ textAlign: 'center', fontSize: '44px', fontWeight: 600 }}>
                Shout Our <br />
                Passion Together
            </p>
            <div>아이콘콘</div>
            <p style={{ textAlign: 'center', fontSize: '23px', fontWeight: 400, lineHeight: 1.6 }}>
                SOPT는 다양한 분야의 사람들이 모여 하나의 서비스를 만들기 위해 화합하는 동아리입니다. <br />
                2008년 처음 설립된 이후 수많은 서비스를 시장에 출시하였으며 <br />
                다양한 기업과 연계를 통한 공모전, 리크루팅, 프로젝트를 수행하고 있습니다. <br />
                서비스를 만들기 위해 필요한 체계적인 교육과 더불어 <br />
                스터디, 네트워킹 행사 등 다양한 활동을 추구합니다. <br />
                다양한 분야의 사람들이 모여 화합을 통해 변화하고 성장하는 가치를 추구합니다.
            </p>
            <Styled.Button>더 많은 서비스 보러가기</Styled.Button>
        </>
    );
    return (
        <div>
            <Styled.MainWrapper>
                <ContentContainer imageURL={'/assets/images/mainpage_background.png'}>{section1}</ContentContainer>
                <ContentContainer>{section2}</ContentContainer>
            </Styled.MainWrapper>
        </div>
    );
};

export default Home;
