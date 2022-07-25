function binarySearch(arr, target){
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while(startIndex <= endIndex){
    let middleIndex = Math.floor(startIndex + (endIndex - startIndex)/2);
    if(target === arr[middleIndex]){
      return middleIndex;
    }
    if(target < arr[middleIndex]){
      endIndex = middleIndex -1;
    }
    else{
      startIndex = middleIndex + 1;
    }
  }
  return -1;
}
console.log(binarySearch([-5,2,4,6,10], 10));
console.log(binarySearch([-5,2,4,6,10], 6));
console.log(binarySearch([-5,2,4,6,10], 20));