// ==========================================
// MERN LMS Authentication
// ==========================================

// Authorized Users

const allowedUsers = [
    "sushilkumar888131@gmail.com",
    "rrai95762@gmail.com",
    "babita250708@gmail.com",
    "ayushipatel7054190824@gmail.com",
    "ptawanishtiwari@gmail.com"
];


// ===========================
// Login Function
// ===========================

function login() {

    const email = document
        .getElementById("email")
        .value
        .trim()
        .toLowerCase();

    const password = document
        .getElementById("password")
        .value
        .trim();

    const message = document.getElementById("message");


    // Validation

    if (email === "" || password === "") {

        message.innerHTML = "Please enter Email & Password.";
        message.className = "error";

        return;

    }


    // Check Email

    if (allowedUsers.includes(email)) {

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);

        message.innerHTML = "Login Successful...";
        message.className = "success";

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 800);

    }

    else {

        message.innerHTML = "Access Denied! You are not an authorized user.";
        message.className = "error";

    }

}



// ===========================
// Protect Dashboard
// ===========================

function protectPage() {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        window.location.href = "login.html";

    }

}



// ===========================
// Show Logged In User
// ===========================

function showUser() {

    const user = localStorage.getItem("userEmail");

    const userBox = document.getElementById("loggedUser");

    if (userBox) {

        userBox.innerHTML = `
            <i class="fa-solid fa-user-circle"></i>
            ${user}
        `;

    }

}



// ===========================
// Logout
// ===========================

function logout() {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    window.location.href = "login.html";

}



// ===========================
// Prevent Back Button
// ===========================

window.history.forward();

function noBack() {

    window.history.forward();

}



// ===========================
// Enter Key Support
// ===========================

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        if (document.getElementById("email")) {

            login();

        }

    }

});