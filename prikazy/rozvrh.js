module.exports =
function rozvrh(command, args, MessageEmbed, message) {
    let embed = new MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Rozvrh')
    .setImage(`attachment://rozvrh.png}`)
    message.channel.send({ embeds: [embed], files: [`./rozvrh.png`]})
}

