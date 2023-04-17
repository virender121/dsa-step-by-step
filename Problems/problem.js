function decodeString(s) {
    let i = 0;
    let currStr = "";
    let currNum = 0;
  
    while (i < s.length) {
      const c = s[i];
      if (c >= "0" && c <= "9") {
        currNum = currNum * 10 + parseInt(c);
      } else if (c === "[") {
        const [decodedStr, index] = decodeString(s.slice(i + 1));
        currStr += decodedStr.repeat(currNum);
        currNum = 0;
        i = i + index + 1;
      } else if (c === "]") {
        return [currStr, i];
      } else {
        currStr += c;
      }
      i++;
    }
  
    return currStr;
  }
  console.log(decodeString("2[abc]3[cd]ef"))