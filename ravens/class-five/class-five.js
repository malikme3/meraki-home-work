var gVariable = 'I am Global !';

function updateEle() {
  var lVariable = 'I am locak, belong to update()';
  console.log('Local Variable: ', lVariable);
  console.log('In update function.');
  document.getElementById('1').innerHTML = 'Hello HTML !';
}

function noReturn() {
  const score = 12;
}

function withReturn() {
  const score = 12;
  return score;
}

function doTest() {
  console.log('Global Variable: ', gVariable);
  console.log('Local Variable: ', lVariable);
  let noRet = noReturn();
  console.log('No return response: ', noRet);

  let withRet = withReturn();
  console.log('With return response: ', withRet);
}
