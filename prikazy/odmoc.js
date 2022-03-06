module.exports =
function odmoc(command, args, MessageEmbed, message) {
    if (/[a-zA-Z]|\W/.test(args[0])) {
        message.channel.send("Využití: odmoc [číslo]")
    } else {
        let embed = new MessageEmbed().setTitle(`Druhá a třetí odmocnina čísla ${args[0]}`)
        .setColor("#ff0000")
        .addFields(
            { name: "Druhá odmocnina", value: `${Math.sqrt(args[0])}`},
            { name: "Třetí odmocnina", value: `${Math.cbrt(args[0])}`}
            )
        message.channel.send({ embeds: [embed] })
    }
}
