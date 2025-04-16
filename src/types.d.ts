declare module '*.glb' {
    const src: string;
    export default src;
  }
  
  declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
    export default GLTFLoader;
}