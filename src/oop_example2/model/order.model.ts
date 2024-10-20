import { OrderDetail } from "./order-detail.model.js";

export class Order {
    private date?: Date
    private status?: string
    private orderDetails?: OrderDetail[]

    constructor(date: Date, status: string) {
        this.date = date;
        this.status = status;
    }

    public getDate() :Date {
        return this.date ?? new Date();
    }

    public setDate(date: Date) {
        this.date = date;
    }

    public getStatus() :string {
        return this.status ?? '';
    }

    public setStatus(status: string) {
        this.status = status;
    }

    public getOrderDetails() :OrderDetail[] {
        return this.orderDetails ?? [];
    }

    public setOrderDetails(orderDetails: OrderDetail[]) {
        this.orderDetails = orderDetails;
    }

    public calcSubTotal() :number {
        return Math.random() * 100;
    }

    public calcTax() :number {
        return Math.random() * 100;
    }

    public calcTotal() :number {
        return Math.random() * 100;
    }

    public calcTotalWeight() :number {
        return Math.random() * 100;
    }
}