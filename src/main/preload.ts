/* eslint-disable prettier/prettier */
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    close() {
      ipcRenderer.send('close')
    },
    minimize() {
      ipcRenderer.send('minimize')
    },
    runLevels(){
      ipcRenderer.send('run-levels')
    }
  },
});
