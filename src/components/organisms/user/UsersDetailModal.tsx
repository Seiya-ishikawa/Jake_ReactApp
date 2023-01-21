import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFocusScope,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { User } from "types/api/user";

type Props = {
  user: User | null;
  isAdmin?: boolean;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isAdmin = false, isOpen, onClose } = props;

  const onClickUpdata = () => {
    alert("seko");
  };

  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  useEffect(() => {
    setUserName(user?.username ?? "");
    setName(user?.username ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay></ModalOverlay>
      <ModalContent pb={8}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody mx={6}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={username}
                onChange={onChangeUserName}
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>FULL NAME</FormLabel>
              <Input
                value={name}
                onChange={onChangeName}
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>TELNUMBER</FormLabel>
              <Input
                value={phone}
                onChange={onChangePhone}
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          {isAdmin && (
            <PrimaryButton onClick={onClickUpdata}>更新</PrimaryButton>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
