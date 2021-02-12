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
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 0 240px;
    `,
};

type Props = {
    children: ReactElement;
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
