import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* Babylon.js CDN */}
          <Script src="https://cdn.babylonjs.com/babylon.js" strategy="beforeInteractive" ></Script>
          <Script src="https://cdn.babylonjs.com/babylonjs-gui.min.js" strategy="beforeInteractive" ></Script>
          {/*<Script src="https://cdn.babylonjs.com/babylonjs-loaders.min.js" strategy="beforeInteractive" ></Script>*/}
          <Script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js" strategy="beforeInteractive" ></Script>

          {/*<Script src="https://cdn.jsdelivr.net/npm/@types/babylonjs@latest" strategy="beforeInteractive" ></Script>
          <Script src="https://cdn.jsdelivr.net/npm/@types/babylonjs-gui@latest" strategy="beforeInteractive" ></Script>*/}


          {/* 他のCDNをここに追加できます */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
