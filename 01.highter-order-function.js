let arr = [1,2,3,4,5,6]

// 模拟forEach

function forEach(array,fn) {
  for(let i = 0; i < array.length; i++){
    fn(array[i])
  }
}

// 模拟filter

function filter(array,fn) {
  let result = []
  for(let i = 0; i < array.length; i++){
    if(fn(array[i])){
      result.push(array[i])
    }
  }
  return result
}

let result = filter(arr,function (item) {
    return item > 3
})
console.log(result)
