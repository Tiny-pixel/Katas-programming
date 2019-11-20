
function longest(myStringArray) {
    var longestString = "";
  for(var i =0; i<myStringArray; i++){
    if(myStringArray.length > longestString){
        longestString = myStringArray[i];
    }
    console.log("The longest string are/is : "+longestString);
    }
    }
    longest(["once", "upon", "a", "time"]);