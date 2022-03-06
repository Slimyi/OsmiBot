module.exports = 
function MPS(command, args, MessageEmbed, message) {
    if (command.toUpperCase() == `MPS`) {
        if (args.length > 1) {
                message.channel.send("Až moc argumentů")
        } else if (parseInt(args) > 120 || parseInt(args) < 1 || /[a-zA-Z]|\W/.test(args)) {
                message.channel.send("Stránka neexistuje hajzle")
        } else {
        function imgnum () {
                if (args[0].length == 1) {
                        return `000${args[0]}`
                } else if (args[0].length == 2) {
                        return `00${args[0]}`
                } else if (args[0].length == 3) {
                        return `0${args[0]}`
                }
        }
        let img = "matematika-eeni-pdf_compress_pages-to-jpg-" + imgnum() + ".jpg";
        let embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Matika')
        .setImage(`attachment://${img}`)
        message.channel.send({ embeds: [embed], files: [`../MPS/${img}`] })
}
}
}

