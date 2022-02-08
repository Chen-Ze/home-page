describe('front-ui-chess-game-chessboard: FrontUiChessGameChessboard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=frontuichessgamechessboard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FrontUiChessGameChessboard!');
    });
});
