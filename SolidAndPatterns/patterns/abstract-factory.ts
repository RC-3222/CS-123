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
    getDangerousAnimal() {
      return new DesertRainFrog();
    }
    getExcitingAnimal() {
      return new Panda();
    }
  }

  class DesertRainFrog implements DangerousAnimal {
    attack(target: Target) {
      console.log("** Sonorous warcry of a very angry frog **");
      target.takeDamage(666);
      console.log("*** (Ferocious) ***");
    }
  }

  class Panda implements ExcitingAnimal {
    doSomethingExciting() {
      console.log("** Bamboo-eating sounds **");
    }
  }

  class PolishZoo implements Zoo {
    getDangerousAnimal() {
      return new KurwaBober();
    }
    getExcitingAnimal() {
      return new Bober();
    }
  }

  class Bober implements ExcitingAnimal {
    doSomethingExciting() {
      console.log("** sounds of ultimate existance **");
    }
  }

  class KurwaBober extends Bober implements DangerousAnimal {
    attack(target: Target) {
      console.log("YA NIE KURWA YA PIERDOLE!!!!111".toUpperCase());
      target.takeDamage(9001);
    }
  }
}
