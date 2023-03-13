import { TableProps } from 'antd';
import { IUser } from 'app/store/users/models';

export const COLUMNS: TableProps<IUser>['columns'] = [
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
