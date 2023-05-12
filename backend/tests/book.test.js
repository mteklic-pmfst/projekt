const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Booking = require('../models/booking');

describe('GET /api/bookings/getallbookings', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
  afterEach(async () => {
    await Booking.deleteMany({});
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should return an array of all bookings', async () => {
    const booking1 = new Booking({
      userid: 'user1',
      roomid: 'room1',
      checkin: new Date('2022-01-01'),
      checkout: new Date('2022-01-05'),
      status: 'confirmed',
    });
    const booking2 = new Booking({
      userid: 'user2',
      roomid: 'room2',
      checkin: new Date('2022-01-02'),
      checkout: new Date('2022-01-06'),
      status: 'confirmed',
    });

    await booking1.save();
    await booking2.save();

    const response = await request(app).get('/api/bookings/getallbookings');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0].userid).toBe('user1');
    expect(response.body[1].userid).toBe('user2');
  });

  it('should return an empty array if no bookings exist', async () => {
    const response = await request(app).get('/api/bookings/getallbookings');

    expect(response.status).toBe(200);

  });
});
