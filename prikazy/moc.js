module.exports =
function moc(command, args, MessageEmbed, message) {
    if (/[a-zA-Z]|\W/.test(args[0])) {
        message.channel.send("Využití: moc [číslo]")
    } else {
        let embed = new MessageEmbed().setTitle(`Druhá a třetí mocnina čísla ${args[0]}`)
        .setColor("#ff0000")
        .addFields(
            { name: "Druhá mocnina", value: `${Math.pow(args[0], 2)}`},
            { name: "Třetí mocnina", value: `${Math.pow(args[0], 3)}`}
            )
        message.channel.send({ embeds: [embed] })
    }
}
