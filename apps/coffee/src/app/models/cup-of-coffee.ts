import { Item } from './item';

export class CupOfCoffee extends Item {
    constructor(id: number, name: string, description: string, cup: string, flavor: string, topping: string) {
        super(id, name, description);
        
        this.cup = cup;
        this.flavor = flavor;
        this.topping = topping;
    }
    
    cup: string;
    flavor: string;
    topping: string;
    imgUrl?: string;
}