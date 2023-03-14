import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Button, Form, Input } from 'antd';
import { useCreateUserMutation, useUpdateUserMutation } from 'app/store/users';
import { IUser } from 'app/store/users/models';
import { AddEditModal, IAddEditModalProps } from '../../../../../components';

type AddAndEditUserModalProps = Omit<IAddEditModalProps<IUser>, 'modalType'>;

export const AddAndEditUserModal: FC<AddAndEditUserModalProps> = ({
  item,
  onOk,
  open,
  ...rest
}: PropsWithChildren<AddAndEditUserModalProps>) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(item);
  }, [item]);

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    [],
  );

  const [createdUser] = useCreateUserMutation();
  const [updatedUser] = useUpdateUserMutation();

  const onSubmit = async () => {
    if (await form.validateFields()) {
      onOk?.({
        ...(item || {}),
        ...form.getFieldsValue(),
      });
    }

    const id = item?.id;

    if (item) {
      await updatedUser({ id, username, email });
    } else {
      await createdUser({ username, email });
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
          <Input onChange={onNameChange} />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          required
          rules={[{ required: true, type: 'email' }]}
        >
          <Input onChange={onEmailChange} />
        </Form.Item>
        {item && (
          <Form.Item label="Password">
            <Button type="primary">Send password</Button>
          </Form.Item>
        )}
      </Form>
    </AddEditModal>
  );
};
