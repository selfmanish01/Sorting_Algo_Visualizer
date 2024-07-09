import { bubbleSortCode, bubbleStart } from './algorithms/bubbleSort.js';
import { selectionSortCode, selectionStart } from './algorithms/selectionSort.js';
import { insertionSortCode, insertionStart } from './algorithms/insertionSort.js';
import { quickSortCode, quickStart } from './algorithms/quickSort.js';
import { mergeSortCode, mergeStart } from './algorithms/mergeSort.js';
import { heapSortCode, heapStart } from './algorithms/heapSort.js';
import { generateRandomArray,animateBars,createBars,showToast,copyCode} from './input.js';

document.addEventListener('DOMContentLoaded', () => {

  // (on loading the page)
  let arrSize = 25;
  let arr = generateRandomArray(arrSize);
  createBars(arr);
  animateBars();

  //controller - 1 (on changing the slider value)
  let sliderValue = document.getElementById('slider');
  let visibleValue = document.getElementById('valueonslider');
  sliderValue.addEventListener("input", () => { arrSize = sliderValue.value; visibleValue.textContent = sliderValue.value; });

  //controller - 2 (on clicking the Create button)
  let generateArrayCheck = false;
  let gen = document.getElementById('gen');
  gen.addEventListener('click', () => {
    arr = generateRandomArray(arrSize);
    createBars(arr);
    generateArrayCheck = true;
  });

  //controller - 3 (on clicking the Start button)
  let btn = document.getElementById('start');
  btn.addEventListener('click', () => {
    if (generateArrayCheck) {
      let sortingMethod = document.querySelector('.options').value;
      let selectedLanguage = document.querySelector(".language-option");
      if (selectedLanguage.selectedIndex === 0) selectedLanguage.selectedIndex = 1;
      generateArrayCheck = false;
      if (sortingMethod == "bubbleSort") bubbleStart(arr);
      else if (sortingMethod == "selectionSort") selectionStart(arr);
      else if (sortingMethod == "insertionSort") insertionStart(arr);
      else if (sortingMethod == "quickSort") quickStart(arr);
      else if (sortingMethod == "mergeSort") mergeStart(arr);
      else if (sortingMethod == "heapSort") heapStart(arr);
      else {
        generateArrayCheck = true;
        let selectedLanguage = document.querySelector(".language-option");
        selectedLanguage.selectedIndex = 0;
        showToast("Please select a Sorting Method");
      }
    }
    else {
      showToast("Please Generate the array first");
    }
  });
});



//controller - 4 (on clicking the reset button)
let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => { window.location.reload() });

//controller - 5 (for selecting code language)
let languageSelect = document.getElementsByClassName('language-option')[0];
languageSelect.addEventListener('change', () => {
  let selectedOption = document.querySelector('.options');
  let sortingMethod = selectedOption.value;
  if (sortingMethod == "bubbleSort") bubbleSortCode();
  else if (sortingMethod == "selectionSort") selectionSortCode();
  else if (sortingMethod == "insertionSort") insertionSortCode();
  else if (sortingMethod == "quickSort") quickSortCode();
  else if (sortingMethod == "mergeSort") mergeSortCode();
  else if (sortingMethod == "heapSort") heapSortCode();
  else {
    let selectedLanguage = document.querySelector(".language-option").value;
    showToast(`${selectedLanguage} is your prefered language.`);
  }
});


//controller - 6 (for selecting sorting method)
let sortingMethods = document.querySelector('.options');
sortingMethods.addEventListener('change', () => {
  let sortingMethod = document.querySelector('.options').value;
  if (sortingMethod == "bubbleSort") bubbleSortCode();
  else if (sortingMethod == "selectionSort") selectionSortCode();
  else if (sortingMethod == "insertionSort") insertionSortCode();
  else if (sortingMethod == "quickSort") quickSortCode();
  else if (sortingMethod == "mergeSort") mergeSortCode();
  else heapSortCode();
});

//controller - 7 (for copying code)
let copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', () => {
  let codeSnippet = document.getElementById('codeSnippet').textContent;
  copyCode(codeSnippet);
});