declare module "babylonjs" {
    export = BABYLON;
}

declare const BABYLON: typeof import("@types/babylonjs");

declare global {
    interface Window {
      //BABYLON: typeof import('babylonjs');
      BABYLON: any;
    }
}
  