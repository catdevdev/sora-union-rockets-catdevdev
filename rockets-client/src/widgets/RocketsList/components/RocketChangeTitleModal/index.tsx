import { DeleteOutlined, EditTwoTone } from "@ant-design/icons";
import {
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
import { useAppDispatch } from "@/shared/hooks/redux";

interface RocketChangeTitleModalProps {
  id: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const RocketChangeTitleModal = ({
  id,
  isOpen,
  setIsOpen,
}: RocketChangeTitleModalProps) => {
  const [newTitle, setIsNewTitle] = useState("");
  const dispatch = useAppDispatch();
  return (
    <Modal
      title="New Title"
      open={isOpen}
      onOk={() => {
        setIsOpen(false);
        dispatch(editRocket({ id, title: newTitle }));
      }}
      onCancel={() => {
        setIsOpen(false);
      }}
      okText="Change Title"
      cancelText="Close"
    >
      <Form name="basic" autoComplete="off" layout="vertical">
        <Input
          onChange={(e) => {
            setIsNewTitle(e.target.value);
          }}
        />
      </Form>
    </Modal>
  );
};

export default RocketChangeTitleModal;
