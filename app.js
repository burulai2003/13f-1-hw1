const arr = document.querySelector('.answer')
const email = document.getElementById('email')
const aray = document.getElementById('para')

arr.addEventListener('click', function () {
    const testt = /.+\@\w+\.\w/
    if (testt.test(email.value)) {
        alert('you successfully signed in')
        aray.style.borderBlockColor = ''
    }
    else {
        aray.style.display = 'block'
        aray.innerText = 'incorrect format of email'
        email.style.borderBlockColor = 'red'
    }
})