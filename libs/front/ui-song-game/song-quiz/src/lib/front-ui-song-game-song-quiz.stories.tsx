import { Story, Meta } from '@storybook/react';
import {
  FrontUiSongGameSongQuiz,
  FrontUiSongGameSongQuizProps,
} from './front-ui-song-game-song-quiz';

export default {
  component: FrontUiSongGameSongQuiz,
  title: 'FrontUiSongGameSongQuiz',
} as Meta;

const Template: Story<FrontUiSongGameSongQuizProps> = (args) => (
  <FrontUiSongGameSongQuiz {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
