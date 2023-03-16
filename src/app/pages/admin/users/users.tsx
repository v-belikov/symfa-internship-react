import React, { FC, useCallback, useMemo, useState } from 'react';
import { Button, Table } from 'antd';
import { useDeleteMutation, useGetAllUsersQuery } from 'app/store/auth';
import { withEditAndDeleteActions } from '../../../core/utils';
import { AddAndEditUserModal } from './components';
import { COLUMNS } from './models';

export const Users: FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const { data } = useGetAllUsersQuery(null);
  const [userToDelete] = useDeleteMutation();

  const toggleVisibility = useCallback(() => {
    setVisible((prevState: boolean) => !prevState);
  }, []);

  const onEdit = (item: any) => {
    setSelectedItem(item);
    toggleVisibility();
  };

  const onDelete = async (item: any) => {
    await userToDelete(item);
  };

  const onModalCancel = () => {
    setSelectedItem(null);
    toggleVisibility();
  };

  const columns = useMemo(
    () => withEditAndDeleteActions(COLUMNS, onEdit, onDelete),
    [],
  );

  return (
    <>
      <AddAndEditUserModal
        open={isVisible}
        item={selectedItem}
        onOk={toggleVisibility}
        onCancel={onModalCancel}
      />
      <Button type="primary" onClick={toggleVisibility}>
        Add
      </Button>
      <Table dataSource={data} columns={columns} rowKey={item => item.id} />
    </>
  );
};
