import { Container, Divider, Link, Text, LinkBox, Box, LinkOverlay } from "@chakra-ui/react";
import { Barlow, Inter, Overpass_Mono } from "@next/font/google";
import Image from "next/image";
import Heading from "@/components/heading";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const barlow = Barlow({ weight: ["500", "600", "700"], subsets: ["latin"] });
const oMono = Overpass_Mono({ subsets: ["latin"] });

const RollEntry = ({ name, icon, slogan, url }) => {
  return (
    <>
      <LinkBox maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box display="flex" height={84}>
          <Image src={icon} width={84} height={84}></Image>
          <Box
            display="flex"
            w="full"
            justifyContent="center"
            alignItems="center">
            <Box>
              <LinkOverlay href={url}>
                <Text fontSize="lg" className={barlow.className}>
                  {name}
                </Text>
              </LinkOverlay>
              <Text fontSize="md">{slogan}</Text>
            </Box>
          </Box>
        </Box>
      </LinkBox>
    </>
  );
};

const Friends = () => {
  return (
    <>
      <Head>
        <title>My Friends | ze.ci</title>
      </Head>
      <Container maxW="container.md" mt={5}>
        <Link href="/" className={oMono.className}>
          &lt;- Navigate back to the homepage
        </Link>
      </Container>
      <Container maxW="container.md" mt={10} className={inter.className}>
        <Text fontSize="4xl" fontWeight="semibold" className={barlow.className}>
          My Friends
        </Text>
        <Divider mt={2} mb={2} />
        Some of my friends have their own website.
        <Divider mt={2} mb={2} />
        <RollEntry
          name="Lufs' Blog"
          url="https://blog.isteed.cc"
          slogan="Life feed on negative entropy"
          icon="https://cdn.isteed.cc/avatar/avatar-256x256.png"
        />
        <Divider mt={2} mb={2} />
        Plus, a relative huge amount (like, about, dozens?) of friends as I
        have, few of them are interested in building a site online. <br />
        However, for some of them, I&apos;d like to introduce them on this very
        site.
        <Divider mt={2} mb={2} />
        <Heading>87</Heading>
        A senior high student struggling to survive while suffering.
        <Divider mt={2} mb={2} />
        <Heading>Mist</Heading>
        An artist wanting to be a criminal police.
        <Divider mt={2} mb={2} />
        <Heading>Wintertide</Heading>A fish that can be used as a flint and
        steel.
      </Container>
    </>
  );
};

export default Friends;
