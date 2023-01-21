import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  userId: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userId, userName, fullName, onClick } = props;
  return (
    <Box
      w="360px"
      h="260px"
      bg="white"
      p={5}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(userId)}
      borderRadius="20px"
      shadow="md"
    >
      <Stack textAlign="center" alignItems="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
