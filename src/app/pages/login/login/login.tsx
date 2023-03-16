import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import { useAppDispatch } from 'app/core/hooks';
import { setUser, useLoginUserMutation } from 'app/store/users';
import { ROUTES } from '../../../core/models';

export const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();

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

  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();

  const loginHandler = async () => {
    if (email && password) {
      await loginUser({ email, password });
      console.log(`login successful ${email} ${password}`);
    } else {
      alert('login of password is empty');
    }
  };

  useEffect(() => {
    if (isSuccess && !error && !isError) {
      console.log('use_effect');
      dispatch(setUser(loginUser));
      <Navigate to="./admin" />;
      console.log('successfully');
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
    <>
      {isLoading ? (
        '...loading'
      ) : (
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
                  onClick={() => {
                    loginHandler();
                  }}
                  htmlType="submit"
                  type="primary"
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      )}
    </>
  );
};
