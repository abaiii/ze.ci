const { ChakraProvider } = require("@chakra-ui/react");

const FriendApp = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default FriendApp;
