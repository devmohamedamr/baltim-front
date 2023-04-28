class calc {
    constructor(x,y,o){
        this.x = x
        this.y = y
        this.o = o
        switch(this.o){
            case "+":
                this.add()
            break;
            case "-":
                this.sub()
            break;    
            case "/":
                this.div()
            break;    
            case "*":
                this.mult()
            break;        
        }
    }

    add = ()=>{
        console.log(this.x + this.y)
    }

    mult = ()=>{
        console.log(this.x * this.y)
    }

    div = ()=>{
        console.log(this.x / this.y)
    }

    sub = ()=>{
        console.log(this.x - this.y)
    }
}


export default calc;