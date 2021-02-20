import styled from '@emotion/styled';

const Styled = {
    Footer: styled.footer`
        width: 100%;
        color: white;
    `,
    FooterContent: styled.div`
        display: flex;
        margin-bottom: 56px;
        .name {
            font-size: 28px;
            font-weight: 500;
            line-height: 1.4;
        }
    `,
    Empty: styled.div`
        flex: 1;
    `,
    Excutive: styled.div`
        margin-left: 140px;
        .info {
            width: 344px;
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            line-height: 1.8;
        }
    `,
};
const Footer = () => {
    return (
        <>
            <Styled.Footer>
                <Styled.FooterContent>
                    <div className='name'>
                        Shout <br /> Our <br /> Passion <br /> Together
                    </div>
                    <Styled.Empty></Styled.Empty>
                    <Styled.Excutive>
                        <div className='info'>
                            <span>회장 _ 이희원</span>
                            <span>chairman@sopt.org</span>
                        </div>
                        <div className='info'>
                            <span>부회장 _ 남궁선규</span>
                            <span>v_charman@sopt.org</span>
                        </div>
                        <div className='info'>
                            <span>총무 _ 김재민</span>
                            <span>manager@sopt.org</span>
                        </div>
                        <div className='info'>
                            <span>운영팀장 _ 황지은</span>
                            <span>master@sopt.org</span>
                        </div>
                        <div className='info'>
                            <span>미디어팀장 _ 한수아</span>
                            <span>media@sopt.org</span>
                        </div>
                    </Styled.Excutive>
                    <Styled.Excutive>
                        <div className='info'>
                            <span>기획파트장 _ 권상호</span>
                            <span>plan@sopt.org</span>
                        </div>
                        <div className='info'>
                            <span>디자인파트장 _ 류혜린</span>
                            <span>design@sopt.org</span>
                        </div>
                        <div className='info'>
                            <span>서버파트장 _ 남궁권</span>
                            <span>develop@sopt.org</span>
                        </div>
                        <div className='info'>
                            <span>Android파트장 _ 박진수</span>
                            <span>develop@sopt.org</span>
                        </div>
                        <div className='info'>
                            <span>iOS파트장 _ 송지훈</span>
                            <span>develop@sopt.org</span>
                        </div>
                        <div className='info'>
                            <span>웹파트장 _ 권소희</span>
                            <span>develop@sopt.org</span>
                        </div>
                    </Styled.Excutive>
                </Styled.FooterContent>
                <Styled.FooterContent style={{ alignItems: 'flex-end' }}>
                    <div>
                        <div style={{ fontSize: '16px', marginBottom: '12px' }}>회칙안내</div>
                        <div style={{ fontSize: '18px' }}>Copyright &copy; 2021. SOPT. All rights reserved.</div>
                    </div>
                    <Styled.Empty />
                    <div style={{ fontSize: '16px', fontWeight: 300 }}>
                        총괄 정수연, 이희원 | 기획 김정재 | 디자인 이세림, 류혜린 | 개발 홍준엽
                    </div>
                </Styled.FooterContent>
            </Styled.Footer>
        </>
    );
};

export default Footer;
