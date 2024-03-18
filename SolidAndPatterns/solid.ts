/*
 * Небольшая система, построенная в соответсвии с 5 принципами SOLID
 */

// S - single responsibility - Каждый класс отвечает только за реализацию одной сущности.

// O - open-closed - программные сущности должны быть открыты для расширения, но закрыты для модификации.
// (Класс ArmorWithImmunities 'расширяет' функционал метода isPenetrated родительского класса ArmorSimple, при этом не изменяя публичный интерфейс)

// L - Liskov substitution - функции, которые используют базовый тип, 
// должны иметь возможность использовать подтипы базового типа не зная об этом.
// (Классы Prey и CombatAnimal могут использоваться в кач-ве родительского класса Animal)

// I - interface segregation - "много интерфейсов, специально предназначенных для клиентов, лучше, чем один интерфейс общего назначения".
// (набор интерфейсов ниже и то, что имеющиеся классы по сути только и делают, что реализуют нужные им интерфейсы)

// D - dependency inversion
// 1. Модули верхних уровней не должны зависеть от модулей нижних уровней. 
// Оба типа модулей должны зависеть от абстракций.
// 2. Абстракции не должны зависеть от деталей. 
// Детали должны зависеть от абстракций.
// (Интерфейсы в данной системе зависят только от других интерфейсов, 
// поля и методы классов также зависят от интерфейсов)


// --------------- Интерфейсы ---------------

interface Destructable {
  hp: number
}

interface Edible extends Destructable {
  beEaten: (hpAmount: number) => void;
}

interface Mobile {
  speed: number;
  move: () => void;
}

interface Feedable {
  amountToEat: number;
  eat: (thing: Edible) => void;
}

interface Damage {
  type: string;
  value: number;
}

interface Armor {
  armorValue: number;
  isPenetrated(damage: Damage): boolean;
}

interface Combatant extends Destructable {
  attackDamage: Damage;
  armor: Armor;
  attack(target: Combatant): void
  takeDamage(damage: Damage): void
}


// --------------- Классы ---------------

class ArmorSimple implements Armor {
  constructor(public armorValue: number) {}

  public isPenetrated(damage: Damage) {
    return damage.value > this.armorValue;
  }
}

class ArmorWithImmunities extends ArmorSimple {
  constructor(armorValue: number, private immunities: string[]) {
    super(armorValue);
  }

  private isImmune(damage: Damage) {
    return this.immunities.includes(damage.type);
  }

  public isPenetrated(damage: Damage) {
    return !this.isImmune(damage) && super.isPenetrated(damage);
  }
}

class Animal implements Mobile, Feedable {
  constructor(public amountToEat: number, public speed: number) {}

  public move() {
    console.log("-".repeat(this.speed) + ">");
  }

  public eat(thing: Edible) {
    thing.beEaten(this.amountToEat);
  }
}

class CombatAnimal extends Animal implements Combatant {
  constructor(amountToEat: number, speed: number, public hp:number, public attackDamage:Damage, public armor:Armor) {
    super(amountToEat, speed)
  }

  takeDamage(damage: Damage): void {
      if (this.armor.isPenetrated(damage)) {
        this.hp -= damage.value
      }
  }

  attack(target: Combatant): void {
      target.takeDamage(this.attackDamage)
  }
}

class Prey extends Animal implements Edible {
  constructor(amountToEat: number, speed: number, public hp: number) {
    super(amountToEat, speed);
  }

  beEaten(hpAmount: number) {
    this.hp -= Math.min(hpAmount, this.hp);
  }
}

class Plant implements Edible {
  constructor(public hp: number) {}

  beEaten(hpAmount: number) {
    const eatenHP = Math.min(0, hpAmount);
    this.hp -= eatenHP;
    return eatenHP;
  }
}

// --------------- Прочее ---------------

function moveMovables(movables: Mobile[]) {
  movables.forEach((m) => m.move());
}
