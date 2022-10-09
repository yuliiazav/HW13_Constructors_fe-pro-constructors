import {Author} from './Author.js';
import {User} from './User.js';

/**
 * @param {string} title
 * @param {Date} year
 * @param {User} publicationBy
 * @param {Author[]} authors
 * @constructor
 * @property {string} title
 * @property {Date} year
 * @property {Author[]} authors
 * @property {User[]} likedUsers
 * @property {User} publicationBy
 */
export function Book(title, year, publicationBy, authors) {
    this.title = title;
    this.year = year;
    this.likedUsers = [];

    this.publicationBy = publicationBy;
    publicationBy.myBooks.push(this);
    this.authors = authors;

    authors.forEach((author) => {
        author.books.push(this);
    });

    Object.defineProperty(this, 'suggestedPublicators', {
        get() {
            return this.authors.reduce((accum, author) => {
                let publicators = author.books.map((book) => book.publicationBy);
                let uniquePublicators = new Set(publicators);
console.log(uniquePublicators);
                return [...uniquePublicators];
            }, [])
            .filter((publicator) => publicator !== this.publicationBy)
                .map(({name}) => name).join(', ');
        }
    });


    Object.defineProperty(this, 'suggestedBooks', {
        get() {
            return this.authors.reduce((accum, author) => {
                let authorsBooks = author.books.map(({title}) => title);
                let uniqueBooks = new Set(authorsBooks);

                return [...uniqueBooks];
            }, []).join(', ');

            console.log(authorsBooks);
            console.log(uniqueBooks);

            // .filter((book) => book !== this.book)
                // .map(({name}) => name).join(', ');
        }
    });

}


