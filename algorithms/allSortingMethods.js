let languageSelect = document.getElementsByClassName('language-option')[0];

languageSelect.addEventListener('change',()=>{
let selectedOption = document.querySelector('.options');
let sortingMethod = selectedOption.value;
switch (sortingMethod) {
  case "bubbleSort":
    bubbleSortCode();
    break;
  case "selectionSort":   
    selectionSortCode();
    break;
  case "insertionSort":
    insertionSortCode();
    break;
  case "quickSort":
    quickSortCode();
    break;
  case "mergeSort":
    mergeSortCode();
    break;
  case "heapSort":
    heapSortCode();
    break;
  default:
    let selectedLanguage = document.querySelector(".language-option");
    selectedLanguage.selectedIndex = 0; 
    Toastify({
      text: "Please select a Sorting Method",
      duration: 3000,
      gravity: "right",
      position: "right"
    }).showToast();
    break;
}
});






function bubbleSortCode(){
    let codeSnippet=document.getElementById('codeSnippet');
    let languageSelect = document.getElementsByClassName('language-option')[0];
    let selectedLanguage = languageSelect.value;
    switch (selectedLanguage) {
        case 'cpp':
            codeSnippet.textContent = `//cpp code goes here for Bubble Sort`;
          break;
        case 'javascript':
            codeSnippet.textContent = `
  function bubbleSort(arr){
      for(let i=0;i<(arr.length-1);i++){
          for(let j=0;j< (arr.length-i-1);j++){
              if(arr[j]>=arr[j+1]){
                  swapNumber(arr,j)
              }
          }
      }
  }`;
          break;
        case 'python':
            codeSnippet.textContent = `# Python code goes here Bubble Sort`;
          break;
        default:
            codeSnippet.textContent = '';
      }
    Prism.highlightElement(codeSnippet);
}

function selectionSortCode(){
    let codeSnippet=document.getElementById('codeSnippet');
    let languageSelect = document.getElementsByClassName('language-option')[0];
    let selectedLanguage = languageSelect.value;
    switch (selectedLanguage) {
        case 'cpp':
            codeSnippet.textContent = `//cpp code goes here for Selection Sort`;
          break;
        case 'javascript':
  codeSnippet.textContent =`
  function selectionSort(arr){
      for(let i=0;i<(arr.length);i++){
          let minindx=i;
          for(let j=i+1;j<arr.length;j++){
              if(arr[j]<arr[minindx]){
                  minindx=j;
              }
          }
          swapNumber(arr,i,minindx);
      }
  }`;
          break;
        case 'python':
            codeSnippet.textContent = `# Python code goes here Selection Sort`;
          break;
        default:
            codeSnippet.textContent = '';
      }
    Prism.highlightElement(codeSnippet);
}

function insertionSortCode(){
    let codeSnippet=document.getElementById('codeSnippet');
    let languageSelect = document.getElementsByClassName('language-option')[0];
    let selectedLanguage = languageSelect.value;
    switch (selectedLanguage) {
        case 'cpp':
            codeSnippet.textContent = `//cpp code goes here for Insertion Sort`;
          break;
        case 'javascript':
            codeSnippet.textContent =`
  function insertionSort(arr){
      for(let i=0;i<(arr.length);i++){
          for(let j=i;j>0;j--){
              if(arr[j]<arr[j-1]){
                  swapNumber(arr,j);
              }
          }
      }
  }`;
          break;
        case 'python':
            codeSnippet.textContent = `# Python code goes here Insertion Sort`;
          break;
        default:
            codeSnippet.textContent = '';
      }
    
    Prism.highlightElement(codeSnippet);
}

