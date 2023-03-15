import React, { FC, useCallback, useMemo, useState } from 'react';
import { Button, Table } from 'antd';
import { useGetProductsQuery } from 'app/store/products';
import { withEditAndDeleteActions } from '../../../core/utils';
import { AddAndEditProductModal } from './components';
import { COLUMNS } from './models';

export const Products: FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  // TODO replace type
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const { data } = useGetProductsQuery(null);

  const toggleVisibility = useCallback(() => {
    setVisible((prevState: boolean) => !prevState);
  }, []);

  const onEdit = (item: any) => {
    setSelectedItem(item);
    toggleVisibility();
  };

  const onDelete = (item: any) => {
    return item;
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
      <AddAndEditProductModal
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
