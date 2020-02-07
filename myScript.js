//console.log("Hello from TypeScript");
/*let mystring:string;
let myNumber:number;
let myStatus:boolean;
mystring="TypeScript";
myNumber=120;
myStatus=true;
console.log(mystring);
console.log(myNumber);
console.log(myStatus);*/
/*let mydata:any;
mydata="Hello"+" "+"Welcome TypeScript";
console.log(mydata);
mydata=12+23;
console.log(mydata);
let mystring:string;
mystring="Raju Honey";
console.log(mystring.slice(0,3));
let myNumber:number;
myNumber=7;
console.log(myNumber.toString()+" my Result");*/
//let mysArray:string[];
//let mynArray:number[];
/*let mysArray:Array<string>;
let mynArray:Array<number>;
mysArray=["Hello","TypeScript"];
mynArray=[1,2,3,4]
console.log(mysArray);
console.log(mynArray);
console.log(mynArray[2]);
for(var n=0;n<mynArray.length;n++)
{
    console.log(mynArray[n]);
}
mysArray.forEach(function(value)
{
    console.log(value);
})*/
/*let myTuple:[number,string,Number]
myTuple=[1,"TypeScript",9];
console.log(myTuple);


//void
let myvar:void;
myvar=undefined;
console.log(myvar);


//null
let myvar1:null;
myvar1=null;
console.log(myvar1);


//push pop
console.log(myTuple.pop());
myTuple.push(23);
console.log(myTuple);*/
//enum
var myEnum;
(function (myEnum) {
    myEnum[myEnum["sunday"] = 0] = "sunday";
    myEnum[myEnum["monday"] = 1] = "monday";
    myEnum[myEnum["tuesday"] = 2] = "tuesday";
    myEnum[myEnum["wednesday"] = 3] = "wednesday";
})(myEnum || (myEnum = {}));
;
console.log(myEnum.tuesday);
var User = /** @class */ (function () {
    function User(id, name, email, age) {
        this.Id = id;
        this.Name = name;
        this.Email = email;
        this.Age = age;
        console.log("User created");
    }
    User.prototype.register = function () {
        console.log(this.Name + "Successfully created");
        console.log(this.Id + " " + this.Name + " " + this.Email + " " + this.Age);
    };
    User.prototype.getAge = function (id) {
        if (this.Id == id)
            return this.Age;
        else
            return 0;
    };
    return User;
}());
var cUser = new User(1, "raj", "raj@cts.com", 21);
cUser.register();
console.log(cUser.getAge(1));
