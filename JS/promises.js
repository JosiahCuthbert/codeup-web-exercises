$("h1").click(function(){
    $("h1").css("color", "red");
});

// fetch("https://swapi.dev/api/people/7/")
//     .then(response => response.json())
//     .then(console.log)

function retrieveUserData(username) {
    return fetch("https://api.github.com/users/" + username + "/events/public", {headers: {"Authorization": "token " + githubToken}})
        .then(res => res.json())
}

function lastCommit(username) {
    retrieveUserData(username)
        .then(function(events){
            events.forEach((event) => {
                if(event.type === "PushEvent"){
                    console.log(event.payload.commits[0].message);
                    console.log(event.created_at);
                }
            })
        })
}

var usernameInput = prompt("Which github user would you like to view activity for?");

lastCommit(usernameInput);

// payload.commits[0].sha