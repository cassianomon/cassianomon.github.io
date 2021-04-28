import PropTypes from 'prop-types';
import Page from '../components/Page';

/* eslint-disable react/jsx-props-no-spreading */

function App({ Component, pageProps }) {
  return (
    <>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
