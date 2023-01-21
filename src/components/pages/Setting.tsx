import { useLoginUser } from "../../Providers/LoginUserProvier";
import { memo, VFC } from "react";

export const Setting: VFC = memo(() => {
  const { loginUser } = useLoginUser();
  console.log(loginUser);
  return <p>セッテイページです</p>;
});
