////////////////////////////////////////////////////////////////////////////
// Program: monster
// Purpose: monster all-in-one demo of Wechaty hot
// Authors: Tong Sun (c) 2018, All rights reserved
//          Huan LI  (c) 2018, All rights reserved
//          xinbenlv (c) 2017, All rights reserved
////////////////////////////////////////////////////////////////////////////

/**
 *   Wechaty - https://github.com/chatie/wechaty
 *
 *   @copyright 2016-2017 Huan LI <zixia@zixia.net>
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */

const fs = require('fs')
const { hotImport } = require('hot-import')
const {config}   = require('./../config');
const { Message, Misc, log } = require('wechaty')
const path = require('path');

exports.default =  async function onMessage (message) {
  try {
    console.log(`RECV: ${message}`)
    if (message.self()) {
      console.log('this message is sent by myself!')
      return;
     }
    const room      = message.room()
    const sender    = message.from()
    const content   = message.text()
    const roomName  = room ? `${await room.topic()}` : ''

    process.stdout.write(`${roomName}<${sender.name()}>(${message.type()}:): `)
    // const config = await hotImport('./../config.js')
   
    if(roomName&&roomName===config.fromRoomName){
      console.log(`${roomName}`);
      // if(message.type()===Message.Type.Audio){
      //   await saveMediaFile(message);
      // }
      // const contact1 = await config.app.Contact.find({name: '萌桑～'});
      // //const contacts = await config.app.Contact.findAll();
      // await contact1.say('123');
      // await message.forward(contact1);

      const roo = await config.app.Room.find({topic: config.fromRoomName});

      await message.forward(roo);

    }
    // const contact = await config.app.Contact.find({name: '萌桑～'});
    // await message.forward(contact);
    if (content =='ding'){
      await message.say('yoyoyo12')
      return;
    }
    

    
  } catch (e) {
    log.error('Bot', 'on(message) exception: %s' , e)
  }
}
async function saveMediaFile(msg) {
  console.log(`RECV: ${msg}`)
  const file = await msg.toFileBox()
  const name = file.name
  // const filename = './../audioFiles/'+name;
  console.log('Save file to: ' + name)
  await file.toFile(path.join(__dirname,'../audioFiles',name));
}
async function transmitAudioMsg(msg){

}

