exports.run = function(bot, message, args) {
	const discord = require('discord.js')
	var embed = new discord.RichEmbed()
	.setColor("#9f0000").setFooter('Bot by Zer0#3302', 'https://cdn.discordapp.com/attachments/134436989175988224/271616333928464395/avatar7.png')
	.addField('User', message.author)
	.addField("Suggestion", args.join().replace(/,/g," "))
	.setTimestamp()
	bot.channels.get('275965430474997760').sendEmbed(embed)
    message.channel.sendMessage("Your suggestion has been sent! Thanks for your support.")
}
