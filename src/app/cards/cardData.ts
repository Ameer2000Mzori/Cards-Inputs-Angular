interface dataListInterface {
  title: string;
  data: string;
  id: number;
  type: string;
  image: string;
}

export const dataList: dataListInterface[] = [
  {
    title: 'Title 1',
    data: 'Data 1',
    id: 1,
    type: 'type 1',
    image: '',
  },
  {
    title: 'Title 2',
    data: 'Data 2',
    id: 2,
    type: 'type 2',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Title 3',
    data: 'Data 3',
    id: 3,
    type: 'type 3',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Title 4',
    data: 'Data 4',
    id: 4,
    type: 'type 4',
    image: 'https://via.placeholder.com/300x200',
  },
];
