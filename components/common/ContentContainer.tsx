import styled from '@emotion/styled';

const Styled = {
    MainSection: styled.section`
        position: relative;
        padding: ${(props: { withImage?: boolean }) => (props.withImage ? 0 : '100px 0')};
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
};

type Props = {
    children: JSX.Element;
    imageURL?: string;
};

const ContentContainer = ({ children, imageURL }: Props) => {
    return (
        <>
            <Styled.MainSection withImage={!!imageURL}>
                {imageURL ? <Styled.BackgroundImage src='/assets/images/mainpage_background.png' /> : ''}
                <Styled.SectionContent withImage={!!imageURL}>{children}</Styled.SectionContent>
            </Styled.MainSection>
        </>
    );
};
export default ContentContainer;
