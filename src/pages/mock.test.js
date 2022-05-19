jest.mock('./Home/Home');
const main = require('./Home');

describe('Home Page mocking', () => {
  it('Get the data from the store', () => {
    expect(main.fetchWeatherAction()).toBe('The weather data is fetched');
  });
});
