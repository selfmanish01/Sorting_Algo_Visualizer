const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function bubbleSort(arr) {
    for (let i = 0; i < (arr.length - 1); i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            let e = document.getElementById('elem' + j);
            e.style.backgroundColor = '#FF0000';
            await sleep(50);
            e.style.background = 'grey';
            if (arr[j] >= arr[j + 1]) {
                swapNumber(arr, j)
                swapHeight(j)
                swapColor(j);
            }
            else {
                swapColor(j);
            }
        }
    }
}

function swapNumber(arr, j) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
}

function swapHeight(j) {

    let e1 = document.getElementById('elem' + j);
    let e2 = document.getElementById('elem' + (j + 1));

    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.height = h2 + "px";
    e2.style.height = h1 + "px";

}

function swapColor(j) {
    let e1 = document.getElementById('elem' + j);
    let e2 = document.getElementById('elem' + (j + 1));

    let tempcolor = e1.style.backgroundColor;
    e1.style.backgroundColor = e2.style.backgroundColor;
    e2.style.backgroundColor = tempcolor;
}

function bubbleSortCode() {
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
  // Optimized implementation of Bubble sort
  #include <bits/stdc++.h>
  using namespace std;
  
  // An optimized version of Bubble Sort
  void bubbleSort(int arr[], int n)
  {
      int i, j;
      bool swapped;
      for (i = 0; i < n - 1; i++) {
          swapped = false;
          for (j = 0; j < n - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  swap(arr[j], arr[j + 1]);
                  swapped = true;
              }
          }
  
          // If no two elements were swapped
          // by inner loop, then break
          if (swapped == false)
              break;
      }
  }
  
  // Function to print an array
  void printArray(int arr[], int size)
  {
      int i;
      for (i = 0; i < size; i++)
          cout << " " << arr[i];
  }
  
  // Driver program to test above functions
  int main()
  {
      int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
      int N = sizeof(arr) / sizeof(arr[0]);
      bubbleSort(arr, N);
      cout << "Sorted array: \\n";
      printArray(arr, N);
      return 0;
  }
  // This code is contributed by shivanisinghss2110
            `;
            break;
        case 'javascript':
            codeSnippet.textContent = `
  // Optimized javaScript implementation
  // of Bubble sort
  // An optimized version of Bubble Sort
  function bubbleSort(arr, n)
  {
      var i, j, temp;
      var swapped;
      for (i = 0; i < n - 1; i++) 
      {
          swapped = false;
          for (j = 0; j < n - i - 1; j++) 
          {
              if (arr[j] > arr[j + 1]) 
              {
                  // Swap arr[j] and arr[j+1]
                  temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
                  swapped = true;
              }
          }
  
          // IF no two elements were 
          // swapped by inner loop, then break
          if (swapped == false)
          break;
      }
  }
  
  // Function to print an array 
  function printArray(arr, size)
  {
  var i;
  for (i = 0; i < size; i++)
      console.log(arr[i] + " ");
  }
  
  // Driver program
  var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
  var n = arr.length;
  bubbleSort(arr, n);
  console.log("Sorted array: ");
  printArray(arr, n);
  
  // This code is contributed shivanisinghss2110
            `;
            break;
        case 'python':
            codeSnippet.textContent = `
  # Optimized Python program for implementation of Bubble Sort
  def bubbleSort(arr):
      n = len(arr)
      
      # Traverse through all array elements
      for i in range(n):
          swapped = False
  
          # Last i elements are already in place
          for j in range(0, n-i-1):
  
              # Traverse the array from 0 to n-i-1
              # Swap if the element found is greater
              # than the next element
              if arr[j] > arr[j+1]:
                  arr[j], arr[j+1] = arr[j+1], arr[j]
                  swapped = True
          if (swapped == False):
              break
  
  
  # Driver code to test above
  if __name__ == "__main__":
      arr = [64, 34, 25, 12, 22, 11, 90]
  
      bubbleSort(arr)
  
      print("Sorted array:")
      for i in range(len(arr)):
          print("%d" % arr[i], end=" ")
  
  # This code is modified by Suraj krushna Yadav
            `;
            break;
        default:
            codeSnippet.textContent = `${selectedLanguage}`;
    }
    Prism.highlightElement(codeSnippet);
}






function bubbleStart(arr) {
    let gen = document.getElementById('gen');
    let btn = document.getElementById('start');
    let selectedOption = document.querySelector('.options');
    let sliderValue = document.getElementById('slider');
    bubbleSortCode();
    gen.disabled = true;
    btn.disabled = true;
    gen.style.cursor = "not-allowed";
    btn.style.cursor = "not-allowed";
    selectedOption.disabled = true;
    sliderValue.disabled = true;
    bubbleSort(arr)
        .then(() => {
            alert("Your array is sorted.")
            gen.disabled = false;
            btn.disabled = false;
            gen.style.cursor = "pointer";
            btn.style.cursor = "pointer";
            selectedOption.disabled = false;
            sliderValue.disabled = false;
        });
}
export { bubbleStart }
export { bubbleSort };
export { bubbleSortCode };