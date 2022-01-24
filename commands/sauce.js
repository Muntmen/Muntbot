const random = require ("random")

module.exports = {
    description: "please dont' use this",
    nsfw: true,
    execute: (_, msg) => {
        var id = String(random.int (1,3))

        for (var _ =0; _ < 5; _++)
            id += random.int (1,9)

        msg.reply ("https://nhentai.net/g/" + id)
    },
}