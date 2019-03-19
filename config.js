// config.js

//==========================================================================
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
//vvvvv Customization Starts vvvvv
const config = {
  app:null,
  db: { host: 'localhost', port: 27017, name: 'db' },
  redis:
  { default: { port: 6379 },
    development: { host: '127.0.0.1' },
    production: { host: '192.168.0.11' }
  },
  friendEnabled: false,
  msgKW1: 'ding',
  msgKW2: 'dong',
  fromRoomName:'小桔和小理',
  toRoomName:'小桔和小理'
}
//^^^^^ Customization Ends ^^^^^
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//==========================================================================

exports.config =  config
