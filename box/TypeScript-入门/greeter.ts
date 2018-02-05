// Code 普通代码
//function greeter(person){
//    return 'Hello, '+person;
//}
//var user = 'Rui';
//document.body.innerHTML = greeter(user);

// TS代码？
//function greeter(person: string) {
//    return "Hello, " + person;
//} 
//var user = '12'
//document.body.innerHTML = greeter(user); 

// TS
//interface Person {
//    firstName: string;
//    lastName: string;
//}
//function greeter(person: Person) {
//    return 'Hello, '+person.firstName + ' ' + person.lastName; 
//}
//var user = {firstName: 'Huang', lastName: 'Rui'}
//document.body.innerHTML = greeter(user)

// Class
// class Student{
//     fullName: string;
//     constructor(public firstName,public middleInitial, public lastName){
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

// interface Person{
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person){
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// var user = new Student('Rui', 'L', 'User')
// document.body.innerHTML = greeter(user)


// let ass : Array<number>= [1,2,3];
// let lisft: number[] = [1, 2, 3];
// let li1st1: string[] = ['1',' 2',' 3'];
// let haa: [string,number];

	
// enum Color {Red=1, Green=5, Blue}
// let c: Color = Color.Green;

// enum Color {Red = 1, Green, Blue}
// let colorName: string = Color[2];

// let list: any[] = [1, true, "free"];
// list[1] = 100;

// 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//     throw new Error(message);
// }

// // 推断的返回值类型为never
// function fail() {
//     return error("Something failed");
// }

// // 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//     while (true) {
//     }
// }

// function haha(arg: {la:string}){
//     console.log(1)
// }
// let a = {size : 1, la : 'sasd'}
// haha(a)

// interface obj{
//     color? : string;
//     width? : string;
//     [propName : string]: any
// }
// function f(arg : obj):{color:string, area:number}{
//     let obj2= {color: 'white',area:666}
//     if(arg.color){
//         console.log('Im COLOR')
//         obj2.color = arg.color
//     }
//     if(arg.width){
//         console.log('Im WIDTH')
//         obj2.area = 1234
//     }
//     return obj2
// }
// let a = f({color:'haha',opactiy: 0.5})

// interface constt{
//     readonly a : number;
//     readonly b : number;
// }

// let cons : constt = {a: 20, b:21}
// cons.a = 100
// console.log(cons)

// let arg: number[] = [1,2,3,4]
// let ary:ReadonlyArray<number> = arg
// arg = <number[]>ary 
// console.log(ary)

// interface SearchFunc {
//   (source: string, subString: string): number;
// }
// let mySearch: SearchFunc;
// mySearch = function(source, subString) {
//   let result = source.search(subString);
//   return result ;
// }

// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { }
// }

// interface gouzao{
//     new (a: number ,b: number):shili;
// }
// interface shili {
//     f()
// }
// function creatf( ctor : gouzao, a:number, b:number):shili{
//     return new ctor(a,b)
// }
// class AA implements shili{
//     constructor (a:number,b:number){}
//     f(){}
// }
// class BB implements shili{
//     constructor (a:number,b:number){}
//     f(){}
// }
// creatf(AA,12,12)

interface Con{
    (a:number): string;
    b:number;
    c():void;
}
function f():Con{
    let con = <Con>function(a:number){}
    con.b = 123;
    con.c = function(){};
    return con
}


