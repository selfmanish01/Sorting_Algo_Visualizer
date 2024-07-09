const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}


// Red - '#FF0000'
// green - '#00FF00' -> '#48c486'
// grey - '#AA9870' -> 'grey'
// violet - '#BB0123' -> 'yellow'
let delay = 50;
async function selectionSort(arr) {
    for (let i = 0; i < (arr.length); i++) {
        let minindx = i;
        let e = document.getElementById('elem' + minindx);
        e.style.background = '#FF0000';
        for (let j = i + 1; j < arr.length; j++) {
            await sleep(delay);
            let e1 = document.getElementById('elem' + j);
            e1.style.background = 'yellow';
            await sleep(delay);
            if (arr[j] < arr[minindx]) {
                let e2 = document.getElementById('elem' + minindx);
                e2.style.background = '#48c486';
                minindx = j;
                let e3 = document.getElementById('elem' + minindx);
                e3.style.background = '#FF0000';
            }
            else {
                e1.style.background = '#48c486';
            }
        }
        swapNumber(arr, i, minindx);
        await sleep(delay);
        swapColor(i, minindx);
        swapHeight(i, minindx);
    }
}

function swapNumber(arr, i, minindx) {
    let temp = arr[i];
    arr[i] = arr[minindx];
    arr[minindx] = temp;
}

function swapHeight(j, minindx) {

    let e1 = document.getElementById('elem' + j);
    let e2 = document.getElementById('elem' + (minindx));

    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.height = h2 + "px";
    e2.style.height = h1 + "px";

}

function swapColor(j, minindx) {
    let e1 = document.getElementById('elem' + j);
    let e2 = document.getElementById('elem' + (minindx));
    e2.style.backgroundColor = '#48c486';
    e1.style.backgroundColor = 'grey';

}
function selectionSortCode() {
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
  // C++ program for implementation of
  // selection sort
  #include <bits/stdc++.h>
  using namespace std;
  
  // Function for Selection sort
  void selectionSort(int arr[], int n)
  {
      int i, j, min_idx;
  
      // One by one move boundary of
      // unsorted subarray
      for (i = 0; i < n - 1; i++) {
  
          // Find the minimum element in
          // unsorted array
          min_idx = i;
          for (j = i + 1; j < n; j++) {
              if (arr[j] < arr[min_idx])
                  min_idx = j;
          }
  
          // Swap the found minimum element
          // with the first element
          if (min_idx != i)
              swap(arr[min_idx], arr[i]);
      }
  }
  
  // Function to print an array
  void printArray(int arr[], int size)
  {
      int i;
      for (i = 0; i < size; i++) {
          cout << arr[i] << " ";
          cout << endl;
      }
  }
  
  // Driver program
  int main()
  {
      int arr[] = { 64, 25, 12, 22, 11 };
      int n = sizeof(arr) / sizeof(arr[0]);
  
      // Function Call
      selectionSort(arr, n);
      cout << "Sorted array: \\n";
      printArray(arr, n);
      return 0;
  }
  
  // This is code is contributed by rathbhupendra
            `;
            break;
        case 'javascript':
            codeSnippet.textContent = `
  <script>
  // Javascript program for implementation of selection sort
  function swap(arr,xp, yp)
  {
      var temp = arr[xp];
      arr[xp] = arr[yp];
      arr[yp] = temp;
  }
  
  function selectionSort(arr, n)
  {
      var i, j, min_idx;
  
      // One by one move boundary of unsorted subarray
      for (i = 0; i < n-1; i++)
      {
          // Find the minimum element in unsorted array
          min_idx = i;
          for (j = i + 1; j < n; j++)
          if (arr[j] < arr[min_idx])
              min_idx = j;
  
          // Swap the found minimum element with the first element
          swap(arr,min_idx, i);
      }
  }
  
  function printArray( arr, size)
  {
      var i;
      for (i = 0; i < size; i++)
          document.write(arr[i] + " ");
      document.write(" <br>");
  }
  
  var arr = [64, 25, 12, 22, 11];
      var n = 5;
      selectionSort(arr, n);
      document.write("Sorted array: <br>");
      printArray(arr, n);
  
  // This code is contributed by akshitsaxenaa09.
  </script>
            `;
            break;
        case 'python':
            codeSnippet.textContent = `
  # Python program for implementation of Selection
  # Sort
  import sys
  A = [64, 25, 12, 22, 11]
  
  # Traverse through all array elements
  for i in range(len(A)):
      
      # Find the minimum element in remaining 
      # unsorted array
      min_idx = i
      for j in range(i+1, len(A)):
          if A[min_idx] > A[j]:
              min_idx = j
              
      # Swap the found minimum element with 
      # the first element	 
      A[i], A[min_idx] = A[min_idx], A[i]
  
  # Driver code to test above
  print ("Sorted array")
  for i in range(len(A)):
      print("%d" %A[i],end=" , ") 
            `;
            break;
        default:
            codeSnippet.textContent = '';
    }
    Prism.highlightElement(codeSnippet);
}




function selectionStart(arr) {
    let gen = document.getElementById('gen');
    let btn = document.getElementById('start');
    let selectedOption = document.querySelector('.options');
    let sliderValue = document.getElementById('slider');
    selectionSortCode();
    gen.disabled = true;
    btn.disabled = true;
    gen.style.cursor = "not-allowed";
    btn.style.cursor = "not-allowed";
    selectedOption.disabled = true;
    sliderValue.disabled = true;
    selectionSort(arr)
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
export { selectionStart }
export { selectionSort };
export { selectionSortCode };