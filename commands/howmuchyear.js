module.exports = {
    name : "howmuch" + new Date().getFullYear(), 
    description : "find out how far we are through the year",

    execute (client, msg) {
        let now = new Date();
        let start = new Date(now.getFullYear(), 0, 0);
        let diff = now - start;
        let oneDay = 1000 * 60 * 60 * 24;
        let day = Math.floor(diff / oneDay);

        let perc = Math.round((day / 365) * 100)
        let howmany = Math.round((day / 365) * 10)

        let s = ""

        for (let i = 0; i < howmany; i++) {
            s = s.concat("▓")
        }

        for (let i = 0; i < 10 - howmany; i++) {
            s = s.concat("░")
        }

        msg.reply(`we're ${perc}% through the year!\n${s}`);
    }
}