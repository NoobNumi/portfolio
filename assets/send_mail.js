function sendMail() {
    var sendButton = document.getElementById("sendButton");

    var fullnameInput = document.getElementById("fullname");
    var emailInput = document.getElementById("email_id");
    var messageInput = document.getElementById("message");

    var fullname = fullnameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;

    if (fullname === "" || email === "" || message === "") {
        Swal.fire({
            icon: "error",
            title: "All fields are required!",
            text: "Please fill in your name, email, and message before sending.",
        });
        return;
    }

    sendButton.innerHTML = `Sending...<i class="fas fa-circle-notch fa-spin ms-2"></i>`;

    var params = {
        from_name: fullname,
        message: message,
        email_id: email,
    };

    setTimeout(function () {
        emailjs.send("service_s6z6lni", "template_fycovad", params)
            .then(function (res) {
                sendButton.innerHTML = `Sent<i class="fa-solid fa-circle-check ms-2"></i>`;
                setTimeout(function () {
                    sendButton.innerHTML = `Send Message<i class="fa-solid fa-paper-plane ms-2"></i>`;
                }, 3000);

                // Clear the input fields
                fullnameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";
            })
            .catch(function (error) {
                sendButton.innerHTML = `Send Message<i class="fa-solid fa-paper-plane ms-2"></i>`;

                Swal.fire({
                    icon: "error",
                    title: "Oops... there is an error sending the email!",
                    text: ("Error sending email: " + error),
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    }, 2000);
}
