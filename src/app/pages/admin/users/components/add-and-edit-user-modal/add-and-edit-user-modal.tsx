import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Form, Input } from 'antd';
import { AddEditModal, IAddEditModalProps } from 'app/components';
import { useRegistrationMutation, useUpdateMutation } from 'app/store/auth';

// TODO replace any type
type AddAndEditUserModalProps = Omit<IAddEditModalProps<any>, 'modalType'>;

export const AddAndEditUserModal: FC<AddAndEditUserModalProps> = ({
  item,
  onOk,
  open,
  ...rest
}: PropsWithChildren<AddAndEditUserModalProps>) => {
  const [form] = Form.useForm();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [updatedUser] = useUpdateMutation();
  const [createdUser] = useRegistrationMutation();

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onUsernameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    [],
  );
  const onPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

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

    const id = item?.id;

    if (item) {
      await updatedUser({ id, username, email });
    } else {
      await createdUser({ username, email, password });
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
          <Input onChange={onUsernameChange} />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          required
          rules={[{ required: true, type: 'email' }]}
        >
          <Input onChange={onEmailChange} />
        </Form.Item>
        <Form.Item name="password" label="Password" required>
          <Input type="password" onChange={onPasswordChange} />
        </Form.Item>
      </Form>
    </AddEditModal>
  );
};
