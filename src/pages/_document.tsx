import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* Babylon.js CDN */}
          <Script src="https://cdn.babylonjs.com/babylon.js" strategy="afterInteractive" ></Script>
          <Script src="https://cdn.babylonjs.com/babylonjs-gui.min.js" strategy="afterInteractive" ></Script>
          <Script src="https://cdn.babylonjs.com/babylonjs-loaders.min.js" strategy="afterInteractive" ></Script>
          <Script src="https://cdn.jsdelivr.net/npm/@types/babylonjs@latest" strategy="afterInteractive" ></Script>
          <Script src="https://cdn.jsdelivr.net/npm/@types/babylonjs-gui@latest" strategy="afterInteractive" ></Script>


          {/* 他のCDNをここに追加できます */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
