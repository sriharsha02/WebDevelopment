const arr = [1000, 11, 445, 1, 330, 3000];
minmax = getMinMax(arr,6);
function getMinMax(arr, n)
{
    minmax = new Array();
    let min;
    let max;
    if(n == 1){
        minmax.max = arr[0];
        minmax.min = arr[0];
        return minmax;
    }
    if(arr[0] > arr[1])
    {
        minmax.max = arr[0];
        minmax.min = arr[1];
    }
    else{
        minmax.max = arr[1];
        minmax.min = arr[0];
    }
    for( let i = 2; i < n; i++){
        if(arr[i] > minmax.max){
            minmax.max = arr[i];
        }else{
            minmax.min = arr[i];
        }
    }
    return minmax;
}
console.log('Min is: ' + minmax.min);
console.log('Max is: ' +minmax.max);