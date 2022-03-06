module.exports = 
function odpojuj(command, args, MessageEmbed, message) {
    const { getVoiceConnection } = 
    require('@discordjs/voice')
	
    const vc = getVoiceConnection(message.member.guild.id)
    if (vc) {
    vc.destroy()
} else { message.reply("Momentálně nejsem ve VC") }
}
