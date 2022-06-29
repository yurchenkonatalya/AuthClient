let button = document.getElementById("buttonSend")
button.addEventListener("click", send)

let requestURL = "http://localhost:8100/api/users/auth/login"

function sendRequest(url, body) {
    return fetch(url, {
        mode: "cors",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: "POST"
    }).then(response => {
        if(response.ok)
            return response
    })
}
function send(){
    let username1 = document.getElementById("username").value
    let password1 = document.getElementById("password").value
    if(username1 !== "" && password1 !==""){
        let body = {
            username: username1,
            password: password1
        }
        sendRequest(requestURL, body)
            .then(data => {console.log(data)
                    window.location.href = "test/index.html";
                }
            )
            .catch(err => console.log(err))
    }
}
