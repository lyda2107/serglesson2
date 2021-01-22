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
const masuv1=['work', 'house', 'child', 'parens', 8===8, 45, 42, 13, 46, 8<=7]
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
let str1=[];
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
    
}