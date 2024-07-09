const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

let delay = 200;

async function heapSort(arr, n) {
    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        // i=Math.floor(i);
        await heapify(arr, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        let e = document.getElementById('elem' + 0);
        e.style.background = 'red';
        let e1 = document.getElementById('elem' + i);
        e1.style.background = 'grey';
        swapHeightNumber(arr, 0, i);
        await sleep(delay);

        // call max heapify on the reduced heap
        await heapify(arr, i, 0);
    }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
async function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    let e4 = document.getElementById('elem' + l);
    let e5 = document.getElementById('elem' + largest);
    if (l < n && parseInt(e4.style.height) > parseInt(e5.style.height)) {
        // arr[l].style.background = 'lightblue'; 
        // arr[largest].style.background = 'cyan';
        largest = l;
        swapHeightNumber(arr, largest, l);
        // arr[l].style.background = '#e43f5a';
    }


    // If right child is larger than largest so far
    let e2 = document.getElementById('elem' + r);
    let e3 = document.getElementById('elem' + largest);
    if (r < n && parseInt(e2.style.height) > parseInt(e3.style.height)) {
        // arr[r].style.background = 'lightgreen';
        // arr[largest].style.background = 'cyan'; 
        largest = r;
        swapHeightNumber(arr, largest, r);
        // arr[l].style.background = '#e43f5a'; 
    }

    // If largest is not root
    if (largest != i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        swapHeightNumber(arr, i, largest);

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}
function swapHeightNumber(arr, i, j) {
    let e1 = document.getElementById('elem' + i);
    let e2 = document.getElementById('elem' + (j));
    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.height = h2 + "px";
    e2.style.height = h1 + "px";
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSortCode() {
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
  // C++ program for implementation of Heap Sort
  #include <iostream>
  using namespace std;
  
  // To heapify a subtree rooted with node i
  // which is an index in arr[].
  // n is size of heap
  void heapify(int arr[], int N, int i)
  {
  
      // Initialize largest as root
      int largest = i;
  
      // left = 2*i + 1
      int l = 2 * i + 1;
  
      // right = 2*i + 2
      int r = 2 * i + 2;
  
      // If left child is larger than root
      if (l < N && arr[l] > arr[largest])
          largest = l;
  
      // If right child is larger than largest
      // so far
      if (r < N && arr[r] > arr[largest])
          largest = r;
  
      // If largest is not root
      if (largest != i) {
          swap(arr[i], arr[largest]);
  
          // Recursively heapify the affected
          // sub-tree
          heapify(arr, N, largest);
      }
  }
  
  // Main function to do heap sort
  void heapSort(int arr[], int N)
  {
  
      // Build heap (rearrange array)
      for (int i = N / 2 - 1; i >= 0; i--)
          heapify(arr, N, i);
  
      // One by one extract an element
      // from heap
      for (int i = N - 1; i > 0; i--) {
  
          // Move current root to end
          swap(arr[0], arr[i]);
  
          // call max heapify on the reduced heap
          heapify(arr, i, 0);
      }
  }
  
  // A utility function to print array of size n
  void printArray(int arr[], int N)
  {
      for (int i = 0; i < N; ++i)
          cout << arr[i] << " ";
      cout << "\n";
  }
  
  // Driver's code
  int main()
  {
      int arr[] = { 12, 11, 13, 5, 6, 7 };
      int N = sizeof(arr) / sizeof(arr[0]);
  
      // Function call
      heapSort(arr, N);
  
      cout << "Sorted array is \\n";
      printArray(arr, N);
  }
            `;
            break;
        case 'javascript':
            codeSnippet.textContent = `
  // JavaScript program for implementation
  // of Heap Sort
  
  function sort( arr)
  {
      var N = arr.length;
      // Build heap (rearrange array)
      for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
          heapify(arr, N, i);
  
      // One by one extract an element from heap
      for (var i = N - 1; i > 0; i--) {
          // Move current root to end
          var temp = arr[0];
          arr[0] = arr[i];
          arr[i] = temp;

          // call max heapify on the reduced heap
          heapify(arr, i, 0);
      }
  }

  // To heapify a subtree rooted with node i which is
  // an index in arr[]. n is size of heap
  function heapify(arr, N, i)
  {
      var largest = i; // Initialize largest as root
      var l = 2 * i + 1; // left = 2*i + 1
      var r = 2 * i + 2; // right = 2*i + 2
      // If left child is larger than root
      if (l < N && arr[l] > arr[largest])
          largest = l;
      // If right child is larger than largest so far
      if (r < N && arr[r] > arr[largest])
          largest = r;
      // If largest is not root
      if (largest != i) {
          var swap = arr[i];
          arr[i] = arr[largest];
          arr[largest] = swap;
          // Recursively heapify the affected sub-tree
          heapify(arr, N, largest);
      }
  }

  /* A utility function to print array of size n */
  function printArray(arr)
  {
      var N = arr.length;
      for (var i = 0; i < N; ++i)
          document.write(arr[i] + " ");
      
  }


  var arr = [12, 11, 13, 5, 6, 7];
  var N = arr.length;
  sort(arr);  
  document.write( "Sorted array is");
  printArray(arr, N);

  // This code is contributed by SoumikMondal
            `;
            break;
        case 'python':
            codeSnippet.textContent = `
  # Python program for implementation of heap Sort

  # To heapify subtree rooted at index i.
  # n is size of heap
  
  
  def heapify(arr, N, i):
      largest = i # Initialize largest as root
      l = 2 * i + 1	 # left = 2*i + 1
      r = 2 * i + 2	 # right = 2*i + 2
  
      # See if left child of root exists and is
      # greater than root
      if l < N and arr[largest] < arr[l]:
          largest = l
  
      # See if right child of root exists and is
      # greater than root
      if r < N and arr[largest] < arr[r]:
          largest = r
  
      # Change root, if needed
      if largest != i:
          arr[i], arr[largest] = arr[largest], arr[i] # swap
  
          # Heapify the root.
          heapify(arr, N, largest)
  
  # The main function to sort an array of given size
  
  
  def heapSort(arr):
      N = len(arr)
  
      # Build a maxheap.
      for i in range(N//2 - 1, -1, -1):
          heapify(arr, N, i)
  
      # One by one extract elements
      for i in range(N-1, 0, -1):
          arr[i], arr[0] = arr[0], arr[i] # swap
          heapify(arr, i, 0)
  
  
  # Driver's code
  if __name__ == '__main__':
      arr = [12, 11, 13, 5, 6, 7]
  
      # Function call
      heapSort(arr)
      N = len(arr)
  
      print("Sorted array is")
      for i in range(N):
          print("%d" % arr[i], end=" ")
  # This code is contributed by Mohit Kumra
            `;
            break;
        default:
            codeSnippet.textContent = '';
    }
    Prism.highlightElement(codeSnippet);
}



function heapStart(arr) {
    let gen = document.getElementById('gen');
    let btn = document.getElementById('start');
    let selectedOption = document.querySelector('.options');
    let sliderValue = document.getElementById('slider');
    heapSortCode();
    gen.disabled = true;
    btn.disabled = true;
    selectedOption.disabled = true;
    sliderValue.disabled = true;
    gen.style.cursor = "not-allowed";
    btn.style.cursor = "not-allowed";
    heapSort(arr, arr.length)
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
export { heapStart }
export { heapSortCode }
export { heapSort };