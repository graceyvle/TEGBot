module.exports = {
    name: 'windows-setup',
    aliases: ['ws'],
    category: 'spteam-commands',
    utilisation: '{prefix}windows-setup',

    execute(client, message) {
       
       message.channel.send("this tutorial will lead you how to do a fresh windows installation:  (all your data will be gone back it up and use **!key** in case you need to  backing up your registration key too , please save it somewhere safe and don´t show us or anyone the key!)");
 
       message.channel.send("https://youtu.be/bwJ_E-I9WRs")
       
        message.channel.send({
            embed: {
                color: 'BLUE',
                author: { name: "One-time Boot Keys:" },
                fields: [
                    {name: 'Dell, Toshiba, Huawei, Lenovo:', value: "F12"},
                    {name: 'Acer:', value: "F12, F9, F2, Esc"},
                    {name: 'Apple:', value: "Option / Alt"},
                    {name: 'Asus:', value: "Esc"},
                    {name: 'HP:', value: "F9"},
                    {name: 'Intel:', value: "F10"},
                    {name: 'MSI:', value: "F11"},
					{name: 'Samsung:', value: "Esc, F12, F2"},
					{name: 'Sony:', value: "Esc, F10, F11"},
					{name: 'Other Common Ones:', value: "F2, F10, F12, Esc, Del"}
                ]
            },
        });}}


