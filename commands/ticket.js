exports.run = function(bot, message, args) {
	var newArgs = message.content.split(/-/g)
	if (newArgs.length !== 3) {
		message.channel.sendMessage("Wrong amount of arguments \n ``.ticket <Ticket Name> - <User> - <Question>`` \n Use Hypen as seperators \n Use :x: and :white_check_mark: as status")
		return
	}
	const discord = require('discord.js')
	var embed = new discord.RichEmbed()
	.setColor("#9f0000").setFooter('Bot by Zer0#3302', 'https://cdn.discordapp.com/attachments/134436989175988224/271616333928464395/avatar7.png')
	.setURL('https://discord.me/DiscJamDojo')
	.setTitle(newArgs[0].replace('.ticket ',''))
	.addField('User', newArgs[1])
	.addField('Question', newArgs[2])
	.setTimestamp()
	bot.channels.get('273546339701358592').sendEmbed(embed)
    message.channel.sendMessage("Ticket Created!")
}
