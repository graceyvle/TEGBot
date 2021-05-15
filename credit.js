module.exports = {
    name: 'credit',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}credit',

    execute(client, message) {
        
        message.delete();
        
        message.channel.send({
            embed: {
                color: 'PURPLE',
                author: { name: "credits" },
                fields: [
                    {name: 'Moderation:', value: "Developed by: Patriot Zest "},
                    {name: 'Welcome:', value: "Developed by: Patriot Zest"},
                    {name: 'Suggestions:', value: "Developed by: Patriot Zest"},
                    {name: 'Custom-Commands:', value: "Developed by: Patriot Zest"},
                    {name: 'Music:', value: "Developed by: Philipp"},
                    {name: 'embed-messsages', value: "Developed by: Philipp"},
                    {name: 'Support Team Information:', value: "Developed by: BenTheTechGuy"},
                    {name: 'Project Organizer:', value: "BenTheTechGuy"}
                ]
            },
        });}}
