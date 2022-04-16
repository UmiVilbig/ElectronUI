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
    },
    createTask(payload: object, fileName: string){
      ipcRenderer.send('create-task', payload, fileName)
    },
    getTasks(type: string){
      ipcRenderer.send('get-tasks', type)
    },
    replyTasks(channel: string, func: (...args: unknown[]) => void){
      const validChannels = ['get-tasks']
      if(validChannels.includes(channel)){
        ipcRenderer.once(channel, (_event, ...args) => func(...args))
      }
    }
  },
});

