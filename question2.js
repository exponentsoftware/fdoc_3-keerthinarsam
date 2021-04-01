const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];

// Write a function which filter users who has scoresGreaterThan85

    function Filter(){
        users.filter(user => {
            if(user.scores > 85){
                return console.log(user)
            }
        });
    }
    Filter(users)

// Write a function which addUser to the user array only if the user does not exist.

    function addUser(){
        users.forEach(user => {
            if(user.name !== 'Abhishek'){
                
                users.name = "Abhishek",
                users.scores = 81,
                users.skills= ['HTM', 'CSS', 'JS'],
                users.age = 21
            }
        });
        // console.log(users);
    }
    addUser(users)

// Write a function which addUserSkill which can add skill to a user only if the user exist.

    function addUserSkill(){
        users.forEach(user => {
            if(user.name === 'John'){
                user.skills[1] = 'REACT'
            }
        });
        // console.log(users)
    }
    addUserSkill(users)

// Write a function which editUser if the user exist in the users array.

    function editUser(){
        users.map(user => {
            if(user.name === 'Sara'){
                user.name = 'Brook'
            }
        });
        // console.log(users)
    }
    editUser(users)