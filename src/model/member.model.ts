import { BaseUserModel } from "../shared/base.user.model.js";
import { Level } from "./level.enum.js";

export class Member extends BaseUserModel {
    private membership?: Level;
    private point?: number;
    private expiredDate?: Date;
    
    constructor(membership: Level, point: number, expiredDate: Date, firstName: string, lastName: string, email: string) {
        super(
            Math.floor(Math.random() * 1000),
            firstName,
            lastName,
            email
        );
        this.membership = membership;
        this.point = point;
        this.expiredDate = expiredDate;
    }

    public getMembership(): Level {
        return this.membership ?? Level.BRONZE;
    }

    public getPoint(): number {
        return this.point ?? 0;
    }

    public getExpiredDate(): Date {
        return this.expiredDate ?? new Date();
    }

}