
const finis = require('finis')
const { Wechaty } = require('wechaty')

const bot = Wechaty.instance({ profile: "default"})

async function main() {

  bot
    .on('scan',     './listeners/on-scan')
    .on('login',    './listeners/on-login')
    .on('message',  './listeners/on-message')
    //.on('friend',   './listeners/on-friend')
    .start()
    .catch(async function(e) {
      console.log(`Init() fail: ${e}.`)
      await bot.stop()
      process.exit(1)
    })
}

main()

finis((code, signal, error) => {
  console.log('Importand data saved at this step.')
  
  // await bot.stop()
  bot.stop()
  console.log(`Wechaty exit ${code} because of ${signal}/${error})`)
  process.exit(1)
})

