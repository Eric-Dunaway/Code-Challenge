const test1 = "arrb6???4xxbl5???eee5"; //true
const test2 = "bcc?7??ccc?3tt1??????5"; //true
const test3 = "bb6?9"; //false
const test4 = "g??7??ccc??3tt1??????5"; //false and exit early

let QuestionMarks = function(str) {
  let prev = 0;
  let count = 0;
  let pass = false;
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (char === "?") {
      count++;
    } else {
      let num = parseInt(char, 10);
      if (!isNaN(num)) {
        let sum = prev + num;
        if (sum === 10) {
          if (count !== 3) {
            return false;
          } else {
            pass = true;
          }
        }
        count = 0;
        prev = num;
      }
    }
  }
  return pass;
};

if (
  QuestionMarks(test1) == true &&
  QuestionMarks(test2) == true &&
  QuestionMarks(test3) == false &&
  QuestionMarks(test4) == false
) {
  console.time("test1");
  QuestionMarks(test1);
  console.timeEnd("test1");
  console.time("test2");
  QuestionMarks(test2);
  console.timeEnd("test2");
  console.time("test3");
  QuestionMarks(test3);
  console.timeEnd("test3");
  console.time("test4");
  QuestionMarks(test4);
  console.timeEnd("test4");
}
