const USER_INFO_URL = "https://jsonplaceholder.typicode.com/users";

function draw(array){
    let listDiv = document.querySelector("#list");
    listDiv.innerHTML = "";

    for(let task of array){
        listDiv.innerHTML += `
            <p>Имя: ${task.name}</p>
            <p>Адрес: ${task.address.street}, ${task.address.suite}, ${task.address.city}, ${task.address.zipcode}</p>
            <p>Название компании: ${task.company.name}</p>
            <hr>
        `;
    }
};

async function loadUser (selectedUserID) {
    let response = await fetch(USER_INFO_URL);
    let result = await response.json();
    console.log(result);

    draw(result);
};

loadUser();