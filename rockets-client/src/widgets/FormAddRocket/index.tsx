import { Button, Card, Form, Input, InputNumber } from "antd";
import { useState } from "react";

import { createRocket } from "@/entities/Rockets/api/createRocket/createRocket";
import { GithubUser, Rocket } from "@/entities/Rockets/models/rockets";
import GitHubUserAutocompliteInput from "@/features/GitHubUserAutocompliteInput";
import { useAppDispatch } from "@/shared/hooks/redux";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const FormAddRocket = ({}) => {
  const dispatch = useAppDispatch();
  const [selectedGithubUserData, selectGithubUserData] =
    useState<GithubUser | null>();

  const onSelectGitHubUser = (userData: GithubUser) => {
    selectGithubUserData(userData);
  };

  const onFinish = (
    newRocker: Omit<Rocket, "id" | "isUploding" | "githubUser">
  ) => {
    if (selectedGithubUserData) {
      dispatch(
        createRocket({
          ...newRocker,
          githubUser: selectedGithubUserData,
        })
      );
    }
  };

  return (
    <Card
      style={{
        position: "sticky",
        top: 36,
      }}
    >
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

        <GitHubUserAutocompliteInput onSelectGitHubUser={onSelectGitHubUser} />

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
