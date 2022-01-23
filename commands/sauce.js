const generalHelpers = require("../helpers/generalHelpers");

module.exports = {
    description: "please dont' use this",
    execute(_, msg) {
        var id = String(generalHelpers.randrange (2) + 1)

        for (var _ =0; _ < 5; _++)
            id += generalHelpers.randrange (9)

        msg.reply ("https://nhentai.net/g/" + id)
    },
}