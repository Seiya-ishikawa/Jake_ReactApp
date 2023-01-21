import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo, VFC, useState, ChangeEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  const { Login, loading } = useAuth();
  const [usrId, setUsrId] = useState("");
  const onChangeUsrId = (e: ChangeEvent<HTMLInputElement>) =>
    setUsrId(e.target.value);
  const onClickLogin = () => {
    Login(usrId);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={usrId}
            onChange={onChangeUsrId}
          />
          <PrimaryButton
            loading={loading}
            disabled={!usrId}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
