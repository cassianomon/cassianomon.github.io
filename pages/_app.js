import Page from '../components/Page';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   pageProps.query = ctx.query;
//   return { pageProps };
// };

export default MyApp;
