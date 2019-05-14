document.addEventListener('DOMContentLoaded', function() {
    console.log('JS file loaded!');
    
    // put current year in footer
    document.getElementById('copy-year').innerHTML = new Date().getFullYear();
});