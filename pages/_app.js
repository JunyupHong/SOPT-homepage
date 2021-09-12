import '../styles/globals.css';
import Header from '../components/common/Header';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>SOPT</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <meta name="description" content='대학생 IT 연합동아리 SOPT 입니다.' />
            </Head>
            <Header></Header>
            <Component {...pageProps} style={{ width: '100vw', height: '100vh', overflowY: 'scroll' }} ></Component>
        </>
    );
}

export default MyApp;
