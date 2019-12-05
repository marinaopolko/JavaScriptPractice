function calculate() {
    var principal = document.loandata.principal.value;
    var interest = document.loandata.interest.value/100/12;
    var payments = document.loandata.years.value*12;

    var x=Math.pow(1 + interest, payments);
    var monthly = (principal*x*interest)/(x-1);

    var payment = document.getElementById("payment");
    var total = document.getElementById("total");
    var totalinterest = document.getElementById("totalinterest");

    payment.innerHTML = monthly.toFixed(2);
    total.innerHTML = (monthly*payments).toFixed(2);
    totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);}

var s = "Marina";
document.write(s);
var l = s.length;
var last = s.charAt(3);
document.write(last);
var m = "Sergey"
sub = m.substring(1,4);
document.write(sub);
var i =m.indexOf('y');
document.write(i);
var q = 23;
var w = q.toString();
document.write(typeof(w));
var e = "2.14 month";
document.write(parseFloat(e));
var obj ={l:left, r:right};
var newobj = obj.toString();
document.write(typeof(newobj));