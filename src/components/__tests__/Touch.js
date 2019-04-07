import React from 'react';
import renderer from 'react-test-renderer';

import Touch from '../Touch';

describe('<Touch />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Touch onPress={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
