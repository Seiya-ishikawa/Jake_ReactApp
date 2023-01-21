import { useCallback, useState } from "react";
import { User } from "../types/api/user";

export const useSelectUser = () => {
  type Props = {
    id: number;
    users: User[];
    onOpen: () => void;
  };
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id) ?? null;
    setSelectedUser(targetUser);
    onOpen();
  }, []);

  return { selectedUser, onSelectUser };
};
