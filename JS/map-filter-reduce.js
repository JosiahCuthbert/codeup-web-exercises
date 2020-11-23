const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguages = users.filter(function(user){
    if(user.languages.length >= 3){
        return user;
    }
})

console.log(threeLanguages);

let emailString = users.map(user => user.email.toString());

console.log(emailString);

let sumOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0)

console.log(sumOfExperience);

let longestEmail = users.reduce((longest, user) => {
    if(longest == null || longest.length <= user.email.length){
        longest = user.email;
    }
    return longest;
}, null)

console.log(longestEmail);

let nameString = users.reduce((string, user) => {
    string += ` ${user.name},`;
    return string;
}, "Your instructors names are:")

console.log(nameString);

let uniqueLanguages = users.reduce((codingLanguages, user) => {
    user.languages.forEach((language) => {
        if(!codingLanguages.includes(language)){
            codingLanguages.push(language);
        }
    })
    return codingLanguages;
}, [])

console.log(uniqueLanguages);