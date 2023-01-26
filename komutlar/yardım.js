const { MessageEmbed } = require("discord.js");

module.exports = {

    description: 'AspectBot Tüm Komutlar',
    run: async (client, interaction) => {
        const gweep = new MessageEmbed().setTitle(client.user.username + "  Uptime Yardım Menüsü")
        .addField("Uptime Et!","\`.ekle <link>\`",false)
        .addField("Sil!","\`.sil <link>\`",false)
        .addField("Listele!","\`.listeter\`",false)
        .setThumbnail(client.user.avatarURL())
        .setFooter(`${interaction.member.user.tag} tarafından istendi`);
        interaction.reply({embeds:[gweep]});
    } 
};
