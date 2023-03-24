const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When she got to :inserty:, :insertx: stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 30 pounds, and it was a windy day.";
const insertX =["Snow White ", "Cinderella", "Jasmine"];
const insertY =["Wonderland","Disneyland","Marvel"];
const insertZ = ["burned the place down ", "melted into the storybook", "turned into a dragon and flew away"];

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  const xItem = [randomValueFromArray(insertX)];
  const yItem = [randomValueFromArray(insertY)];
  const zItem = [randomValueFromArray(insertZ)];

  newStory = newStory.replaceAll(":insertx:",xItem);
  newStory = newStory.replaceAll(":inserty:",yItem);
  newStory = newStory.replaceAll(":insertz:",zItem);

  if(customName.value !== ''){
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);


  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(30 * (21/300)) + " stones ";
    const temperature =  Math.round( 62 * (5/9) )+ " C";

    newStory = newStory.replaceAll("30 pounds" , weight);
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}