class PasswordGenerator{
    constructor(){
        this.password = "";
    }
    strongPasswordGenerator(len){
        len = Number.parseInt(len)
        let i = Number.parseInt(0)
        let pw = "";
        for(;i<len;i++){
            let idx = Math.floor(33+Math.random()*94)
            pw+=String.fromCharCode(idx)
        }
        this.password = pw
    }
    weakPasswordGenerator(len){
        len = Number.parseInt(len)
        let i = Number.parseInt(0)
        let pw = ""
        let arr = [48,65,97]
        let brr = [10,26,26]
        for(;i<len;i++){
            let idx = Math.floor(Math.random()*3);
            let id = Math.floor(Math.random()*Number.parseInt(brr[idx])+arr[idx])
            pw+=String.fromCharCode(id)
        }
        this.password = pw
    }
    funnyPasswordGenerator(len){
        len = Number.parseInt(len)
        let i = Number.parseInt(0)
        let pw = ""
        let arr = [48,65,97]
        let brr = [10,26,26]
        for(;i<len;i++){
            let idx = Math.floor(Math.random()*3);
            let id = Math.floor(Math.random()*Number.parseInt(brr[idx])+arr[idx])
            pw+=String.fromCharCode(id)
        }
        this.password = pw;
    }
}
let password = new PasswordGenerator()
password.strongPasswordGenerator(20)
console.log(password.password)
password.weakPasswordGenerator(20)
console.log(password.password)
password.weakPasswordGenerator(20)
console.log(password.password)