import { Injectable } from "@nestjs/common";
import { PriceRule } from "../domain/rules/price-rule.interface";

@Injectable()
export class PriceCalculatorService {
    calculate(
        basePrice: number, 
        rules: PriceRule[],
    ): number {
        return rules.reduce(
            (price, rule) => rule.apply(price),
            basePrice,
        );
    }
}