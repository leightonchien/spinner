//Refactor spinner 1 into shorter, more efficient code

let counter = 100;
let i = 0;
let interval = 200;

//Define new array
const newArr= ["|   ", "/   ", "-   ", "\\   ", "|   ", "/   ", "-   ", "\\   ", "|   \n"];

for (const element of newArr) {
  setTimeout(() => {
    process.stdout.write("\r" + element);
  }, counter + i * interval);
  i++;
}