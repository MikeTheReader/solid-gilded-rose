import { Item, AGED_BRIE, BACKSTAGE_PASS, SULFURUS } from './item';


export class QualityAdjusterFactory {
  static getQualityAdjuster(item: Item): IQualityAdjuster {
    switch (item.name) {
      case AGED_BRIE:
        return new AgedBrieQualityAdjuster();
      case BACKSTAGE_PASS:
        return new BackstagePassQualityAdjuster();
      case SULFURUS:
        return new SulfurusQualityAdjuster();
      default:
        return new GenericQualityAdjuster();
    }
  }
}
export interface IQualityAdjuster {
  adjustQuality(item: Item);
}

class GenericQualityAdjuster {
  adjustQuality(item: Item) {
      if (item.quality > 0) {
          item.quality = item.quality - 1
      }
      if (item.sellIn < 0) {
          if (item.quality > 0) {
              item.quality = item.quality - 1
          }
      }
  }
}

class SulfurusQualityAdjuster implements IQualityAdjuster {
  adjustQuality(item: Item) {
      // Do nothing
  }
}

class AgedBrieQualityAdjuster implements IQualityAdjuster {
  adjustQuality(item: Item) {
      if (item.quality < 50) {
          item.quality = item.quality + 1;
      }
      if (item.sellIn < 0) {
          if (item.quality < 50) {
              item.quality = item.quality + 1
          }
      }
  }
}

class BackstagePassQualityAdjuster implements IQualityAdjuster {
  adjustQuality(item: Item) {
      if (item.quality < 50) {
          item.quality = item.quality + 1
          if (item.sellIn < 10) {
              if (item.quality < 50) {
                  item.quality = item.quality + 1
              }
          }
          if (item.sellIn < 5) {
              if (item.quality < 50) {
                  item.quality = item.quality + 1
              }
          }
      }
      if (item.sellIn < 0) {
          item.quality = item.quality - item.quality
      }
  }
}