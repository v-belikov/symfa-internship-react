import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import { useAppDispatch } from 'app/core/hooks';
import { ROUTES } from 'app/core/models';
import { setUser, useLoginMutation } from 'app/store/auth';

export const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginUser, { data, isSuccess }] = useLoginMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  const handleLogin = async () => {
    await loginUser({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data.access_token));
      navigate('/admin');
    }
  }, [isSuccess]);

  const recoverLink = useMemo(() => {
    const link = ROUTES.client.link.recover;

    if (!email) {
      return link;
    }

    return `${link}?${new URLSearchParams({ email }).toString()}`;
  }, [email]);

  return (
    <Card title="Login" size="small" style={{ width: 500 }}>
      <Form labelCol={{ span: 5 }}>
        <Form.Item
          label="Email"
          name="email"
          required
          rules={[{ required: true, type: 'email' }]}
        >
          <Input onChange={onEmailChange} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          // TODO add validation
          rules={[{ required: true, type: 'regexp' }]}
        >
          <Input type="password" onChange={onPasswordChange} />
        </Form.Item>
        <Row align="middle" justify="space-between">
          <Col>
            <Link to={recoverLink}>Recover password</Link>
          </Col>
          <Col>
            <Button
              htmlType="submit"
              type="primary"
              onClick={() => handleLogin()}
            >
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
