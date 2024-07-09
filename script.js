document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var codeElement = document.getElementById('code');
    var countdown = 15;
    
    var interval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(interval);
            countdownElement.style.display = 'none';
            codeElement.style.display = 'block';
        }
    }, 1000);
});

function copyCode() {
    var code = '1d7x9fg4r7xz';
    navigator.clipboard.writeText(code).then(function() {
        alert('Code copied: ' + code);
    }, function(err) {
        alert('Error copying : ', err);
    });
}