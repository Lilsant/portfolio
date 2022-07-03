// scroll animation
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll("section");

if (screen.width < 500) {
  elements.forEach((el, i) => {
    if (i == elements.length - 1) el.classList.add("element-show");
  });
}

for (let elm of elements) {
  observer.observe(elm);
}

// scroll

const typeText = document.querySelector(".information__subtitle-text"),
  pipe = document.querySelector(".pipe"),
  phraseArray = [
    "junior web-developer",
    "css-master",
    "html-genius",
    "js-lover",
    "todo-builder",
    "a good person",
    "lilsant",
    "a worst singer you ever heard",
    "twenty one pilots fan",
    "son of my mother",
  ];
let textInterval = null,
  counter = 0,
  symbolCounter = 0,
  pipeCheck = true,
  pipeInterval = null;

function getPipe() {
  if (pipeCheck) {
    pipeCheck = false;
    pipe.style.display = "none";
  } else {
    pipeCheck = true;
    pipe.style.display = "inline-block";
  }
}

function changeTypeText() {
  if (counter >= phraseArray.length) counter = 0;
  if (symbolCounter === 0) {
    pipeCheck = true;
    setTimeout(() => {
      textInterval = setInterval(printText, 200, 1);
      clearInterval(pipeInterval);
    }, 1001);
  }
  if (symbolCounter > 0) {
    pipeCheck = true;
    pipe.style.display = "inline-block";
    pipeInterval = setInterval(getPipe, 500);
    setTimeout(() => {
      textInterval = setInterval(printText, 80, -1);
    }, 1001);
  }
  function typeTextAnimation(phrase) {
    if (symbolCounter >= phrase.length + 1) {
      clearInterval(textInterval);
      changeTypeText();
    }
    if (symbolCounter < 0) {
      counter++;
      symbolCounter = 0;
      clearInterval(textInterval);
      changeTypeText();
    }
  }
  function printText(num) {
    typeText.innerHTML = `${phraseArray[counter].slice(0, symbolCounter)}`;
    symbolCounter += num;
    typeTextAnimation(phraseArray[counter]);
  }
}

changeTypeText();
