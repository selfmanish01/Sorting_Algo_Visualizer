function generateRandomArray(length) {
  let randomArray = [];
  let min = 1, max = 101;
  for (var i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNumber);
  }
  return randomArray;
}

function createBars(arr) {
  let parentDivbox2 = document.getElementById('visualBox');
  while (parentDivbox2.firstChild) {
    parentDivbox2.removeChild(parentDivbox2.firstChild);
  }
  for (let i = 0; i < arr.length; i++) {
    let innerDiv = document.createElement('div');
    innerDiv.style.height = `${arr[i] * 2}px`;
    innerDiv.style.backgroundColor = '#48c486';
    innerDiv.setAttribute('id', `elem${i}`);
    innerDiv.classList.add("innerDiv");
    parentDivbox2.appendChild(innerDiv);
  }
}

function animateBars() {
  let Bars = document.getElementsByClassName('innerDiv');
  for (let i = 0; i < Bars.length; i++) {
    let delay = i * 10;
    animateIndividualBar(Bars[i], delay);
  }
}

function animateIndividualBar(Bar, delay) {
  let min = 20, max = 300;
  setInterval(() => {
    let height = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random height for the sound bar
    Bar.style.height = `${height}px`;
  }, 50 + delay); // Adjust the interval timing as needed
}


function showToast(message) {
  let toast = document.getElementById('toast');
  toast.style.opacity = '1';
  toast.textContent = message;
  setTimeout(function () {
    toast.style.opacity = '0';
  }, 2000); // Hide the toast after 2 seconds
}

function copyCode(codeSnippet) {
  let sortingMethod = document.querySelector('.options').value;
  if (sortingMethod !== "Choose Sorting Method") {
    navigator.clipboard.writeText(codeSnippet).then(function () {
      showToast(`code copied`);
    }, function () {
      showToast(`Failed to copy code`);
    });
  }
  else {
    showToast(`Please select a Sorting Method`);
  }
}
  export { generateRandomArray };
  export { createBars };
  export { animateBars };
  export { showToast };
  export { copyCode };