import { AutoComplete, Button, Card, Form, Input } from "antd";

import useFormAddRocket from "./hooks/useFormAddRocket";

const FormAddRocket = ({}) => {
  const {
    contextHolder,
    onFinish,
    selectedGithubUserData,
    options,
    onSelect,
    onSearch,
  } = useFormAddRocket();

  return (
    <Card
      style={{
        position: "sticky",
        top: 36,
      }}
      title={"Create Awesome Rocket 🚀"}
    >
      {contextHolder}
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please Input Title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Rocket Name"
          name="rocket_name"
          rules={[{ required: true, message: "Please Input Rocket Name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please Input Description!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="GitHub User"
          name="github_user"
          rules={[{ required: true, message: "Please Select GitHub User!" }]}
          initialValue={selectedGithubUserData?.login}
        >
          <AutoComplete
            options={options}
            style={{ width: "100%" }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="Input Here"
          />
        </Form.Item>

        <Form.Item>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Create rocket
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormAddRocket;
