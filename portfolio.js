const myImage = new Image();


myImage.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1366;
    canvas.heigh = 768;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixles = ctx.getImageData(0,0,canvas.width, canvas.height);


    let particleArr = [];
    const numofp = 5000;

    let mapIm  = [];
    for( let y =0; y < canvas.height; y++)
    {
        let row = [];
        for(let x = 0; x < canvas.width; x++)
        {
            const red = pixles.data[(y * 4 * pixles.width) + ( x * 4)];
            const green = pixles.data[(y * 4 * pixles.width) + ( x * 4 + 1)];
            const blue = pixles.data[(y * 4 * pixles.width) + ( x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red,green, blue);
            const cell = [
                cellBrightness = brightness,

            ];
            row.push(cell);
        }
        mapIm.push(row);
     
    }

    function calculateRelativeBrightness(red, green, blue){
        return Math.sqrt(
            (red * red) * 0.299 +
            ( green * green) * 0.587 +
            (blue * blue) * 0.114
        )/ 100;
    }
    class Particle{
        constructor(){
            this.x = Math.random() * canvas.width;
            this. y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 1.5 +1;
            this.position1 =  Math.floor(this.y);
            this.position2 = Math.floor(this.x);

        }

        update(){
            this.position1 =  Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.speed = mapIm[this.position1][this.position2][0];
            let movement = (2.5 - this.speed) + this.velocity;
            this.y += movement;
            if(this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;

            }
        }

        draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y,this.size, 0, Math.PI *2);
            ctx.fill();
        
        }
        
    }

    function init(){
        for(let i = 0; i < numofp; i++)
        {
            particleArr.push(new Particle);
        }
    }
    init();
    function animate(){
        ctx.globalAlpha = 0.07;
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0,0,canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        for(let i = 0; i < particleArr.length; i++)
        {
            particleArr[i].update();
            ctx.globalAlpha = particleArr[i].speed *0.5;
            particleArr[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();

});