import { Story, Meta } from '@storybook/react';
import {
  FrontUiSongGameSongPlayer,
  FrontUiSongGameSongPlayerProps,
} from './front-ui-song-game-song-player';

export default {
  component: FrontUiSongGameSongPlayer,
  title: 'FrontUiSongGameSongPlayer',
} as Meta;

const Template: Story<FrontUiSongGameSongPlayerProps> = (args) => (
  <FrontUiSongGameSongPlayer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
