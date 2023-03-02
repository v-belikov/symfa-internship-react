import React, { FC, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import { ROUTES } from '../../../core/models';

export const Login: FC = () => {
  const [email, setEmail] = useState<string>('');

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

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
          <Input type="password" />
        </Form.Item>
        <Row align="middle" justify="space-between">
          <Col>
            <Link to={recoverLink}>Recover password</Link>
          </Col>
          <Col>
            <Button htmlType="submit" type="primary">
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
