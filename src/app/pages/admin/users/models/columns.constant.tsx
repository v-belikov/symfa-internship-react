import { TableProps } from 'antd';

export const COLUMNS: TableProps<any>['columns'] = [
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: true,
    render: email => email, // not necessary
  },
  {
    title: 'Username',
    dataIndex: 'username',
    sorter: true,
    render: username => {
      // got from dataIndex obj[dataIndex]
      return username;
    }, // not necessary
  },
];
