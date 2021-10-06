const { SlashCommandBuilder } = require("@discordjs/builders");

/* "auto-off": This command is used to turn off the auto-unarchive feature of this bot. */

module.exports = {
  data: new SlashCommandBuilder()
    .setName("auto-off")
    .setDescription("Turns off auto-unarchiving for this thread."),

  async execute(interaction) {
    if (!interaction.channel.isThread()) {
      return interaction.reply(`
      \`\`\`Sorry - I only work inside threads!\`\`\`
      `);
    }
    if (!interaction.channel.markForAuto) {
      return interaction.reply(`\`\`\`No worries - this thread was never set to "auto-unarchive" :)\`\`\``)
    } 
    interaction.channel.markForAuto = false;
    return interaction.reply(`\`\`\`Okay, I'll stop watching this thread :)\`\`\``);
  },
  
};