import { Item } from './item';
import { QualityAdjusterFactory } from './quality';
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
            const qualityAdjuster = QualityAdjusterFactory.getQualityAdjuster(item);
            qualityAdjuster.adjustQuality(item);
        });

        return this.items;
    }
}
