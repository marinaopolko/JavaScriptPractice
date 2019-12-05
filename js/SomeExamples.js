Array.prototype.shuffle = function() {
    return this.sort(function() {
        return 0.5 - Math.random();
    });
};

// Simple task

var line = "my-short-string";
function camelize(line) {
    var newLine = line.split('-');
    var newLineJoin = newLine.join('');
    return newLineJoin;
}
alert(camelize(line));

var arr = [4, 3, 2, 1, 9, 6];
function filterRangePlace(arr, a, b){
    for (i = 0; i<arr.length; i++){
        let val = arr[i];
        if(val<a || val>b){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
alert(filterRangePlace(arr, 2, 3));


var array = [5 , 2 , 1 , -10 ,8];
for(var i = 0; i<array.length; i++){
    for (var j = 0; j<array.length; j++){
        if(array[i]>array[j]){
            var t = array[i];
            array[i] = array[j];
            array[j] = t;
        }
    }
}
alert (array);

var arrsecond = [5 , 2 , 1 , -10 ,8];
arrsecond.sort((a,b)=>b-a);
alert(arrsecond);

var vasya = { name: "Вася", age: 25 };
var petya = { name: "Петя", age: 30 };
var masha = { name: "Маша", age: 28 };

var users = [vasya, petya, masha];
let names = users.map(item=>item.name);

function sortByAge(users){
    users.sort((a,b)=> a.age > b.age ? 1 : -1);
    return users;
}
alert (JSON.stringify(sortByAge(users)));

var oneArray = [1, 3, 6, 2, 4];
function shuffle(array){
    array.sort(()=> Math.random() -0.5);
    return array;
}
oneArray = shuffle(oneArray);
alert(oneArray);


function palindrome(arg){
    var arguments = arg.toLowerCase();
    var argBackwards = arguments.split('').reverse().join('');
    if (arguments === argBackwards){
        alert('true');
    } else{
        alert('false');
    }
    return arg;
}
var arg = "anna"
alert(palindrome(arg));


function func(num){
    for( var i = 1; i<num; i++){
        if (i % 3 === 0){
            console.log('fizz');
        } else if (i % 5 === 0){
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}
func(6);

var stroka = 'abcde';/*alert(stroka[3]);*/
var str1 ='Привет';
var str2 = 'мир';
var sum = str1 + ', '+ str2;
alert (sum);

//Массив
var arrNew = ['Марина', 'Валентиновна', 'Ополько'];
var sumArr = arrNew[0] + ' '+ arrNew[1] + ' ' + arrNew[2];

alert(sumArr);

// Обекты
var obj = {'Коля': 1000, 'Петя': 1500, 'Вася': 900};

alert (obj['Коля']);
var mass =  {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};

alert(mass['js'][0]);

