import styled from '@emotion/styled';

const Styled = {
    Desc: styled.div`
        color: white;
        font-size: 24px;
        font-weight: 400;
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
    `,
    Title: styled.div`
        color: rgba(255, 255, 255, 0.85);
        font-size: 220px;
        font-weight: 700;
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
    `,
    Background: styled.div`
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: content-box linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    `,
};

const MainContent = () => {
    return (
        <>
            <Styled.Background />
            <Styled.Desc>
                {'전국 최대 대학생 IT 창업 동아리'.split('').map((letter, i) => (
                    <span key={'SOPT_DESC-' + i + letter}>{letter}</span>
                ))}
            </Styled.Desc>
            <Styled.Title style={{}}>
                {'SOPT'.split('').map((letter) => (
                    <span key={'SOPT_NAME-' + letter}>{letter}</span>
                ))}
            </Styled.Title>
        </>
    );
};
export default MainContent;
