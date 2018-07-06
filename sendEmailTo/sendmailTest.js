console.log("hello");

function sendMail() {
    try {
        Email.send("ivaderlab.unist@gmail.com",
            "dyhan113@gmail.com",
            "HI2 is it working?",
            "this is fucking hot mail test",
            "smtp.gmail.com",
            "ivaderlab.unist@gmail.com",
            "ivaderlab.unist.ac.kr");
    } catch (e) {
        console.log(e);
    }
}

sendMail();