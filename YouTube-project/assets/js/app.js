const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide-text");
    sidebar.classList.toggle("collapsed");
})



// Class orqali cardlar qo`shish uchun



class VideoCard {
    constructor(container, thumbnail, title, link) {
        this.container = document.getElementById(container);
        this.thumbnail = thumbnail;
        this.title = title;
        this.link = link;
    }

    create() {

        const card = document.createElement('div');
        card.classList.add('video-card');


        const img = document.createElement('img');
        img.src = this.thumbnail;


        const h5 = document.createElement('h5');
        h5.textContent = this.title;


        card.appendChild(img);
        card.appendChild(h5);


        card.addEventListener('click', () => window.open(this.link, '_blank'));


        this.container.appendChild(card);
    }
}


const videos = [
    { thumb: 'https://img.youtube.com/vi/fHsR6cu6MEw/hqdefault.jpg', title: 'This Is Switzerland’s Most Isolated Village – With a 100m Waterfall', link: 'https://www.youtube.com/watch?v=fHsR6cu6MEw' },
    { thumb: 'https://img.youtube.com/vi/cOdynPv8cok/hqdefault.jpg', title: ' The Fate of the Furious | Harpooning Doms Car', link: 'https://www.youtube.com/watch?v=cOdynPv8cok' },
    { thumb: 'https://img.youtube.com/vi/MKOqZBCCM3o/hqdefault.jpg', title: '1vs4 Clutches in Ultimate royale (handcam)', link: 'https://www.youtube.com/watch?v=MKOqZBCCM3o' },
    { thumb: 'https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg', title: 'Luis Fonsi - Despacito ft. Daddy Yankee', link: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
    { thumb: 'https://img.youtube.com/vi/jEG8wuUE1pY/hqdefault.jpg', title: '$1 vs $25,000 Secret Rooms', link: 'https://www.youtube.com/watch?v=jEG8wuUE1pY' },
    { thumb: 'https://img.youtube.com/vi/5wb-zEpVqqU/hqdefault.jpg', title: 'ULTIMATE VA SKARELL FULL OLDIK 🤯BUNAQASI BIRINCHI MARTA OYINGA KELDI 😳', link: 'https://www.youtube.com/watch?v=5wb-zEpVqqU' },
    { thumb: 'https://img.youtube.com/vi/aiP1WSoqHmU/hqdefault.jpg', title: 'I Transformed the END PORTAL in Minecraft Hardcore', link: 'https://www.youtube.com/watch?v=aiP1WSoqHmU' },
    { thumb: 'https://img.youtube.com/vi/lggdhUvOtz8/hqdefault.jpg', title: 'Camping in an Alaskan Survival Cabin', link: 'https://www.youtube.com/watch?v=-gZC02MG_fo&t=10s' },
    { thumb: 'https://img.youtube.com/vi/1cHUNCfh6dA/hqdefault.jpg', title: 'I turned a KIDS go-kart into a death trap...', link: 'https://www.youtube.com/watch?v=1cHUNCfh6dA' }
];


videos.forEach(video => {
    new VideoCard('videoContainer', video.thumb, video.title, video.link).create();
});