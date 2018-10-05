import React from 'react';
import renderer from 'react-test-renderer';

import Menu from '../../screens/Menu';

it('Menu screen hidden', () => {
  jest.useFakeTimers();
  const onCloseEvent = jest.fn();
  onCloseEvent.mockReturnValue('Menu on close invoked');

  const tree = renderer.create(<Menu onClose={onCloseEvent} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Menu screen from left renders correctly', () => {
  jest.useFakeTimers();
  const onCloseEvent = jest.fn();
  onCloseEvent.mockReturnValue('Menu on close invoked');

  const tree = renderer.create(<Menu show onClose={onCloseEvent} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Menu screen from right renders correctly', () => {
  jest.useFakeTimers();
  const onCloseEvent = jest.fn();
  onCloseEvent.mockReturnValue('Menu on close invoked');

  const tree = renderer
    .create(<Menu direction="right" show onClose={onCloseEvent} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
