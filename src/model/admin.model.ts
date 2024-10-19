import { BaseUserModel } from '../shared/base.user.model.js';
export class Admin extends BaseUserModel {
    private theatername: string;

    constructor(theatername: string, firstName: string, lastName: string, email: string) {
        super(
            Math.floor(Math.random() * 1000),
            firstName,
            lastName,
            email
        );
        this.theatername = theatername;
    }

    public getTheaterName(): string {
        return this.theatername;
    }

}