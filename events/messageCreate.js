module.exports = (client, msg) => {
    if (msg.content === "peter") {
        msg.channel.send("(Rongkai) Tian https://cdn.discordapp.com/attachments/691823245631946773/830719019567808552/peter.jpg")
    }

    if (msg.content === "$peter") {
        msg.channel.send("**absolutely lying**");
    }
}
