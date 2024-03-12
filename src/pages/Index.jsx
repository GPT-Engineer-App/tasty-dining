import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaUtensils, FaStar, FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Flex align="center" justify="center" direction={{ base: "column-reverse", md: "row" }} wrap="nowrap" minH="70vh" px={8} py={20} mb={10}>
        <VStack align="left" spacing={5} maxW="lg">
          <Heading as="h1" size="2xl" fontWeight="bold">
            Delicious Meals, Anytime
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Experience the best dining with our exclusive selection of meals and great ambiance.
          </Text>
          <Button size="lg" leftIcon={<FaUtensils />} colorScheme="teal" variant="solid">
            View Menu
          </Button>
        </VStack>
        <Box w={{ md: "50%" }} ml={{ md: 10 }} mb={{ base: 12, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1601823281975-75d81b28c373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGlzaHxlbnwwfHx8fDE3MTAyNzY0OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" shadow="2xl" />
        </Box>
      </Flex>

      {/* Features Section */}
      <Box py={10} px={8} backgroundColor={useColorModeValue("gray.50", "gray.800")}>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} justify="center">
          <FeatureCard icon={<FaStar />} title="Top Rated" description="Award-winning cuisine prepared by world-class chefs." />
          <FeatureCard icon={<FaPhoneAlt />} title="Reservations" description="Book your table in advance for a seamless dining experience." />
          {/* Add more features as needed */}
        </Stack>
      </Box>

      {/* Footer Section */}
      <Box py={5} px={8} backgroundColor={useColorModeValue("gray.200", "gray.700")}>
        <Flex justify="center" align="center">
          <Text fontSize="sm" color={textColor}>
            © 2023 Restaurant Name. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Stack align="center" textAlign="center" p={5} bg={useColorModeValue("white", "gray.900")} borderRadius="lg" boxShadow="md" spacing={3} width={{ base: "80%", md: "30%" }}>
      <Box fontSize="3xl" color={useColorModeValue("teal.500", "teal.200")}>
        {icon}
      </Box>
      <Text fontWeight="bold">{title}</Text>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{description}</Text>
    </Stack>
  );
};

export default Index;
