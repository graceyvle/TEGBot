const { VoiceBroadcast } = require("discord.js");

module.exports = (client, message, ) => {
    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: "Disconnected from VC" },
            footer: { text: 'ready as always!' },
            fields: [
                {name: "ping", value: client.ws.ping}
            ],
            timestamp: new Date(),
        },
    });

};

