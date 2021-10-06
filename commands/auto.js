const { SlashCommandBuilder } = require("@discordjs/builders");

/* "auto": This command is used to auto-unarchive threads. When a thread's state is updated - so when it archives naturally - this gets called and unarchives it. */

module.exports = {
  data: new SlashCommandBuilder()
    .setName("auto")
    .setDescription("Will auto-unarchive the thread that this command is called in."),

  async execute(interaction) {
    if (!interaction.channel.isThread()) {
      return interaction.reply(`
      \`\`\`Sorry - I only work inside threads!\`\`\`
      `);
    } 
    interaction.channel.markForAuto = true;
    return interaction.reply(`\`\`\`Hooray! This thread will never be archived again!\`\`\``);
  },

};