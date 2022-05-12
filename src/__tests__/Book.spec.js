import { Book } from '../Book';
import { User } from '../User';
import { Author } from '../Author';

describe('Book', () => {
  const user = new User('John', new Date(2020, 1, 1));
  const anotherUser = new User('Jerry', new Date(2020, 1, 1));
  const newUser = new User('Mike', new Date(2020, 1, 1));
  const jonny = new Author('Jonny', new Date(1944, 1, 1));
  const billy = new Author('Billy', new Date(1944, 1, 1));
  const authors = [jonny, billy];
  const book1984 = new Book('1984', new Date(1949, 5, 8), user, authors);
  new Book('my favorite book', new Date(1949, 5, 8), newUser, authors);
  new Book('shit book', new Date(1949, 5, 8), anotherUser, authors);

  it('returns correct shape', () => {
    expect(book1984).toEqual({
      title: '1984',
      year: new Date(1949, 5, 8),
      publicationBy: user,
      likedUsers: [],
      authors,
    });
    expect(book1984 instanceof Book);
  });

  describe('suggestedBooks getter', () => {
    it('should return correct string', () => {
      expect(book1984.suggestedBooks).toStrictEqual(
        'my favorite book, shit book'
      );
    });
  });

  describe('suggestedPublicators getter', () => {
    it('should return correct string', () => {
      expect(book1984.suggestedPublicators).toStrictEqual('Mike, Jerry');
    });
  });
});
