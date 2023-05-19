import users from "../../database/users.js";

export const createUserResolver = (parent, args, context, info) => {
  const { email, password } = args;

  const newUserId = users[users.length - 1].id + 1;

  const newUser = {
    id: newUserId,
    email,
    password,
  };

  users.push(newUser);

  return {
    errors: [],
    id: newUserId,
  };
};
