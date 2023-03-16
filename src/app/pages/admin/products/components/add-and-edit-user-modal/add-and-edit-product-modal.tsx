/* eslint-disable no-restricted-imports */
import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { AddEditModal, IAddEditModalProps } from '../../../../../components';

// TODO replace any type
type AddAndEditProductModalProps = Omit<IAddEditModalProps<any>, 'modalType'>;

export const AddAndEditProductModal: FC<AddAndEditProductModalProps> = ({
  item,
  onOk,
  open,
  ...rest
}: PropsWithChildren<AddAndEditProductModalProps>) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(item);
  }, [item]);

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  const onSubmit = async () => {
    if (await form.validateFields()) {
      onOk?.({
        ...(item || {}),
        ...form.getFieldsValue(),
      });
    }
  };

  return (
    <AddEditModal
      title="User"
      modalType={item ? 'edit' : 'add'}
      onOk={onSubmit}
      open={open}
      {...rest}
    >
      <Form labelCol={{ span: 5 }} form={form}>
        <Form.Item
          name="username"
          label="Username"
          required
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          required
          rules={[{ required: true, type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Password">
          <Button type="primary">Send password</Button>
        </Form.Item>
      </Form>
    </AddEditModal>
  );
};
