import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import Buttons from './buttons';

describe('<Buttons />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Buttons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('works correctly', () => {
    const mockFunction = jest.fn();
    const comp = render(<Buttons onClick={mockFunction} />);
    const buttonTouchable = comp.getByTestId('login-button-title');
    fireEvent(buttonTouchable, 'press');
    expect(mockFunction).toHaveBeenCalled();
  });
});
