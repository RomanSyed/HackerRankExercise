function reverseString(s) {
  try {
    let splited = s.split("");
    let reversed = splited.reverse();
    let joined = reversed.join("");
    console.log(joined);
  } catch (e) {
    console.log("s.split is not a function");
    console.log(s);
  }
}
reverseString("1234");
reverseString(Number(1234));
