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

        console.log(element)
        
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
                    <a href="#" class="title">${element.title}</a>
                    <p class="short_desc">${element.abstract}</p>
                </div>
                <div class="bottom">
                    <button class="theme">${element.section}</button>                
                    <p class="time_over">"15 min"</p>
                    <li class="select">"selected for you"</li>
                </div>
            </div>
            <div class="images">
                <img src="${someArr[1]["url"]}" alt="#">
            </div>
            <div class="border"></div>
        </div>`;       

        newsSection.innerHTML += html;
        // let article ={
        //     "author": element.byline ,
        //     "topic_name": "Some text",
        //     "published_date": element.published_date,
        //     "title": element.title,
        //     "short_desc": element.abstract,
        //     "theme": element.section,
        //     "time_over": "15 min",
        //     "select": "selected for you",
        //     image: someArr[0]["url"],
        // }
        // arrContainer.push(article)

    });
})
.catch(e => {e})

// console.log(arrContainer)

// creating an array
// let articles = [
//     {
//         author: "Gulien",
//         topic_name: "cats",
//         published_date: "5 March",
//         title: "The most beautiful cats",
//         short_desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
//         theme: "Animals",
//         time_over: "15 min",
//         select: "selected for you",
//         image: "images/0.png"

//     },
//     {
//         author: "Myiosh",
//         topic_name: "dogs",
//         published_date: "7 February",
//         title: "The most beautiful dogs",
//         short_desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
//         theme: "hunters",
//         time_over: "25 min",
//         select: "selected for miosh",
//         image: "images/1.png"

//     },
//     {
//         author: "Relon",
//         topic_name: "snakes",
//         published_date: "8 May",
//         title: "The most beautiful snakes",
//         short_desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
//         theme: "Animals",
//         time_over: "35 min",
//         select: "selected for relon",
//         image: "images/2.png"

//     },
// ];


// console.log(articles)


// arrContainer.map((item) => {
//     const html = `
//         <div class="articles">
//             <div class="header">
//                 <div class="top">
//                     <p class="author">${item.author}</p>
//                     <p class="in">in</p>
//                     <p class="topic_name">${item.topic_name}</p>
//                     <p class="published_date">${item.published_date}</p>
//                 </div>
//                 <div class="middle">                    
//                     <h2 class="title">${item.title}</h2>
//                     <p class="short_desc">${item.short_desc}</p>
//                 </div>
//                 <div class="bottom">
//                     <button class="theme">${item.theme}</button>                
//                     <p class="time_over">${item.time_over}</p>
//                     <li class="select">${item.select}</li>
//                 </div>
//             </div>
//             <div class="images">
//                 <img src="${item.image}" alt="#">
//             </div>
//             <div class="border"></div>
//         </div>`;       

//         newsSection.innerHTML += html;
// })







