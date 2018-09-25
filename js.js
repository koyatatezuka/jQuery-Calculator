let init = [];
let state = 'fresh';
let total = 0;
let a, b;
$('#one').on('click', function() {
  init.push('1');
});
$('#two').on('click', function() {
  init.push('2');
});
$('#three').on('click', function() {
  init.push('3');
});
$('#four').on('click', function() {
  init.push('4');
});
$('#five').on('click', function() {
  init.push('5');
});
$('#six').on('click', function() {
  init.push('6');
});
$('#seven').on('click', function() {
  init.push('7');
});
$('#eight').on('click', function() {
  init.push('8');
});
$('#nine').on('click', function() {
  init.push('9');
});
$('#zero').on('click', function() {
  if (init.length > 1 | init.length == 0 | (init.length == 1 && init[0] !== '0')) {
    init.push('0');
  }
});
$('#decimal').on('click', function() {
  if (!init.includes('.')) {
      init.push('.');
  }
});
$('.btn-primary').on('click', function() {
  if (init.length <= 18) {
    $('#display').html(init.join(''));
  } else {
    $('#display').html('18digits max C/CE');
  }
});
$('.btn-info').on('click', function() {
  if (init.length <= 18) {
    $('#display').html(init.join(''));
  } else {
    $('#display').html('18digits max C/CE');
  }
});
$('#clear').on('click', function() {
  state = 'fresh';
  init = [];
  $('#display').html('0');
  total = 0;
  a = 0;
  b = 0;
});
$('#ce').on('click', function() {
  init = [];
  $('#display').html('0');
});
$('#divide').on('click', function() {
  if (init.length !== 0) {
    calculate();
    $('#display').html(total);
  }
  state = 'div';
});
$('#multiply').on('click', function() {
  if (init.length !== 0) {
    calculate();
    $('#display').html(total);
  }
  state = 'mult';
});
$('#subtract').on('click', function() {
  if (init.length !== 0) {
    calculate();
    $('#display').html(total);
  }
  state = 'sub';
});
$('#add').on('click', function() {
  if (init.length !== 0) {
    calculate();
    $('#display').html(total);
  }
  state = 'add';
});
$('#equals').on('click', function() {
  calculate();
  $('#display').html(total);
  state = 'fresh';
  init = [];
});
$('#sqrt').on('click', function() {
  calculate();
  total = Math.sqrt(total);
  $('#display').html(total);
  state = 'fresh';
  init = [];
  a = total;
});
$('#percent').on('click', function() {
  init = [total * Number(init.join('')) / 100];
  calculate();
  $('#display').html(total);
  state = 'fresh';
  init = [];
  a = total;
});
function plus(n,m) {
  return n + m;
};
function minus(n,m) {
  return n - m;
};
function times(n,m) {
  return n * m;
};
function by(n,m) {
  return n / m;
};
function calculate() {
  b = Number(init.join(''));
  if (state == 'fresh') {
    if (init.length == 0 && total == 0) {
      a = 0;
    } else if (init.length == 0) {
      a = total;
    } else {
      a = Number(init.join(''));
      total = a;
    }
  } else if (state == 'add') {
    total = plus(a,b);
  } else if (state == 'sub') {
    total = minus(a,b);
  } else if (state == 'mult') {
    total = times(a,b);
  } else if (state == 'div') {
    total = by(a,b);
  }
  init = [];
  a = total;
}