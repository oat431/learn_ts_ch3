export abstract class BaseUserModel {
    protected id?: number;
    protected firstname?: string;
    protected lastname?: string;
    protected email?: string;

    constructor(id: number, firstname: string, lastname: string, email: string) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    public getFullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }

    public getEmail(): string {
        return this.email ?? '';
    }

    public getId(): number {
        return this.id ?? 0;
    }
}
