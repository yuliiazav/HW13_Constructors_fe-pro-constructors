import { Author } from '../Author';

describe('Author', () => {
  it('have correct object shape', () => {
    const author = new Author('Orwell', new Date(1903, 5, 25));

    expect(author).toEqual({
      name: 'Orwell',
      books: [],
      dateOfBirth: new Date(1903, 5, 25),
    });

    expect(author instanceof Author).toStrictEqual(true);
  });
});
