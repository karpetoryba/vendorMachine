class VendorMachine {
  private isOn;
  private snacksQty;
  private money;

  public buySnack() {
    this.isOn = "true";
    this.money = 2;
  }

  public reset() {
    this.isOn = "false";
    this.snacksQty = 50;
  }

  public shootWithFoot() {
    this.snacksQty = 5;
    this.money = 20;
    this.isOn = "fause";
  }
}
