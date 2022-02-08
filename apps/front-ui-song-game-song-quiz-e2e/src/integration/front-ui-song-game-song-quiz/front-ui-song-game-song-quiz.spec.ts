describe('front-ui-song-game-song-quiz: FrontUiSongGameSongQuiz component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=frontuisonggamesongquiz--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FrontUiSongGameSongQuiz!');
    });
});
