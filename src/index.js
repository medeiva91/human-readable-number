module.exports = function toReadable (number) {
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
            'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
            'ninety'];

  let result = "";
  const hundred_num = (Math.floor(number/100));
  const tens_num = (number%100).toString();
  const ones_num = (number%10).toString();

  if (hundred_num > 0) {
    result += ones[hundred_num] + " hundred";
    if (tens_num != "0") {
      result += " ";
    }
  }


  console.log(hundred_num > 0);
  console.log(tens_num);



  if (tens_num > 19) {
    result += tens[tens_num[0]];
    if (ones_num[0] != "0") {
      result += " " + ones[ones_num[0]];
    }
  } else if (!(hundred_num > 0 && tens_num=="0")) {
      result += ones[tens_num];
  }



  console.log(result);
  return result;
}
