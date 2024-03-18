namespace ProxyPattern {
  let targetAvailable = false;

  interface Target {
    getValue(): number;
    setValue(value: number): void;
  }

  class ProxyClass implements Target {
    constructor(private target: TargetClass) {
      this.target = target;
    }

    setValue(value: number) {
      if (!targetAvailable) throw new Error("Can't access the target");
      return this.target.setValue(value);
    }

    getValue() {
      if (!targetAvailable) throw new Error("Can't access the target");
      return this.target.getValue();
    }
  }

  class TargetClass implements Target {
    constructor(private value: number) {
      this.value = value;
    }

    getValue() {
      return this.value;
    }

    setValue(value: number) {
      this.value = value;
    }
  }
}
