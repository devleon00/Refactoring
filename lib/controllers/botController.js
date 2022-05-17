const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./ExplorerController");
require("dotenv").config();

// replace the value below with the Telegram token you receive from @BotFather
class Bot {
  static run() {
    // Create a bot that uses 'polling' to fetch new updates
    this.bot = new TelegramBot(process.env.TOKEN, { polling: true });

    // Matches "/echo [whatever]"
    this.bot.onText(/\/echo (.+)/, (msg, match) => {
      // 'msg' is the received Message from Telegram
      // 'match' is the result of executing the regexp above on the text content
      // of the message

      const chatId = msg.chat.id;
      const resp = match[1]; // the captured "whatever"

      // send back the matched "whatever" to the chat
      this.bot.sendMessage(chatId, resp);
    });

    // Listen for any kind of message. There are different kinds of
    // messages.
    this.bot.on("message", (msg) => {
      const chatId = msg.chat.id;
      const numberToApplyFb = parseInt(msg.text);

      if (!isNaN(numberToApplyFb)) {
        const fizzbuzzTrick =
          ExplorerController.applyValidationInNumber(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        this.bot.sendMessage(chatId, responseBot);
      } else {
        if (msg.text === "node" || msg.text === "java") {
          const explorers = ExplorerController.getExplorersByMission(msg.text);
          const mapExplorers = explorers.map((explorer) => {
            return explorer.name
            ;
          });
          const responseBot = `Explorers de ${msg.text}: ${mapExplorers.join(
            ", "
          )}`;
          this.bot.sendMessage(chatId, responseBot);
        } else {
          this.bot.sendMessage(chatId, "Envía un número válido");
        }
      }
    });
  }
}

module.exports = Bot;
