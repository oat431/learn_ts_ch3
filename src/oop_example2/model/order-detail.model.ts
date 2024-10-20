import { Item } from "./item.model.js";

export class OrderDetail {
    private quantity?: number;
    private taxStatus?: string;
    private item?: Item;

    constructor(quantity: number, taxStatus: string, item: Item) {
        this.quantity = quantity;
        this.taxStatus = taxStatus;
        this.item = item;
    }

    public calSubTotal() :number {
        return Math.random() * 100;
    }
    
    public calShipping() :number {
        return Math.random() * 100;
    }

    public calcTax() :number {
        return Math.random() * 100;
    }

    public getQuantity() :number {
        return this.quantity ?? 0;
    }

    public setQuantity(quantity: number) {
        this.quantity = quantity;
    }   

    public getTaxStatus() :string {
        return this.taxStatus ?? '';
    }

    public setTaxStatus(taxStatus: string) {
        this.taxStatus = taxStatus;
    }

    public getItem() :Item {
        return this.item ?? new Item(0, '');
    }

    public setItem(item: Item) {
        this.item = item;
    }
}