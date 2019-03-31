function main(r) {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

  // Print the area of the circle:
  const PI = Math.PI;

  let areaOfCircle;
  areaOfCircle = PI * (r * r);
  console.log(areaOfCircle);
  // Print the perimeter of the circle:
  let perimeter;
  perimeter = 2 * PI * r;
  console.log(perimeter);
}
main(2.6);
