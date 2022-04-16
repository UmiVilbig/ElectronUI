declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        myPing(): void;
        close(): void;
        minimize(): void;
        runLevels(): void;
        createTask(payload: object, fileName: string): void;
        getTasks(type: string): void;
        replyTasks(channel: string, func: (...args: unknown[]) => void): void;
        startLevel(taskname: string): void;
      };
    };
  }
}

export {};
