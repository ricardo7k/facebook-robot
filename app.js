'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAKEdrtAK54BAE3RPy3KjDjl17cjAxqdPv2sjWSe4dAX0jn2YxNvJYZBBgDmPmPBlIWY6dFM4SKYQLPOZBA2KBiBTwgNNwUQ7MP41egebMZBpc5ADjY1qN20Kgnm1iF9nqWZCRDzmXNpkK3rIlZByf5TuSXz4T9SLdF864CtvBgZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})
var saudou = false;
bot.on('message', (payload, reply) => {
  let textp = payload.message.text;
  let text = "";
  bot.getProfile(payload.sender.id, (err, profile) => {
    if(!saudou) {
      text = "E ai " + profile.first_name + ", ";
      saudou = true;
    } else {
      text = "";
    }
    if(textp.toLowerCase()=="gaveta") {
      bot.sendMessage(
        payload.sender.id,
        {
          "attachment":{
            "type":"template",
            "payload":{
              "template_type":"generic",
              "elements":[
                {
                  "title":"Ag2Nurun",
                  "item_url":"https://www.ag2nurun.com.br",
                  "image_url":"http://www.ag2nurun.com.br/assets/images/projetos/hilux-day/engajamento-fb.png",
                  "subtitle":"Trabalhos",
                  "buttons":[
                    {
                      "type":"web_url",
                      "url":"http://www.ag2nurun.com.br",
                      "title":"Ir para o site"
                    }
                  ]
                },
                {
                  "title":"Ag2Sapient",
                  "item_url":"https://www.ag2nurun.com.br",
                  "image_url":"http://www.ag2nurun.com.br/assets/images/projetos/hilux-day/engajamento-fb.png",
                  "subtitle":"Trabalhos",
                  "buttons":[
                    {
                      "type":"web_url",
                      "url":"http://www.ag2nurun.com.br",
                      "title":"Sim"
                    },
                    {
                      "type":"web_url",
                      "url":"http://www.ag2nurun.com.br",
                      "title":"Não"
                    }
                  ]
                }
              ]
            }
          }
          // "attachment": {
          //   "type": "image",
          //   "payload": {
          //   	"url": "http://www.ag2nurun.com.br/assets/images/projetos/hilux-day/engajamento-fb.png",
          //     "is_reusable": true
          //   }
          // }
        },
        (err, profile) => {
          for(var i in err) {
            console.log(i, ": ", err[i])
          }
          if (err) throw err
            console.log('Mandou mensagem direta para ' + 1415953085101725)
        }
      );
    } else {
      switch(textp.toLowerCase()) {
        case "corinthians" :
          text += "é nóis.";
          break;
        case "vida":
          text += "são coisas muito amplas.";
          break;
        case "ag2":
          text += "baita agência, hein...";
          break;
        case "nurun":
          text += "no canadá é bem bacana...";
          break;
        case "sapient":
          text += "eles são demais...";
          break;
        default :
          text += "não sei o que você quis dizer com '" + textp + "'";
          break;
      }
      console.log(payload.sender.id, profile.first_name);
      for(var i in err) {
        console.log(i, ": ", err[i])
      }
      if (err) throw err
      reply({ text }, (err) => {
        if (err) throw err
        console.log('Respondeu')
      });
    }
  });
});
//
// bot.sendMessage(
//   "1453893657954849",
//   { "text": "Manda novamente que eu vou testar" },
//   (err, profile) => {
//     for(var i in err) {
//       console.log(i, ": ", err[i])
//     }
//     if (err) throw err
//       console.log('Mandou mensagem direta para ' + 1415953085101725)
//   }
// );

http.createServer(bot.middleware()).listen(3000)

//curl -ik -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=EAAKEdrtAK54BAIMZAXse9XhtOYLwCZCTDUkMtTJ0l2ZB7bSAxOpuNPXh1isCVrexXvdqk6e5swsiwiGb4QghYpyfMjm8sZAJrdzifyh5SzQQvCwUxl5GsbDNu41PohzbxHmS5UwfnfZBTEdxnvhGpu79iQk51edPnmSb63f4vMgZDZD"
