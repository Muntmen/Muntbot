const { createAudioResource, createAudioPlayer, StreamType } = require('@discordjs/voice');
const { joinVoiceChannel, entersState, VoiceConnectionStatus, AudioPlayerStatus } = require('@discordjs/voice');

module.exports = {
    match: matchType.START_WITH,
    description: "play audio",

    async execute (client, msg) { 
        const player = createAudioPlayer()

        const resource = createAudioResource("https://rr2---sn-npoeenlk.googlevideo.com/videoplayback?expire=1642967154&ei=EVztYfviOdil4t4P-_uM4AI&ip=2406%3A3400%3A21b%3Ae8e0%3Ad237%3A45ff%3Afeac%3A6f94&id=o-AIYBaEMtuh2DVebR3r_wGsnHNigbf3_TwQPXVmJ1nzUu&itag=251&source=youtube&requiressl=yes&gcr=au&vprv=1&mime=audio%2Fwebm&ns=AKPAwZ2LygoYxYav3Dku0tAG&gir=yes&clen=5732079&dur=354.801&lmt=1619337967137112&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=2311224&n=maPY-8R6dFH19A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&alr=yes&sig=AOq0QJ8wRAIgAzaMSfmpONjV5tY-bxlTBJx8oMJM4j-2namZDasIyAYCIDpR2FdLuwWsZPH3ggJFE7PH9CZInJd8X0vOtZMD56O9&cpn=wHhtJ_i7f_fug76e&cver=2.20220121.01.00&cm2rm=sn-xmxuxa-ntql7l,sn-ntqsd7l&redirect_counter=2&cms_redirect=yes&mh=Jm&mm=34&mn=sn-npoeenlk&ms=ltu&mt=1642945507&mv=m&mvi=2&pl=48&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAPe1nLTp3wRnWvedRSA6T2-sOWSvbDw4PXmM4B_kZoY6AiAP7z7ju3xRFMTaF0Rh8BGQ-o0mP2aqzoTmC2ueaW45Rw%3D%3D", {inputType: StreamType.Arbitrary});
        player.play(resource);

        const channel = msg.member.voice.channel
        const connection = await joinVoiceChannel({
            channelId: channel.id,
            guildId : channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

        connection.subscribe(player)
        await msg.reply ("cum")
    }
}