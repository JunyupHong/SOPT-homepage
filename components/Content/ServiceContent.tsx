import styled from '@emotion/styled';
const Styled = {
    Title: styled.h2`
        text-align: center;
        z-index: 1;
    `,
    Desc: styled.p`
        text-align: center;
        font-size: 23px;
        font-weight: 400;
        line-height: 1.6;
        margin: 68px 0 82px 0;
        color: #444;
        z-index: 1;
    `,
    Button: styled.button`
        border: none;
        outline: none;
        background: white;
        box-shadow: 0 0 4px 4px #eee;
        font-size: 28px;
        color: #444;
        padding: 26px 100px;
        border-radius: 60px;
        z-index: 1;
        :hover {
            cursor: pointer;
            background: #eee;
        }
    `,
};

const ServiceContent = () => {
    return (
        <>
            <Styled.Title>
                Shout Our <br />
                Passion Together
            </Styled.Title>
            <Styled.Desc>
                SOPT는 다양한 분야의 사람들이 모여 하나의 서비스를 만들기 위해 화합하는 동아리입니다. <br />
                2008년 처음 설립된 이후 수많은 서비스를 시장에 출시하였으며 <br />
                다양한 기업과 연계를 통한 공모전, 리크루팅, 프로젝트를 수행하고 있습니다. <br />
                서비스를 만들기 위해 필요한 체계적인 교육과 더불어 <br />
                스터디, 네트워킹 행사 등 다양한 활동을 추구합니다. <br />
                다양한 분야의 사람들이 모여 화합을 통해 변화하고 성장하는 가치를 추구합니다.
            </Styled.Desc>
            <Styled.Button>더 많은 서비스 보러가기</Styled.Button>
        </>
    );
};
export default ServiceContent;
