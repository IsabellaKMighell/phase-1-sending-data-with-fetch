// Add your code here
const dogsURL = 'http://localhost:3000/dogs'
const catsURL = 'http://localhost:3000/cats'
const usersURL = 'http://localhost:3000/users'
const robotsURL =  'http://localhost:3000/robots'

/*
const formData ={dogName: 'Byron', dogBreed: 'Poodle'}

const configurationOfObj = {
    method: 'POST',
    headers:{
        'Content-Type':'application.json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
}

fetch(dogsURL, configurationOfObj)
    .then(resp => resp.json())
    .then(dog => console.log(dog))
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);})
*/


function submitData(name, email){
    return fetch(usersURL, {
                method: 'POST',
                headers:{
                    'Content-Type':'application.json',
                    'Accept': 'application/json' 
                },
                body: JSON.stringify({name, email})
            })
    
    .then(resp => resp.json())
    .then(userObj => document.body.append(userObj['id']))
    .catch(error=>{
        document.body.innerHTML = error.message})   
}

console.log(submitData("Isabella", "ikm4dm@virginia.edu"))





