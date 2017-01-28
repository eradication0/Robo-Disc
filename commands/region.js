exports.run = function(bot, message, args) {
    if (!message.channel.id === "274875151269625857") {
        return
    }
    if (message.member.roles.has('271996314265321472') || message.member.roles.has('271996189736566794') || message.member.roles.has('271996418237923339') || message.member.roles.has('273454098034982912')) {
        message.channel.sendMessage("You already set your Region")
    } else if (args[0] === "NA") {
        message.member.addRole("271996189736566794")
        message.channel.sendMessage("Region set to NA")
    } else if (args[0] === "EU") {
        message.member.addRole("271996314265321472")
        message.channel.sendMessage("Region set to EU")
    } else if (args[0] === "OC") {
        message.member.addRole("271996418237923339")
        message.channel.sendMessage("Region set to OC")
    } else if (args[0] === "SA") {
        message.member.addRole("273454098034982912")
        message.channel.sendMessage("Region set to SA")
    }  else if (args[0] === "AS") {
        message.member.addRole("274901595618279426")
        message.channel.sendMessage("Region set to AS")
    }  else if (args[0] === "AF") {
        message.member.addRole("274902045230759936")
        message.channel.sendMessage("Region set to AF")
    } else {
        message.channel.sendMessage("Could not find that region be sure to write NA, EU, OC, SA, AS or AF")
    }
}
