import Page from '../components/Page';
import GlobalStyles from '../styles/Globals';

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
