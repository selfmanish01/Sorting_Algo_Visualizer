const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}
// Red - '#FF0000'
// green - '#00FF00' -> '#48c486'
// grey - '#AA9870' -> 'grey'
// violet - '#BB0123' -> 'yellow'
let speed = 100;
async function quickSort(arr, start, end) {
    if (start < end) {
        let pivot = arr[start];
        let e1 = document.getElementById('elem' + start);
        e1.style.backgroundColor = '#FF0000';
        await sleep(speed);
        let low = start + 1;
        let high = end;
        // let e2=document.getElementById('elem'+low);
        // e2.style.backgroundColor='yellow';
        // let e3=document.getElementById('elem'+high);
        // e3.style.backgroundColor='yellow';
        while (true) {
            while (low <= high && arr[low] <= pivot) {
                // if(low+1!=high)await sleep(speed);
                // e2=document.getElementById('elem'+low);
                // e2.style.backgroundColor='#48c486';
                low++;
                // e2=document.getElementById('elem'+low);
                // e2.style.backgroundColor='yellow';
                // if(low==high)break;
            }
            while (low <= high && arr[high] >= pivot) {
                // await sleep(speed);
                // e3=document.getElementById('elem'+high);
                // e3.style.backgroundColor='#48c486';
                high--;
                // e3=document.getElementById('elem'+high);
                // e3.style.backgroundColor='yellow';
                // if(start+1==high)break;
            }
            if (low <= high) {
                [arr[low], arr[high]] = [arr[high], arr[low]];
                await sleep(speed);
                swapHeight(low, high);

            }
            else {
                break;
            }
        }
        await sleep(speed);

        [arr[start], arr[high]] = [arr[high], arr[start]];
        await sleep(speed);
        swapHeight(start, high);
        // swapColor(start,high);
        let e4 = document.getElementById('elem' + high);
        e4.style.backgroundColor = 'gray';
        e1.style.backgroundColor = '#48c486';
        await sleep(speed);
        // e1.style.backgroundColor='#48c486';
        // if(low!=high){
        //     e2=document.getElementById('elem'+low);
        //     e2.style.backgroundColor='#48c486';
        // }
        // let part = partition(arr, start, end);
        await sleep(speed);
        // e3=document.getElementById('elem'+high);
        // e3.style.backgroundColor='grey'; 
        await sleep(speed);
        await quickSort(arr, start, high - 1);
        await quickSort(arr, high + 1, end);
        await sleep(speed);
    }
    // else{
    //     let e=document.getElementById('elem'+start);
    //     e.style.backgroundColor='#FF0000'; 
    //     await sleep(speed);
    //     e.style.backgroundColor='grey'; 
    // }
}

async function swapHeight(first, last) {

    let e1 = document.getElementById('elem' + first);
    let e2 = document.getElementById('elem' + last);

    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.height = h2 + "px";
    e2.style.height = h1 + "px";

}

function swapColor(first, last) {
    let e1 = document.getElementById('elem' + first);
    let e2 = document.getElementById('elem' + last);

    let tempcolor = e1.style.backgroundColor;
    e1.style.backgroundColor = e2.style.backgroundColor;
    e2.style.backgroundColor = tempcolor;
}


