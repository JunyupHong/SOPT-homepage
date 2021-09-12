import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/common/Footer';
import { ContentContainer } from '../../components/content';
import { Generation_T } from '../../types';

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
    ContentArea: styled.section`
        margin: 140px 0 240px 0;
        color: #fff;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 140px 52px;
    `,
    Content: styled.article`
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
        p {
            font-size: 20px;
            font-weight: 300;
            margin: 30px 0 12px 0;
        }
        h3 {
            font-size: 28px;
        }
    `,
    FooterArea: styled.div`
        padding: 160px 240px 94px 240px;
        background-color: rgb(33, 35, 35);
        display: flex;
        align-items: center;
        justify-content: center;
    `,
};

const HistoryIndex = () => {
    const router = useRouter();
    const [history, setHistory] = useState<Array<Omit<Generation_T, 'display'>>>([]);

    useEffect(() => {
        (async () => {
            setHistory(await JSON.parse(await (await fetch(`/data/history/index.json`)).text()));
        })();
    }, []);

    return (
        <>
            <ContentContainer imageURL={'/assets/images/historypage/background.png'}>
                <>
                    <Styled.Title>History</Styled.Title>
                    <Styled.Desc>역대 임원진 소개</Styled.Desc>
                    <Styled.ContentArea>
                        {history.map((data) => (
                            <Styled.Content
                                key={data.generation}
                                onClick={() => router.push(`/history/${data.generation}`)}>
                                <img src={data.imageURL} width={'100%'} />
                                <p>{data.period}</p>
                                <h3>{data.name}</h3>
                            </Styled.Content>
                        ))}
                    </Styled.ContentArea>
                </>
            </ContentContainer>
            <Styled.FooterArea>
                <Footer />
            </Styled.FooterArea>
        </>
    );
};

export default HistoryIndex;
