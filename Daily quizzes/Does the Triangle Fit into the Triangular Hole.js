
function doesTriangleFit(triange, hole) {
  
    const heron = arr => {
      
      area = arr.reduce((a,c)=> a + c)/2
      
      return Math.sqrt(area*(area-arr[0])*(area-arr[1])*(area-arr[2]))
    }
  
    
    return heron(triange) === 0 || heron(hole) === 0 ? false : heron(triange) <= heron(hole)
  }
  


  console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]));
  console.log(doesTriangleFit([1, 1, 1], [2, 2, 2]));
  console.log(doesTriangleFit([1, 2, 3], [1, 2, 2]));
  console.log(doesTriangleFit([1, 2, 4], [1, 2, 6]));

