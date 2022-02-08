describe('front-ui-song-game-song-list: FrontUiSongGameSongList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=frontuisonggamesonglist--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FrontUiSongGameSongList!');
    });
});
