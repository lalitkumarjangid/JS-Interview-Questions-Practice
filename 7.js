var fullname = "Lalit Kuamr Jangid";

var obj = {
  fullname: "Hacker full name ",
  prop: {
    fullname: "Inside Prop",
    getFullname: function () {
      return this.fullname;
    },
  },
  getFullname: function () {
    return this.fullname;
  },
  getFullnameV2: function () {
    console.log(this);
  },

  getFullnameV3: (function () {
    return this.fullname;
  })(),
};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3());
