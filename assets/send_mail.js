function sendMail() {
    var params = {
        from_name: document.getElementById("fullname").value,
        message: document.getElementById("message").value,
        email_id: document.getElementById("email_id").value,
    };

    emailjs.send("service_s6z6lni", "template_fycovad", params)
        .then(function (res) {
            Swal.fire({
                icon: "success",
                title: "Message sent!",
                text: "Thank you for sending a message!",
            });
        })
        .catch(function (error) {
            Swal.fire({
                icon: "error",
                title: "Oops... there is an error sending the email!",
                text: ("Error sending email:" + error),
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        });
}