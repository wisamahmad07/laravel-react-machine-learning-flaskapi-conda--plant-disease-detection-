import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
    platform: Platform[];
}

const PlatformIconList = ({ platform }: Props) => {
    const IconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };

    const DefaultIcons = [FaAndroid, FaWindows];
    return (
        <HStack marginY={1}>
            {platform.length > 0
                ? platform.map((platform, index) => (
                      <Text fontSize={10} key={index}>
                          <Icon
                              as={IconMap[platform.name]}
                              fontSize="16px"
                              color="gray.400"
                          />
                      </Text>
                  ))
                : DefaultIcons.map((icon, index) => (
                      <Icon
                          key={index}
                          as={icon}
                          fontSize="16px"
                          color="gray.400"
                      />
                  ))}
        </HStack>
    );
};

export default PlatformIconList;
