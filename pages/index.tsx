import Header from '../components/common/Header';
import styled from '@emotion/styled';

const Styled = {
    MainWrapper: styled.div`
        display: flex;
        flex-direction: column;
        background: black;
        width: 100vw;
        height: 200vh;
    `,
    MainSection: styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: '/assets/images/mainpage_background.png';
        width: 100vw;
    `,
    MainBackgroundImg: styled.img`
        width: 100vw;
    `,
};

const Home = () => {
    return (
        <>
            <Styled.MainWrapper></Styled.MainWrapper>
            <Styled.MainSection></Styled.MainSection>
        </>
    );
};

export default Home;
