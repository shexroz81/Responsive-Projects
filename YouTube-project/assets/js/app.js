const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide-text");
    sidebar.classList.toggle("collapsed");
})



// Class orqali cardlar qo`shish uchun

class VideoCard {
    constructor(url, sarlavha) {
        this.url = url;
        this.sarlavha = sarlavha;
    }

    create() {
        const card = document.createElement("div");
        card.className = "card";

        const video = document.createElement("iframe");
        video.src = this.url;
        video.allowFullscreen = true;


        const title = document.createElement("h5");
        title.textContent = this.sarlavha;

        card.append(video, title);

        document.getElementById("cardContainer").append(card);
    }
}

let card1 = new VideoCard("https://www.youtube.com/embed/tcU1sKh-0IA?si=dOSxXShxXwbSxBv6", "Ford Mustang vs Chevy Camaro vs Dodge Hellcat Redeye: ARRANCONES");
let card2 = new VideoCard("https://www.youtube.com/embed/ulrmd1-ykyw?si=nmmqq3OBqiFHCo2J", "Ford Mustang vs Chevy Camaro vs Dodge Hellcat Redeye: ARRANCONES");
let card3 = new VideoCard("https://www.youtube.com/embed/76nZEeRd_Sc?si=dFPlJgIzNI4qFWO_", "Ford Mustang vs Chevy Camaro vs Dodge Hellcat Redeye: ARRANCONES");
let card4 = new VideoCard("https://www.youtube.com/embed/C9Fd_2-cm1s?si=L9ZNV6qV2g2yzMMc", "Ford Mustang vs Chevy Camaro vs Dodge Hellcat Redeye: ARRANCONES");
let card5 = new VideoCard("https://www.youtube.com/embed/SJNbnVjecf0?si=DIdJlCBpQUOG81iJ", "Ford Mustang vs Chevy Camaro vs Dodge Hellcat Redeye: ARRANCONES");
let card6 = new VideoCard("https://www.youtube.com/embed/iACMW42MUII?si=3cEFe02SFXAnj3JA", "Ford Mustang vs Chevy Camaro vs Dodge Hellcat Redeye: ARRANCONES");
let card7 = new VideoCard("https://www.youtube.com/embed/N5SSWumNAp8?si=CcI6NNyD3XuGfzOq", "Ford Mustang vs Chevy Camaro vs Dodge Hellcat Redeye: ARRANCONES");
let card8 = new VideoCard("https://www.youtube.com/embed/G9XhLca9JSk?si=NTO_irdU5XNURlqb", "Ford Mustang vs Chevy Camaro vs Dodge Hellcat Redeye: ARRANCONES");
let card9 = new VideoCard("https://www.youtube.com/embed/_21MsJY8oHU?si=UKq4eNjwdaWmlUUE", "Ford Mustang vs Chevy Camaro vs Dodge Hellcat Redeye: ARRANCONES");


card1.create();
card2.create();
card3.create();
card4.create();
card5.create();
card6.create();
card7.create();
card8.create();
card9.create();




