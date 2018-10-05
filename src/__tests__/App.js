import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../App';

it('App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  // this too
  // https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675
  // use shallow
  // const loginComponent = shallow(<App />);
  // loginComponent.setState({ showLeftMenu: true });

  expect(tree).toMatchSnapshot();
});
