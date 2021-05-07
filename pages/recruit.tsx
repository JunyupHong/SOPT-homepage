import styled from '@emotion/styled';
import { ContentContainer } from '../components/content';
import Footer from '../components/common/Footer';
import { RecruitMainContent, CoreValueContent, ProcedureContent } from '../components/content/recruit';

const Styled = {
    FooterArea: styled.div`
        padding: 276px 240px 94px 240px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
};

const recruit = () => {
    return (
        <>
            <ContentContainer height={1085} imageURL={'/assets/images/recruitpage/background.png'} align={'left'}>
                <RecruitMainContent></RecruitMainContent>
            </ContentContainer>
            <ContentContainer align={'left'}>
                <CoreValueContent></CoreValueContent>
            </ContentContainer>
            <ContentContainer align={'left'}>
                <ProcedureContent></ProcedureContent>
            </ContentContainer>

            <Styled.FooterArea>
                <Footer></Footer>
            </Styled.FooterArea>
        </>
    );
};

export default recruit;
