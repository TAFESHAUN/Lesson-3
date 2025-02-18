document.addEventListener('DOMContentLoaded',function(){
        //alert("The page loaded");
    let count = 0;
    var button = document.getElementById('myButton');
    button.addEventListener('click', function(){
        //alert('You clicked the button!');
        var paragraph = document.getElementById('somePara');
        count += 1; //count = count + 1;
        paragraph.textContent = `Count is: ${count}`;
    })
})

// document.addEventListener('DOMContentLoaded', function() {
//     var paragraph = document.querySelector('p');
//     paragraph.textContent = 'This paragraph has been dynamically modified.';
// });

