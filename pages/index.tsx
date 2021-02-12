import styled from '@emotion/styled';
import ContentContainer from '../components/Content/ContentContainer';
import {
    ContentDimmed,
    MainContent,
    ServiceContent,
    ActivitiesContent,
    PartContent,
    ResultContent,
} from '../components/Content';
const Styled = {
    MainWrapper: styled.div`
        display: flex;
        flex-direction: column;
    `,
};

const Home = () => {
    return (
        <div>
            <Styled.MainWrapper>
                <ContentContainer height={1085} imageURL={'/assets/images/mainpage_background.png'}>
                    <>
                        <ContentDimmed color={'rgba(0,0,0,0.5)'} />
                        <MainContent />
                    </>
                </ContentContainer>
                <ContentContainer height={1085}>
                    <ServiceContent />
                </ContentContainer>
                <ContentContainer height={1085} imageURL={'/assets/images/mainpage_background.png'}>
                    <>
                        <ContentDimmed color={'rgba(255,255,255,0.9)'} />
                        <ActivitiesContent />
                    </>
                </ContentContainer>
                <ContentContainer height={1085} imageURL={'/assets/images/mainpage_background.png'}>
                    <PartContent />
                </ContentContainer>
                <ContentContainer>
                    <ResultContent />
                </ContentContainer>
            </Styled.MainWrapper>
        </div>
    );
};

export default Home;
