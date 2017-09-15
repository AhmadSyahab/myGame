//build_program Week 2

// Program ini di rancang untuk menebak huruf dari suatu kata 
// Sehingga terbentuknya suatu kata yang telah ditentukan sebelumnya

//Fungsi untuk memasukan kata
function insertWord(){
  var word = prompt ("Insert Word = ");
  return word;
}
//Fungsi untuk mengubah string to array
function convertArray(subject){
  return subject.split("");
}
//Fungsi untuk membuat array kosong dengan panjang yang sama
function convertBlank(subjectArray){
  var newSubjectArray = [];
  for (var index = 0 ; index<subjectArray.length ; index++){
    newSubjectArray.push("");
  }
  return newSubjectArray;
}
//Fungsi untuk menebak huruf di dalam kata
function guessArray(word, array , tempArray){ 
      for (var index1=0 ; index1<array.length ; index1++){
        if (array[index1] === word){
           tempArray.splice ((index1+1), 0 , word); 
           tempArray.splice (index1, 1);
        } 
      }
        console.log ("result = "+ tempArray);
      if (array.join("").length === tempArray.join("").length){
        console.log ("Game Over"); // apabila kondisi IF terpenuhi maka Game Over 
      }else {
        var newWord = insertWord()
        guessArray(newWord, array , tempArray); // kondisi ini akan berulang hingga IF terpenuhi
      } 
}
var game = "makan"; // kata yang akan dijadikan game
var input = insertWord();
var arrayName = convertArray(game);
var arrayBlank = convertBlank(convertArray(game));
guessArray(input, arrayName, arrayBlank);  