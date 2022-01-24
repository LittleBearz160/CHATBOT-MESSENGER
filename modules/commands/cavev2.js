const fs = require("fs");
module.exports.config = {
    name: "cave",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡D-Jukie mod by Trun", // Code working của diện,trun mod
    description: "💴Đ𝐢 𝐥𝐚̀𝐦 𝐜𝐚𝐯𝐞 𝐯𝐨̛́𝐢 𝐜𝐚́𝐜 𝐚𝐧𝐡 𝐜𝐮 𝐝𝐚̀𝐢",
    commandCategory: "Economy",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1000000 
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "cave.png")) request("https://we25.vn/media2018/Img_News/2019/08/04/sau-buc-anh-xinh-dep-chup-tren-pho-tran-duy-hung-co-gai-nhan-loat-tin-nhan-nhay-cam1_20190804123102.jpeg").pipe(fs.createWriteStream(dirMaterial + "cave.png"));
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
//random coins nhận được khi làm việc ít nhất 200
var tdh = Math.floor(Math.random() * 10000) + 2000; //random coins khi làm cave ở Trần Duy Hưng
var pnl = Math.floor(Math.random() * 10000) + 2000; //random coins khi làm cave ở Phạm Ngũ Lão
var nht = Math.floor(Math.random() * 10000) + 2000; //random coins khi làm cave ở Nguyễn Huy Tự
//random ku dài
var tdhs = ['10cm', '20cm', '30cm', '40cm', '50cm']; //random độ dài của ku 
var ku1 = tdhs[Math.floor(Math.random() * tdhs.length)];   

var pnls = ['10cm', '20cm', '30cm', '40cm', '50cm']; //random độ dài của ku
var ku2 = pnls[Math.floor(Math.random() * pnls.length)]; 

var nhts = ['10cm', '20cm', '30cm', '40cm', '50cm']; //random độ dài của ku
var ku3 = nhts[Math.floor(Math.random() * nhts.length)]; 
var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `🦋Bạn đã mây mưa 1 đêm với anh cu dài ${ku2} ở 𝐓𝐫𝐚̂̀𝐧 𝐃𝐮𝐲 𝐇𝐮̛𝐧𝐠 và kiếm được ${pnl}$`; Currencies.increaseMoney(event.senderID, pnl); break;            
                case "2": msg = `🦋Bạn đã mây mưa 1 đêm với anh cu dài ${ku2} ở 𝐏𝐡𝐚̣𝐦 𝐍𝐠𝐮̃ 𝐋𝐚̃𝐨 và kiếm được ${pnl}$`; Currencies.increaseMoney(event.senderID, pnl); break;
                case "3": msg = `🦋Bạn đã mây mưa 1 đêm với anh cu dài ${ku3} ở 𝐍𝐠𝐮𝐲𝐞̂̃𝐧 𝐇𝐮𝐲 𝐓𝐮̛̣ và kiếm được ${nht}$`; Currencies.increaseMoney(event.senderID, nht); break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("🦋Vui lòng nhập 1 con số", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("🦋Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "🦋Chưa update...") {
                msg = "🦋Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 1, 2022") - Date.parse(new Date()),
    d = Math.floor( t/(1000*60*60*24) ),
    h = Math.floor( (t/(1000*60*60)) % 24 ),
    m = Math.floor( (t/1000/60) % 60 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 2000),
            seconds = ((time/1000) % 60).toFixed(0); 
        return api.sendMessage(`💎Bạn đã làm cave cả đêm. Hãy quay lại sau ${minutes} giây 🎋.`, e.threadID, e.messageID); // Đoạn này ae có thể để quay lại sau ${housr}giờ ${minutes}phút ${seconds}giây
    }
    else {    
        var msg = {
            body: "🎋Bảng chọn đường để đứng🎋" +
                "\n𝟏. 🦋 𝐓𝐫𝐚̂̀𝐧 𝐃𝐮𝐲 𝐇𝐮̛𝐧𝐠 💴 " +
                "\n𝟐.🦋 𝐏𝐡𝐚̣𝐦 𝐍𝐠𝐮̃ 𝐋𝐚̃𝐨  💶 " +
                "\n𝟑. 🦋 𝐍𝐠𝐮𝐲𝐞̂̃𝐧 𝐇𝐮𝐲 𝐓𝐮̛̣ 💷 " +
                `\n\n🧨Hãy relpy STT đường bạn muốn đứng🧨`,
                attachment: fs.createReadStream(__dirname + `/cache/cave.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}