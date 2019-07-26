import { Item } from './item';
import { QualityCalculatorFactory } from './quality';
import { AgeAdjusterFactory } from './age';

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            const ageAdjuster = AgeAdjusterFactory.getAgeAdjuster(item);
            ageAdjuster.adjustAge(item);
            const qualityCalculator = QualityCalculatorFactory.getQualityCalculator(item);
            qualityCalculator.adjustQuality(item);
        });

        return this.items;
    }
}
