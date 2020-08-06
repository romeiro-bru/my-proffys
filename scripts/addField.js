// Find button
// on click execute action. 1-Event 2-Element
document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField() {
    // duplicate fields
   const newField = document.querySelector('.schedule-item').cloneNode(true)
    //    clean fields before displaying them. 1- Find the fields we will clean
    const fields = newField.querySelectorAll('input')
    // clean each one of the fields
    fields.forEach(function(field) {
        fields.value = ""
    })
    
    // display
    document.querySelector('#schedule-items').appendChild(newField)
}
