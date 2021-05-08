import styled from '@emotion/styled';

const Styled = {
    Wrapper: styled.div`
        padding-top: 240px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    `,
    Title: styled.h2`
        font-weight: 700;
        font-size: 70px;
    `,
    Desc: styled.p`
        margin: 50px 0 90px 0;
        font-size: 24px;
        line-height: 1.8;
    `,
    Button: styled.button`
        margin-right: 80px;
        font-size: 20px;
        font-weight: 600;
        padding: 16px 80px;
        border-radius: 28px;
        box-shadow: 0 0 10px 0.2px #999;

        ${(props: { apply?: boolean }) => (props.apply ? 'background: #4260ff; color: #ddd; ' : 'color: #444;')};
        :hover {
            cursor: pointer;
            background: #2045fe;
            color: #ddd;
        }
        &:last-child {
            margin-right: 0px;
        }
    `,
};

const RecruitMainContent = () => {
    return (
        <Styled.Wrapper>
            <Styled.Title>Recruit</Styled.Title>
            <Styled.Desc>
                IT창업에 관심있는
                <br />
                열정있는 SOPT 회원을
                <br />
                모집합니다.
            </Styled.Desc>
            <div>
                <Styled.Button apply={true}>지원하기</Styled.Button>
                <Styled.Button>지원확인</Styled.Button>
                <Styled.Button>지원결과</Styled.Button>
            </div>
        </Styled.Wrapper>
    );
};

export default RecruitMainContent;
