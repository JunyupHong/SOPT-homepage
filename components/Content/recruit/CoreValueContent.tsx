import styled from '@emotion/styled';

const Styled = {
    Wrapper: styled.div`
        padding: 140px 0;
    `,
    Desc: styled.p`
        font-size: 30px;
        font-weight: 500;
    `,
    Title: styled.h3`
        font-size: 50px;
        font-weight: 600;
        margin: 12px 0 64px 0;
    `,
    ContentArea: styled.section`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 100px 80px;
    `,
    Content: styled.article``,
    ContentTitle: styled.h4`
        font-size: 44px;
        font-weight: 400;
        color: #4260ff;
        border-bottom: solid 1px;
        padding-bottom: 12px;
    `,
    ContentDesc: styled.p`
        font-size: 18px;
        font-weight: 400;
        margin: 32px 0;
        line-height: 1.6;
    `,
};

const CoreValueContent = () => {
    return (
        <Styled.Wrapper>
            <Styled.Desc>우리의 핵심가치</Styled.Desc>
            <Styled.Title>Core Value</Styled.Title>
            <Styled.ContentArea>
                <Styled.Content>
                    <Styled.ContentTitle>1</Styled.ContentTitle>
                    <Styled.ContentDesc>
                        IT 분야에 대해 배우고
                        <br />
                        싶은 열정이 있습니다.
                    </Styled.ContentDesc>
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>2</Styled.ContentTitle>
                    <Styled.ContentDesc>
                        생각만하는 것이 아니라
                        <br />
                        행동으로 옮깁니다.
                    </Styled.ContentDesc>
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>3</Styled.ContentTitle>
                    <Styled.ContentDesc>
                        한 번 시작한 일은 의지를
                        <br />
                        가지고 끝까지 노력합니다.
                    </Styled.ContentDesc>
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>4</Styled.ContentTitle>
                    <Styled.ContentDesc>
                        함께 일할 때 타인을 믿고,
                        <br />
                        함께 가려는 마음이 있습니다.
                    </Styled.ContentDesc>
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>5</Styled.ContentTitle>
                    <Styled.ContentDesc>
                        다른 사람의 마음을 이해하고
                        <br />
                        먼저 따뜻한 마음을 나눕니다.
                    </Styled.ContentDesc>
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>6</Styled.ContentTitle>
                    <Styled.ContentDesc>
                        열정적으로 호기심을
                        <br />
                        가지고 도전합니다.
                    </Styled.ContentDesc>
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>7</Styled.ContentTitle>
                    <Styled.ContentDesc>
                        지금의 나보다 더 성장하고자하는
                        <br />
                        열망이 있습니다.
                    </Styled.ContentDesc>
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>8</Styled.ContentTitle>
                    <Styled.ContentDesc>
                        자신이 맡은바 일에 주인의식을
                        <br />
                        가지고 최선을 다합니다.
                    </Styled.ContentDesc>
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>9</Styled.ContentTitle>
                    <Styled.ContentDesc>
                        배운 것을 바탕으로 적응하고
                        <br />
                        실패를 통해 배웁니다.
                    </Styled.ContentDesc>
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>10</Styled.ContentTitle>
                    <Styled.ContentDesc>
                        핵심에 다가가기 위해
                        <br />
                        방향을 효과적으로 바꿉니다.
                    </Styled.ContentDesc>
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>11</Styled.ContentTitle>
                    <Styled.ContentDesc>
                        자신감을 가지고 도전하는데
                        <br />
                        두려워하지 않습니다.
                    </Styled.ContentDesc>
                </Styled.Content>
            </Styled.ContentArea>
        </Styled.Wrapper>
    );
};

export default CoreValueContent;
