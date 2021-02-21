import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type appjamData_T = {
    name: string;
    sequence: number;
    teams: Array<{
        name: string;
        desc: string;
        imageURL: string;
    }>;
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
            <h1>
                {appjamData.sequence}th
                <br />
                {appjamData.name}
            </h1>
        </>
    ) : (
        <></>
    );
};

export default Archive;
