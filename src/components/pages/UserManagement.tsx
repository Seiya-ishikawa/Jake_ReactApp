import {
  Center,
  Modal,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../Providers/LoginUserProvier";
import { UserDetailModal } from "../organisms/user/UsersDetailModal";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, isLoading } = useAllUsers();
  const { selectedUser, onSelectUser } = useSelectUser();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { loginUser } = useLoginUser();

  /* eslint-disable react-hooks/exhaustibe-deps */
  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (userId: number) => {
      onSelectUser({ id: userId, users, onOpen });
    },
    [users, onSelectUser, selectedUser]
  );

  return (
    <>
      {isLoading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userId={user.id}
                userName={user.username}
                fullName={user.username}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
      />
    </>
  );
});
