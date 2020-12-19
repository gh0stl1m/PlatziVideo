import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { cleanup, render, fireEvent, wait, waitForElement } from '../utils/test/test-utils';

// Component
import Search from './Search';

describe('<Search />', () => {
  afterEach(cleanup);

  it('Should render without crashing', () => {
    // Act
    const { container } = render(<Search />);

    // Asserts
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Given a list then the serch bar must be visible', () => {
    // Act
    const { getByText, getByPlaceholderText } = render(<Search />);

    // Asserts
    expect(getByText('¿Qué quieres ver hoy?')).toBeVisible();
    expect(getByPlaceholderText('Buscar...')).toBeVisible();
  });

  it('Given a list when an user click on the search and write down something, then the text must be appear', () => {
    // Arrange
    const inputSearchValue = "test";
    const props = {
     handlerChange: jest.fn(),
    }

    // Act
    const { getByPlaceholderText } = render(<Search {...props}/>);
    fireEvent.change(getByPlaceholderText('Buscar...'), { target: { value: inputSearchValue }});

    // Asserts
    expect(props.handlerChange).toHaveBeenCalled();
  });
});
