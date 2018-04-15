class Bullet{
    constructor( active, x, y, speed,  width, height ){
        this.active = true;    
        this.x = x;
        this.y = y ;
        this.width = 3;
        this.height = 3;
        this.color = "#ff0000";
        this.speed = speed;
    }
    update(){
        var  bounds = (this.x >= 0 && this.x <= CANVAS_WIDTH && this.y >= 0 && this.y <= CANVAS_HEIGHT );
        this.y -= this.speed;
        this.active = this.active && bounds;        
    }
    draw() {
      
        canvas.fillRect(this.x, this.y , this.width, this.height);
        
    }
    explode(){
        this.active = false;
        
    }
}
 