function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i].includes("a")) console.log(s[i]);
    if (s[i].includes("e")) console.log(s[i]);
    if (s[i].includes("i")) console.log(s[i]);
    if (s[i].includes("o")) console.log(s[i]);
    if (s[i].includes("u")) console.log(s[i]);
  }
}
vowelsAndConsonants("javascriptloops");
