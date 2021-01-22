//--створити масив та вивести його в консоль:
//- з 5 числових значень
/*
let num=[1, 2, 3, 4, 5];
console.log(num)
*/
//- з 5 стічкових значень
/*
let str=['work', 'house', 'child', 'parens', 'brouser']
console.log(str)
*/
//з 5 значень стрічкового, числового та булевого типу
/*
let boll=['work', 'house', 5<4, 4, 5>4]
console.log(boll)
*/
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
/*
 let str1=[]
 str1[2]='lesson'
 str1[0]=2
 str1[1]='window'
 str1[4]=5!=6
 console.log(str1)
 */
 //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині 
 /*
 for (let i = 0; i<10; i++) {
     document.write('<div>java</div>');
     
 }
 */
 //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
/*
 for (let i = 0; i<10; i++) {
     document.write('<div>java : '+i+'</div>')
     document.write(`<div> java : ${i} </div>`)   
 }
*/
 //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 /*
let i = 0
 while(i < 20) {
    document.write('<h1>java</h1>')
  i++   
 }
*/
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
/*
let i = 0
 while(i < 20) {
    document.write('<h1> Fava: '+i+' </h1>')
  i++   
 }
*/
//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
 
/*const masuv=[45, 42, 13, 46, 78, 89, 56, 14, 36, 72]
 console.log(masuv);
 for (let i = 0; i < masuv.length; i++) {
     console.log(masuv[i])
     
 }
for (const number in masuv){
    console.log(masuv[number])
}
masuv.forEach(i=>console.log(i))*/
              
 //- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
 
 /*const masuv1=['work', 'house', 'child', 'parens', 'brouser','work', 'child', 'parens', 'brouser']*/

 /* (let i = 0; i < masuv1.length; i++) {
     console.log (masuv1[i]);
 }
 */
/*for (const string in masuv1) {
console.log(masuv1[string])
}*/
/*masuv1.forEach(i=>console.log(i))*/
    //- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

/*const masuv1=['work', 'house', 'child', 'parens', 8===8, 45, 42, 13, 46, 8<=7]*/
/*for (let i = 0; i < masuv1.length; i++) {
    console.log (masuv1[i]);
}
*/
/*masuv1.forEach(i=>console.log(i))*/
/*for (const string in masuv1) {
    console.log(masuv1[string])
}*/
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/*const masuv1=['work', 'house', 'child', 'parens', 8===8, 45, 42, 13, 46, 8<=7]*/
/*for (let i = 0; i < masuv1.length; i++) {
    if (typeof masuv1[i] === 'boolean')
    ? console.log(masuv1[i]) : ""
}else{

}
*/
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/*for (let i = 0; i < masuv1.length; i++) {
    if (typeof masuv1[i] === 'number')
    console.log(masuv1[i]) 

}*/
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
/*for (let i = 0; i < masuv1.length; i++) {
    if (typeof masuv1[i] === 'string')
    console.log(masuv1[i]) 

}*/
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
/*let str1=[];
 str1[2]='lesson';
 str1[0]=2;
 str1[1]='window';
 str1[4]=5!=6;
 str1[3]='notebook';
 str1[5]='teable';
 str1[6]=7<8;
 str1[7]=10===11;
 str1[8]=4;
 str1[9]=45;
 str1[10]=1981;
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i])
    
}*/

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 10; i++) {
    console.log('telephon : '  ,i)
    document.write(`telephon : ${i} <br>`)
     
}*/

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 100; i++) {
    console.log('telephon : '  ,i)
    document.write(`telephon : ${i} <br>`)
     
}*/
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 2; i < 200; i=i+2) {
    console.log('telephon : '  ,i)
    document.write(`telephon : ${i} <br>`)
}*/
/*let telephon=0
for (let i = 2; i < 100; i++) {
    console.log('telephon : '  ,telephon)
    document.write(`telephon : ${telephon} <br>`)
    telephon+=2
}*/ ///коротка запись 

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

/*for (let i = 2; i < 100; i++) {
    if(i%2 === 0){
    console.log('telephon : '  ,i)
    document.write(`telephon : ${i} <br>`)
    }
}*/

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*for (let i = 2; i < 100; i++) {
    if(i%2 === 1){
    console.log('telephon : '  ,i)
    document.write(`telephon : ${i} <br>`)
    }
}*/
/*for (let i = 1; i < 100; i+=2) {
    console.log('telephon : '  ,i)
    document.write(`telephon : ${i} <br>`)

}*/
/*for (let i = 2; i < 100; i+=2) {
    console.log('telephon : '  ,i)
    document.write(`telephon : ${i} <br>`)

}*/
//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)



//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
/*let daf=['s', 'u', 'n']
let qew=''
for (let i = 0; i < daf.length; i++) {
    qew=qew+daf[i] 
}
console.log(qew)*/
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
/*let daf=['s', 'u', 'n']
let i=0 
let qew=''
while ( i < daf.length) {
    qew=qew+daf[i]
    i++
}
console.log(qew)*/

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
/*let daf=['s', 'u', 'n']
let qew=''
for (const string of daf) {
    qew=qew+string
}
console.log(qew)*/
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
/*let daf=['s', 'u', 'n']
let qew=''
for (const string in daf) {
    qew=qew+daf[string]
}
console.log(qew)*/
// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу
/*let wer = ['a', 'b', 'c']
for (let i = 0; i <= 3; i++) {
    wer.push(i)   
}
console.log(wer)*/

//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

/*let wer =[1, 2, 3]
let newWer=wer.reverse()
console.log(newWer)*/

//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let wer =[1, 2, 3]
for (let i = 4; i <= 6; i++) {
    wer.push(i)   
}
console.log(wer)