function quickSortCode() {
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
  #include <bits/stdc++.h>
  using namespace std;
  
  int partition(int arr[],int low,int high)
  {
  //choose the pivot
  
  int pivot=arr[high];
  //Index of smaller element and Indicate
  //the right position of pivot found so far
  int i=(low-1);
  
  for(int j=low;j<=high;j++)
  {
      //If current element is smaller than the pivot
      if(arr[j]<pivot)
      {
      //Increment index of smaller element
      i++;
      swap(arr[i],arr[j]);
      }
  }
  swap(arr[i+1],arr[high]);
  return (i+1);
  }
  
  // The Quicksort function Implement
              
  void quickSort(int arr[],int low,int high)
  {
  // when low is less than high
  if(low<high)
  {
      // pi is the partition return index of pivot
      
      int pi=partition(arr,low,high);
      
      //Recursion Call
      //smaller element than pivot goes left and
      //higher element goes right
      quickSort(arr,low,pi-1);
      quickSort(arr,pi+1,high);
  }
  }
              
  
  int main() {
  int arr[]={10,7,8,9,1,5};
  int n=sizeof(arr)/sizeof(arr[0]);
  // Function call
  quickSort(arr,0,n-1);
  //Print the sorted array
  cout<<"Sorted Array\n";
  for(int i=0;i<n;i++)
  {
      cout<<arr[i]<<" ";
  }
  return 0;
  }
  // This Code is Contributed By Diwakar Jha
            `;
            break;
        case 'javascript':
            codeSnippet.textContent = `
  // Function to partition the array and return the partition index
  function partition(arr, low, high) {
      // Choosing the pivot
      let pivot = arr[high];
  
      // Index of smaller element and indicates the right position of pivot found so far
      let i = low - 1;
  
      for (let j = low; j <= high - 1; j++) {
          // If current element is smaller than the pivot
          if (arr[j] < pivot) {
              // Increment index of smaller element
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
          }
      }
  
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
      return i + 1; // Return the partition index
  }
  
  // The main function that implements QuickSort
  function quickSort(arr, low, high) {
      if (low < high) {
          // pi is the partitioning index, arr[pi] is now at the right place
          let pi = partition(arr, low, high);
  
          // Separately sort elements before partition and after partition
          quickSort(arr, low, pi - 1);
          quickSort(arr, pi + 1, high);
      }
  }
  
  // Driver code
  let arr = [10, 7, 8, 9, 1, 5];
  let N = arr.length;
  
  // Function call
  quickSort(arr, 0, N - 1);
  console.log("Sorted array:");
  console.log(arr.join(" "));
            `;
            break;
        case 'python':
            codeSnippet.textContent = `
  # Python3 implementation of QuickSort
  # Function to find the partition position
  def partition(array, low, high):
  
      # Choose the rightmost element as pivot
      pivot = array[high]
  
      # Pointer for greater element
      i = low - 1
  
      # Traverse through all elements
      # compare each element with pivot
      for j in range(low, high):
          if array[j] <= pivot:
  
              # If element smaller than pivot is found
              # swap it with the greater element pointed by i
              i = i + 1
  
              # Swapping element at i with element at j
              (array[i], array[j]) = (array[j], array[i])
  
      # Swap the pivot element with
      # the greater element specified by i
      (array[i + 1], array[high]) = (array[high], array[i + 1])
  
      # Return the position from where partition is done
      return i + 1
  
  
  # Function to perform quicksort
  def quicksort(array, low, high):
      if low < high:
  
          # Find pivot element such that
          # element smaller than pivot are on the left
          # element greater than pivot are on the right
          pi = partition(array, low, high)
  
          # Recursive call on the left of pivot
          quicksort(array, low, pi - 1)
  
          # Recursive call on the right of pivot
          quicksort(array, pi + 1, high)
  
  
  # Driver code
  if __name__ == '__main__':
      array = [10, 7, 8, 9, 1, 5]
      N = len(array)
  
      # Function call
      quicksort(array, 0, N - 1)
      print('Sorted array:')
      for x in array:
          print(x, end=" ")
  
  # This code is contributed by Adnan Aliakbar
            `;
            break;
        default:
            codeSnippet.textContent = '';
    }
    Prism.highlightElement(codeSnippet);
}




function quickStart(arr) {
    let gen = document.getElementById('gen');
    let btn = document.getElementById('start');
    let selectedOption = document.querySelector('.options');
    let sliderValue = document.getElementById('slider');
    quickSortCode();
    gen.disabled = true;
    btn.disabled = true;
    gen.style.cursor = "not-allowed";
    btn.style.cursor = "not-allowed";
    selectedOption.disabled = true;
    sliderValue.disabled = true;
    quickSort(arr, 0, arr.length - 1)
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
export { quickStart }
export { quickSortCode }
export { quickSort };
// export { partition };






