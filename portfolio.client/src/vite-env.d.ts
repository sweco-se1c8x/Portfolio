/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly API_URL: "https://localhost:5197";
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }