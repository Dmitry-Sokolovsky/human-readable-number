module.exports = function toReadable (number) {
    const first = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
    let word = '';
  
    for (let i = 0; i < mad.length; i++) {
      let myNumber = number%(100*Math.pow(1000,i));
      if (Math.floor(myNumber/Math.pow(1000,i)) !== 0) {
        if (Math.floor(myNumber/Math.pow(1000,i)) < 20) {
          word = first[Math.floor(myNumber/Math.pow(1000,i))] + mad[i] + word;
        } else {
            if(first[Math.floor(myNumber/Math.pow(1000,i))%10]!==''){
          word = tens[Math.floor(myNumber/(10*Math.pow(1000,i)))] + " " + first[Math.floor(myNumber/Math.pow(1000,i))%10] +mad[i]  + word;
            }
            else {
                word = tens[Math.floor(myNumber/(10*Math.pow(1000,i)))] +mad[i]  + word;
            }
        }
      }
  
      myNumber = number%(Math.pow(1000,i+1));
      if (Math.floor(myNumber/(100*Math.pow(1000,i))) !== 0) word = first[Math.floor(myNumber/(100*Math.pow(1000,i)))] + ' hundred ' + word;
    }
    if(word.length==0){
        return "zero";
    }
    else if((word[word.length-1])===" "){
        return word.substring(0, word.length - 1);
        
    }else{
      return word;
      
    }
}
