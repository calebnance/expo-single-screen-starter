import React from 'react';
import renderer from 'react-test-renderer';

import Touch from '../../components/Touch';

it('Touch component renders correctly', () => {
  const onPressEvent = jest.fn();
  onPressEvent.mockReturnValue('Touch on press invoked');

  const tree = renderer.create(<Touch onPress={onPressEvent} />).toJSON();

  expect(tree).toMatchSnapshot();
});
