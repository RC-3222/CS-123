/*
Паттерн Observer
*/
namespace ObserverPattern {
  class DataView {
    public update(context: number) {
      console.log(context);
    }
  }

  class DataModel {
    public dataViews: DataView[] = [];

    constructor(private context: number) {
      this.context = context;
    }

    public changeData(newData: number) {
      this.context = newData;
      this.notifyDataViews();
    }

    private notifyDataViews() {
      this.dataViews.forEach((dataView) => dataView.update(this.context));
    }
  }
}
