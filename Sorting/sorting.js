// Selection Sorting array

let arr = [12, 5, 125, 46, 23, 65, 542];

const selection = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let index = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    // swapping
    let temp = min;
    arr[index] = arr[i];
    arr[i] = temp;
  }
  console.log(arr, "arr");
};

// selection(arr)

// Bubble Sorting array

const Bubble = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let more = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        more = false;
      }
    }
    console.log(arr, "arr1");
    // if(more){
    //     break
    // }
  }
};

// Bubble(arr)

// Insertion Sorting array

const Insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  console.log(arr, "insertion");
};

// Insertion(arr)

// Merge Sorting

function Merge(arr, low, high) {
  //   if (low == high) return;
  //   let mid = (low + high) / 2;
  //   Merge(arr, low, mid);
  //   Merge(arr, mid + 1, high);
  //   Sort(arr, low, mid, high);

  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  Merge(arr, low, mid);
  Merge(arr, mid + 1, high);
  Sort(arr, low, mid, high);
}

function Sort(arr, low, mid, high) {
  let left = low;
  let right = mid + 1;
  let temp = [];
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  console.log(low, high);
  for(let i=low; i<=high; i++){
    arr[i] = temp[i-low] //i-low because to make array indexing from 0 meaning, low=2 arr[2] = temp[low~2 - 2]~temp[0]
  }
}

// Merge(arr, 0, arr.length - 1);


// Quick Sorting

function Partition(arr, low, high){
  let pivot = arr[low]
  let i= low
  let j = high
  while(i<j){
    while(arr[i] <= pivot && i <= high-1){
      i++
    }
    while(arr[j] > pivot && j >= low+1){
      j--
    }
    if(i < j){
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]]
  return j
}


function Quick(arr, low, high){
  if(low < high){
    let pIndex = Partition(arr, low, high)
    Quick(arr, low, pIndex-1)
    Quick(arr, pIndex +1, high)
  }
}

Quick(arr, 0, arr.length-1)
console.log(arr, "Arr");