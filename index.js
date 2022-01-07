const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "Nzg2NTM4NDI1MzQ3NzM1NTgy.X9H2_Q.ItZda4zE7fnRoKCP-ZEogl3BSVw"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(process.env.TOKEN)