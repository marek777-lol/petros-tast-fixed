const arr = [];
for (let i = 0; i < 30; i++) arr.push(Math.floor(Math.random() * 1000 - 500));
// console.log(arr);


/**
 * 1. Output: arr, sorted in ascending order
 * 2. Output: arr, sorted in descending order
 * 3. Output: number, iterations required for sorting arr in asc order
 * 4. Output: number, that is Arithmetic mean
 * 5.** Output: arr, sorted by asc independently on -/+ (by module)
 */

//<------------------------------------------------------------------------------------>
//done

const ascSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (arr[j] > arr[j + 1]) {
              let tmp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = tmp;
          }
      }
  }
  return arr;
};


console.log(ascSort(arr));

const descSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (arr[j] < arr[j + 1]) {
              let tmp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = tmp;
          }
      }
  }
  return arr;
};


console.log(descSort(arr));



const arithMean = (arr) => {
    let sum = 0;
    let res;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    res = sum / arr.length;
    return res

};

console.log(arithMean(arr));


let iterations = 0;

const countIterationsForSorting = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (arr[j] > arr[j + 1]) {
              let tmp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = tmp;
              iterations++;
          }
      }
  }
  return iterations;
};

console.log(countIterationsForSorting(arr));


const moduleSort = (arr) => {
  console.log(arr.sort((a, b) => Math.abs(a) - Math.abs(b)));
};

const moduleSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (Math.abs(arr[j]) > Math.abs(arr[j + 1])) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
console.log(moduleSort(arr));

//done
//<------------------------------------------------------------------------------------>