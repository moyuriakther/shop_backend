import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin",
    email: "admin2@gmail.com",
    password: bcrypt.hashSync("admin2023", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "newUser@gmail.com",
    password: bcrypt.hashSync("user2023", 10),
  },
];
export default users;
