import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* Babylon.js CDN */}
          <script src="https://cdn.babylonjs.com/babylon.js"></script>
          <script src="https://cdn.babylonjs.com/babylonjs-gui.min.js"></script>
          <script src="https://cdn.babylonjs.com/babylonjs-loaders.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@types/babylonjs@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@types/babylonjs-gui@latest"></script>


          {/* 他のCDNをここに追加できます */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
