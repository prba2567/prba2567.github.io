console.log("Question 1"); 

let employees = '{"employees": [' + 
'{"firstname":"Sam" , "department":"Tech" , "designation":"Manager" , "salary": "40000" , "raise_eligible": "true"},' + 
'{"firstname":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary": "18500" , "raise_eligible": "true"},' + 
'{"firstname":"Bill" , "department":"HR" , "designation":"Executive" , "salary": "21200" , "raise_eligible": "false"}' + 
']}';

const obj = JSON.parse(employees); 
console.log("Current employees", employees); 
console.log("Current employees JSON Object",obj);

console.log("Question 2"); 
let company = '{"companyName":"Tech Stars",' + '"website":"www.techstars.site",' + '"employees": ' + JSON.stringify(obj["employees"]) + '}';

// console.log(company); 
const obj2 = JSON.parse(company); 
console.log("Current company",company);
console.log("Current company JSON Object",obj2);
//Problem 3 
let employeelength = obj["employees"].length;
obj["employees"] [employeelength] = {"first name": "Anna", "department": "Tech", "designation" : "Exceutive", "salary" : "25600" , "raise eligible" : "false"};
obj2["employees"][employeelength] = {"first name": "Anna", "department": "Tech", "designation" : "Exceutive", "salary" : "25600" , "raise eligible" : "false"};
console.log("Problem 3");
console.log(obj);


//Problem 4 
console.log("Problem 4");
let s = 0;
for(let i =0; i < employeelength; i++)
{
    s = s + (parseInt(obj["employees"][i]["salary"]));

}

console.log(s);

//Problem 5 
console.log("Problem 5");
for(let j = 0; j < employeelength; j++)
{
    if(obj["employees"][j]["raise_eligible"]  === "true")
    {
        obj["employees"][j]["salary"] = parseInt(obj["employees"][j]["salary"] * 0.1) + parseInt(obj["employees"][j]["salary"]);
    }
}
console.log("New employee list",obj);

//Problem 6
console.log("Problem 6")
for(let i =0; i < employeelength + 1; i++)
{
    if( obj["employees"][i]["firstname"] === "Sam")
    {
        obj2["employees"][i]["wfh"] = "true";
    }
    if(i = 3)
    {
        obj2["employees"][i]["wfh"] = "true";
    }
    else
    {
        obj2["employees"][i]["wfh"] = "false"; 
    }

}
console.log("New company list",obj2);





    

