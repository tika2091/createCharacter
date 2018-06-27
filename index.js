function Character(name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;

  this.printStats = function(){
    console.log("Name: "+this.name+"\nProfession: "+this.profession+"\nGender: "+this.gender+"\nAge: "+this.age+" \ngender: "+this.age+ " \nstrength:"+this.strength+"\nhitpoints: "+this.hitpoints);
  };

  this.isAlive = function(){
  if(this.hitpoints > 0){
    console.log(this.name+" is alive!");
    return true;
  }
  else{
    console.log(this.name+" is dead!");
    return false;

    }
  }

  this.attack = function(character2){
    character2.hitpoints -= this.strength;
  }

  this.levelUp = function(){
    this.age +=1;
    this.strength += 5;
    this.hitpoints += 25;
  }

};

var warrior = new Character("Tika", "Warrior", "Male", 33, 80, 100);
var rogue = new Character("Ram", "rogue", "Female", 22, 90, 80);
warrior.printStats();
console.log();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();
