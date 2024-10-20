export class Item {
    private shippingWeight?: number;
    private description?: string;
    public name?: string;

    constructor(shippingWeight: number, description: string) {
        this.shippingWeight = shippingWeight;
        this.description = description;
    }

    public getPriceForQuantity() :number {
        return Math.random() * 100;
    }

    public getTax() :number {
        return 0.07;
    }

    public inStock() :boolean {
        return Math.random() * 10 % 2 === 0;
    }

    public toString() : string {
        return `Item: ${this.description} shipping weight: ${this.shippingWeight}`;
    }

    public getDescription() :string {
        return this.description ?? '';
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public getShippingWeight() :number {
        return this.shippingWeight ?? 0;
    }

    public setShippingWeight(shippingWeight: number) {
        this.shippingWeight = shippingWeight;
    }


}
