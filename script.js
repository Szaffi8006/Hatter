window.onload = function() {
    document.getElementById('imageDiv').addEventListener('click', function() {
        var div = this;
        var originalBackground = div.style.backgroundImage;
        div.style.backgroundImage = "url(https://hirosklima.hu/wp-content/uploads/2022/01/macskaszor-es-a-klima-klimatisztitas-1140x760.webp)";

        setTimeout(function() {
            div.style.backgroundImage = originalBackground;
        }, 2000);
    });
};