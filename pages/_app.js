import '../styles/globals.css';
import Header from '../components/common/Header';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header></Header>
            <Component {...pageProps} ></Component>
        </>
    );
}

export default MyApp;
