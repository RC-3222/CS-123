/*
Паттерн Factory Method
*/

namespace FactoryMethodPattern {
  interface Factory {
    name: string;
    Produce(name: string): Vehicle;
  }

  interface Vehicle {
    name: string;
    move(): void;
  }

  class CarFactory implements Factory {
    constructor(public name: string) {
      this.name = name;
    }
    public Produce(name: string) {
      console.log(`A car produced at ${this.name}`);
      return new Car(name);
    }
  }

  class IFVFactory implements Factory {
    constructor(public name: string) {
      this.name = name;
    }
    public Produce(name: string) {
      console.log(`An IFV produced at ${this.name}`);
      return new IFV(name);
    }
  }

  class IFV implements Vehicle {
    constructor(public name: string) {
      this.name = name;
    }
    public move() {
      console.log("Vvrrrr..");
    }
  }

  class Car implements Vehicle {
    constructor(public name: string) {
      this.name = name;
    }
    public move() {
      console.log("BEEEP!!!11");
    }
  }
}
