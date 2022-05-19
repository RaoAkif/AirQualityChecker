import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RouterConfig from '../components/RouterConfig/RouterConfig';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <RouterConfig />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
