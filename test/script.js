let button = document.getElementById("buttonSend")
button.addEventListener("click", send)

let requestURL = "http://localhost:8101/api/app/getModule"


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
    let token1 = document.getElementById("token").value
    let id1 = document.getElementById("id").value
    if(token1 !== "" && id1 !== ""){
        let body = {
            token: token1,
            id: id1
        }
        sendRequest(requestURL, body)
            .then(data => console.log("aaaaaa"+data.status))
            .catch(err => { console.log("sssss"+err);
                    window.location.href = "../index.html";
                }
            )
    }
}