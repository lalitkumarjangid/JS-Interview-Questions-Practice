const lalit = {
    name :"Lalit Kumar Jangid" ,
    sayName : function (){
        console.log(this.name);
    },

}

setTimeout (lalit.sayName.bind(lalit) , 3* 1000)
//output

9
Lalit Kumar Jangid
//in this the value is increasing on no. of compile
