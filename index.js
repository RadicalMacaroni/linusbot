const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("on Computer"); 
 });

client.on('message', message => {
if (message.content.includes('.techtip')) {var answers = ["computer","lap top","can someone get me a pizza","Destroy Your Computer. Right Now.","HEY! Interested in a cool new computer? Well look somewhere else","The GTX 1080 Is A Graphics Card","DOOM ETERNAL for Windows XP","tech tip!!!! rats are smarter than you are. ask them a question and you may never fully comprehend the answer","found out how to make tech tip in real life!!!!!!!!!!!!!!!!!!!!!!!!!!! i AM NOT TELLING YOU HOW","With That Out Of The Way throw your computer out a window","tech tip!!!!!!!!!!!!!!!!!! ever wanted to know how a pc works? its simple really! it doesnt","Google Stadia How to run games at low graphics","use code COMPUTER to get 350 percent off tech tip store","i will flood hell","computer 2 when will it come out","Found the tech tips they were LEFT OUTSIDE","Hoo Boy Its Hard Work Mining For Tech Tips All Day","tech tip!!!!!!!!!!!!!!!!! hack into your house and unlock hidden features such as House Wheels by plugging your mouse and keyboard into a wall outlet","uhhhhh hhh hh anyone hear about conputer.???","no fucking way... computer! time to le","tech tip tech tip tech tip tech tip t","linus","tech ti","Currently Uwuing..... Uwuing And Owoing Right Now....","let me in","i changed my mind let me out","welcome to tech tip home of the tech tip can i take your order","arghrrrrrrrrrr yELLING WHERE ARE THE TECH TIPS","Everyones Talking About Amd Processor Graphic Card Gaming Gaming....I Just Want Tech Tip","there is a tech tip but you have to find it","confused and afraid of computer","YOU NEED A 24K MONITOR RIGHT NOW!!!!!!!!!!!! EPIC GAMING EXPERIENCE","tech tip !!!!!!!!!!!!!!!!!!! todays tech tip is brought to you by skillshare raid shadow legends and dollar shave club all at once and they are all coming to your house","aaaaaaaaaahhhh","online2............. offline","corsair????????? Never Heard of It Who Are They","tech tip!!!!!!!!!!!!!!!! i forgot the tech tip at home","This New Graphics Card Has A Really ''Cool'' Feature... Fill Your Computer With Ice And Find Out What It Is","tech tip!!!!!!!!!!!!!!!!!!!!!! there is no such thing as a computer","Living in hell isnt bad when you have a","GAMING !! WHO ELSE IS GAMING RIGHT NOW I KNOW I AM","We Filled A Computer With Gravel To See If It Would Cool Off Faster. Tech Tip! It Didnt Work","Wii U Computer","no there are tech tips here i know it","tech tip!!! turn off your phone","submerge your computer in water","tech tip!!!!! how did you get into my house","tech tip!!!!!!!! i am stranded on a deserted island because my coworkers say i have had too many tech tips"]
var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

message.channel.send(randomAnswer);
  }
});

client.on('message', message => {
  if (message.content.includes('tech tip')) {
    message.react('🐀')
  } else if (message.content.includes('Tech tip')) {
   message.react('🐀')
  }
});

