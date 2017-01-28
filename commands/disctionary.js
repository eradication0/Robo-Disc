exports.run = function(bot, message, args) {
    const discord = require('discord.js')
    const randHex = require('random-hex-color')
    const jsonfile = require('jsonfile')
    const discDB = require('../disctionary.json')
    const find = require("array-find")
    var embed = new discord.RichEmbed()
    var discSearch = args.join().replace(/,/g, ' ')
    var discAry = []
    var searchResults = []

    for (var I in discDB) {
        discAry.push(I)
    }

    function arySearch(ary, str) {
        for (var i = 0; i < ary.length; i++) {
            var re = new RegExp(str, "ig")
            let currentString = ary[i]
            if (currentString.match(re)) {
                searchResults.push(ary[i])
            }
        }
    }

    arySearch(discAry, discSearch)

    if (args.length === 0) {
        embed.setTitle('Full Disc-Jam Disctionary').setURL('https://docs.google.com/spreadsheets/d/10x159dVPtLWXmwxv8SOZfVBGo3XylJoeLiOwhQEix_8/edit#gid=0')
        for (I in discDB) {
            if (embed.fields.length === 10) {
                embed.setColor(randHex())
                if (!message.member) {
                    message.channel.sendEmbed(embed)
                    embed = new discord.RichEmbed()
                } else {
                    message.member.sendEmbed(embed)
                    embed = new discord.RichEmbed()
                }
            }
            if (typeof discDB[I].img !== "undefined") {
                embed.addField(I, discDB[I].text + ' ' + discDB[I].img)
            } else if (typeof discDB[I].link !== "undefined") {
                embed.addField(I, discDB[I].text + ' ' + discDB[I].link)
            } else {
                embed.addField(I, discDB[I].text)
            }
        }
        embed.setColor(randHex()).setTitle('last ' + embed.fields.length + ' fields')
        message.member.sendEmbed(embed)
        message.channel.sendMessage("I sent you the whole Disctionary. Check your DM's")
    } else if (searchResults.length === 1) {
        embed = new discord.RichEmbed().setColor(randHex()).setAuthor("RoboDisc", "https://cdn.discordapp.com/attachments/220845173150711808/268740555213635584/4ec94a0d2c43c6a603170d4d2c5e0376.jpg").setTitle(searchResults[0]).setURL('http://discord.gg/discjam').setDescription(discDB[searchResults[0]].text)
        if (typeof discDB[searchResults[0]].img !== "undefined") {
            embed.setImage(discDB[searchResults[0]].img)
        } else if (typeof discDB[searchResults[0]].link !== "undefined") {
            embed.addField(":link:", discDB[searchResults[0]].link)
        }
        message.channel.sendEmbed(embed)
            // OVER 10 SEARCH RESULTS
    } else if (searchResults.length < 10) {
        embed = new discord.RichEmbed().setColor(randHex()).setAuthor("RoboDisc", "https://cdn.discordapp.com/attachments/220845173150711808/268740555213635584/4ec94a0d2c43c6a603170d4d2c5e0376.jpg").setTitle(searchResults[0]).setURL('http://discord.gg/discjam').setDescription(discDB[searchResults[0]].text)
        if (typeof discDB[searchResults[0]].img !== "undefined") {
            embed.setImage(discDB[searchResults[0]].img)
        } else if (typeof discDB[searchResults[0]].link !== "undefined") {
            embed.addField(":link:", discDB[searchResults[0]].link)
        }
        message.channel.sendEmbed(embed)
        embed = new discord.RichEmbed().setColor(randHex()).setAuthor("RoboDisc", "https://cdn.discordapp.com/attachments/220845173150711808/268740555213635584/4ec94a0d2c43c6a603170d4d2c5e0376.jpg").setTitle('Here are your ' + searchResults.length + ' search results').setURL('http://discord.gg/discjam')
        for (var i = 0; i < searchResults.length; i++) {
            if (typeof discDB[searchResults[i]].img !== "undefined") {
                embed.addField(searchResults[i], discDB[searchResults[i]].text + ' ' + discDB[searchResults[i]].img)
            } else if (typeof discDB[searchResults[i]].img !== "undefined") {
                embed.addField(searchResults[i], discDB[searchResults[i]].text + ' ' + discDB[searchResults[i]].img)
            } else {
                embed.addField(searchResults[i], discDB[searchResults[i]].text)
            }
        }
        message.channel.sendEmbed(embed)


        // OVER 10 MESSAGES
    } else if (searchResults.length > 10) {
        // MESSAGE COMING FROM SERVER
        if (!message.member) {
            // PREVIEW POSTS
            embed = new discord.RichEmbed().setColor(randHex()).setAuthor("RoboDisc", "https://cdn.discordapp.com/attachments/220845173150711808/268740555213635584/4ec94a0d2c43c6a603170d4d2c5e0376.jpg").setTitle(searchResults[0]).setURL('http://discord.gg/discjam').setDescription(discDB[searchResults[0]].text)
            if (typeof discDB[searchResults[0]].img !== "undefined") {
                embed.setImage(discDB[searchResults[0]].img)
            } else if (typeof discDB[searchResults[0]].link !== "undefined") {
                embed.addField(":link:", discDB[searchResults[0]].link)
            }
            message.channel.sendEmbed(embed)
                // SEARCH POSTS
            embed = new discord.RichEmbed().setColor(randHex()).setAuthor("RoboDisc", "https://cdn.discordapp.com/attachments/220845173150711808/268740555213635584/4ec94a0d2c43c6a603170d4d2c5e0376.jpg").setTitle('Here are your ' + searchResults.length + ' search results').setURL('http://discord.gg/discjam')
            for (var i = 0; i < searchResults.length; i++) {
                if (embed.fields.length === 10) {
                    message.channel.sendEmbed(embed)
                    embed = new discord.RichEmbed().setColor(randHex()).setAuthor("RoboDisc", "https://cdn.discordapp.com/attachments/220845173150711808/268740555213635584/4ec94a0d2c43c6a603170d4d2c5e0376.jpg").setTitle('Here are your ' + searchResults.length + ' search results').setURL('http://discord.gg/discjam')
                }
                if (typeof discDB[searchResults[i]].img !== "undefined") {
                    embed.addField(searchResults[i], discDB[searchResults[i]].text + ' ' + discDB[searchResults[i]].img)
                } else if (typeof discDB[searchResults[i]].img !== "undefined") {
                    embed.addField(searchResults[i], discDB[searchResults[i]].text + ' ' + discDB[searchResults[i]].img)
                } else {
                    embed.addField(searchResults[i], discDB[searchResults[i]].text)
                }
            }
            message.channel.sendEmbed(embed)
        // MESSAGE COMING FROM DM
        } else {
          // PREVIEW POST
            embed = new discord.RichEmbed().setColor(randHex()).setAuthor("RoboDisc", "https://cdn.discordapp.com/attachments/220845173150711808/268740555213635584/4ec94a0d2c43c6a603170d4d2c5e0376.jpg").setTitle(searchResults[0]).setURL('http://discord.gg/discjam').setDescription(discDB[searchResults[0]].text)
            if (typeof discDB[searchResults[0]].img !== "undefined") {
                embed.setImage(discDB[searchResults[0]].img)
            } else if (typeof discDB[searchResults[0]].link !== "undefined") {
                embed.addField(":link:", discDB[searchResults[0]].link)
            }
            message.member.sendEmbed(embed)
            // SEARCH POSTS
            embed = new discord.RichEmbed().setColor(randHex()).setAuthor("RoboDisc", "https://cdn.discordapp.com/attachments/220845173150711808/268740555213635584/4ec94a0d2c43c6a603170d4d2c5e0376.jpg").setTitle('Here are your ' + searchResults.length + ' search results').setURL('http://discord.gg/discjam')
            for (var i = 0; i < searchResults.length; i++) {
                if (embed.fields.length === 10) {
                    message.member.sendEmbed(embed)
                    embed = new discord.RichEmbed().setColor(randHex()).setAuthor("RoboDisc", "https://cdn.discordapp.com/attachments/220845173150711808/268740555213635584/4ec94a0d2c43c6a603170d4d2c5e0376.jpg").setTitle('Here are your ' + searchResults.length + ' search results').setURL('http://discord.gg/discjam')
                }
                if (typeof discDB[searchResults[i]].img !== "undefined") {
                    embed.addField(searchResults[i], discDB[searchResults[i]].text + ' ' + discDB[searchResults[i]].img)
                } else if (typeof discDB[searchResults[i]].img !== "undefined") {
                    embed.addField(searchResults[i], discDB[searchResults[i]].text + ' ' + discDB[searchResults[i]].img)
                } else {
                    embed.addField(searchResults[i], discDB[searchResults[i]].text)
                }
            }
            message.member.sendEmbed(embed)
        }

    } else if (searchResults.length === 0) {
        message.channel.sendMessage("Nothing found, please try again.")
    }
}
