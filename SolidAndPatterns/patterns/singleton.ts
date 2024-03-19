/*
Паттерн Singleton
*/
namespace SingletonPattern {
  class Singleton {
    private static _instance: Singleton;

    private constructor() {}

    public static get instance() {
      if (!Singleton._instance) {
        Singleton._instance = new Singleton();
      }

      return Singleton._instance;
    }

    public sayHello(name:string) {
      console.log(`Hello, ${name}`);
    }
  }
}
