import { AutoComplete, Button, Card, Form, Input, InputNumber } from "antd";
import { useState } from "react";

import { createRocket } from "@/entities/Rockets/api/createRocket/createRocket";
import { GithubUser, Rocket } from "@/entities/Rockets/models/rockets";
import GitHubUserAutocompliteInput from "@/features/GitHubUserAutocompliteInput";
import useAutocomplite from "@/features/GitHubUserAutocompliteInput/useAutocomplite";
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

  const { options, onSelect, onSearch } = useAutocomplite({
    onSelectGitHubUser,
  });

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
      title={"Create Awesome Rocket 🚀"}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
