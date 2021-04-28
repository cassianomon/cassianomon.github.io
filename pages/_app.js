import Page from '../components/Page';
import GlobalStyles from '../styles/GlobalStyles';

export default function myApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}
