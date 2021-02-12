import styled from '@emotion/styled';

const Styled = {
    ContentWrapper: styled.section`
        height: ${(props: { height?: number; image?: string }) => (props.height ? props.height + 'px' : 'inherit')};
        padding: ${(props: { image?: string }) => (props.image ? 0 : '100px 0')};
        ${(props: { image?: string }) =>
            props.image ? `background: center / cover no-repeat url("${props.image}")` : ''};
    `,
    Content: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 0 240px;
    `,
};

type Props = {
    children: JSX.Element;
    height?: number;
    imageURL?: string;
};

const ContentContainer = ({ children, height, imageURL }: Props) => {
    return (
        <>
            <Styled.ContentWrapper height={height} image={imageURL}>
                <Styled.Content>{children}</Styled.Content>
            </Styled.ContentWrapper>
        </>
    );
};
export default ContentContainer;
