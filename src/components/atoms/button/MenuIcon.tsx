import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};

export const MenuIcon: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      size="sm"
      variant="unstyled"
      icon={<HamburgerIcon />}
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
