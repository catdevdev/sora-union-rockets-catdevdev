import { DeleteOutlined, EditTwoTone } from "@ant-design/icons";
import {
  AutoComplete,
  Card,
  Col,
  Divider,
  Form,
  Input,
  List,
  Modal,
  Popconfirm,
  Row,
  Spin,
  Typography,
} from "antd";
import Image from "next/image";
import { useState } from "react";

import { deleteRocketById } from "@/entities/Rockets";
import { editRocket } from "@/entities/Rockets/api/editRocket/editRocket";
import { GithubUser } from "@/entities/Rockets/models/rockets";
import useAutocomplite from "@/features/GitHubUserAutocompliteInput/hooks/useAutocomplite";
import { useAppDispatch } from "@/shared/hooks/redux";

interface RocketChangeGitHubUserModalProps {
  id: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const RocketChangeGitHubUserModal = ({
  id,
  isOpen,
  setIsOpen,
}: RocketChangeGitHubUserModalProps) => {
  const [selectedGithubUserData, selectGithubUserData] =
    useState<GithubUser | null>();
  const onSelectGitHubUser = (userData: GithubUser) => {
    selectGithubUserData(userData);
  };
  const { options, onSearch, onSelect, contextHolder } = useAutocomplite({
    onSelectGitHubUser,
  });
  const dispatch = useAppDispatch();
  return (
    <>
      {contextHolder}
      <Modal
        title="Change Github User"
        open={isOpen}
        onOk={() => {
          setIsOpen(false);
          if (selectedGithubUserData) {
            dispatch(editRocket({ id, githubUser: selectedGithubUserData }));
          }
        }}
        onCancel={() => {
          setIsOpen(false);
        }}
        okText="Change"
        cancelText="Close"
      >
        <Form name="basic" autoComplete="off" layout="vertical">
          <AutoComplete
            options={options}
            style={{ width: "100%" }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="Start Typing for Github User"
          />
        </Form>
      </Modal>
    </>
  );
};

export default RocketChangeGitHubUserModal;
