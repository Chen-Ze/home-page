import { Story, Meta } from '@storybook/react';
import {
  FrontUiSongGameSongList,
  FrontUiSongGameSongListProps,
} from './front-ui-song-game-song-list';
import { generateSongList } from '@home-page/front/ui-song-game/fake-data';

export default {
  component: FrontUiSongGameSongList,
  title: 'FrontUiSongGameSongList',
  argTypes: {
    onSelect: { action: 'selected' },
  },
} as Meta;

const Template: Story<FrontUiSongGameSongListProps> = (args) => {
  return <FrontUiSongGameSongList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...generateSongList(200),
};

export const Less = Template.bind({});
Less.args = {
  ...generateSongList(5),
};

export const Empty = Template.bind({});
Empty.args = {
  ...generateSongList(0),
};
