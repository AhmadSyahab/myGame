//build_program Week 2

// Program ini di rancang untuk menebak huruf dari suatu kata 
// Sehingga terbentuknya suatu kata yang telah ditentukan sebelumnya

function insertWord(){
  var word = prompt ("Insert Word = ");
  return word;
}

function convertArray(subject){
  return subject.split("");
}

function convertBlank(subjectArray){
  var newSubjectArray = [];
  for (var index = 0 ; index<subjectArray.length ; index++){
    newSubjectArray.push("");
  }
  return newSubjectArray;
}

function guessArray(word, array , tempArray){ 
      for (var index1=0 ; index1<array.length ; index1++){
        if (array[index1] === word){
           tempArray.splice ((index1+1), 0 , word);
           tempArray.splice (index1, 1);
        } 
      }
        console.log ("result = "+ tempArray);
      if (array.join("").length === tempArray.join("").length){
        console.log ("Game Over");
      }else {
        var newWord = insertWord()
        guessArray(newWord, array , tempArray);
      }
}
var game = "makan";
var input = insertWord();
var arrayName = convertArray(game);
var arrayBlank = convertBlank(convertArray(game));
guessArray(input, arrayName, arrayBlank);  