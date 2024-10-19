import { BaseUserModel } from "../shared/base.user.model.js";
import { Position } from "./position.enum.js";

export class Staff extends BaseUserModel {
    private position?: Position;
    private salary?: number;
    private hiredate?: Date;

    constructor(position: Position, salary: number, hiredate: Date, firstName: string, lastName: string, email: string) {
        super(
            Math.floor(Math.random() * 1000),
            firstName,
            lastName,
            email
        );
        this.position = position;
        this.salary = salary;
        this.hiredate = hiredate;
    }

    public getPosition(): Position {
        return this.position ?? Position.TRAINEE;
    }

    public getSalary(): number {
        return this.salary ?? 0;
    }

    public getHireDate(): Date {
        return this.hiredate ?? new Date();
    }
}