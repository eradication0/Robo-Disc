exports.run = function(bot, message, args) {
    var gameStatus = args.join();
    if (message.author.id === '64438454750031872') {
        bot.user.setGame(gameStatus.replace(",", " "))
    } else {
        message.channel.sendMessage('You dont have permission to execute that command')
    }
}
