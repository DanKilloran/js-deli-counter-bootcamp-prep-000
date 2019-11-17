var katzDeliLine = [];
  var takeANumber = function(katzDeliLine, name) {
    katzDeliLine.push(`${name}`)
    return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

  var nowServing = function(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
    }
    else { 
    var firstspot = katzDeliLine [0]
    katzDeliLine.shift()
    return (`Currently serving ${firstspot}.`); 
  }
  }

  var currentLine = function(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "The line is currently empty."
    }
    else { for ( var i = 1; i < katzDeliLine.length; i++) {
     ("The line is currently: ${katzDeliLine}${i},");
    }
    }
  return katzDeliLine
  }
  