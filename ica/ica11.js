const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);


const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote()
{
    // console.log('Message');
    try
    {
        const response = await fetch(endpoint)
        if(!response .ok)
        {
            throw Error(response.statusText)
        }
        const json = await response.json();
        displayQuote(json.question); 
        // const abtn = document.querySelector("#js-tweet");
        // abtn.addEventListener('click', getQuote);
        // displayAns(json.question); 

 
    }
    catch(err)
    {
        console.log(err);
        alert('Falied to fetch new trvia');

    }

}

function displayQuote(quote)
{
     const quoteText = document.querySelector("#js-quote-text");
     quoteText.textContent = quote;

}


function displayAns(quote)
{
     const quoteText = document.querySelector("#js-tweet");
     quoteText.textContent = quote;

}
