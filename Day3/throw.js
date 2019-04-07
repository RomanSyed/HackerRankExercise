function isPositive(a) {
  try {
    if (a > 0) console.log("YES");
    else if (a == 0) throw "Zero Error";
    else if (a < 0) throw "Negative Error";
  } catch (e) {
    console.log(e);
  }
}
isPositive(7);
isPositive(-1);
isPositive(0);