client.on('message', message => {
if (message.content.includes('.rat')) {var rats = ["https://pbs.twimg.com/media/ETL3-znUwAA5ISx?format=jpg&name=medium","https://pbs.twimg.com/media/ETLBKzPXYAE0XKo?format=jpg&name=small","https://pbs.twimg.com/media/ETJ8fc_WoAEDCJj?format=jpg&name=900x900","https://pbs.twimg.com/media/ETJTPQNXkAA-dpP?format=jpg&name=small","https://pbs.twimg.com/media/ETJFi1nXQAApeyX?format=jpg&name=900x900","https://pbs.twimg.com/media/ETI3wOBXYAEPHn7?format=jpg&name=small","https://pbs.twimg.com/media/ETIqD8uXQAAKXm3?format=jpg&name=small","https://pbs.twimg.com/media/ETIcVv-XgAEBxh1?format=jpg&name=large","https://pbs.twimg.com/media/ETIOjBuWsAEkPUE?format=jpg&name=medium","https://pbs.twimg.com/media/ESfdWBoXYAEoPJ7?format=jpg&name=small","https://pbs.twimg.com/media/ESfPl6SXYAEcax4?format=jpg&name=small","https://pbs.twimg.com/media/ESfB4jlWkAA9Y7X?format=jpg&name=small","https://pbs.twimg.com/media/ESe0JhCWkAQ1HNN?format=jpg&name=small","https://pbs.twimg.com/media/ESemaLzWAAE9F9Q?format=jpg&name=900x900","https://pbs.twimg.com/media/ESeYrwJWkAEwKGo?format=jpg&name=small","https://pbs.twimg.com/media/ESeK_ncXkAMF5fx?format=jpg&name=large","https://pbs.twimg.com/media/ESd9RNqWkAEQlC1?format=jpg&name=900x900","https://pbs.twimg.com/media/ESdvdfjWsAEihbs?format=jpg&name=small","https://pbs.twimg.com/media/ESdhy-OXsAEQEiG?format=jpg&name=small","https://pbs.twimg.com/media/ESdUBYCXsAkPO6I?format=jpg&name=medium","https://pbs.twimg.com/media/EScqz2JXcAMLF5i?format=jpg&name=small","https://pbs.twimg.com/media/ESbYYfoWkAENqLo?format=jpg&name=small","https://pbs.twimg.com/media/ESavPGMU8AIRrmB?format=jpg&name=small","https://pbs.twimg.com/media/ESZ4SDHU0AI0jzu?format=jpg&name=900x900","https://pbs.twimg.com/media/ESZc1LGWoAAWC1S?format=jpg&name=large","https://pbs.twimg.com/media/ESYzm6LWsAIQrvv?format=jpg&name=small","https://pbs.twimg.com/media/ESYl6rPXcAE4NJp?format=jpg&name=360x360","https://pbs.twimg.com/media/ESYYHkXXQAEuhA7?format=jpg&name=medium","https://pbs.twimg.com/media/ESYKdiVWoAAPlD2?format=jpg&name=small","https://pbs.twimg.com/media/ESX8sIoXcBQY2HP?format=jpg&name=small","https://pbs.twimg.com/media/ESXu69DXsAECtlu?format=jpg&name=900x900","https://pbs.twimg.com/media/ESXhQdIXkAAUUnM?format=jpg&name=small","https://pbs.twimg.com/media/ESXTdiUXYAA-KXz?format=jpg&name=small","https://pbs.twimg.com/media/ESXFtP-WsAAkWnY?format=jpg&name=small","https://pbs.twimg.com/media/ESW4BvZWAAAwjQl?format=jpg&name=900x900","https://pbs.twimg.com/media/ESWqQfJX0AA_WKJ?format=jpg&name=small","https://pbs.twimg.com/media/ESWclVqWAAAlqc0?format=jpg&name=small","https://pbs.twimg.com/media/ESWOz51X0AEdgL4?format=jpg&name=900x900","https://pbs.twimg.com/media/ESWBFVsXcAAZqEO?format=jpg&name=small","https://pbs.twimg.com/media/ESVzTzaWsAc_VCY?format=jpg&name=small","https://pbs.twimg.com/media/ESVlnqYWoAIctDx?format=jpg&name=small"]
var rat = rats[Math.floor(Math.random() * rats.length)];

message.channel.send(rat);
  }
});

client.on('message', message => {
if (message.content.includes('.linusball')) {var balls = ["yes","no","maybe","it is likely","signs point to yes","signs point to no","unlikely","there is a possibility"]
var ball = balls[Math.floor(Math.random() * balls.length)];

message.channel.send(ball);
  }
});

client.on('message', message => {
if (message.content.includes('.raccoon')) {var raccoons = ["https://pbs.twimg.com/media/ETgsP8uXYAA_zpS?format=jpg&name=small","https://pbs.twimg.com/media/ETg57iWWAAAIAIf?format=jpg&name=small","https://pbs.twimg.com/media/EThHoYDWkAEh4o0?format=jpg&name=small","https://pbs.twimg.com/media/ETgedBSXQAA6MU1?format=jpg&name=small","https://pbs.twimg.com/media/ETgQwL2XYAIztqS?format=jpg&name=small","https://pbs.twimg.com/media/ETgDA9GWsAsROoU?format=jpg&name=small","https://pbs.twimg.com/media/ETf1SihWkAI0sw9?format=jpg&name=small","https://pbs.twimg.com/media/ETfnkhIWAAAlZqS?format=jpg&name=small","https://pbs.twimg.com/media/ETfZ1WSWsAEedtr?format=jpg&name=small","https://pbs.twimg.com/media/ETfMJUzX0Ac9LPT?format=jpg&name=small","https://pbs.twimg.com/media/ETe-Z_8WkAAiwK6?format=jpg&name=small","https://pbs.twimg.com/media/ETewqj6XsAMsBfW?format=jpg&name=small","https://pbs.twimg.com/media/ETei5esWsAUHWXP?format=jpg&name=small","https://pbs.twimg.com/media/ETeVJ1AXQAA7n2J?format=jpg&name=small","https://pbs.twimg.com/media/ETeHZ4sXkAUNmtI?format=jpg&name=small","https://pbs.twimg.com/media/ETd5pY3XYAUaEsQ?format=jpg&name=small","https://pbs.twimg.com/media/ETdr45FXgAAbOer?format=jpg&name=small","https://pbs.twimg.com/media/ETdeKA-XkAArVvO?format=jpg&name=small","https://pbs.twimg.com/media/ETdQagDXkAEOAI5?format=jpg&name=small","https://pbs.twimg.com/media/ETc08frXQAAggjd?format=jpg&name=small","https://pbs.twimg.com/media/ETcnMjMWkAAfZvf?format=jpg&name=small","https://pbs.twimg.com/media/ETcZd6tWAAERuB9?format=jpg&name=small","https://pbs.twimg.com/media/ETcLxOsXYAE9T6K?format=jpg&name=small"]
var raccoon = raccoons[Math.floor(Math.random() * raccoons.length)];

message.channel.send(raccoon);
  }
});

client.login('insert token here');
