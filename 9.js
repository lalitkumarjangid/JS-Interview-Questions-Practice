const lalit = {
    name :"Lalit Kumar Jangid" ,
    sayName : function (){
        console.log(this.name);
    },

}

setTimeout (lalit.sayName.bind(lalit) , 3* 1000)