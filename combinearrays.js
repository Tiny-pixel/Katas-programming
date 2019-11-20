function combine(arr1, arr2){
 if(arr1.length == arr2.length){
     var arrayCombine = [];
     for(var i=0; i<arr1.length; i++){
         arrayCombine.push(arr1[i], arr2[i]);
     }
     console.log(arrayCombine);
 }
}
combine([11,22,33], [1,2,3])