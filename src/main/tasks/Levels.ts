/* eslint-disable prettier/prettier */
import Discord, { Message } from "discord.js"
import fs from 'fs'
import path from 'path'

export default function levels(taskName: string){
    const task = JSON.parse(fs.readFileSync(path.join(__dirname, `../data/levels/${taskName}.json`)).toString())
    const client = new Discord.Client()
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`)
        client.channels.get(task.id)?.send('from electron')
        client.destroy()
    })
    
    client.login(task.token)
}