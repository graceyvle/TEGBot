module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const staff_re = message.client.commands.filter(x => x.category == 'staff-re').map((x) => '`' + x.name + '`').join(', ');
            const spteam_commands = message.client.commands.filter(x => x.category == 'spteam-commands').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Help pannel' },
                    footer: { text: 'ready as always' },
                    fields: [
                        { name: 'Infos', value: infos },
                        { name: 'Music', value: music },
                        {name: 'Staff-re', value:staff_re },
                        {name: 'Support Team Commands', value:spteam_commands },
                        { name: 'Music Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `To use filters, ${client.config.discord.prefix}filter (the filter). Example : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Help pannel' },
                    footer: { text: 'ready as always' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Alias(es)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};
