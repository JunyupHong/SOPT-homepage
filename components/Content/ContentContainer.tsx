import styled from '@emotion/styled';
import { ReactElement } from 'react';

const Styled = {
    ContentWrapper: styled.section`
        position: relative;
        height: ${(props: { height?: number; image?: string }) => (props.height ? props.height + 'px' : 'inherit')};
        ${(props: { image?: string }) =>
            props.image ? `background: center / cover no-repeat url("${props.image}")` : ''};
    `,
    Content: styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 0 240px;
        ${(props: { align?: 'left' }) =>
            props.align === 'left'
                ? ''
                : `
        align-items: center;
        justify-content: center;`}
    `,
};

type Props = {
    children: ReactElement;
    height?: number;
    imageURL?: string;
    align?: 'left';
};

const ContentContainer = ({ children, height, imageURL, align }: Props) => {
    return (
        <>
            <Styled.ContentWrapper height={height} image={imageURL}>
                <Styled.Content align={align}>{children}</Styled.Content>
            </Styled.ContentWrapper>
        </>
    );
};
export default ContentContainer;
