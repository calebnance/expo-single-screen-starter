import React from 'react';
import renderer from 'react-test-renderer';

import Menu from '../Menu';
import Touch from '../../components/Touch';

describe('<Menu />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('is hidden', () => {
    const tree = renderer.create(<Menu onClose={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly on left', () => {
    const tree = renderer.create(<Menu onClose={jest.fn()} show />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly on right', () => {
    const tree = renderer
      .create(<Menu direction="right" onClose={jest.fn()} show />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('closes menu', () => {
    jest.useFakeTimers();

    const testRenderer = renderer.create(<Menu onClose={jest.fn()} show />);
    const testInstance = testRenderer.root;
    const touchCloseArea = testInstance.findByType(Touch);
    touchCloseArea.props.onPress();
  });
});
