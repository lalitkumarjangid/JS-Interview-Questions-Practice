const lalit = {
    name : "Lalit Kumar Jangid",
    sayName : function (){
        console.log(this.name);
    }
} 

const adarsh = {
    name : "Adarsh LK",
    sayName : function (){
        console.log(this.name);
    },

}

adarsh.sayName.call(lalit)


//output 
Lalit Kumar Jangid
