/* eslint-disable prettier/prettier */
import fs from 'fs'
import path from 'path'

export default function readTasks(type: string){
    const taskFiles = fs.readdirSync(path.join(__dirname, `../data/${type}`)).filter(file => file.endsWith(".json"))
    const numFiles = Object.keys(taskFiles).length
    const tasks = []
    console.log(taskFiles)
    for (let index = 0; index < numFiles;) {
        const data = fs.readFileSync(path.join(__dirname, `../data/${type}/${taskFiles[index]}`)).toString()
        index += 1
        tasks.push(data)
    }
    return tasks
}