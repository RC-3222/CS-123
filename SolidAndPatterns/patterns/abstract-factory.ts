/*
Паттерн Abstract Factory
*/

namespace AbstractFactoryPattern {
  interface Target {
    takeDamage(value: number): void;
  }

  interface DangerousAnimal {
    attack(target: Target): void;
  }

  interface ExcitingAnimal {
    doSomethingExciting(): void;
  }

  interface Zoo {
    getDangerousAnimal(): DangerousAnimal;
    getExcitingAnimal(): ExcitingAnimal;
  }

  class ChineseZoo implements Zoo {
    public getDangerousAnimal() {
      return new DesertRainFrog();
    }
    public getExcitingAnimal() {
      return new Panda();
    }
  }

  class DesertRainFrog implements DangerousAnimal {
    public attack(target: Target) {
      console.log("** Sonorous warcry of a very angry frog **");
      target.takeDamage(666);
      console.log("*** (Ferocious) ***");
    }
  }

  class Panda implements ExcitingAnimal {
    public doSomethingExciting() {
      console.log("** Bamboo-eating sounds **");
    }
  }

  class PolishZoo implements Zoo {
    public getDangerousAnimal() {
      return new KurwaBober();
    }
    public getExcitingAnimal() {
      return new Bober();
    }
  }

  class Bober implements ExcitingAnimal {
    public doSomethingExciting() {
      console.log("** sounds of ultimate existance **");
    }
  }

  class KurwaBober extends Bober implements DangerousAnimal {
    public attack(target: Target) {
      console.log("YA NIE KURWA YA PIERDOLE!!!!111".toUpperCase());
      target.takeDamage(9001);
    }
  }
}
