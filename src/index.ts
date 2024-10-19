import { Movie } from "./model/movie.model.js";
import { Comment } from "./model/comment.model.js";

const movie1 = new Movie("Inception", { year: 2010, month: 7, day: 16 }); 

console.debug("=== Movie ===");
console.info(movie1.getId());
console.info(movie1.getTitle());
console.info(movie1.getRelease());
console.debug("===  End  ===");

console.debug("=== Movie ===");
console.info(movie1)
console.debug("===  End  ===");

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
