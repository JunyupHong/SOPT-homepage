import styled from '@emotion/styled';
const Styled = {
    Dimmend: styled.div`
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${(props: { color: string }) => props.color};
    `,
};
type Props = {
    color: string;
};
const ContentDimmed = ({ color }: Props) => {
    return (
        <>
            <Styled.Dimmend color={color} />
        </>
    );
};

export default ContentDimmed;
