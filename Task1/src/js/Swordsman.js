import Character from './Character';

class Swordsman extends Character {
  constructor(name, type) {
    if (type !== 'Swordsman') {
      throw new Error('Ошибка. Допускаются только персонажи типа: Swordsman');
    }
    super(name);
    this.attack = 40;
    this.defence = 10;
  }
}

export default Swordsman;