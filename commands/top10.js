exports.run = function(bot, message, args) {
	const discord = require('discord.js')
	const randHex = require('random-hex-color')
	const top10 = require('../top10.json')
	var embed = new discord.RichEmbed()
	.setColor(randHex())
	.setAuthor("RoboDisc", "https://cdn.discordapp.com/attachments/220845173150711808/268740555213635584/4ec94a0d2c43c6a603170d4d2c5e0376.jpg")
	.setTitle("Top 10 Global Ranking")
	.setURL('https://goo.gl/99oQsm')
	.setDescription("Click the Blue title for the full spreadsheet")
	for (var I in top10) {
		if (embed.fields === 10) {
			message.channel.sendEmbed(embed)
			return
		} else {
			embed.addField("Rank: " + I +" "+ top10[I].Name, "Points: " + top10[I].Points)
		}
	}
}
