exports.run = function(bot, message, args) {
	const discord = require('discord.js')
	var embed = new discord.RichEmbed()
	.setTitle('Commands')
	.setURL('https://discord.me/DiscJamDojo')
	.setColor('#990000')
	.addField('.disctionary <search term>', "Use this to search in the Disctionary. Over 10 results will be posted in DM's to prevent spam. When no search term is provided it will DM you the whole disctionary. Feel free to provide any screenshots or additions.")
	.addField('.top10', 'Shows the global top players list and the amount of points they have, including the link to the spreadsheet')
	.addField('.ping', 'Pings the bot')
	.addField('.region <region>', 'Sets your region for this server (only usable in the #set-region channel)')
	.addField('.suggestion <text>', 'Sends a suggestion to the DJD staff.')
	.addField('.help', 'Shows this message')
	message.channel.sendEmbed(embed)
}
