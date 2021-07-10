{
  /* 
  
  'this' signifies, in which object we are inside
  its a window object - by default
  this - what object environment we are in

  
  
  */
}

function a() {
  console.log(this);
}
// a();

const object4 = {
  a: function () {
    console.log(this);
  },
};

// object4.a();

//instantiation
// in real world, think of a multiplayer game, where n number of players can join
// making an object for every player will be a disgusting choice. will consume a lot of time
//! here comes the role of instantiation; where we can make instances or multiple copies of an object

//todo lets learn how to do the instantiation

class Player {
  constructor(name, type) {
    console.log("Player: ", this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`my name is: ${this.name}`);
    console.log(`my type is: ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard: ", this);
  }

  play() {
    console.log("wohohhhoh, game started");
  }
}

const wz1 = new Wizard("asish", "rider");
const wz2 = new Wizard("buck", "provider");
// wz1.introduce();
// wz2.introduce();

//* lets understand the flow
//? when encounter with 'new' keyword, it points to the new Wizard
//? and this wizard has the parameter : 'asish' and 'rider'
//? now it goes to Wizard class and it is extending the Player class, then goes inside constructor and then encounter with 'super'
//? and this super will take us to the constructor of the Player and it runs the inside of Player's constructor
//? and 'wz1' has access to introduce() of Player also
//? 'super' constructor is very important , if you are copying from the parent class

//*  In JavaScript, a constructor gets called when you declare an object using the new keyword.
//* The purpose of a constructor is to create an object and set values if there are any object properties present.
//* 'new' keyword creates the copy of the class
