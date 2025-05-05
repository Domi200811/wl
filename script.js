window.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('zene');
    var hasPlayed = false;  // Megakadályozza többszöri lejátszást

    // Elindítja a zenét, ha a felhasználó kattint
    function inditZene() {
        if (!hasPlayed) { // Ha még nem játszódott le
            audio.volume = 0.5; // Fél hangerő
            audio.play().then(function() {
                hasPlayed = true;  // Miután elindult, beállítjuk, hogy már lejátszódott
            }).catch(function(error) {
                console.log('Autoplay hiba:', error);
            });
        }
    }

    // A zene elindítása kattintás, egérmozgás, vagy billentyűnyomás után
    document.addEventListener('click', inditZene);
    document.addEventListener('mousemove', inditZene);
    document.addEventListener('keydown', inditZene);
});
