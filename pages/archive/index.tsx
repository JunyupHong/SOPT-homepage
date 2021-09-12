import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ArchiveIndex = () => {
    const router = useRouter();

    useEffect(() => {
        (async () => {
            try {
                const lastGeneration = Math.max(...JSON.parse(await (await fetch(`/data/appjam/index.json`)).text()).filter(({ display }: any) => display));
                JSON.parse(await (await fetch(`/data/appjam/${lastGeneration}.json`)).text());
                router.push(`/archive/${lastGeneration}`);
            } catch (e) {
                router.push('/');
            }
        })();

    });
    return <></>;
};

export default ArchiveIndex;
