import styled from '@emotion/styled';
import { ContentContainer } from '../components/content';
import { AboutMainContent } from '../components/content/about';

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
                <ContentContainer height={1085} imageURL={'/assets/images/aboutpage_background.png'}>
                    <div>test</div>
                </ContentContainer>
            </Styled.MainWrapper>
        </>
    );
};

export default About;
