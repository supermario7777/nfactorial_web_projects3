'use strict'

// Date object
// const date = new Date();
// let currentDay= String(date.getDate()).padStart(2, '0');
// let currentMonth = String(date.getMonth()+1).padStart(2,"0");
// let currentYear = date.getFullYear();
// let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

// let time = Date.now()
// console.log(time);

let arrContainer = [];

const newsSection = document.getElementById("news")

fetch('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=BJCEDkz8SZFeHH5feN5WS9DxPzz3R1aC')
.then((response) => response.json())
.then((data) => {
    data.results.splice(1,10).forEach(element => {      
        let someArr = element.media[0]["media-metadata"];
        const html = `
        <div class="articles">
            <div class="header">
                <div class="top">
                    <p class="author">${element.byline}</p>
                    <p class="in">in</p>
                    <p class="topic_name">"Some text"</p>
                    <p class="published_date">${element.published_date}</p>
                </div>
                <div class="middle">                    
                    <a onclick="openArticle()" class="title">${element.title}</a>
                    <p class="short_desc">${element.abstract}</p>
                </div>
                <div class="bottom">
                    <button class="theme">${element.section}</button>                
                    <p class="time_over">"15 min"</p>
                    <li class="select">"selected for you"</li>
                </div>
            </div>
            <div class="images">
                <img src="${someArr[2]["url"]}" alt="#">
            </div>
            <div class="border"></div>
        </div>`;       

        newsSection.innerHTML += html;

    });
})
.catch((error) => {console.log(error)})

function openArticle(){
    console.log(document.location.href = "http://127.0.0.1:5500/second.html")
    document.body.innerHTML = `
    <section class="medium-alike">
        <p>Medium Alike</p>
    </section>

    <section class="return-back">
        <h1>Hello, world!</h1>
    </section>

    <section id="news">
    </section>
    <script src="main.js"></script>`

}

console.log()


function returnToMainPage(){
    console.log(document.location.href = "http://127.0.0.1:5500/index.html")
    document.body.innerHTML = `
    <section class="medium-alike">
        <p>Medium Alike</p>
    </section>

    <section class="return-back">
        <h1>Hello, world!</h1>
    </section>

    <section id="news">
    </section>
    <script src="main.js"></script>`

}

