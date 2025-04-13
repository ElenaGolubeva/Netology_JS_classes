﻿class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
          throw new Error('Неверное значение name, длина должна быть от 2 до 10 символов');
        }
    
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
      }
      levelUp() {
        if (this.health === 0) {
          throw new Error('Нельзя повысить левел умершего');
        }
        this.level += 1;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
      }
    
      damage(points) {
        this.health -= points * (1 - this.defence / 100);
        this.health = (this.health > 0) ? this.health : 0;
      }
    }
    
    export default Character;