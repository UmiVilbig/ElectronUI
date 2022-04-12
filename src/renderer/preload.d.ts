declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        myPing(): void;
        close(): void;
        minimize(): void;
      };
    };
  }
}

export {};
