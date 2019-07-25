import { Item } from './item';
import {
    QualityCalculatorFactory
} from './quality';

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            const qualityCalculator = QualityCalculatorFactory.getQualityCalculator(item);
            qualityCalculator.adjustQuality(item);
        });

        return this.items;
    }
}
