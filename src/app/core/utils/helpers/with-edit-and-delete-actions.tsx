import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { TableProps } from 'antd';

type ActionFN<TItem extends Record<string, any>> = (
  item: TItem,
) => void | Promise<void>;

export const withEditAndDeleteActions = <TItem extends Record<string, any>>(
  columns: TableProps<TItem>['columns'],
  editFn: ActionFN<TItem>,
  deleteFn: ActionFN<TItem>,
) => [
  ...(columns || []),
  {
    dataIndex: 'action',
    render: (_: undefined, item: TItem) => (
      <>
        <EditOutlined onClick={() => editFn(item)} />
        <DeleteOutlined onClick={() => deleteFn(item)} />
      </>
    ),
  },
];
