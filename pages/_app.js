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

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  console.log(Component);
  console.log('ctx: ', ctx);

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp;
