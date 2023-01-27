// import { Heading as CHead } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Barlow } from "@next/font/google";

const barlow = Barlow({ weight: ["600", "700", "500"], subsets: ["latin"] });

const Heading = ({ children }) => {
  return (
    <>
      <Text className={barlow.className} fontSize='3xl' fontWeight='bold'>{children}</Text>
    </>
  );
};

export default Heading;
