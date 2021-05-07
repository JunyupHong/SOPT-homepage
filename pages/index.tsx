import styled from '@emotion/styled';
import { ContentContainer, ContentDimmed } from '../components/content';
import {
    HomeMainContent,
    ServiceContent,
    ActivitiesContent,
    PartContent,
    ResultContent,
} from '../components/content/home';
import Footer from '../components/common/Footer';

const Styled = {
    MainWrapper: styled.div`
        display: flex;
        flex-direction: column;
    `,
    FooterArea: styled.div`
        padding: 276px 240px 94px 240px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
};

const Home = () => {
    return (
        <div>
            <Styled.MainWrapper>
                <ContentContainer height={1085} imageURL={'/assets/images/mainpage/background.png'}>
                    <>
                        <ContentDimmed color={'rgba(0,0,0,0.5)'} />
                        <HomeMainContent />
                    </>
                </ContentContainer>
                <ContentContainer height={1085}>
                    <ServiceContent />
                </ContentContainer>
                <ContentContainer height={1085} imageURL={'/assets/images/mainpage/background.png'}>
                    <>
                        <ContentDimmed color={'rgba(255,255,255,0.9)'} />
                        <ActivitiesContent />
                    </>
                </ContentContainer>
                <ContentContainer height={1085} imageURL={'/assets/images/mainpage/background.png'}>
                    <PartContent />
                </ContentContainer>
                <ContentContainer>
                    <ResultContent />
                </ContentContainer>
            </Styled.MainWrapper>
            <Styled.FooterArea>
                <Footer />
            </Styled.FooterArea>
        </div>
    );
};

export default Home;
