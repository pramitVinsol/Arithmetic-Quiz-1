export const generator = () => {
  let num1 = Math.floor(Math.random()*(20))
  let num2 = Math.floor(Math.random()*(20))
  const sign = '+-*/'
  if(num1<num2){
    [num1,num2] = [num2,num1]
  }
  const randomSign = sign.charAt(Math.floor(Math.random() * sign.length))
  return "" + num1+ ' ' + randomSign + ' ' + num2
}

export const solver = (exp) => {
  const elem = exp.split(' ')
  const num1 = parseInt(elem[0])
  const sign = elem[1]
  const num2 = parseInt(elem[2])

  switch(sign) {
    case '+':
      return num1+num2
    case '-':
      return num1-num2
    case '*':
      return num1*num2
    case '/':
      return num1/num2
    default:
      return 0
  } 
}