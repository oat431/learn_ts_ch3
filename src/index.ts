import { Movie } from "./model/movie.model.js";
import { Comment } from "./model/comment.model.js";
import { BaseUserModel } from "./shared/base.user.model.js";
import { Admin } from "./model/admin.model.js";
import { Staff } from "./model/staff.model.js";
import { Position } from "./model/position.enum.js";
import { Member } from "./model/member.model.js";
import { Level } from "./model/level.enum.js";
import { Response } from "./shared/response.model.js";

// generic example 1
const res: Response<string> = {
    data: "Hello World!",
    message: "Success"
}
console.log(res);

// generic example 2
const res2: Response<number> = {
    data: 123,
    message: "Success"
}
console.log(res2);

// abstraction + encapsulation example 1
const movie1 = new Movie("Inception", { year: 2010, month: 7, day: 16 }); 

console.debug("=== Movie ===");
console.info(movie1.getId());
console.info(movie1.getTitle());
console.info(movie1.getRelease());
console.debug("===  End  ===");

console.debug("=== Movie ===");
console.info(movie1)
console.debug("===  End  ===");

// abstraction + encapsulation example 2
const commnet1 = new Comment("Great movie!", 5);
const commnet2 = new Comment("I love it!", 5);
const commnet3 = new Comment("I hate it!", 1);
const commnet4 = new Comment("I don't understand it!", 3);

const comments = [commnet1, commnet2, commnet3, commnet4];
const movie2 = new Movie("Interstellar", { year: 2014, month: 11, day: 7 }, comments);

console.debug("=== Movie ===");
console.info(movie2);
console.info(`movie avg: ${movie2.getAvgRate()}`);
console.info(`movie total comments: ${movie2.getTotalComments()}`);
console.debug("===  End  ===");

// polymorphism example 1
const admin :BaseUserModel = new Admin("chiang mai", "admin", "admin", "admin@admin.com");

const staff1 :BaseUserModel = new Staff(Position.CASHIER, 25000, new Date("2021-01-01"), "staff1", "staff1", "staff1@staff.com");
// const staff2 :BaseUserModel = new Staff(Position.CLEANER, 15000, new Date("2021-01-01"), "staff2", "staff2", "staff2@staff.com");
// const staff3 :BaseUserModel = new Staff(Position.SECURITY, 20000, new Date("2021-01-01"), "staff3", "staff3", "staff3@staff.com");
// const staff4 :BaseUserModel = new Staff(Position.CASHIER, 25000, new Date("2021-01-01"), "staff4", "staff4", "staff4@staff.com");

const member1 :BaseUserModel = new Member(Level.BRONZE,1000, new Date("2021-01-01"), "member1", "member1", "member1@member.com"); 
// const member2 :BaseUserModel = new Member(Level.SILVER,2000, new Date("2021-01-01"), "member2", "member2", "member2@member.com");
// const member3 :BaseUserModel = new Member(Level.GOLD,3000, new Date("2021-01-01"), "member3", "member3", "member3@membe3@member.com");
// const member4 :BaseUserModel = new Member(Level.PLATINUM,4000, new Date("2021-01-01"), "member4", "member4", "member4@member.com");

console.log(typeof admin);
console.log(typeof staff1);
console.log(typeof member1);

// polymorphism example 2
let newUser: BaseUserModel;

const flag: string = process.argv[2].toUpperCase();

switch(flag) {
    case "ADMIN":
        newUser = new Admin("chiang mai", "admin", "admin", "admin@admin.com");
        const showAdmin: Response<Admin> = {
            data: newUser as Admin,
            message: "Success"
        }
        console.log(showAdmin);
        break;
    case "STAFF":
        newUser = new Staff(Position.CASHIER, 25000, new Date("2021-01-01"), "staff1", "staff1", "staff@staff.com");
        const showStaff: Response<Staff> = {
            data : newUser as Staff,
            message: "Success"
        }
        console.log(showStaff);
        break;
    case "MEMBER":
        newUser = new Member(Level.BRONZE,1000, new Date("2021-01-01"), "member1", "member1", "member@member.com");
        const showMember: Response<Member> = {
            data : newUser as Member,
            message: "Success"
        }
        console.log(showMember);
        break;
    default:
        newUser = new Member(Level.BRONZE,1000, new Date("2021-01-01"), "member1", "member1", "member@member.com");
        const showDefault: Response<Member> = {
            data : newUser as Member,
            message: "Success"
        }
        console.log(showDefault);
        break;
}
