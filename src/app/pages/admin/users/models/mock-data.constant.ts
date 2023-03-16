// TODO remove this

export const MOCK_DATA = Array.from({ length: 100 }, (_, index: number) => ({
  id: index,
  username: `username_${index + 1}`,
  email: `email${index + 1}@mail.com`,
}));
