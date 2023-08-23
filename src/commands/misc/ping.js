module.exports = {
    name: 'ping',
    description: 'Pong!',
    // devOnly: Boolean
    // testOnly: Boolean,
    // options: Object[],
    // deleted: Boolean,

    callback: (client, interaction) => {
        interaction.reply(`Pong! Replied in ${client.ws.ping}ms!`);
    },
};