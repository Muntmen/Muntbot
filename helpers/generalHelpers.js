module.exports = {
    getRandomFrom : function (collection) {
        return collection[Math.floor((Math.random() * (collection.length)))]
    },
    
    isBad : function(word) {
        homestuck = [
            "hive swap",
            "hiveswap",
            "h1veswap",
            "h1v3swap",
            "hiv3swap",
            "h1ve swap",
            "h1v3 swap",
            "hiv3 swap",
            "homestuck",
            "homosucc",
            "homosuck",
            "http://www.mspaintadventures.com/",
            "smallwangss"
        ]
        return homestuck.includes(word)
    }
}