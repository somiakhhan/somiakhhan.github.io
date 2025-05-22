window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var background = new Image();
    background.src = "images/background.jpg";
    background.onload = function () {
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

    var foreground1 = new Image();
    foreground1.src = "images/foreground1.jpg";
    foreground1.onload = function () {
        context.drawImage(foreground1, 5, 100, 150, 150);
    
    var foreground2 = new Image();
    foreground2.src = "images/foreground2.jpg";
            foreground2.onload = function () {
                context.drawImage(foreground2, 2, 50, 120, 120);

                context.font = "28px Arial";
                context.fillStyle = "white";
                context.fillText("My Canvas Scene", 50, 50);

                context.font = "20px Arial";
                context.fillStyle = "yellow";
                context.fillText("Somia", 50, 80);
            };
        };
    };
};
