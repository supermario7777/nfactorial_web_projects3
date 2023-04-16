// 'use strict'

// creating an array
let articles = [
    {
        author: "Gulien",
        topic_name: "cats",
        published_date: "5 March",
        title: "The most beautiful cats",
        short_desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        theme: "Animals",
        time_over: "15 min",
        select: "selected for you",
        image: "images/0.png"

    },
    {
        author: "Myiosh",
        topic_name: "dogs",
        published_date: "7 February",
        title: "The most beautiful dogs",
        short_desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        theme: "hunters",
        time_over: "25 min",
        select: "selected for miosh",
        image: "images/1.png"

    },
    {
        author: "Relon",
        topic_name: "snakes",
        published_date: "8 May",
        title: "The most beautiful snakes",
        short_desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        theme: "Animals",
        time_over: "35 min",
        select: "selected for relon",
        image: "images/2.png"

    },
];

const newsSection = document.getElementById("news")
console.log(newsSection)
articles.map((item) => {
    const html = `
        <div class="articles">
            <div class="header">
                <div class="top">
                    <p class="author">${item.author}</p>
                    <p class="in">in</p>
                    <p class="topic_name">${item.topic_name}</p>
                    <p class="published_date">${item.published_date}</p>
                </div>
                <div class="middle">                    
                    <h2 class="title">${item.title}</h2>
                    <p class="short_desc">${item.short_desc}</p>
                </div>
                <div class="bottom">
                    <button class="theme">${item.theme}</button>                
                    <p class="time_over">${item.time_over}</p>
                    <li class="select">${item.select}</li>
                </div>
            </div>
            <div class="images">
                <img src="images/0.png" alt="image0">
            </div>
            <div class="border"></div>
        </div>`;       

        newsSection.innerHTML += html;
})



