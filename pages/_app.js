import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    console.warn(Component);
    console.warn(pageProps);
    return <Component {...pageProps} />
}

export default MyApp;
