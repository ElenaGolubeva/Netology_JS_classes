import Character from './Character';

class Magician extends Character {
  constructor(name, type) {
    if (type !== 'Magician') {
      throw new Error('Ошибка. Допускаются только персонажи типа: Magician');
    }
    super(name);
    this.attack = 10;
    this.defence = 40;
  }
}

export default Magician;