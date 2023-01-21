import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../Providers/LoginUserProvier";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const Login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 5;
            showMessage({ title: "ログインしました", status: "success" });
            setLoginUser({ ...res.data, isAdmin });
            navigate("/home");
          } else {
            showMessage({
              title: "ユーザーが見つかりまｓっせえん。",
              status: "error"
            });
          }
        })
        .catch(() =>
          showMessage({ title: "ログインできまｓっせん。", status: "warning" })
        )
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate, setLoginUser]
  );
  return { Login, loading };
};
