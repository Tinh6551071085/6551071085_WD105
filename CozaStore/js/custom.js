function toggle() {
    $(".container1").fadeToggle(500);
}

function check() {
    let isBool = true;
    const email = $("#email").val().trim();

    const emailMau = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {

        isBool = false;
    } else if (!emailMau.test(email)) {

        isBool = false;
    }
    if (isBool) {
        alert(" gmail dung roi");
    } else {
        alert("Khong co thong tin gmail dung")
    }
}


