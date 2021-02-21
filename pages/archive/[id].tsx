import Footer from '../../components/common/Footer';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

type appjamData_T = {
    name: string;
    sequence: number;
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
        padding: 240px 400px 140px 400px;
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
};
const Archive = () => {
    const router = useRouter();
    const [appjamData, setAppjamData] = useState<appjamData_T>();
    useEffect(() => {
        if (!router.query.id) return;
        (async () => {
            try {
                setAppjamData(JSON.parse(await (await fetch(`/data/appjam/${router.query.id}.json`)).text()));
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
