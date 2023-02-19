import { Button, Card, Form, Input, InputNumber } from "antd";

import { createRocket } from "@/entities/Rockets/api/createRocket/createRocket";
import { Rocket } from "@/entities/Rockets/models/rockets";
import { useAppDispatch } from "@/shared/hooks/redux";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const FormAddRocket = ({}) => {
  const dispatch = useAppDispatch();
  const onFinish = (values: Omit<Rocket, "id" | "isUploding">) => {
    dispatch(createRocket(values));
  };

  return (
    <Card>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="title"
          name="title"
          rules={[{ required: true, message: "Please input title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="rocket_name"
          name="rocket_name"
          rules={[{ required: true, message: "Please input title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          rules={[{ required: true, message: "Please input description!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Create rocket
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormAddRocket;
