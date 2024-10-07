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
    this.snacksQty = this.calculateLeftSnackQty();

    this.money = 0;
    this.isOn = true;
  }
  // on fais des methodes pour que notre code puis être plus lisible
  private calculateLeftSnackQty() {
    return this.snacksQty + (50 - this.snacksQty);
  }

  public shootWithFoot(): void {
    this.isOn = false;

    this.dropMoney();
    this.dropSnacks();
  }

  private dropMoney() {
    let moneyToDrop = 20;
    if (this.money < 20) {
      moneyToDrop = this.money;
    }
    this.money = this.money - moneyToDrop;
  }

  private dropSnacks() {
    let snacksQtyToDrop = 5;
    if (this.snacksQty < 5) {
      snacksQtyToDrop = this.snacksQty;
    }
    this.snacksQty = this.snacksQty - snacksQtyToDrop;
  }
}

const vendorMachine = new VendorMachine();
vendorMachine.shootWithFoot();
