import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Header from '../components/Header/Header';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Header />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
