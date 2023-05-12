const bcrypt = require("bcrypt");
const User = require("../models/user");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

describe("Non-existent user LOG IN", () => {
  
  beforeEach(async () => {
    await User.deleteMany({});
    const hashLozinka = await bcrypt.hash("lozinka", 10);
    const testniKorisnik = new User({
      name: "TestniKorisnik",
      email: "testni@test.test",
      password: hashLozinka,
    });
    await testniKorisnik.save();
  });

  test("return returns an error if a non-existent user is attempted to log in ", async () => {
    const loginPodaci = {
      email: "nepostojeci@mail.test",
      password: "Lozinka",
    };
    await api
      .post("/api/auth/login")
      .send(loginPodaci)
      .expect(401)
  });
});

afterAll(() => {
  mongoose.connection.close();
});
