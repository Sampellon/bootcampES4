let users = [];

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        document.getElementById("welcome-message").style.display = 'block';
        document.getElementById("user-name").innerText = username;
        document.getElementById("login-form").style.display = 'none';
    } else {
        alert("Credenciales incorrectas");
    }
}

function showRegisterForm() {
    document.getElementById("login-form").style.display = 'none';
    document.getElementById("register-form").style.display = 'block';
}

function handleRegister(event) {
    event.preventDefault();
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    const age = document.getElementById("age").value;

    users.push({ username: newUsername, password: newPassword, age: age });
    alert("Usuario registrado correctamente");
    document.getElementById("register-form").style.display = 'none';
    document.getElementById("login-form").style.display = 'block';
}

function getPublicAPIData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById("images-container");
            data.slice(0, 10).forEach(item => {
                const img = document.createElement("img");
                img.src = item.url;
                imagesContainer.appendChild(img);
            });
        });
}

function postPublicAPIData() {
    const data = {
        title: 'New Outdoor Image',
        body: 'A beautiful outdoor scene.',
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        alert("Datos enviados a la API");
    });
}
