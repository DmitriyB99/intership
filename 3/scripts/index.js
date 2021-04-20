/////////////////////////////////////////////////////// 3

const spaceDelete = (string) => {  
  if (typeof string !== 'string') {
    console.log('not a string');
    return;
  }

  let newStr = string.trim();    
  console.log(newStr);

  if (newStr.length > 30) {
    newStr = newStr.slice(0, 30) + '...';
    console.log(newStr);
  }
}

spaceDelete('       01234567890012345678901234567890123456789      ');

