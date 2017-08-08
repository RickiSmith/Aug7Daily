let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/RickiSmith");
req.addEventListener("load", reqListener);
req.send();

function reqListener(){
    var data = JSON.parse(this.responseText);
    console.log(data.login);
    let username = document.createTextNode(data.login);
    login.appendChild(username);

    basics.innerHTML = `
    <h2>The Basics</h2>
    <p>Name:<em>${data.name}</em></p>
    <p>Github URL:<em> ${data.url}</em></p>
    <p>Email:<em> ${data.email}</em></p>
    <p>Company:<em> ${data.company}</em></p>
    `;

    story.innerHTML = `
    <h2>The Story</h2>
    <p>${data.bio}</p>
    <img id="avatar" src=${data.avatar_url}>`;

    // let pName = document.createElement("p");
    // let name = document.createTextNode("Name:" + data.name);
    // pName.appendChild(name);
    // basics.appendChild(pName);
    //
    // let pUrl = document.createElement("p");
    // let url = document.createTextNode("GitHub URL:" + data.url);
    // pUrl.appendChild(url);
    // basics.appendChild(pUrl);
    //
    // let pEmail = document.createElement("p");
    // let email = document.createTextNode("Email:" + data.email);
    // pEmail.appendChild(email);
    // basics.appendChild(pEmail);
    //
    // let pCompany = document.createElement("p");
    // let company = document.createTextNode("Company:" + data.company);
    // pCompany.appendChild(company);
    // basics.appendChild(pCompany);
}

let login = document.querySelector("#login");
let basics = document.querySelector("#basics");
let story = document.querySelector("#story");
