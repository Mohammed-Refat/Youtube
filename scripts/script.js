
const main = document.querySelector(".main");


window.addEventListener('load', () => {
    fetch('data.json').then((x) => x.json()).then((data) => {
        let out = "";
        for (let i = 0; i < data.length; i++) {
            out += `
        <div class="videos-container">
        <div class="video">
            <div class="thumbnail">
                <img src="${data[i].thumbnail}" alt="">
            </div>
            <div class="video-details">
                <div class="creator-img">
                    <img src="${data[i].channelLogo}" alt="">
                </div>
                <div class="title">
                    <a href="" class="video-title">
                    ${data[i].title}
                    </a>
                    <a href="" class="video-creator">
                    ${data[i].channelName}
                    </a>
                    <span>${data[i].viewsAndago}</span>
                </div>
            </div>
        </div>
    </div>
        `
        }
        main.innerHTML = out;
    });
})

const tag = document.querySelector(".search-box"); 
console.log(tag);

const input_box = document.querySelector(".search-button")
console.log(input_box);
input_box.addEventListener('click', (a) => {

    console.log(tag);
    a.preventDefault();
    main.innerHTML = "";
    const searchVal=tag.value;
    fetch('data.json')
        .then( (response) => response.json()) 
        .then((data) => {
            let out = "";
            for (let i = 0; i < data.length; i++) {
                if (searchVal === data[i].tag) { 
                    out +=
                        `
                    <div class="videos-container">
                        <div class="video">
                            <div class="thumbnail">
                                <img src="${data[i].thumbnail}" alt="">
                            </div>
                            <div class="video-details">
                                <div class="creator-img">
                                    <img src="${data[i].channelLogo}" alt="">
                                </div>
                                <div class="title">
                                    <a href="" class="video-title">
                                    ${data[i].title}
                                    </a>
                                    <a href="" class="video-creator">
                                    ${data[i].channelName}
                                    </a>
                                    <span>${data[i].viewsAndago}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                }
            }
            main.innerHTML = out; 
        })
});
