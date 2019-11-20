 function framedtext(frameWord) { 
     var wordlen = frameWord.length;
     var longestWord =frameWord[0].length;
     for(var i=1; i<wordlen; i++){
         if(frameWord[i].length >= longestWord){
             longestWord = frameWord[i].length;
         }
     } 
     var topLine = "";
     var topLineLength = longestWord + 4;
     for(var j =0; j<topLineLength; j++){
         topLine = topLine +"*";
     }
     console.log(topLine);
    
     for(var k=0; k< wordlen; k++){
         var wordRows = "* "+ frameWord[k];
         while(wordRows.length <= topLineLength - 2){
             wordRows = wordRows+ " ";
         }
         wordRows = wordRows+"*";
         console.log(wordRows);
     }
     console.log(topLine)
    }
framedtext(["Write", "good","code","every","day"]);