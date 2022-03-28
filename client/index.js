const form = document.querySelector('form')


function submitHandler(e) {
    e.preventDefault()
    let name = document.querySelector('#name');
    let years = document.querySelector('#years');
    let age = document.querySelector('#age');

    let bodyObj = {
        name: name.value,
        years: years.value,
        age: age.value,
    }
    Createfriend(bodyObj)
    name.value = ''
    years.value = ''
    age.value = ''
}
 {
    name
}

form.addEventListener('submit', submitHandler)

getFriend()