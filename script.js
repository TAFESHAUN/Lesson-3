document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        var name = document.getElementById('nameInput').value;
        var email = document.getElementById('emailInput').value;
        var paragraph = document.getElementById('somePara')
        paragraph.textContent = 'Form submitted with Name: ' + name + ' and Email: ' + email;
        //alert('Form submitted with Name: ' + name + ' and Email: ' + email);
    });
});



// document.addEventListener('DOMContentLoaded',function(){
//         //alert("The page loaded");
//     let count = 0;
//     var button = document.getElementById('myButton');
//     button.addEventListener('click', function(){
//         //alert('You clicked the button!');
//         var paragraph = document.getElementById('somePara');
//         count += 1; //count = count + 1;
//         paragraph.textContent = `Count is: ${count}`;
//     })
// })

// document.addEventListener('DOMContentLoaded', function() {
//     var paragraph = document.querySelector('p');
//     paragraph.textContent = 'This paragraph has been dynamically modified.';
// });

