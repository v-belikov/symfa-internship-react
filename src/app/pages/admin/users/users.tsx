import React, { FC, useCallback, useMemo, useState } from 'react';
import { Button, Table } from 'antd';
import { withEditAndDeleteActions } from '../../../core/utils';
import { AddAndEditUserModal } from './components';
import { COLUMNS, MOCK_DATA } from './models';

export const Users: FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  // TODO replace type
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const toggleVisibility = useCallback(() => {
    setVisible((prevState: boolean) => !prevState);
  }, []);

  const onEdit = (item: any) => {
    setSelectedItem(item);
    toggleVisibility();
  };

  const onModalCancel = () => {
    setSelectedItem(null);
    toggleVisibility();
  };

  const columns = useMemo(
    () => withEditAndDeleteActions(COLUMNS, onEdit, toggleVisibility),
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
      <Table
        columns={columns}
        dataSource={MOCK_DATA}
        rowKey={item => item.id}
      />
    </>
  );
};
