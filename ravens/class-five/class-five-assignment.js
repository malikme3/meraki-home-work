(function() {
  /* 

  First Function 
  1) name = doCleaning
  2) zero input
  3) After excuting function it should print "I clean house !"
  4) no return i.e. undefined



  Second Function 
  1) name = withDrawMoney
  2) one input i.e. amount
  4) After excuting function print input variable
  3) No return i.e. undefined

  Third Function 
  1) name = makeBreakefast
  2) Two inputs i.e. tea,toast
  4) After excuting function print  inputs/variables
  3) No retunr i.e. undefined

  Third Function 
  1) name = getFullName
  2) Three inputs i.e. firstName, secondName,middleName
  3) After excuting function print  full name i.e. combining all three inputs/variables
  4) Return full name
  5) Also declare new variable i.e  let result  = doSomething();
  6) print new declared variable i.e. console.info("Result of doSomething function is ", result)

  p.s.
  create new js file, write all above functions.
  attach this js file with any html
  after html refresh it should excute functon i.e. if these is any mistake
  also... try to do de-bugging

*/

  function doCleaning() {
    console.log('I clean house!');
  }

  function withDrawMoney(amount) {
    console.log('Withdran amout is: ', amount);
  }

  function makeBreakefast(food1, food2) {
    console.log('Braekfast for today is: ', food1, ' ', food2);
  }

  function getFullName(firstName, secondName, middleName) {
    console.log('full name is: ', firstName, ' ', secondName, ' ', middleName);
    return firstName + ' ', secondName + ' ' + middleName;
  }
  
  doCleaning();
  withDrawMoney(150);
  makeBreakefast('Tea', 'Toast');
  
  let fullName = getFullName('Ali', 'Pasha', 'Khan');
  console.log('Result of full name function is : ', fullName);
})();
