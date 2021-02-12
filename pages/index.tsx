import styled from '@emotion/styled';
import ContentContainer from '../components/common/Content/ContentContainer';

const Styled = {
    MainWrapper: styled.div`
        display: flex;
        flex-direction: column;
    `,
    Button: styled.button`
        padding: 26px 104px;
        border: none;
        outline: none;

        border-radius: 40px;
        font-size: 28px;
        background: #fff;
        box-shadow: 0px 0px 4px 4px #eee;
    `,
};

const Home = () => {
    const section1 = (
        <>
            <div
                style={{
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 400,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                {'전국 최대 대학생 IT 창업 동아리'.split('').map((letter) => (
                    <span>{letter}</span>
                ))}
            </div>
            <div
                style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: '220px',
                    fontWeight: 700,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                {'SOPT'.split('').map((letter) => (
                    <span>{letter}</span>
                ))}
            </div>
        </>
    );
    const section2 = (
        <>
            <h2 style={{ textAlign: 'center', fontSize: '44px', fontWeight: 600 }}>
                Shout Our <br />
                Passion Together
            </h2>
            <div>아이콘콘</div>
            <p
                style={{
                    textAlign: 'center',
                    fontSize: '23px',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    margin: '68px 0 82px 0',
                }}>
                SOPT는 다양한 분야의 사람들이 모여 하나의 서비스를 만들기 위해 화합하는 동아리입니다. <br />
                2008년 처음 설립된 이후 수많은 서비스를 시장에 출시하였으며 <br />
                다양한 기업과 연계를 통한 공모전, 리크루팅, 프로젝트를 수행하고 있습니다. <br />
                서비스를 만들기 위해 필요한 체계적인 교육과 더불어 <br />
                스터디, 네트워킹 행사 등 다양한 활동을 추구합니다. <br />
                다양한 분야의 사람들이 모여 화합을 통해 변화하고 성장하는 가치를 추구합니다.
            </p>
            <Styled.Button>더 많은 서비스 보러가기</Styled.Button>
        </>
    );

    const section3 = (
        <>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.96)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '0 244px',
                }}>
                <h2 style={{ fontSize: '44px', fontWeight: 600, margin: 0 }}>SOPT Activities</h2>
                <p style={{ fontSize: '23px' }}>SOPT에서만 할 수 있는 다양한 활동들</p>
                <div style={{ display: 'flex', marginTop: '128px' }}>
                    <div
                        style={{
                            flex: 1,
                            border: 'solid 1px',
                            margin: '20px',
                            background:
                                "center / cover no-repeat url('/assets/images/mainpage_activities_1.png'), rgba(0, 0, 0, 1)",
                            height: '300px',
                        }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            df
                        </div>
                    </div>
                    <div style={{ flex: 1, border: 'solid 1px', margin: '20px' }}>a</div>
                    <div style={{ flex: 1, border: 'solid 1px', margin: '20px' }}>a</div>
                </div>
            </div>
        </>
    );
    return (
        <div>
            <Styled.MainWrapper>
                <ContentContainer height={1085} imageURL={'/assets/images/mainpage_background.png'}>
                    {section1}
                </ContentContainer>
                {/* <ContentContainer>{section2}</ContentContainer>
                <ContentContainer imageURL={'/assets/images/mainpage_background.png'}>{section3}</ContentContainer>
                <div style={{ border: 'solid 10px blue' }}>
                    <div
                        style={{
                            height: '120px',
                            background: 'center / cover no-repeat url("/assets/images/mainpage_background.png")',
                        }}></div>
                </div> */}
            </Styled.MainWrapper>
        </div>
    );
};

export default Home;
