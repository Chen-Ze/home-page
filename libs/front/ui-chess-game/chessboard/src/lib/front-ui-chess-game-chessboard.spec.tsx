import { render } from '@testing-library/react';

import FrontUiChessGameChessboard from './front-ui-chess-game-chessboard';

// see https://stackoverflow.com/questions/65591705/angular11-test-referenceerror-resizeobserver-is-not-defined
window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe('FrontUiChessGameChessboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontUiChessGameChessboard />);
    expect(baseElement).toBeTruthy();
  });
});
