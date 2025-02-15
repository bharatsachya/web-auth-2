export interface User {
  id: number;
  username: string;
  password: string;
}

const users: User[] = []; // In-memory storage for users

export const createUser = (username: string, password: string): User => {
  const newUser: User = {
    id: users.length + 1, // Auto-increment ID
    username,
    password, // In a real app, hash the password before saving
  };
  users.push(newUser);
  return newUser;
};

export const findUserByUsername = (username: string): User | undefined => {
  return users.find((u) => u.username === username);
};