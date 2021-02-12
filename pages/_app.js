import '../styles/globals.css';
import Header from '../components/common/Header';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header></Header>
            <Component {...pageProps} style={{width: '100vw', height: '100vh', overflowY: 'scroll'}} ></Component>
        </>
    );
}

export default MyApp;
