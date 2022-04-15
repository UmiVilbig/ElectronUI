/* eslint-disable prettier/prettier */
const Discord = require("discord.js")

export default function levels(token: string, channelId: string){
    const client = new Discord.Client()
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`)
        client.channels.get(channelId).send('from electron')
        client.destroy()
    })
    
    client.login(token)
}