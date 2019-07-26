import { Item, SULFURUS } from './item';

export interface IAgeAdjuster {
  adjustAge(item: Item)
}

class GenericAgeAdjuster implements IAgeAdjuster {
  adjustAge(item: Item) {
    item.sellIn -= 1;
  }
}

class LegendaryAger implements IAgeAdjuster {
  adjustAge(item: Item) {}
}

export class AgeAdjusterFactory {
  static getAgeAdjuster(item: Item) {
    if (item.name === SULFURUS) {
      return new LegendaryAger();
    }
    return new GenericAgeAdjuster();
  }
}