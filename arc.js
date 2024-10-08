window
.onload = function ()
{

    /* This method returns the html element that
        has the ID attribute with the specified
        value. */
    let canvas = document
    .getElementById("canv");

    /* This method returns a drawing context
        on the canvas, or null if the context
        identified is not supported. */
    let context = canvas
    .getContext("2d");

    /* It will change the style and appearance 
        of the text to make it look more geeky. */
    context.font = "50px serif";
    context.fillStyle = "#FF4F00";
    context.textAlign = "center";

    let string = "M y  L o v e l y S c r a p B o o k";

    let angle = Math.PI * 0.2; // in radians
    let radius = 480px;
        context.translate(600, 600);
    context.rotate(-1 * angle / 2);

    for (let i = 0; i < string.length; i++) {

        /* It is worth noting that we are not
            rotating the text,here the whole
            context is being rotated and
            translated, and the letters are just
            filled in it. */
        context.rotate(angle / string.length);
        context.save();
        context.translate(0, -1 * radius);
        context.fillText(string[i], 0, 0);
        context.restore();
    }
};