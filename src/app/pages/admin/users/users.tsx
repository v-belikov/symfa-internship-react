import React, { FC, useCallback, useMemo, useState } from 'react';
import { Button, Table } from 'antd';
import { useAppSelector } from 'app/core/hooks';
import { withEditAndDeleteActions } from '../../../core/utils';
import {
  IUser,
  selectAuth,
  useGetUsersQuery,
  useRemoveUserMutation,
} from '../../../store/users';
import { AddAndEditUserModal } from './components';
import { COLUMNS } from './models';

export const Users: FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IUser | null>(null);

  const toggleVisibility = useCallback(() => {
    setVisible((prevState: boolean) => !prevState);
  }, []);

  const onEdit = async (item: any) => {
    setSelectedItem(item);
    toggleVisibility();
  };

  const [delitedUser] = useRemoveUserMutation();

  const onDelete = async (item: any) => {
    await delitedUser(item);
    alert(`${item.username} dropped`);
  };

  const onModalCancel = () => {
    setSelectedItem(null);
    toggleVisibility();
  };

  const columns = useMemo(
    () => withEditAndDeleteActions(COLUMNS, onEdit, onDelete),
    [],
  );

  const user = useAppSelector(selectAuth);

  const { data: existedUsers } = useGetUsersQuery({ user });

  return (
    <>
      <AddAndEditUserModal
        open={isVisible}
        item={selectedItem!}
        onOk={toggleVisibility}
        onCancel={onModalCancel}
      />
      <Button type="primary" onClick={toggleVisibility}>
        Add
      </Button>
      <Table
        columns={columns}
        dataSource={existedUsers}
        rowKey={item => item.id}
      />
    </>
  );
};
