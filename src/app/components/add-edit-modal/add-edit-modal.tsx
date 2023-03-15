import React, { FC, PropsWithChildren } from 'react';
import { Modal } from 'antd';
import { IAddEditModalProps } from './models';

export const AddEditModal: FC<IAddEditModalProps> = ({
  width = 500,
  title = '',
  centered = true,
  modalType,
  ...rest
}: PropsWithChildren<IAddEditModalProps>) => {
  return (
    <Modal
      title={`${modalType === 'add' ? 'Add' : 'Edit'} ${title}`}
      width={width}
      centered={centered}
      {...rest}
    />
  );
};
