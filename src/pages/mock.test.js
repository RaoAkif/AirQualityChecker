jest.mock('./Home/Home.js');
const main = require('./Home.js');

describe('Home Page mocking', () => {
  it('Get the data from the store', () => {
    expect(main.fetchWeatherAction()).toBe('The weather data is fetched');
  });
});
