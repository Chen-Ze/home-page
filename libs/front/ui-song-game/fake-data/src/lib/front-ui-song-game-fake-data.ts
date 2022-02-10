import faker from '@faker-js/faker';
import * as R from 'ramda';

export const generateSongList = (maxLength = 100) => {
  faker.seed(5832497);

  const songCount = faker.datatype.number(maxLength);
  const songs = R.times(
    () => ({
      title: faker.random.words(),
      id: faker.datatype.uuid(),
      artists: R.times(
        () => faker.name.findName(),
        faker.datatype.number({ min: 1, max: 3 })
      ),
    }),
    songCount
  );
  const selectedId = faker.random.arrayElement(R.map(R.prop('id'), songs));

  const songListProps = {
    selectedId,
    songList: songs,
  };

  return songListProps;
};
