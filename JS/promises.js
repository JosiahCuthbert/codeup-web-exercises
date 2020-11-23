$("h1").click(function(){
    $("h1").css("color", "red");
});

// fetch("https://swapi.dev/api/people/7/")
//     .then(response => response.json())
//     .then(console.log)

function retrieveUserData(username) {
    return fetch("https://api.github.com/users/" + username + "/events/public", {headers: {"Authorization": "token " + githubToken}})
        .then(res => res.json())
        .then(console.log)
}

function lastCommit(username) {
    retrieveUserData(username)
        .then(function(data){
            for(var i = 0; i<10;i++)
                if (data[i].type === "PushEvent") {
                    console.log(data.payload.commits[0].sha);
                    console.log(data.id);
                    // console.log(data.payload.commits[0].sha);
                }
            })
        }

function shaTimestamp(sha){

}

var usernameInput = prompt("Which github user would you like to view activity for?");

lastCommit(usernameInput);

