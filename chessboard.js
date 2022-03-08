let size = 10; //set size of chess board.

let startChar = " ";
let followChar = "#";

for (let i = 1; i <= size; i ++) {

    let line = "";

    for (let j = 1; j <= size; j ++){
      
       line = line + ((i+j) % 2 != 0 ? followChar : startChar);
      
    }
    
    console.log(line);


}