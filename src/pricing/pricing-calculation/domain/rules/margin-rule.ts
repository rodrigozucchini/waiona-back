import { addPercentage } from "../strategies/price-operations";
import { BasePriceRule } from "./base-price-rule";

export class MarginRule extends BasePriceRule {
    constructor(value: number) {
        super(value, addPercentage);
    }
}