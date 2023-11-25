const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    alert('We send you to the product page!!!');
});

function playClickSound() {
    var clickSound = document.getElementById("clickSound");
    clickSound.play();
}
document.getElementById('exploreButton').addEventListener('click', function () {
    var exploreButton = document.getElementById('exploreButton');
    exploreButton.classList.add('explode');

    setTimeout(function () {
        exploreButton.classList.remove('explode');
    }, 500); 
});