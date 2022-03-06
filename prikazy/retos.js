module.exports = 
function retos(command, args, MessageEmbed, message) {
    let argString = args.join(' ');
    let newString = ""
    for (let i = 0; i < argString.length; i++) {
        let j = Math.random();
        if (j > 0.5) {
            newString += argString[i].toUpperCase();
        } else if (j < 0.5) {
            newString += argString[i].toLowerCase();
        }
    }
    message.reply(newString)
}
