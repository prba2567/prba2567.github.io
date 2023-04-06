const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

const atn = document.querySelector("#js-ans");
atn.addEventListener('click', getAns);

const endpoint = "https://geek-jokes.sameerkumar.website/api?format=json";
const endpoint2 = "https://random.dog/woof.json"

async function getQuote()
{
    try
    {
        const response = await fetch(endpoint)
        if(!response .ok)
        {
            throw Error(response.statusText)
        }
        const json = await response.json();
        displayQuote(json.joke); 
    }
    catch(err)
    {
        console.log(err);
        alert('Falied to fetch');

    }

}

async function getAns()
{
    try
    {
        const res = await fetch(endpoint2)
        if(!res.ok)
        {
            throw Error(res.statusText)
        }
        const json = await res.json();
        displayAns(json.url); 
        // var img = document.createElement('img');
        // img.src = json.url;
        // console.log(img.src);
        // document.getElementsByClassName("app").append(img);
        
    }
    catch(err)
    {
        console.log(err);
        alert('Falied to fetch');

    }

}

function displayQuote(quote)
{
     const quoteText = document.querySelector("#js-quote-text");
     quoteText.textContent = quote;

}

function displayAns(ans)
{
    var el = document.querySelector("#js-answer-text");
     var img =document.createElement('img');
     img.src = ans;
     el.appendChild(img);
}


