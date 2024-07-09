const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

let delay = 70;

async function merge(arr, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await sleep(delay);
        let e = document.getElementById('elem' + (low + i));
        e.style.backgroundColor = '#ff4291';
        left[i] = e.style.height;
    }
    for (let i = 0; i < n2; i++) {
        await sleep(delay);
        let e = document.getElementById('elem' + (mid + 1 + i));
        e.style.background = 'yellow';
        right[i] = e.style.height;
    }
    await sleep(delay);
    let i = 0, j = 0, k = low;
    while (i < n1 && j < n2) {
        await sleep(delay);
        let e = document.getElementById('elem' + (k));
        if (parseInt(left[i]) <= parseInt(right[j])) {

            if ((n1 + n2) === arr.length) {
                e.style.background = 'grey';
            }
            else {
                e.style.background = 'red';
            }

            e.style.height = left[i];
            i++;
            k++;
        }
        else {
            if ((n1 + n2) === arr.length) {
                e.style.background = 'grey';
            }
            else {
                e.style.background = 'red';
            }
            e.style.height = right[j];
            j++;
            k++;
        }
    }
    while (i < n1) {
        await sleep(delay);
        let e = document.getElementById('elem' + (k));
        if ((n1 + n2) === arr.length) {
            e.style.background = 'grey';
        }
        else {
            e.style.background = 'red';
        }
        e.style.height = left[i];
        i++;
        k++;
    }
    while (j < n2) {
        let e = document.getElementById('elem' + (k));
        await sleep(delay);
        if ((n1 + n2) === arr.length) {
            e.style.background = 'grey';
        }
        else {
            e.style.background = 'red';
        }
        e.style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(arr, l, r) {
    if (l >= r) {
        //sorting complete
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
}


function mergeSortCode() {
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
  // C++ program for Merge Sort
  #include <bits/stdc++.h>
  using namespace std;
  
  // Merges two subarrays of array[].
  // First subarray is arr[begin..mid]
  // Second subarray is arr[mid+1..end]
  void merge(int array[], int const left, int const mid,
          int const right)
  {
      int const subArrayOne = mid - left + 1;
      int const subArrayTwo = right - mid;
  
      // Create temp arrays
      auto *leftArray = new int[subArrayOne],
          *rightArray = new int[subArrayTwo];
  
      // Copy data to temp arrays leftArray[] and rightArray[]
      for (auto i = 0; i < subArrayOne; i++)
          leftArray[i] = array[left + i];
      for (auto j = 0; j < subArrayTwo; j++)
          rightArray[j] = array[mid + 1 + j];
  
      auto indexOfSubArrayOne = 0, indexOfSubArrayTwo = 0;
      int indexOfMergedArray = left;
  
      // Merge the temp arrays back into array[left..right]
      while (indexOfSubArrayOne < subArrayOne
          && indexOfSubArrayTwo < subArrayTwo) {
          if (leftArray[indexOfSubArrayOne]
              <= rightArray[indexOfSubArrayTwo]) {
              array[indexOfMergedArray]
                  = leftArray[indexOfSubArrayOne];
              indexOfSubArrayOne++;
          }
          else {
              array[indexOfMergedArray]
                  = rightArray[indexOfSubArrayTwo];
              indexOfSubArrayTwo++;
          }
          indexOfMergedArray++;
      }
  
      // Copy the remaining elements of
      // left[], if there are any
      while (indexOfSubArrayOne < subArrayOne) {
          array[indexOfMergedArray]
              = leftArray[indexOfSubArrayOne];
          indexOfSubArrayOne++;
          indexOfMergedArray++;
      }
  
      // Copy the remaining elements of
      // right[], if there are any
      while (indexOfSubArrayTwo < subArrayTwo) {
          array[indexOfMergedArray]
              = rightArray[indexOfSubArrayTwo];
          indexOfSubArrayTwo++;
          indexOfMergedArray++;
      }
      delete[] leftArray;
      delete[] rightArray;
  }
  
  // begin is for left index and end is right index
  // of the sub-array of arr to be sorted
  void mergeSort(int array[], int const begin, int const end)
  {
      if (begin >= end)
          return;
  
      int mid = begin + (end - begin) / 2;
      mergeSort(array, begin, mid);
      mergeSort(array, mid + 1, end);
      merge(array, begin, mid, end);
  }
  
  // UTILITY FUNCTIONS
  // Function to print an array
  void printArray(int A[], int size)
  {
      for (int i = 0; i < size; i++)
          cout << A[i] << " ";
      cout << endl;
  }
  
  // Driver code
  int main()
  {
      int arr[] = { 12, 11, 13, 5, 6, 7 };
      int arr_size = sizeof(arr) / sizeof(arr[0]);
  
      cout << "Given array is \n";
      printArray(arr, arr_size);
  
      mergeSort(arr, 0, arr_size - 1);
  
      cout << "\nSorted array is \n";
      printArray(arr, arr_size);
      return 0;
  }
  
  // This code is contributed by Mayank Tyagi
  // This code was revised by Joshua Estes
            `;
            break;
        case 'javascript':
            codeSnippet.textContent = `
  // JavaScript program for Merge Sort

  // Merges two subarrays of arr[].
  // First subarray is arr[l..m]
  // Second subarray is arr[m+1..r]
  function merge(arr, l, m, r)
  {
      var n1 = m - l + 1;
      var n2 = r - m;
  
      // Create temp arrays
      var L = new Array(n1); 
      var R = new Array(n2);
  
      // Copy data to temp arrays L[] and R[]
      for (var i = 0; i < n1; i++)
          L[i] = arr[l + i];
      for (var j = 0; j < n2; j++)
          R[j] = arr[m + 1 + j];
  
      // Merge the temp arrays back into arr[l..r]
  
      // Initial index of first subarray
      var i = 0;
  
      // Initial index of second subarray
      var j = 0;
  
      // Initial index of merged subarray
      var k = l;
  
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          }
          else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }
  
      // Copy the remaining elements of
      // L[], if there are any
      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }
  
      // Copy the remaining elements of
      // R[], if there are any
      while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }
  
  // l is for left index and r is
  // right index of the sub-array
  // of arr to be sorted
  function mergeSort(arr,l, r){
      if(l>=r){
          return;
      }
      var m =l+ parseInt((r-l)/2);
      mergeSort(arr,l,m);
      mergeSort(arr,m+1,r);
      merge(arr,l,m,r);
  }
  
  // Function to print an array
  function printArray( A, size)
  {
      for (var i = 0; i < size; i++)
      console.log( A[i] + " ");
  }
  
  
  var arr = [ 12, 11, 13, 5, 6, 7 ];
      var arr_size = arr.length;
  
      console.log( "Given array is ");
      printArray(arr, arr_size);
  
      mergeSort(arr, 0, arr_size - 1);
  
      console.log( "Sorted array is ");
      printArray(arr, arr_size);
  
  // This code is contributed by SoumikMondal
            `;
            break;
        case 'python':
            codeSnippet.textContent = `
  # Python program for implementation of MergeSort
  def mergeSort(arr):
      if len(arr) > 1:
  
          # Finding the mid of the array
          mid = len(arr)//2
  
          # Dividing the array elements
          L = arr[:mid]
  
          # Into 2 halves
          R = arr[mid:]
  
          # Sorting the first half
          mergeSort(L)
  
          # Sorting the second half
          mergeSort(R)
  
          i = j = k = 0
  
          # Copy data to temp arrays L[] and R[]
          while i < len(L) and j < len(R):
              if L[i] <= R[j]:
                  arr[k] = L[i]
                  i += 1
              else:
                  arr[k] = R[j]
                  j += 1
              k += 1
  
          # Checking if any element was left
          while i < len(L):
              arr[k] = L[i]
              i += 1
              k += 1
  
          while j < len(R):
              arr[k] = R[j]
              j += 1
              k += 1
  
  
  # Code to print the list
  def printList(arr):
      for i in range(len(arr)):
          print(arr[i], end=" ")
      print()
  
  
  # Driver Code
  if __name__ == '__main__':
      arr = [12, 11, 13, 5, 6, 7]
      print("Given array is")
      printList(arr)
      mergeSort(arr)
      print("\nSorted array is ")
      printList(arr)
  
  # This code is contributed by Mayank Khanna
            `;
            break;
        default:
            codeSnippet.textContent = '';
    }
    Prism.highlightElement(codeSnippet);
}




function mergeStart(arr) {
    let gen = document.getElementById('gen');
    let btn = document.getElementById('start');
    let selectedOption = document.querySelector('.options');
    let sliderValue = document.getElementById('slider');
    mergeSortCode();
    gen.disabled = true;
    btn.disabled = true;
    gen.style.cursor = "not-allowed";
    btn.style.cursor = "not-allowed";
    selectedOption.disabled = true;
    sliderValue.disabled = true;
    mergeSort(arr, 0, arr.length - 1)
        .then(() => {
            alert("Your array is sorted.")
            gen.disabled = false;
            gen.style.cursor = "pointer";
            btn.style.cursor = "pointer";
            btn.disabled = false;
            selectedOption.disabled = false;
            sliderValue.disabled = false;
        });
}
export { mergeStart }
export { mergeSortCode };
export { mergeSort };