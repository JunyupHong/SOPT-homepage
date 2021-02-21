import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ArchiveIndex = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/archive/27');
    });
    return <></>;
};

export default ArchiveIndex;
