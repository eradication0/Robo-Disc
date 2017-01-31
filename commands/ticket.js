exports.run = function(bot, message, args) {
	var newArgs = message.content.split(/-/g)
	if (newArgs.length !== 3) {
		message.channel.sendMessage("Wrong amount of arguments \n ``.ticket <Ticket Name> - <User> - <Question>`` \n Use Hypen as seperators \n Use :x: and :white_check_mark: as status")
		return
	}
	const discord = require('discord.js')
	var embed = new discord.RichEmbed()
	.setColor("#9f0000")
	.setFooter(message.author.username, message.author.avatarURL)
	.setURL('https://discord.me/DiscJamDojo')
	.setTitle(newArgs[0].replace('.ticket ',''))
	.addField('User', newArgs[1])
	.addField('Question', newArgs[2])
	.setTimestamp()
	bot.channels.get('273546339701358592').sendEmbed(embed)
    message.channel.sendMessage("Ticket Created!")
}
