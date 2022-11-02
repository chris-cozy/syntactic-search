/*
    This is an event listener that is called when the page loads. It fetches the endpoint for table data.
*/
document.addEventListener('DOMContentLoaded', function () {
    console.log('Test');
    fetch('http://localhost:5000/getData');
});