function heapSortCode(){
    let codeSnippet=document.getElementById('codeSnippet');
    let languageSelect = document.getElementsByClassName('language-option')[0];
    let selectedLanguage = languageSelect.value;
    switch (selectedLanguage) {
        case 'cpp':
            codeSnippet.textContent = `//cpp code goes here for Heap Sort`;
          break;
        case 'javascript':
            codeSnippet.textContent =`
  function heapSort(arr, n) {
      for (let i = Math.floor(n/ 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
      }
      for (let i = n - 1; i > 0; i--) {
          swapNumber(arr,0,i);
          heapify(arr, i, 0);
      }
  }

  function heapify(arr, n, i) {
      let largest = i; 
      let l = 2 * i + 1; 
      let r = 2 * i + 2; 
      if (l < n && arr[l] > arr[largest]) {
          largest = l;
          swapNumber(arr,largest, l);
      }
      if (r < n && arr[r] > arr[largest])) { 
          largest = r;
          swapNumber(arr,largest, r);
      }
      if (largest != i) {
        swapNumber(arr,largest, i);
        heapify(arr, n, largest);
      }
  }`;
          break;
        case 'python':
            codeSnippet.textContent = `# Python code goes here Heap Sort`;
          break;
        default:
            codeSnippet.textContent = '';
      }
    Prism.highlightElement(codeSnippet);
}

function mergeSortCode(){
    let codeSnippet=document.getElementById('codeSnippet');
    let languageSelect = document.getElementsByClassName('language-option')[0];
    let selectedLanguage = languageSelect.value;
    switch (selectedLanguage) {
        case 'cpp':
            codeSnippet.textContent = `//cpp code goes here for Merge Sort`;
          break;
        case 'javascript':
            codeSnippet.textContent =`
  function merge(arr, low, mid, high){
      const n1 = mid - low + 1;
      const n2 = high - mid;
      let left = new Array(n1);
      let right = new Array(n2);
  
      for(let i = 0; i < n1; i++){
          left[i] = arr[low+i];
      }
      for(let i = 0; i < n2; i++){
          right[i] = arr[mid+i+1];
      }
      let i = 0, j = 0, k = low;
      while(i < n1 && j < n2){
          if(parseInt(left[i]) <= parseInt(right[j])){
              arr[k++] = left[i++];
          }
          else{
              arr[k++] = right[j++];
          }
      }
      while(i < n1){
          arr[k++] = left[i++];
      }
      while(j < n2){
          arr[k++]= right[j++];
      }
  }
  
  function mergeSort(arr, l, r){
      if(l >= r){
          return;
      }
      const m = l + Math.floor((r - l) / 2);
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
      merge(arr, l, m, r);
  }`;
          break;
        case 'python':
            codeSnippet.textContent = `# Python code goes here Merge Sort`;
          break;
        default:
            codeSnippet.textContent = '';
      }
    Prism.highlightElement(codeSnippet);
}

function quickSortCode(){
    let codeSnippet=document.getElementById('codeSnippet');
    let languageSelect = document.getElementsByClassName('language-option')[0];
    let selectedLanguage = languageSelect.value;
    switch (selectedLanguage) {
        case 'cpp':
            codeSnippet.textContent = `//cpp code goes here for Quick Sort`;
          break;
        case 'javascript':
            codeSnippet.textContent =`
  function quickSort(arr, start, end) {
      if (start < end) {
          let part = partition(arr, start, end);
          quickSort(arr, start, part-1,speed);
          quickSort(arr, part + 1, end,speed);
      }
  }
  
  function partition(arr,start,end){
      let pivot = arr[start];
      let first = start+1;
      let last = end;
      while (first < last) {
          while (arr[first] <= pivot){
              first++;
          }
          while (first<=last && arr[last] > pivot){
              last--;
          }
          if (first < last) {
              [arr[first], arr[last]] = [arr[last], arr[first]];
          }
      }
      [arr[start], arr[last]] = [arr[last], arr[start]];
      return last;
  }`;
          break;
        case 'python':
            codeSnippet.textContent = `# Python code goes here Quick Sort`;
          break;
        default:
            codeSnippet.textContent = '';
      }
    Prism.highlightElement(codeSnippet);
}
export{quickSortCode};
export{mergeSortCode};
export{insertionSortCode};
export{heapSortCode};
export{selectionSortCode};
export{bubbleSortCode};