module.exports = 
function sfx(command, args, MessageEmbed, message) {
    const { joinVoiceChannel, createAudioPlayer,
         NoSubscriberBehavior, VoiceConnectionStatus,
          AudioPlayerStatus, getVoiceConnection,
        createAudioResource } = 
    require('@discordjs/voice')
    let efx = ["CURAK", "KECY", "KDOSEPTAL", "DEBIL", "FLAKANEC", "SCARE1",
	       "SCARE2", "SCARE3", "RANDOM"]

      if (efx.indexOf(args[0].toUpperCase()) === -1) {
        message.reply("Nemohl jsem najít efekt.")
    } else {
     
    const player = createAudioPlayer({
        behaviors: {
            noSubscriber: NoSubscriberBehavior.Pause,
        },
    })

    const connection = joinVoiceChannel({
        channelId: message.member.voice.channelId,
        guildId: message.member.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator
    })
    const connectionGet = getVoiceConnection(message.member.guild.id);

    const sub = connection.subscribe(player);
	console.log("WTFFFFFF")
    player.play(createAudioResource(`./sfx/${args[0].toLowerCase()}.mp3`))

    setTimeout(() => sub.unsubscribe(), 10000)
}
}

