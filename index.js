const {Client, Intents, MessageEmbed} = require('discord.js');
const {token} = require('./config.json')
const client = new Client({ intents: [Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, ] });

client.once('ready', () => {
        console.log("GUN READY!");
        let uptime = 0;
        setInterval(() => {
                uptime++;
        }, 60000)
        setInterval(() => {
        let a = Math.random();
        if (a >= 0.75) {
	client.user.setActivity('PornHub',{type: 'WATCHING'});
        } else if (a >= 0.5 && a < 0.75) {
                
                client.user.setActivity(`příkazy už ${uptime} minut bez přestávky.`, {type: 'WATCHING'})
                
        } else if (a >= 0.25 && a < 0.5) {
        client.user.setActivity('?prikazy', {type: 'PLAYING'})
        } else {
        client.user.setActivity('tě', {type: 'WATCHING'})
        }
}, 3000
        )
})

client.on("messageCreate", message => {
        require("./messagehandler.js")(message, client, MessageEmbed)
})


client.login(token);






