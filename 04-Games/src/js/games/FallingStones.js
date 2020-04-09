import { GameTemplate } from "./GameTemplate.js"
import { GameObject, MovableGameObject, Ball } from "../GameObject.js"
import { Paddle } from "./Pong.js"

export class FallingStones extends GameTemplate {

    start(){
        this.gameOver=false;
        this.player = new Paddle(170, 450, 50, 50, 10);
        this.maxBullets = 0;
        this.bullets = [];
        this.stone = [];
        this.updatesToNextStone = 50;
        this.widthObjects = 50;
    }

    bindControls(){
        this.inputBinding = {
            "left": this.player.left.bind(this.player),
            "right": this.player.right.bind(this.player),
            "up": this.createBullets.bind(this),
        };
    }

    createBullets(){
        if(this.maxBullets <= 0){
            this.maxBullets += 2;
            this.bullets.push(new MovableGameObject(this.player.x + 20, this.player.y, 10, 10, "#ff0000", 0, -10));
        }
        this.maxBullets--;
    }

    updateBullets(ctx){
        this.bullets.forEach(object => {
            object.update(ctx);
        });
    }

    updateStone(ctx){

        if(this.updatesToNextStone == 50){
            this.createRandomStones(ctx);
        }
        this.updatesToNextStone--;
        if(this.updatesToNextStone == 0){
            this.updatesToNextStone = 50;
        }
        this.stone.forEach(stone => {
            stone.update(ctx);
        });

        this.destroyStone(ctx);
    }

    destroyStone(ctx){
        for(let i = 0; i < this.stone.length; i++)
            if(this.stone[i].y == ctx.canvas.height){
                this.stone.splice(i);
            }
    }

    createRandomStones(ctx){
        let height = Math.random() * 80;
        let width = this.widthObjects;
        let stoneSpeed = Math.random() * 5;
        let positionX = Math.random() * (ctx.canvas.width -width);
        this.stone.push(new MovableGameObject(positionX, 0-height, width, height, "#ffffff", 0, stoneSpeed))
    }

    draw(ctx){
        this.player.draw(ctx);
        this.bullets.forEach(object => object.draw(ctx));
        this.stone.forEach(stone => stone.draw(ctx));
    }

    update(ctx){
        this.player.update(ctx);
        this.updateBullets(ctx);
        this.updateStone(ctx);
    }

    static get NAME() {
        return "Falling Stones";
    }
}
