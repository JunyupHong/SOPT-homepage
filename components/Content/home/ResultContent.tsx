import styled from '@emotion/styled';
const Styled = {
    Result: styled.div`
        margin-top: 200px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 40px;
        line-height: 2;
    `,
    Bold: styled.span`
        font-size: 88px;
        font-weight: 700;
    `,
    Button: styled.button`
        box-shadow: 0 0 6px 3px #ddd;
        font-size: 28px;
        font-weight: 400;
        color: #eee;
        padding: 26px 100px;
        border-radius: 60px;
        margin: 122px 0 164px 0;
        background: #4260ff;
        :hover {
            cursor: pointer;
            background: #2045fe;
        }
    `,
};
const ResultContent = () => {
    return (
        <>
            <Styled.Result>
                <div>
                    그동안 <Styled.Bold>SOPT</Styled.Bold> 에서는
                </div>
                <div>
                    <div>
                        <Styled.Bold>110</Styled.Bold> 개의 대학교에서
                    </div>
                    <div>
                        <Styled.Bold>2400</Styled.Bold> 명의 수료자들이
                    </div>
                    <div>
                        <Styled.Bold>210</Styled.Bold> 개의 서비스를 만들어 냈습니다.
                    </div>
                </div>
            </Styled.Result>
            <Styled.Button>SOPT 지원하러가기</Styled.Button>
        </>
    );
};

export default ResultContent;
