import Footer from '../../components/common/Footer';
import TeamModal from '../../components/common/TeamModal';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { AppjamTeam_T, Appjam_T, Generation_T } from '../../types';

const Styled = {
    ArchiveWrapper: styled.div`
        background-image: url('/assets/images/archivepage/background.png');
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
        row-gap: 88px;
        width: 70%;
        justify-content: space-between;
    `,
    TeamCard: styled.article`
        display: flex;
        flex-direction: column;
        align-items: center;
        :hover {
            cursor: pointer;
        }
    `,
    TeamImg: styled.img`
        width: 115px;
        height: 115px;
    `,
    TeamName: styled.h1`
        margin: 32px 0 0 0;
        font-size: 21px;
        font-weight: 500;
        white-space: pre-wrap;
    `,
    TeamDesc: styled.p`
        font-size: 14px;
        line-height: 21px;
        font-weight: 300;
        text-align: center;
        white-space: pre-wrap;
    `,
};
const Archive = () => {
    const router = useRouter();
    const [appjam, setAppjam] = useState<Appjam_T>();
    const [generation, setGeneration] = useState<Omit<Generation_T, 'imageURL'>[]>([]);
    const [modal, setModal] = useState<AppjamTeam_T>();
    const [modalState, setModalState] = useState<boolean>(false);

    useEffect(() => {
        if (!router.query.id) return;
        (async () => {
            try {
                setGeneration(JSON.parse(await (await fetch(`/data/appjam/index.json`)).text()).filter(({ display }: Generation_T) => display));
                setAppjam(JSON.parse(await (await fetch(`/data/appjam/${router.query.id}.json`)).text()));
            } catch (e) {
                router.push('/archive');
            }
        })();
    }, [router.query.id]);

    const onClickTeam = (team: AppjamTeam_T) => {
        setModal(team);
        setModalState(true);
    };

    return appjam ? (
        <>
            <TeamModal
                imgUrl={modal?.imageURL || ''}
                teamData={modal || appjam.teams[0]}
                visible={modalState}
                on={() => {
                    setModalState(true);
                }}
                off={() => {
                    setModalState(false);
                }}></TeamModal>
            <Styled.ArchiveWrapper>
                <Styled.ContentWrapper>
                    <Styled.Title>Archiving</Styled.Title>
                    <Styled.Desc>
                        2008년부터 시작된 SOPT는 매 기수마다 11개 이상의 서비스를 선보입니다.
                        <br />
                        APP-JAM을 통해 나온 멋진 결과물을 확인하세요!
                    </Styled.Desc>
                    <div style={{ margin: '82px 0 32px 0', fontSize: '28px' }}>
                        {appjam.name} ({router.query.id}th)
                    </div>
                    <Styled.Nav>
                        {generation.map(({ generation, name }, i) => (
                            <Styled.NavBtn key={`archive-${name}-${i}th`}>
                                <a href={`/archive/${generation}`}>{generation}th</a>
                            </Styled.NavBtn>
                        ))}
                    </Styled.Nav>
                    <Styled.TeamArea>
                        {appjam.teams.map((team, i) => (
                            <Styled.TeamCard key={router.query.id + 'th-' + i} onClick={() => onClickTeam(team)}>
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
