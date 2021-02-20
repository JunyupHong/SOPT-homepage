import styled from '@emotion/styled';

const Styled = {
    TitleArea: styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        color: white;
    `,
    Title: styled.h2``,
    Desc: styled.p`
        font-size: 20px;
        font-weight: 300;
        line-height: 1.4;
    `,
    PartArea: styled.div`
        margin-top: 80px;
        display: flex;
    `,
    Part: styled.div`
        background: rgba(255, 255, 255, 0.25);
        width: 280px;
        height: 280px;
        border-radius: 50%;
        flex: 1;
        margin: 0 -20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #eee;
        &:nth-child(2n) {
            margin-top: 100px;
        }
    `,
    PartName: styled.h3`
        font-size: 20px;
    `,
    PartDesc: styled.p`
        line-height: 1.6;
        font-weight: 300;
        text-align: center;
    `,
};
const PartContent = () => {
    return (
        <>
            <Styled.TitleArea>
                <Styled.Title>Part</Styled.Title>
                <Styled.Desc>
                    하나의 서비스를 구현하기 위해 다양한 파트가 모입니다. <br />
                    각 파트는 세미나를 통해 배우고 실력을 쌓으며 <br />
                    자체 장기 해커톤인 APPJAM에서 각자 파트의 역량을 발휘합니다. <br />
                    전공과 상관없이, 열정만 있다면 SOPT에서는 누구나 기획, 디자인, 개발을 할 수 있습니다. <br />
                </Styled.Desc>
            </Styled.TitleArea>
            <Styled.PartArea>
                <Styled.Part>
                    <Styled.PartName>PLAN</Styled.PartName>
                    <div style={{ margin: '12px 0' }}>ㅡ</div>
                    <Styled.PartDesc>
                        세상에 가치를 주는 <br /> 서비스를 기획하는 <br /> 기획파트
                    </Styled.PartDesc>
                </Styled.Part>
                <Styled.Part>
                    <Styled.PartName>DESIGN</Styled.PartName>
                    <div style={{ margin: '12px 0' }}>ㅡ</div>
                    <Styled.PartDesc>
                        웹과 어플리케이션의 <br /> UI/UX를 디자인하는 <br /> 디자인 파트
                    </Styled.PartDesc>
                </Styled.Part>
                <Styled.Part>
                    <Styled.PartName>SERVER</Styled.PartName>
                    <div style={{ margin: '12px 0' }}>ㅡ</div>
                    <Styled.PartDesc>
                        Node.js를 이용해 <br /> 백엔드를 구현하는 <br /> 서버파트
                    </Styled.PartDesc>
                </Styled.Part>
                <Styled.Part>
                    <Styled.PartName>ANDROID</Styled.PartName>
                    <div style={{ margin: '12px 0' }}>ㅡ</div>
                    <Styled.PartDesc>
                        Kotlin을 사용해 안드로이드 <br /> 어플리케이션을 구현하는 <br /> 안드로이드 파트
                    </Styled.PartDesc>
                </Styled.Part>

                <Styled.Part>
                    <Styled.PartName>iOS</Styled.PartName>
                    <div style={{ margin: '12px 0' }}>ㅡ</div>
                    <Styled.PartDesc>
                        Swift를 이용해 iOS <br /> 어플리케이션을 구현하는 <br /> iOS 파트
                    </Styled.PartDesc>
                </Styled.Part>
                <Styled.Part>
                    <Styled.PartName>WEB</Styled.PartName>
                    <div style={{ margin: '12px 0' }}>ㅡ</div>
                    <Styled.PartDesc>
                        최강 <br /> 서비스를 기획하는 <br /> 웹 파트
                    </Styled.PartDesc>
                </Styled.Part>
            </Styled.PartArea>
        </>
    );
};

export default PartContent;
