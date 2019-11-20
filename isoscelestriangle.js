function isosceles(rows) { 
    for (var i = 1; i <= rows; i++) {
      var hashtag = " ";
      for (var j = 1; j <= (2 * rows - 1); j++) {
         (j >= rows + 1 - i && j <= rows - 1 + i)? hashtag += "#" : hashtag += " "; 
       }
      console.log(hashtag);
     }
 }
 isosceles(4);