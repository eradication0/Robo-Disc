exports.run = function(bot, message, args) {
    if (message.channel.id === '274880935600717824') {
		const discord = require('discord.js')
        const main = require('../bot.js')
        kofth = main.kofth
        if (args[0] === 'join') {
            if (kofth[0] === 'stop') {
                message.channel.sendMessage("no tourney set up at the moment")
                return
            }
            if (kofth[0] === 'start') {
                message.channel.sendMessage("tournament already started")
                return
            }
            for (var I in kofth) {
                if (kofth[I] === message.author.id) {
                    message.channel.sendMessage('You already entered, you cannot enter 2 times. Wait untill you are done playing.')
                    return
                }
            }
            kofth.push(message.author.id)
            let position = kofth.length - 1
            message.channel.sendMessage('You got added to the current King of the Hill event. Your position is **#' + position + '**')
            exports.kofth = kofth
        } else if (args[0] === 'leave') {
            if (kofth[0] === 'stop') {
                message.channel.sendMessage("no tourney set up at the moment")
                return
            }
            if (kofth[0] === "start") {
                message.channel.sendMessage("The King of the Hill event already started, you cant leave now. Message the tournament hoster if you dont want to participate anymore.")
                return
            }
            for (var I in kofth) {
                if (kofth[I] === message.author.id) {
                    kofth.splice(I, I)
                    message.channel.sendMessage('Just deleted you from the current King of the Hill event. Your position was **#' + I + '**')
                    exports.kofth = kofth
                    return
                }
            }
            message.channel.sendMessage('Could not find your name in the current King of the Hill event.')
        } else if (args[0] === 'next') {
            if (kofth[0] === 'stop') {
                message.channel.sendMessage("no tourney set up at the moment")
                return
            }
            if (kofth[0] === 'ready') {
                message.channel.sendMessage("Tournament did not start yet")
                return
            }
            if (message.member.roles.has("273295168180977664")) {
                challenger += 1
				console.log(challenger)
                var I = challenger
                message.channel.sendMessage("The next challenger is <@" + kofth[I] + ">")
                exports.challenger = challenger
            } else {
                message.channel.sendMessage('You dont have permission to use that command.')
            }
        } else if (args[0] === 'ready') {
            if (kofth[0] === 'start') {
                message.channel.sendMessage("tournament already started")
                return
            }
            if (kofth[0] === 'ready') {
                message.channel.sendMessage("Tournament is already ready")
                return
            }
            if (message.member.roles.has("273295168180977664")) {
                kofth[0] = "ready"
                exports.kofth = kofth
                message.channel.sendMessage("Tournament is now open. Use ``.koth join`` to join the challenger list")
            } else {
                message.channel.sendMessage('You dont have permission to use that command.')
            }
        } else if (args[0] === 'start') {
            if (kofth[0] === 'start') {
                message.channel.sendMessage("tournament already started")
                return
            }
            if (kofth[0] === 'stop') {
                message.channel.sendMessage("No tournament is setup")
                return
            }
            if (message.member.roles.has("273295168180977664")) {
                kofth[0] = "start"
                exports.kofth = kofth
                message.channel.sendMessage("Tournament started! Challengers are closed now! First challenger <@" + kofth[1] + "> VS. <@" + kofth[2] + ">")
            } else {
                message.channel.sendMessage('You dont have permission to use that command.')
            }
        } else if (args[0] === 'stop') {
            if (kofth[0] === 'stop') {
                message.channel.sendMessage("no tourney setup")
                return
            }
            if (message.member.roles.has("273295168180977664")) {
                if (kofth[0] === 'ready') {
                    message.channel.sendMessage("Tournament cancelled")
                    kofth.splice(1)
                    kofth[0] = ['stop']
                    exports.kofth = kofth
                    return
                }
                if (kofth[0] === 'start') {
                    message.channel.sendMessage("Tournament has ended!")
                    kofth.splice(1)
                    kofth[0] = ['stop']
                    exports.kofth = kofth
                    return
                } else {
                    message.channel.sendMessage('You dont have permission to use that command.')
                }
            }
        } else if (args[0] === 'list') {
            if (kofth[0] === 'stop') {
                message.channel.sendMessage("no tourney setup")
                return
            }
			const embed = new discord.RichEmbed()
            if (kofth[0] === 'ready') {
                for (var I in kofth) {
					I += 1
                	if (I === 10) {
						message.channel.sendEmbed(embed)
						return
                	} else if (I = kofth.length) {
						message.channel.sendEmbed(embed)
						return
                	} else {
                		embed.addField("Placement #" + I, "<@" + kofth[I] + ">")
                	}
                }
                kofth.splice(1)
                kofth[0] = ['stop']
                exports.kofth = kofth
                return
            }
            if (kofth[0] === 'start') {
                message.channel.sendMessage("Tournament has ended!")
                kofth.splice(1)
                kofth[0] = ['stop']
                exports.kofth = kofth
                return
            } else {
                message.channel.sendMessage('You dont have permission to use that command.')
            }
        }
    }
}
