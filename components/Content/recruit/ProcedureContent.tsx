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
    ContentArea: styled.div`
        width: 100%;
        border-radius: 8px;
        background: #f7f7f7;
        padding: 62px 90px;
        display: flex;
        .content {
            flex: 1;
            color: #343434;
            .line {
                border: solid 1px #444;
                width: 24px;
            }
            .title {
                margin: 32px 0 12px 0;
                font-weight: 700;
            }
            .desc {
                font-weight: 400;
                line-height: 2;
            }

            &.left {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
    `,
};

const ProcedureContent = () => {
    return (
        <Styled.Wrapper>
            <Styled.Desc>지원 절차</Styled.Desc>
            <Styled.Title>Procedure</Styled.Title>

            <Styled.ContentArea>
                <div className='content left'>
                    <div className='line'></div>
                    <div className='title'>모집 부문</div>
                    <div className='desc'>기획 / 디자인 / 서버 / 안드로이드 / iOS / 웹</div>
                    <div className='title'>활동 기간</div>
                    <div className='desc'>매 기수 시작일로 부터 약 5개월</div>
                </div>
                <div className='content'>
                    <div className='line'></div>
                    <div className='title'>지원 자격</div>
                    <div className='desc'>
                        ✔️ &nbsp;&nbsp;현재 대학교에 재학중이거나, 휴학중인 학생 (대학원생 및 제적자 지원 불가)
                    </div>
                    <div className='desc'>✔️ &nbsp;&nbsp;매주 토요일에 진행하는 세미나에 참석이 가능한 자</div>
                    <div className='desc'>✔️ &nbsp;&nbsp;세미나 및 각종 행사에 적극적으로 참여할 수 있는 자</div>
                    <div className='desc'>✔️ &nbsp;&nbsp;iOS파트에 한하여 맥북이 있는 자</div>
                </div>
            </Styled.ContentArea>
        </Styled.Wrapper>
    );
};

export default ProcedureContent;
