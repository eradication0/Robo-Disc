exports.run = function(bot, message, args) {
	const discord = require('discord.js')
	var embed = new discord.RichEmbed()
	.setTitle("Commands")
	.addField(".disctionary <search term>", "Use this to search in the Disctionary. Over 10 results will be posted in DM's to prevent spam. When no search term is provided it will DM you the whole disctionary. Feel free to provide any screenshots or additions.")
	.addField(".top10", "Shows the global top players list and the amount of points they have, including the link to the spreadsheet")
	.addField(".ping", "pings the bot")
	.addField(".help", "shows this message")

	message.channel.sendEmbed(embed)
}
