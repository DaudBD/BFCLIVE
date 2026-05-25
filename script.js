const channels = [

{
name:"T Sports",
logo:"https://i.imgur.com/2JzlorD.png",
url:"https://tvsen7.aynaott.com/tsportshd/index.m3u8"
},

{
name:"Gazi TV",
logo:"https://i.imgur.com/2Lzhiq6.png",
url:"https://tvsen7.aynaott.com/gazitv/index.m3u8"
},

{
name:"Somoy TV",
logo:"https://i.imgur.com/i54AQic.png",
url:"https://bozztv.com/rongo/rongo-somoy/index.m3u8"
},

{
name:"Jamuna TV",
logo:"https://i.imgur.com/4JLkaF7.png",
url:"https://bozztv.com/rongo/rongo-JamunaTelevision/index.m3u8"
},

{
name:"Channel 24",
logo:"https://i.imgur.com/U6xSxKh.png",
url:"https://bozztv.com/rongo/rongo-Channel24HD/index.m3u8"
},

{
name:"ATN Bangla",
logo:"https://i.imgur.com/4qZQKjo.png",
url:"https://bozztv.com/rongo/rongo-ATNNews/index.m3u8"
},

{
name:"BTV",
logo:"https://i.imgur.com/5OE2FDt.png",
url:"https://www.btvlive.gov.bd/streams/ef8b8bbc-98b7-4ba7-a49d-a0adaf259d35/ES/355ba051-9a60-48aa-adcf-5a6c64da8c5c/355ba051-9a60-48aa-adcf-5a6c64da8c5c_3_playlist.m3u8"
},

{
name:"Cartoon Network",
logo:"https://i.imgur.com/ZdX0A7w.png",
url:"https://tvsen5.aynaott.com/cartoonnetwork/index.m3u8"
},

{
name:"Disney Channel",
logo:"https://i.imgur.com/9m2JX9D.png",
url:"https://tvsen7.aynaott.com/disney/index.m3u8"
},

{
name:"Nickelodeon",
logo:"https://i.imgur.com/r4A2X7n.png",
url:"https://tvsen7.aynaott.com/nicklodean/index.m3u8"
},

{
name:"Sony Sports Ten 1",
logo:"https://i.imgur.com/8l9P8QG.png",
url:"https://dai.google.com/linear/hls/event/xfJ2wJ1rRwC2hKkJQ7n6Ng/master.m3u8"
},

{
name:"Sony Sports Ten 2",
logo:"https://i.imgur.com/8l9P8QG.png",
url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
},

{
name:"Animal Planet",
logo:"https://i.imgur.com/N7RLx7K.png",
url:"https://tvsen7.aynaott.com/animalplanet/index.m3u8"
},

{
name:"Discovery",
logo:"https://i.imgur.com/U6KQx0T.png",
url:"https://tvsen7.aynaott.com/discovery/index.m3u8"
},

{
name:"National Geographic",
logo:"https://i.imgur.com/G5QX9lf.png",
url:"https://tvsen7.aynaott.com/natgeo/index.m3u8"
}

];

const video = document.getElementById("video");

function playChannel(url){

if(Hls.isSupported()){

const hls = new Hls();

hls.loadSource(url);

hls.attachMedia(video);

hls.on(Hls.Events.MANIFEST_PARSED,function(){

video.play();

});

}else if(video.canPlayType('application/vnd.apple.mpegurl')){

video.src = url;

video.play();

}

}

const channelList = document.getElementById("channelList");

channels.forEach(channel=>{

channelList.innerHTML += `

<div class="channel" onclick="playChannel('${channel.url}')">

<img src="${channel.logo}">

<span>${channel.name}</span>

</div>

`;

});

playChannel(channels[0].url);

document.getElementById("searchInput").addEventListener("keyup",function(){

let value = this.value.toLowerCase();

let items = document.querySelectorAll(".channel");

items.forEach(item=>{

let text = item.innerText.toLowerCase();

item.style.display = text.includes(value) ? "flex" : "none";

});

});