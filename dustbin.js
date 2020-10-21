class Dustbin {
    constructor(x, y, w, h,angle) {
        var options = {
            isStatic: true,    
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body)
        
        this.width = w;
        this.height = h;
        
    }
    show() {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height)
        
    }
}

