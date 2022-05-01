
let key = "546e9ff6";
let container = document.getElementById("container");

let myFunc = async() => {
    let movie = document.getElementById("searchMovies").value;
    try {
        let res = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=${key}`);
        let data = await res.json();
        console.log(data);
        appendMovies (data.Search);
    }
    catch (err){
        console.log(err);
    }
};

myFunc();

let appendMovies = (data) => {
    container.innerHTML = null;
    if (data === null){
        let image = document.createElement("img");
        image.src = "https://c.tenor.com/IHdlTRsmcS4AAAAM/404.gif";
        container.append(image);
    } else {
        data.forEach(function (el){
            let div = document.createElement('div');
    
            let poster = document.createElement('img');
            poster.src = el.Poster;
    
            let title = document.createElement('h4');
            title.innerText = el.Title;
    
            let year = document.createElement('p');
            year.innerText = el.Year;
    
            div.append(poster, title, year);
            container.append(div);
    
        });
    }
};