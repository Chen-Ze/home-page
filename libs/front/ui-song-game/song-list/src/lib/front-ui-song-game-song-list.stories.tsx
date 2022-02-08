import { Story, Meta } from '@storybook/react';
import {
  FrontUiSongGameSongList,
  FrontUiSongGameSongListProps,
} from './front-ui-song-game-song-list';
import { songListProps } from './song-list-mock';

export default {
  component: FrontUiSongGameSongList,
  title: 'FrontUiSongGameSongList',
  argTypes: {
    onSelect: { action: 'selected' },
    onClose: { action: 'closed' },
  },
} as Meta;

const Template: Story<FrontUiSongGameSongListProps> = (args) => (
  <FrontUiSongGameSongList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...songListProps,
};

export const Less = Template.bind({});
Less.args = {
  ...Default.args,
  songList: Default.args.songList?.slice(0, 1),
};
