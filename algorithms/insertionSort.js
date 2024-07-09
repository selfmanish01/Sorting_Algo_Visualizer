const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}
let delay = 50;
async function insertionSort(arr) {
    for (let i = 0; i < (arr.length); i++) {
        let e = document.getElementById('elem' + i);
        e.style.backgroundColor = '#FF0000';
        let br = 0;
        for (let j = i; j > 0; j--) {
            await sleep(delay);
            if (arr[j] < arr[j - 1]) {
                swapNumber(arr, j);
                swapColor(j);
                swapHeight(j);
            }
            else {
                br = j;
                break;
            }

        }
        await sleep(delay);
        let e1 = document.getElementById('elem' + br);
        e1.style.background = 'grey';
    }
}

function swapNumber(arr, j) {
    let temp = arr[j];
    arr[j] = arr[j - 1];
    arr[j - 1] = temp;
}

function swapHeight(j) {

    let e1 = document.getElementById('elem' + j);
    let e2 = document.getElementById('elem' + (j - 1));

    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.height = h2 + "px";
    e2.style.height = h1 + "px";

}

function swapColor(j) {
    let e1 = document.getElementById('elem' + j);
    let e2 = document.getElementById('elem' + (j - 1));

    let tempcolor = e1.style.backgroundColor;
    e1.style.backgroundColor = e2.style.backgroundColor;
    e2.style.backgroundColor = tempcolor;
}

function insertionSortCode() {
    let codeSnippet = document.getElementById('codeSnippet');
    let languageSelect = document.getElementsByClassName('language-option')[0];
    let selectedLanguage = languageSelect.value;
    if (selectedLanguage == "Code Language") {
        selectedLanguage = "javascript";
        let selectedLanguag = document.querySelector(".language-option");
        selectedLanguag.selectedIndex = 1;
    }
    switch (selectedLanguage) {
        case 'cpp':
            codeSnippet.textContent = `
  // C++ program for insertion sort

  #include <bits/stdc++.h>
  using namespace std;
  
  // Function to sort an array using
  // insertion sort
  void insertionSort(int arr[], int n)
  {
      int i, key, j;
      for (i = 1; i < n; i++) {
          key = arr[i];
          j = i - 1;
  
          // Move elements of arr[0..i-1],
          // that are greater than key, 
          // to one position ahead of their
          // current position
          while (j >= 0 && arr[j] > key) {
              arr[j + 1] = arr[j];
              j = j - 1;
          }
          arr[j + 1] = key;
      }
  }
  
  // A utility function to print an array
  // of size n
  void printArray(int arr[], int n)
  {
      int i;
      for (i = 0; i < n; i++)
          cout << arr[i] << " ";
      cout << endl;
  }
  
  // Driver code
  int main()
  {
      int arr[] = { 12, 11, 13, 5, 6 };
      int N = sizeof(arr) / sizeof(arr[0]);
  
      insertionSort(arr, N);
      printArray(arr, N);
  
      return 0;
  }
  // This is code is contributed by rathbhupendra
            `;
            break;
        case 'javascript':
            codeSnippet.textContent = `
  <script>
  // Javascript program for insertion sort 
  
  // Function to sort an array using insertion sort
  function insertionSort(arr, n) 
  { 
      let i, key, j; 
      for (i = 1; i < n; i++) 
      { 
          key = arr[i]; 
          j = i - 1; 
  
          /* Move elements of arr[0..i-1], that are 
          greater than key, to one position ahead 
          of their current position */
          while (j >= 0 && arr[j] > key) 
          { 
              arr[j + 1] = arr[j]; 
              j = j - 1; 
          } 
          arr[j + 1] = key; 
      } 
  } 
  
  // A utility function to print an array of size n 
  function printArray(arr, n) 
  { 
      let i; 
      for (i = 0; i < n; i++) 
          document.write(arr[i] + " "); 
      document.write("<br>"); 
  } 
  
  // Driver code 
      let arr = [12, 11, 13, 5, 6 ]; 
      let n = arr.length; 
  
      insertionSort(arr, n); 
      printArray(arr, n); 
      
  // This code is contributed by Mayank Tyagi
  
  </script>
            `;
            break;
        case 'python':
            codeSnippet.textContent = `
  # Python program for implementation of Insertion Sort

  # Function to do insertion sort
  def insertionSort(arr):
  
      # Traverse through 1 to len(arr)
      for i in range(1, len(arr)):
  
          key = arr[i]
  
          # Move elements of arr[0..i-1], that are
          # greater than key, to one position ahead
          # of their current position
          j = i-1
          while j >= 0 and key < arr[j] :
                  arr[j + 1] = arr[j]
                  j -= 1
          arr[j + 1] = key
  
  
  # Driver code to test above
  arr = [12, 11, 13, 5, 6]
  insertionSort(arr)
  for i in range(len(arr)):
      print ("% d" % arr[i])
  
  # This code is contributed by Mohit Kumra
            `;
            break;
        default:
            codeSnippet.textContent = '';
    }

    Prism.highlightElement(codeSnippet);
}




function insertionStart(arr) {
    let gen = document.getElementById('gen');
    let btn = document.getElementById('start');
    let selectedOption = document.querySelector('.options');
    let sliderValue = document.getElementById('slider');
    insertionSortCode();
    gen.disabled = true;
    btn.disabled = true;
    gen.style.cursor = "not-allowed";
    btn.style.cursor = "not-allowed";
    selectedOption.disabled = true;
    sliderValue.disabled = true;
    insertionSort(arr)
        .then(() => {
            alert("Your array is sorted.")
            gen.style.cursor = "pointer";
            btn.style.cursor = "pointer";
            gen.disabled = false;
            btn.disabled = false;
            selectedOption.disabled = false;
            sliderValue.disabled = false;
        });
}
export { insertionStart }
export { insertionSortCode }
export { insertionSort };