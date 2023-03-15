import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Card, Col, Form, Input, Row } from 'antd';

export const Recover: FC = () => {
  const [searchParams] = useSearchParams();
  const [form] = Form.useForm();
  const email = searchParams.get('email')?.toString();

  useEffect(() => {
    form.setFieldValue('email', email);
  }, [email]);

  return (
    <Card title="Recover password" size="small" style={{ width: 500 }}>
      <Form labelCol={{ span: 5 }} form={form}>
        <Form.Item
          label="Email"
          name="email"
          required
          rules={[{ required: true, type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Row align="middle" justify="end">
          <Col>
            <Button htmlType="submit" type="primary">
              Recover password
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
