console.log("I have loaded")

const displayedImage = document.querySelector('.displayed-img');

const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const arr = ['pic.png','wolfgang-hasselmann-Ss_NBsZWIt8-unsplash.jpg','xx-liu-3qsrd-4-_pU-unsplash.jpg','pawel-czerwinski-wT4AZyw4pPY-unsplash.jpg' ,'wolfgang-hasselmann-AKeb3CguZpw-unsplash.jpg'];
const alt = ['Pic 1', 'Pic 2', 'Pic 3', 'Pic 4', 'Pic 5'];

console.log("I have loaded 2 ")
function f(e)
{
    console.log('HI')
displayedImage.src = e.target.src;
displayedImage.alt = e.target.alt;

}
for(var i =0; i < arr.length; i++)
{
    console.log("I have loaded 3")
    var newImage = document.createElement('img');
    newImage.setAttribute('src',arr[i]);
    newImage.setAttribute('alt', alt[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',  e => {
        console.log("HI");
        displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
    }); 
    
}