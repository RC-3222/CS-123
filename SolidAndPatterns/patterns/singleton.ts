namespace SingletonPattern {
  class SingletonShit {
    private static _instance: SingletonShit;

    private constructor(private name: string) {
      this.name = name;
    }

    public static init(name: string) {
      if (SingletonShit._instance) {
        throw new Error("An instance already exists");
      }

      SingletonShit._instance = new SingletonShit(name);
    }

    public static get instance() {
      if (!SingletonShit._instance) {
        throw new Error("No instance");
      }

      return SingletonShit._instance;
    }

    public sayHello() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }

  class SingletonShitAlternative {
    private static _instance: SingletonShitAlternative;

    private constructor() {}

    public static get instance() {
      if (!SingletonShitAlternative._instance) {
        SingletonShitAlternative._instance = new SingletonShitAlternative();
      }

      return SingletonShitAlternative._instance;
    }

    public sayHello(name) {
      console.log(`Hello, ${name}`);
    }
  }
}
