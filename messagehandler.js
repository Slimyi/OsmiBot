const prefix = require('./config.json')
module.exports = (message, client, MessageEmbed) => {
     if (message.author.bot) { return }
     
     const args = message.content.slice("?".length).trim().split(/ +/g)
     const command = args.shift();

     const commands = [
         "MPS", "PRIKAZY", "MOC", "ODMOC", "ROZVRH", "RETOS", "VYPINEJ",
	 "ODPOVEZ", "NABIJEJ", "SFX", "ODPOJUJ"
     ]
     
     if (commands.indexOf(command.toUpperCase()) == -1) { return }
     require(`./prikazy/${command.toLowerCase()}.js`)(command, args, MessageEmbed, message)
}

