import styled from '@emotion/styled';

const Styled = {
    Title: styled.h2`
        width: 100%;
        margin-bottom: 15px;
        z-index: 1;
    `,
    Desc: styled.p`
        font-size: 23px;
        width: 100%;
        z-index: 1;
    `,
    ActivityArea: styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
    `,
    Activity: styled.div`
        position: relative;
        background: center / cover no-repeat url(${(props: { imageURL: string }) => props.imageURL});
        flex: 1;
        height: 440px;
        margin-top: 128px;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #eee;
        z-index: 1;
        :first-of-type {
            margin-left: 0;
        }
        &:hover {
            cursor: default;
            .activity-subtitle {
                display: block;
            }
            .activity-desc {
                display: block;
            }
            .activity-dimmed {
                background: rgba(50, 60, 254, 0.7);
            }
        }
    `,
    ActivityDimmed: styled.div`
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    `,
    ActivityTitle: styled.h3`
        font-size: 28px;
        margin: 0;
        z-index: 1;
    `,
    ActivitySubTitle: styled.p`
        font-size: 28px;
        font-weight: 300;
        display: none;
        z-index: 1;
    `,
    ActivityDesc: styled.p`
        margin-top: 28px;
        display: none;
        text-align: center;
        line-height: 1.6;
        z-index: 1;
    `,
};

const ActivitiesContent = () => {
    return (
        <>
            <Styled.Title>SOPT Activities</Styled.Title>
            <Styled.Desc>SOPT에서만 할 수 있는 다양한 활동들</Styled.Desc>
            <Styled.ActivityArea>
                <Styled.Activity imageURL='/assets/images/mainpage/activities_1.png'>
                    <Styled.ActivityDimmed className='activity-dimmed' />
                    <Styled.ActivitySubTitle className='activity-subtitle'>오프라인 교육</Styled.ActivitySubTitle>
                    <Styled.ActivityTitle className='activity-title'>SEMINAR</Styled.ActivityTitle>
                    <Styled.ActivityDesc className='activity-desc'>
                        매주 진행되는 기획/개발/디자인 <br /> 파트별 IT서비스 관련 지식 세미나. <br />
                        서로 가르치고 배우며 지식을 공유합니다.
                    </Styled.ActivityDesc>
                </Styled.Activity>
                <Styled.Activity imageURL='/assets/images/mainpage/activities_2.png'>
                    <Styled.ActivityDimmed className='activity-dimmed' />
                    <Styled.ActivitySubTitle className='activity-subtitle'>장기간 해커톤</Styled.ActivitySubTitle>
                    <Styled.ActivityTitle className='activity-title'>APPJAM</Styled.ActivityTitle>
                    <Styled.ActivityDesc className='activity-desc'>
                        모든 파트가 각 팀을 이루어 진행하는 <br />
                        2-3주간의 장기 해커톤. <br />
                        하나의 서비스를 완성도 높게 구현. <br />
                        최종 컨퍼런스에서 결과물에 대한 <br />
                        발표와 시현의 시간을 가집니다.
                    </Styled.ActivityDesc>
                </Styled.Activity>
                <Styled.Activity imageURL='/assets/images/mainpage/activities_3.png'>
                    <Styled.ActivityDimmed className='activity-dimmed' />
                    <Styled.ActivitySubTitle className='activity-subtitle'>
                        외부 기업과의 협력 교육
                    </Styled.ActivitySubTitle>
                    <Styled.ActivityTitle className='activity-title'>COOPERATION</Styled.ActivityTitle>
                    <Styled.ActivityDesc className='activity-desc'>
                        폭 넓은 기업 연계 프로젝트, 해커톤, <br />
                        인턴십 지원 등 외부 기업들과의 <br />
                        협력 프로그램에 참여하며 <br />
                        다양한 경험을 쌓습니다.
                    </Styled.ActivityDesc>
                </Styled.Activity>
                <Styled.Activity imageURL='/assets/images/mainpage/activities_4.png'>
                    <Styled.ActivityDimmed className='activity-dimmed' />
                    <Styled.ActivitySubTitle className='activity-subtitle'>
                        다양한 사람들과의 협업
                    </Styled.ActivitySubTitle>
                    <Styled.ActivityTitle className='activity-title'>NETWORKING</Styled.ActivityTitle>
                    <Styled.ActivityDesc className='activity-desc'>
                        한 기수당 180명의 활동 회원들의 <br />
                        네트워킹을 다지는 다양한 내부 행사. <br />
                        활발한 번개 그리고 스터디를 통해 열정있는 <br />
                        개인들이 함께하는 가치를 나눕니다.
                    </Styled.ActivityDesc>
                </Styled.Activity>
            </Styled.ActivityArea>
        </>
    );
};

export default ActivitiesContent;
