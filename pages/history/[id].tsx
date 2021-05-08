import { useRouter } from 'next/router';
import { useEffect } from 'react';

const History = () => {
    const router = useRouter();

    useEffect(() => {
        if (!router.query.id) return;
    });
    return <></>;
};

export default History;
