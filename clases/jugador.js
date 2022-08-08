class Jugador{
    constructor(salud,hambre,x,y,width,height){
        this.salud=salud;
        this.hambre=hambre;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    display(){
        rect(this.x,this.y,this.width,this.height);
    }
    moves(){
        if(keyIsDown(UP_ARROW)){
            this.y-=2;
        }

        if(keyIsDown(DOWN_ARROW)){
            this.y+=2;
        }

        if(keyIsDown(LEFT_ARROW)){
            this.x-=2;
        }

        if(keyIsDown(RIGHT_ARROW)){
            this.x+=2;
        }
    }
}