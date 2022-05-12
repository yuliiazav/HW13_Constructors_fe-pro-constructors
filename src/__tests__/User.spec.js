import { User } from '../User';
import { Book } from '../Book';
import { Author } from '../Author';

describe('User', () => {
  it('should return correct shape', () => {
    const user = new User('John', new Date(2020, 1, 1));

    expect(user).toEqual({
      name: 'John',
      date: new Date(2020, 1, 1),
      myBooks: [],
      friends: [],
      likes: [],
      addToFriends: expect.any(Function),
      likeBook: expect.any(Function),
      removeFriend: expect.any(Function),
      unlikeBook: expect.any(Function),
    });

    expect(user instanceof User);
  });

  describe('.addToFriends()', () => {
    describe('if user not be added', () => {
      const user = new User('John', new Date(2020, 1, 1));
      const friend = new User('Bill', new Date(2021, 1, 2));

      it('should add to user and self to friend', () => {
        user.addToFriends(friend);

        expect(user.friends).toStrictEqual([friend]);
        expect(friend.friends).toStrictEqual([user]);
      });
    });

    describe('with existed friend', () => {
      const user = new User('John', new Date(2020, 1, 1));
      const friend = new User('Bill', new Date(2021, 1, 2));

      it('should remove from user and self from friend', () => {
        user.addToFriends(friend);
        expect(user.friends).toStrictEqual([friend]);
        expect(friend.friends).toStrictEqual([user]);
        user.addToFriends(friend);
        expect(user.friends).toStrictEqual([]);
        expect(friend.friends).toStrictEqual([]);
      });
    });
  });

  describe('.likeBook()', () => {
    describe('with not liked book', () => {
      it('should add book to self and self to book', () => {
        const user = new User('John', new Date(2020, 1, 1));
        const jonny = new Author('Jonny', new Date(1944, 1, 1));
        const billy = new Author('Billy', new Date(1944, 1, 1));
        const authors = [jonny, billy];
        const book1984 = new Book('1984', new Date(1949, 5, 8), user, authors);
        user.likeBook(book1984);

        expect(user.likes).toStrictEqual([book1984]);
        expect(book1984.likedUsers).toStrictEqual([user]);
      });
    });

    describe('with liked book', () => {
      it('should add book to self and self to book', () => {
        const user = new User('John', new Date(2020, 1, 1));
        const jonny = new Author('Jonny', new Date(1944, 1, 1));
        const billy = new Author('Billy', new Date(1944, 1, 1));
        const authors = [jonny, billy];
        const book1984 = new Book('1984', new Date(1949, 5, 8), user, authors);
        user.likeBook(book1984);

        expect(user.likes).toStrictEqual([book1984]);
        expect(book1984.likedUsers).toStrictEqual([user]);
        user.likeBook(book1984);
        expect(user.likes).toStrictEqual([]);
        expect(book1984.likedUsers).toStrictEqual([]);
      });
    });
  });

  describe('.unlikeBook()', () => {
    describe('with not liked book', () => {
      it('should add book to self and self to book', () => {
        const user = new User('John', new Date(2020, 1, 1));
        const jonny = new Author('Jonny', new Date(1944, 1, 1));
        const billy = new Author('Billy', new Date(1944, 1, 1));
        const authors = [jonny, billy];
        const book1984 = new Book('1984', new Date(1949, 5, 8), user, authors);
        user.likeBook(book1984);

        expect(user.likes).toStrictEqual([book1984]);
        expect(book1984.likedUsers).toStrictEqual([user]);
      });
    });

    describe('with liked book', () => {
      it('should add book to self and self to book', () => {
        const user = new User('John', new Date(2020, 1, 1));
        const jonny = new Author('Jonny', new Date(1944, 1, 1));
        const billy = new Author('Billy', new Date(1944, 1, 1));
        const authors = [jonny, billy];
        const book1984 = new Book('1984', new Date(1949, 5, 8), user, authors);
        user.likeBook(book1984);

        expect(user.likes).toStrictEqual([book1984]);
        expect(book1984.likedUsers).toStrictEqual([user]);
        user.likeBook(book1984);
        expect(user.likes).toStrictEqual([]);
        expect(book1984.likedUsers).toStrictEqual([]);
      });
    });
  });

  describe('.removeFriend()', () => {
    describe('with existed user', () => {
      const user = new User('John', new Date(2020, 1, 1));
      const friend = new User('Bill', new Date(2021, 1, 2));
      const hater = new User('mr. Hate', new Date(2021, 1, 3));

      it('remove from friends and self from friend', () => {
        user.addToFriends(friend);
        user.addToFriends(hater);

        expect(user.friends).toStrictEqual([friend, hater]);
        expect(hater.friends).toStrictEqual([user]);
        user.removeFriend(hater);
        expect(user.friends).toStrictEqual([friend]);
        expect(hater.friends).toStrictEqual([]);
      });
    });

    describe('with not friend', () => {
      const user = new User('John', new Date(2020, 1, 1));
      const friend = new User('Bill', new Date(2021, 1, 2));
      const hater = new User('mr. Hate', new Date(2021, 1, 3));

      it('add to friends and self to friend', () => {
        user.removeFriend(friend);
        user.removeFriend(hater);

        expect(user.friends).toStrictEqual([friend, hater]);
        expect(hater.friends).toStrictEqual([user]);
      });
    });
  });

  describe('.friendsNames getter', () => {
    const user = new User('John', new Date(2020, 1, 1));
    const friend = new User('Bill', new Date(2021, 1, 2));
    const hater = new User('mr. Hate', new Date(2021, 1, 3));
    user.addToFriends(hater);
    user.addToFriends(friend);

    it('should return friend names', () => {
      expect(user.friendsNames).toStrictEqual('mr. Hate, Bill');
    });
  });

  describe('.likedBooks getter', () => {
    const user = new User('John', new Date(2020, 1, 1));
    const jonny = new Author('Jonny', new Date(1944, 1, 1));
    const billy = new Author('Billy', new Date(1944, 1, 1));
    const authors = [jonny, billy];
    const book1984 = new Book('1984', new Date(1949, 5, 8), user, authors);
    const bookSome = new Book('Smth book', new Date(1949, 5, 8), user, authors);
    user.likeBook(book1984);
    user.likeBook(bookSome);

    it('returns correct string', () => {
      expect(user.likedBooks).toStrictEqual('1984, Smth book');
    });
  });

  describe('.publishedBooks', () => {
    const user = new User('John', new Date(2020, 1, 1));
    const jonny = new Author('Jonny', new Date(1944, 1, 1));
    const billy = new Author('Billy', new Date(1944, 1, 1));
    const authors = [jonny, billy];
    new Book('1984', new Date(1949, 5, 8), user, authors);
    new Book('Smth book', new Date(1949, 5, 8), user, authors);
    it('returns correct string', () => {
      expect(user.publishedBooks).toStrictEqual('1984, Smth book');
    });
  });
});
