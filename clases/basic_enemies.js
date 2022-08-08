class Enemies{
    constructor(salud,x,y,width,height){
        this.salud=salud;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    display(){
        rect(this.x,this.y,this.width,this.height);
    }
    followx(playerx){
        if(playerx>this.x){
            var distance=(playerx-this.x)/2;

            for(var i=1; i>=distance ; i++){
                this.x = this.x+2;
            }
            
        }
        if(playerx<this.x){
            var distance=(this.x-playerx)/2;

            for(var i=1; i>=distance ; i++){
                this.x = this.y-x;
            }
        } 
        

    }
    followy(playery){
        if(playery>this.y){
            var distance=(playery-this.y)/2;

            for(var i=1; i>=distance ; i++){
                this.y = this.y+2;
            }
            
        } 
        if(playery<this.y){
            var distance=(this.y-playery)/2;

            for(var i=1; i>=distance ; i++){
                this.y = this.y-2;
            }
        } 
    }

}