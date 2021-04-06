module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: "Disconnected from VC" },
            footer: { text: 'ready as always!' },
            fields: [
                { name: 'VC:', value:message.member.voice.channel.name, inline: true },
                {name : `reason:`, value: "The queue is empty!"},
                {name: "ping", value: client.ws.ping}
            ],
            timestamp: new Date(),
        },
    });

};
