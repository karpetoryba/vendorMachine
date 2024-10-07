class VendorMachine {
  private isOn: boolean;
  private snacksQty: number;
  private money: number;

  //constructor - initialiser des valeurs par default
  public constructor() {
    this.isOn = false;
    this.snacksQty = 50;
    this.money = 0;
  }

  public buySnack(): void {
    this.isOn = true;
    this.snacksQty = -1;
    this.money = 2;
  }

  public reset(): void {
    this.isOn = false;
    this.snacksQty = 50;
    this.money = 0;
    this.isOn = true;
  }

  public shootWithFoot(): void {
    this.snacksQty = -5;

    //
    if (this.money < 20) {
      throw new Error("bien essayé, mais y'a plus d'argent");
    }
    this.money = -20;
    this.isOn = false;
  }
}

const vendorMachine = new VendorMachine();
vendorMachine.shootWithFoot();
