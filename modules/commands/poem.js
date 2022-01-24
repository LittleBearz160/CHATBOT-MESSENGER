module.exports.config = {
 name: "poem",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "VanHung",
 description: "Thơ Ca Việt Nam",
 commandCategory: "Horoscope",
 usages: "poem",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get(`https://le31.glitch.me/other/poem?key=8319b2f48ecf9474edb77fe78e4dd1f623eb6a02`);
const anh = await axios.get(`https://khanhhuyen.ocvat2810.repl.co/`);
var gai = anh.data.data.substring(anh.data.data.lastIndexOf(".") + 1);
var cadao = res.data.data
let callback = function () {
    api.sendMessage({
    body: `★Thơ Ca Việt Nam★:\n﹤ ${cadao} ﹥`,
    attachment: fs.createReadStream(__dirname + `/cache/gaicadao.${gai}`)
   }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gaicadao.${gai}`), event.messageID);
   };
   request(anh.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gaicadao.${gai}`)).on("close", callback);
}