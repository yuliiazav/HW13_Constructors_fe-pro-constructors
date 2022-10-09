import { User } from './User.js';
import { Book } from './Book.js';
import { Author } from './Author.js';


const jonny = new Author('Jonny', new Date(1944, 1, 1));
const billy = new Author('billy', new Date(1944, 1, 1));
const jane = new Author('jane', new Date(1944, 1, 1));
const kent = new Author('kent', new Date(1944, 1, 1));
const sam = new Author('sam', new Date(1944, 1, 1));
const toto = new Author('toto', new Date(1944, 1, 1));
const sky = new Author('sky', new Date(1944, 1, 1));

console.log(jonny);
console.log(billy);
const authors = [jonny, billy, jane, kent ];
const authors2 = [sky, toto, jane, sam ];



let julia = new User('Julia', new Date());
console.log(julia);
let yura = new User('yura', new Date());
let serg = new User('serg', new Date());
let vik = new User('vik', new Date());
let greg = new User('greg', new Date());

julia.addToFriends(yura);
julia.addToFriends(vik);
julia.addToFriends(serg);
yura.addToFriends(vik);
greg.addToFriends(vik);

serg.addToFriends(vik);

console.log(yura);
console.log(julia);
console.log(serg);
console.log(vik);


// vik.removeFriend(serg);
// julia.removeFriend(vik);

let book1 = new Book('book1', 1256, yura, authors);
let book2 = new Book('book2', 1256, julia, authors2);
let book3 = new Book('book3', 1256, serg, authors);
let book4 = new Book('book4', 1256, julia, authors2);
let book5 = new Book('book5', 1256, serg, authors);

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);

julia.likeBook(book4);
julia.likeBook(book3);
julia.likeBook(book1);

yura.likeBook(book1);
yura.likeBook(book4);
yura.likeBook( new Book('book6', 1256, julia, authors2));
serg.likeBook(book1);


yura.unlikeBook(book1);
console.log(book1);

console.log(yura.friendsNames);
//console.log(yura.likeBook);

console.log(yura.likes);
console.log(yura.likedBooks);


console.log(yura.publishedBooks);
console.log(serg.publishedBooks);
console.log(julia.publishedBooks);



const book1984 = new Book('1984', new Date(1949, 5, 8), serg, authors2);

console.log(book1984);

console.log(book1984.suggestedPublicators);

console.log(book1984.suggestedBooks);


