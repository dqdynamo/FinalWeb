document.getElementById('btn').addEventListener('click', function () {
    var form = {};
    form.name = document.getElementById('name').value;
    form.email = document.getElementById('email').value;
    form.message = document.getElementById('message').value;
    console.log('Form Data:', form);
    alert('Message sent successfully!');
});
