import { Story, Meta } from '@storybook/react';
import {
  FrontUiSongGameSongList,
  FrontUiSongGameSongListProps,
} from './front-ui-song-game-song-list';

export default {
  component: FrontUiSongGameSongList,
  title: 'FrontUiSongGameSongList',
} as Meta;

const Template: Story<FrontUiSongGameSongListProps> = (args) => (
  <FrontUiSongGameSongList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
