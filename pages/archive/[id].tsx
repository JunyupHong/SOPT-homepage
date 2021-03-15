import Footer from '../../components/common/Footer';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

type appjamData_T = {
    name: string;
    generation: number;
    teams: Array<{
        name: string;
        desc: string;
        imageURL: string;
    }>;
};

const Styled = {
    ArchiveWrapper: styled.div`
        background-image: url('/assets/images/archivepage_background.png');
        background-size: cover;
        background-position: 1 50%;
        background-repeat: no-repeat;
    `,
    ContentWrapper: styled.div`
        padding: 240px 0 140px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    `,
    Title: styled.h2`
        font-size: 60px;
        font-weight: 700;
        margin-bottom: 31px;
    `,
    Desc: styled.p`
        font-size: 20px;
        font-weight: 300;
        text-align: center;
    `,
    Nav: styled.nav`
        background: #404241;
        border-radius: 4px;
        padding: 0 12px;
        margin: 32px 0 104px 0;
    `,
    NavBtn: styled.button`
        padding: 4px 4px;
        margin: 8px 24px;
        background: none;
        color: #eee;
        font-weight: 400;
        :hover {
            font-weight: 500;
            cursor: pointer;
        }
    `,
    TeamArea: styled.section`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        row-gap: 80px;
        column-gap: 124px;
    `,
    TeamCard: styled.article`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    TeamImg: styled.img`
        border-radius: 12px;
        background: #eee;
        width: 115px;
        height: 115px;
    `,
    TeamName: styled.h1`
        font-size: 21px;
        font-weight: 500;
        margin: 32px 0 12px 0;
    `,
    TeamDesc: styled.p`
        font-size: 14px;
        font-weight: 300;
    `,
};
const Archive = () => {
    const router = useRouter();
    const [appjamData, setAppjamData] = useState<appjamData_T>();
    useEffect(() => {
        if (!router.query.id) return;
        (async () => {
            try {
                setAppjamData(JSON.parse(await (await fetch(`/data/appjam/${router.query.id}.json`)).text()));
                console.log(appjamData);
            } catch (e) {
                router.push('/archive/27');
            }
        })();
    }, [router.query.id]);

    return appjamData ? (
        <>
            <Styled.ArchiveWrapper>
                <Styled.ContentWrapper>
                    <Styled.Title>Archiving</Styled.Title>
                    <Styled.Desc>
                        2008년부터 시작된 SOPT는 매 기수마다 11개 이상의 서비스를 선보입니다.
                        <br />
                        APP-JAM을 통해 나온 멋진 결과물을 확인하세요!
                    </Styled.Desc>
                    <div style={{ margin: '82px 0 32px 0', fontSize: '28px' }}>
                        {appjamData.name} ({router.query.id}th)
                    </div>
                    <Styled.Nav>
                        <Styled.NavBtn>
                            <a href='/archive/27'>27th</a>
                        </Styled.NavBtn>
                        <Styled.NavBtn>
                            <a href='/archive/26'>26th</a>
                        </Styled.NavBtn>
                        <Styled.NavBtn>
                            <a href='/archive/25'>25th</a>
                        </Styled.NavBtn>
                        <Styled.NavBtn>
                            <a href='/archive/24'>24th</a>
                        </Styled.NavBtn>
                        <Styled.NavBtn>
                            <a href='/archive/23'>23th</a>
                        </Styled.NavBtn>
                        <Styled.NavBtn>
                            <a href='/archive/22'>22th</a>
                        </Styled.NavBtn>
                        <Styled.NavBtn>
                            <a href='/archive/21'>21th</a>
                        </Styled.NavBtn>
                        <Styled.NavBtn>
                            <a href='/archive/20'>20th</a>
                        </Styled.NavBtn>
                    </Styled.Nav>
                    <Styled.TeamArea>
                        {appjamData.teams.map((team, i) => (
                            <Styled.TeamCard key={router.query.id + 'th-' + i}>
                                <Styled.TeamImg src={team.imageURL}></Styled.TeamImg>
                                <Styled.TeamName>{team.name}</Styled.TeamName>
                                <Styled.TeamDesc>{team.desc}</Styled.TeamDesc>
                            </Styled.TeamCard>
                        ))}
                    </Styled.TeamArea>
                </Styled.ContentWrapper>
                <div style={{ padding: '0 240px 100px 240px' }}>
                    <Footer />
                </div>
            </Styled.ArchiveWrapper>
        </>
    ) : (
        <></>
    );
};

export default Archive;
