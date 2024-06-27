import { HStack, Image,Text } from "@chakra-ui/react";
import logo from "../../../public/images/PlantLogo.png";
import ColorModeSwitch from "../MyComponents/ColorModeSwitch";

const NavBar = () => {
    return (
        <>
            <HStack justifyContent="space-between" padding="10px">
                <Image src={logo} boxSize="60px" />
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
          PLANT DISEASE DETECTION SYSTEM
        </Text>
                <ColorModeSwitch />
            </HStack>
        </>
    );
};

export default NavBar;
