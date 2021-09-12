import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/common/Footer';
import { ContentContainer } from '../../components/content';
import type { Executive_T } from '../../types';

const Styled = {
    Title: styled.h2`
        font-size: 60px;
        font-weight: 700;
        margin: 240px 0 32px 0;
        color: #fff;
    `,
    Desc: styled.p`
        font-size: 20px;
        font-weight: 300;
        color: #fff;
    `,
    ContentArea: styled.div`
        display: flex;
        width: 100%;
        margin: 120px 0 200px 0;
        color: #fff;
    `,
    Left: styled.aside`
        margin-top: 80px;
        margin-right: 80px;
        .generation {
            width: 100%;
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            padding: 8px 16px;
            margin-bottom: 40px;
            border: solid 1px #ccc;
            border-radius: 12px;
            &:hover {
                cursor: pointer;
            }
        }
        ul {
            border-radius: 12px;
            background: rgb(55, 58, 58);
            padding: 16px 44px;
        }
    `,
    Li: styled.li`
        font-size: 16px;
        margin: 32px 0;
        font-weight: ${(props: { selected?: boolean; }) => (props.selected ? 600 : 300)};
        &:hover {
            cursor: pointer;
            font-weight: 600;
        }
    `,
    Content: styled.section`
        flex: 1;
        .title-area {
            width: 100%;
            text-align: center;
            margin-bottom: 100px;
            h3 {
                font-size: 30px;
                font-weight: 400;
                margin-bottom: 12px;
            }
            p {
                font-size: 16px;
            }
        }
        .content-area {
            display: flex;
            img {
                margin-right: 80px;
            }
            .name {
                font-size: 30px;
                font-weight: 300;
                margin: 24px 0;
            }
            p {
                font-size: 16px;
                font-weight: 300;
                line-height: 2;
                white-space: pre-wrap;
            }
        }
    `,
};

type Role_T =
    | '회장'
    | '부회장'
    | '총무'
    | '운영팀장'
    | '미디어팀장'
    | '기획파트장'
    | '디자인파트장'
    | '서버파트장'
    | '안드로이드파트장'
    | 'iOS파트장'
    | '웹파트장';

type History_T = {
    name: string;
    generation: number;
    executives: Array<Executive_T>;
};
const roles: Array<Role_T> = [
    '회장',
    '부회장',
    '총무',
    '운영팀장',
    '미디어팀장',
    '기획파트장',
    '디자인파트장',
    '서버파트장',
    '안드로이드파트장',
    'iOS파트장',
    '웹파트장',
];

const History = () => {
    const router = useRouter();
    const [history, setHistory] = useState<History_T>({
        name: 'SOPT',
        generation: 27,
        executives: [],
    });
    const [executive, setExecutive] = useState<Executive_T>({
        role: '회장',
        name: '',
        desc: '',
        imageURL: '',
    });

    useEffect(() => {
        if (!router.query.id) return;
        (async () => {
            try {
                setHistory(JSON.parse(await (await fetch(`/data/history/${router.query.id}.json`)).text()));
            } catch (e) {
                router.push('/history');
            }
        })();
    }, [router.query.id]);
    useEffect(() => {
        (async () => {
            setExecutive(history.executives.filter((executive) => executive.role === '회장')[0]);
        })();
    }, [history]);

    const onClickList = (evt: React.MouseEvent) => {
        setExecutive(history.executives.filter((executive) => executive.role === evt.currentTarget.textContent)[0]);
    };
    return (
        <>
            <ContentContainer imageURL={'/assets/images/historypage/background.png'}>
                <>
                    <Styled.Title>History</Styled.Title>
                    <Styled.Desc>임원진 소개</Styled.Desc>
                    <Styled.ContentArea>
                        <Styled.Left>
                            <div className='generation' onClick={() => router.push('/history')}>
                                {history ? `${history.generation}th ${history.name}` : 'SOPT'}
                            </div>
                            <ul>
                                {roles.map((role) => (
                                    <Styled.Li selected={executive?.role === role} onClick={onClickList} key={role}>
                                        {role}
                                    </Styled.Li>
                                ))}
                            </ul>
                        </Styled.Left>
                        <Styled.Content>
                            <article className='title-area'>
                                <h3>{`${history.name}(${history.generation}th)`}</h3>
                                <p>Try With Impact...</p>
                            </article>
                            <article className='content-area'>
                                <img src={executive?.imageURL} width={412} height={620} />
                                <div>
                                    <div className='name'>{executive?.role + ' ' + executive?.name}</div>
                                    <p>{executive?.desc}</p>
                                </div>
                            </article>
                        </Styled.Content>
                    </Styled.ContentArea>
                    <Footer />
                </>
            </ContentContainer>
        </>
    );
};

export default History;
