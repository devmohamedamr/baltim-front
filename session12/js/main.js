// var x
// console.log(x)
// x = 2


// var i = 10

// for(var i=0;i<20;i++){
//     console.log(i)
// }


// console.log(i)
// console.log(i)






// let y = 10

// console.log(y)


// let i = 10

// for(let i =0;i<20;i++){
//     console.log(i)
// }


// console.log(i)



// let x = 10
// x = 20
// console.log(x)


// const PI = 22/7
// PI = 22
// console.log(PI)


// setInterval()




// oop







// function user (n,e){
//     this.name = n
//     this.email = e
//     console.log(this)
// }

// let x = new user("mohamed","mohamed@email.com")

// let u = new user("ahmed","ahmed@email.com")

// user("ahmed","ahmed@email.com")




// function emp(name,age,salary,dit){
//     this.name = name
//     this.age = age
//     this.salary = salary
//     this.dit = dit
//     this.netsalary = function(){
//         console.log(this.salary - this.dit)
//     }
// }




// let mohmed  = new emp("mohamed",22,1000,10)
// mohmed.netsalary()



// let ahmed  = new emp("ahmed",22,4000,450)

// ahmed.netsalary()



// console.log()



// function counter(){
//     this.count = 1
//     this.increment = function(){
//         setInterval(()=>{
//             this.count++
//             console.log(this.count)
//         },1000)
//     }
// }


// let c = new counter
// // console.log(c)
// c.increment()



// function number (){
//     console.log("ww")
// }


// let number = () => {console.log("ww")}



// let plus = (x,y) => { console.log(x+y) }
// plus(10,20)



// let welcom = _ => {console.log("hi mohamed")}

// welcom()


// document.getElementById("w").onclick = ()=>{

// }


// 
// import required,{sum} from './validation.js'

// required()
// sum()



// function emp(name,salary,dit){
//     this.salary = salary
//     this.name = name
//     this.dit = dit
//     this.netsalary = ()=>{
//         console.log(this.salary - this.dit)
//     }
// }




// let emp1 = new emp("mohamed",1000,100)
// emp1.netsalary()



// class emp {
//     constructor(name,salary,dit){
//         this.name = name
//         this.salary = salary
//         this.dit = dit
//     }
//     netsalary = ()=>{
//         console.log(this.salary-this.dit)
//     }

//     hi = ()=>{

//     }
// }



// let e = new emp()

// console.log(e)


// let m = new emp("mohamed",1000,100)
// console.log(m)
// m.netsalary()





// 



// let o = new cacl(10,20,"+")



import calc from './calc.js'

let c = new calc(10,20,"/")