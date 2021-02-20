import styled from '@emotion/styled';

const Styled = {
    Title: styled.h2`
        color: white;
        font-size: 90px;
        font-weight: 700;
        letter-spacing: 36px;
        text-indent: 36px;
        margin: 24px 0;
    `,
    Desc: styled.div`
        font-size: 30px;
        font-weight: 700;
        color: white;
    `,
};
const AboutMainContent = () => {
    return (
        <>
            <Styled.Desc>ABOUT</Styled.Desc>
            <Styled.Title>SOPT</Styled.Title>
        </>
    );
};

export default AboutMainContent;
