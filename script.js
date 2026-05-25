 // ---------- সম্পূর্ণ চ্যানেল লিস্ট (প্রদত্ত তালিকা থেকে গুরুত্বপূর্ণ + সব ধরণের) ----------
    const channels = [
        { name: "T Sports", img: "https://s3.aynaott.com/storage/dbc585f70a60b9855b6e13a8ce4cb6f4", url: "https://tvsen7.aynaott.com/tsports-hd/index.m3u8?e=1779508652&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=47201c446d2e7b01b8b0736ba1240fbb" },
        { name: "PTV Sports", img: "https://s3.aynaott.com/storage/9d9d7cbfba5a8ceea648bbd963ad1014", url: "https://tvsen5.aynaott.com/PtvSports/index.m3u8?e=1779508653&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=bde375cd27166d882ccdf4ffe5b4a979" },
        { name: "A Sports", img: "https://s3.aynaott.com/storage/64de30d2df9b2a888cb73f17614a9a8b", url: "https://tvsen6.aynaott.com/asports/index.m3u8?e=1779508653&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=73cb77c00db9f87d2f5803ded79a2858" },
        { name: "Cricket Gold", img: "https://s3.aynaott.com/storage/7d20b575edc4e4b5276faa8c246e72a4", url: "https://tvsen6.aynaott.com/CricketGold/index.m3u8?e=1779508653&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=963350a7ac2d7605e235cc80871a32a4" },
        { name: "Fox Sports 2", img: "https://s3.aynaott.com/storage/da4282cd107cc3d40efadae488b187e5", url: "https://tvsen7.aynaott.com/foxsports2/index.m3u8?e=1779508653&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=ad82254447f88c61a2373694f2d24a56" },
        { name: "BT Sports 2", img: "https://s3.aynaott.com/storage/0b6e5ad3267e5a5897abbe8f3be7b78a", url: "https://tvsen6.aynaott.com/btSport2/index.m3u8?e=1779508653&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=88288da542048a54e29fca9c05fd4159" },
        { name: "ESPN", img: "https://s3.aynaott.com/storage/b46df1959322aa48d270a6b163234c76", url: "https://tvsen5.aynaott.com/espn/index.m3u8?e=1779508653&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=7260d466a341e2fc65fd9e53ae860e74" },
        { name: "Willow TV", img: "https://s3.aynaott.com/storage/94a778ec3219f7eb54bdf1ee07a95788", url: "https://tvsen5.aynaott.com/willowhd/index.m3u8?e=1779508653&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=48f19204a07248943dad3868001b25b8" },
        { name: "NFL Network", img: "https://s3.aynaott.com/storage/79f1ee920d6931a767ae0030e1c7c12b", url: "https://tvsen6.aynaott.com/nfl/index.m3u8?e=1779508653&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=7d591234c576bb6a8536ca242d0d963e" },
        { name: "TNT Sports 1", img: "https://s3.aynaott.com/storage/a3d1a4112bc7c6ee337871b58449542c", url: "https://tvsen6.aynaott.com/btSport1/index.m3u8?e=1779508653&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=69733c555b9d673ed9023b52a3ec615b" },
        { name: "Channel I", img: "https://s3.aynaott.com/storage/8e998f20a9cc52cb8eb1f52a5bf38204", url: "https://tvsen6.aynaott.com/channeli/index.m3u8?e=1779508650&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=14aeddfabc8774268e63c8789caeae7d" },
        { name: "NTV", img: "https://s3.aynaott.com/storage/1a619c9b917eb35898020cd323e415a7", url: "https://tvsen5.aynaott.com/ntvbd/index.m3u8?e=1779508650&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=915f035a7ac6bba889d5f3c1c1964d11" },
        { name: "Bangla Vision", img: "https://s3.aynaott.com/storage/788ab3e49b2aa6af247722762ed6e72a", url: "https://tvsen5.aynaott.com/banglavision/index.m3u8?e=1779508650&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=c0d6e9e490ec9a0a4a78376fd0706af1" },
        { name: "RTV", img: "https://s3.aynaott.com/storage/094587a26f2c5e4f2962104728ec8c5d", url: "https://tvsen5.aynaott.com/RtvHD/index.m3u8?e=1779508650&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=00064184cec924e0ccec040695fd4d81" },
        { name: "ATN Bangla", img: "https://s3.aynaott.com/storage/eff41809fca04f7c1da5481e135d7913", url: "https://tvsen5.aynaott.com/atnbangla/index.m3u8?e=1779508650&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=a19b74dbd9739aa0000a0935f87cc7e0" },
        { name: "ETV", img: "https://s3.aynaott.com/storage/8a1af81802b0728c064c2adabcdc72c8", url: "https://tvsen6.aynaott.com/etv/index.m3u8?e=1779508650&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=c1aa2f627aae91277e8ed05b728bb49c" },
        { name: "Maasranga", img: "https://s3.aynaott.com/storage/1b5cb8c7901739cd7d201a38d2ab4737", url: "https://tvsen5.aynaott.com/maasrangatv/index.m3u8?e=1779508650&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=0db702de0dc900183a865dbad604d57c" },
        { name: "Gazi TV", img: "https://s3.aynaott.com/storage/417a833f6d83021c99bfc3d4176610f4", url: "https://tvsen5.aynaott.com/Ravc7gPCZpxk/index.m3u8?e=1779508650&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=fb92d0833b213057de9aa02bd86e4d91" },
        { name: "Somoy TV", img: "https://s3.aynaott.com/storage/ece71c1163a377fbe2d93f9d28c34f60", url: "https://tvsen6.aynaott.com/somoytv/index.m3u8?e=1779508651&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=03d4267ebf879551272f36552a34d60e" },
        { name: "Independent TV", img: "https://s3.aynaott.com/storage/6653326503fcade746d87881d5c99697", url: "https://tvsen6.aynaott.com/independenttv/index.m3u8?e=1779508651&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=dd1c0687e7225b12e9d3069c0790f64c" },
        { name: "Jamuna TV", img: "https://s3.aynaott.com/storage/aac6488b68844e5756ab46eb79659de8", url: "https://tvsen6.aynaott.com/jamunatv/index.m3u8?e=1779508652&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=8ca1e53680165d20cde7df1428c6ad12" },
        { name: "News24", img: "https://s3.aynaott.com/storage/7c002f22c02096b0d1ba833ae9ea6d5b", url: "https://tvsen6.aynaott.com/news24/index.m3u8?e=1779508652&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=a8565ff757ac1915908551bb45e7466e" },
        { name: "ATN News", img: "https://s3.aynaott.com/storage/8a3c5215dc0b943dc0a80333c0ab21ce", url: "https://tvsen6.aynaott.com/atnnews/index.m3u8?e=1779508651&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=f6eac4c726b2b73260cedd898b5ef712" },
        { name: "BBC News", img: "https://s3.aynaott.com/storage/7a20437e5660324c20cf8251ccb7a697", url: "https://tvsen6.aynaott.com/bbcnews/index.m3u8?e=1779508651&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=4bf95fad817e5d521ca6a7424779a5c4" },
        { name: "Sky News", img: "https://s3.aynaott.com/storage/69d8281f965475f3293a3e30de8c0ccb", url: "https://tvsen5.aynaott.com/skynews/index.m3u8?e=1779508652&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=9a952463ac741f511a7ec95ee40ef3af" },
        { name: "Nat Geo", img: "https://s3.aynaott.com/storage/2dce8297266bbc9c235c27119f914e1b", url: "https://tvsen6.aynaott.com/natgeo/index.m3u8?e=1779508655&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=15f966a8e7aa926f345b1971860d0ef9" },
        { name: "Colors Bangla", img: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_COLORS_BANGLA/images/LOGO_HD/image.png", url: "http://103.72.101.252:8080/live/1369.m3u8" },
        { name: "Zee 24 Ghanta", img: "https://s3.aynaott.com/storage/fea79ac5193dd9fb80aa1996f2adc1e2", url: "https://tvsen6.aynaott.com/zee24/index.m3u8?e=1779508654&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=7f9eba624d9f1f3f814e489001de6938" },
        { name: "Al Jazeera", img: "https://s3.aynaott.com/storage/5d707a103f48d8f9f1634f1b70e2ecdf", url: "https://live-hls-apps-aje-fa.getaj.net/AJE/index.m3u8" },
        { name: "CNN", img: "https://s3.aynaott.com/storage/e0b6da4715f468eb39591911a0597546", url: "https://tvsen6.aynaott.com/cnn/index.m3u8?e=1779508652&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=c6a6907c91db371103cc21b67d9b5c48" },
        { name: "Cartoon Network", img: "https://s3.aynaott.com/storage/a89142109d049ae325fd1681b50bfffb", url: "https://tvsen5.aynaott.com/cartoonnetwork/index.m3u8?e=1779508656&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=e334ba9112f155bb68d3b5f0f6a7343b" },
        { name: "Nickelodeon", img: "https://s3.aynaott.com/storage/bb2375af2d1ff8666f2c24fbcec3c541", url: "https://tvsen7.aynaott.com/nicklodean/index.m3u8?e=1779508657&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=5d549e533fd27e8c7bd7710521d82275" },
        { name: "HBO", img: "https://s3.aynaott.com/storage/4a1291716680b5c095d33e106337bb04", url: "https://tvsen5.aynaott.com/hbo/index.m3u8?e=1779508655&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=e15cb36e1a3afb8310f8ff8545e17ac3" },
        { name: "Discovery Family", img: "https://s3.aynaott.com/storage/3f7983c0bc7cacd206dd195a2eff6b10", url: "https://tvsen5.aynaott.com/discoveryfamily/index.m3u8?e=1779508655&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=7280b8fdbfd3985f463f60de35c89ce5" }
    ];

    // generate channel list
    const container = document.getElementById('channel-container');
    function buildChannelList() {
        if (!container) return;
        container.innerHTML = '';
        channels.forEach((ch, idx) => {
            const li = document.createElement('li');
            li.setAttribute('data-idx', idx);
            const finalUrl = `https://rs-player.netlify.app/jw-player?url=${encodeURIComponent(ch.url)}`;
            li.innerHTML = `
                <a href="javascript:void(0);" onclick="switchChannel('${finalUrl.replace(/'/g, "\\'")}', this.parentElement)">
                    <img src="${ch.img}" alt="${ch.name}" onerror="this.src='https://i.postimg.cc/mD1VCt2C/RS-Live.png'">
                    <span class="channel-name">${ch.name}</span>
                </a>
            `;
            container.appendChild(li);
        });
        // set active first channel
        if (container.firstChild) container.firstChild.classList.add('active-channel');
    }

    window.switchChannel = function(url, element) {
        const playerFrame = window.frames['player'];
        if (playerFrame) {
            playerFrame.location.href = url;
        } else {
            const iframe = document.querySelector('iframe[name="player"]');
            if (iframe) iframe.src = url;
        }
        // active class update
        document.querySelectorAll('.thumbnail-slider li').forEach(li => li.classList.remove('active-channel'));
        if (element && element.closest) {
            element.closest('li').classList.add('active-channel');
        } else if (element && element.tagName === 'LI') {
            element.classList.add('active-channel');
        }
    };

    // initial load
    buildChannelList();