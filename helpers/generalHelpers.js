// TODO: need to store this in a better place
global.DEFAULTS = {
    match : 1,
    withPrefix : true,
    description : "someone forgot to give this one a description HAH L",
    perms : [],
    execute : (c, m) => { }
}

module.exports = {

    // combine with default to get all parameters
    getFullCommand : (comm, fileName = "") => {
        let ret = {
            //path.parse(file).name
            ...{ name : fileName },
            ...global.DEFAULTS,
            ...comm
        }

        if (!ret.name)
            throw ("this command has no name")

        return ret;
    },

    isUserAllowed : (command, usr) => {
        // search for roles

        // by default user does have permission (array lenght 0)
        let permission = true;

        if (command.perms.length > 0) {
            // there are permissions so assume user has no perms
            // and show user has permission
            permission = false
            command.perms.every (cRoleName => {
                if (usr.roles.cache.some (aRole => aRole.name === cRoleName)) {
                    permission = true;
                    return false
                }
            })
        }

        return permission
    },

    randrange : (x) => {
        return Math.floor((Math.random() * (x)))
    },

    getRandomFrom : (collection) => {
        return collection[randrange (collection.length)]
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
        ]

        return homestuck.includes(word)
    }
}