import axios from "axios";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useCallback, useState } from "react";

/* eslint-disable react-hooks/exhaustibe-deps */
export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(() => {
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザーの取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { getUsers, isLoading, users };
};
