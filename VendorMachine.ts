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
    if (this.snacksQty <= 0) {
      throw new Error("bien essayé, mais y'a plus des snacks");
    }
    this.snacksQty = -1;
    this.money = 2;
  }

  public reset(): void {
    this.isOn = false;

    if (this.snacksQty > 50) {
      throw new Error("la machine est deja rempli");
    }
    this.snacksQty = this.snacksQty + (50 - this.snacksQty);

    this.money = 0;
    this.isOn = true;
  }

  public shootWithFoot(): void {
    if (this.snacksQty < 5) {
      throw new Error("bien essayé, mais y'a plus des snacks ");
    }
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
