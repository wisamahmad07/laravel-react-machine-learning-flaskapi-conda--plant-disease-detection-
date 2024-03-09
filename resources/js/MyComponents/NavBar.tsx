import { HStack, Image } from "@chakra-ui/react";
import logo from "../../../public/images/logo.webp";
import ColorModeSwitch from "../MyComponents/ColorModeSwitch";

const NavBar = () => {
    return (
        <>
            <HStack justifyContent="space-between" padding="10px">
                <Image src={logo} boxSize="60px" />
                <ColorModeSwitch />
            </HStack>
        </>
    );
};

export default NavBar;
