import Document, { Html, Head, NextScript, Main } from 'next/document';
import Config from '../config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={Config.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
