import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
import Menu from './screens/Menu';
import Touch from './components/Touch';

describe('<App />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has 2 touch components', () => {
    const testRenderer = renderer.create(<App />);
    const testInstance = testRenderer.root;
    const touches = testInstance.findAllByType(Touch);

    expect(touches.length).toBe(2);
  });

  it('shows left menu', () => {
    const testRenderer = renderer.create(<App />);
    const testInstance = testRenderer.root;
    const touchLeftMenu = testInstance.findByProps({ testId: 'leftMenu' });

    touchLeftMenu.props.onPress();
  });

  it('shows right menu', () => {
    const testRenderer = renderer.create(<App />);
    const testInstance = testRenderer.root;
    const touchRightMenu = testInstance.findByProps({ testId: 'rightMenu' });

    touchRightMenu.props.onPress();
  });

  it('closes menu', () => {
    const testRenderer = renderer.create(<App />);
    const testInstance = testRenderer.root;
    const touchLeftMenu = testInstance.findByProps({ testId: 'leftMenu' });
    touchLeftMenu.props.onPress();

    const menuInstance = testInstance.findByType(Menu);
    menuInstance.props.onClose();
  });
});
