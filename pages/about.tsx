import styled from '@emotion/styled';
import { ContentContainer } from '../components/content';
import { AboutMainContent, ActivityContent, AppjamContent, SeminarContent } from '../components/content/about';
import Footer from '../components/common/Footer';

const Styled = {
    MainWrapper: styled.div`
        display: flex;
        flex-direction: column;
    `,
};
const About = () => {
    return (
        <>
            <Styled.MainWrapper>
                <ContentContainer height={1085} imageURL={'/assets/images/aboutpage/background_1.png'}>
                    <AboutMainContent></AboutMainContent>
                </ContentContainer>
                <ContentContainer height={1085} imageURL={'/assets/images/aboutpage/background_2.png'}>
                    <AppjamContent></AppjamContent>
                </ContentContainer>
                <ContentContainer height={1085} imageURL={'/assets/images/aboutpage/background_3.png'}>
                    <SeminarContent></SeminarContent>
                </ContentContainer>
                <ContentContainer height={2393} imageURL={'/assets/images/aboutpage/background_4.png'}>
                    <>
                        <ActivityContent></ActivityContent>
                        <div style={{ width: '100%' }}>
                            <Footer />
                        </div>
                    </>
                </ContentContainer>
            </Styled.MainWrapper>
        </>
    );
};

export default About;
