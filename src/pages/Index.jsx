import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Business Dashboard
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          <StatCard title="Sales" stat="1,200" icon={<FaShoppingCart />} change="5%" changeType="increase" description="Since last month" />
          <StatCard title="Revenue" stat="$34,000" icon={<FaDollarSign />} change="3%" changeType="increase" description="Since last month" />
          <StatCard title="Customers" stat="300" icon={<FaUsers />} change="2%" changeType="decrease" description="Since last month" />
          <StatCard title="Growth" stat="15%" icon={<FaChartLine />} change="1%" changeType="increase" description="Since last month" />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

const StatCard = ({ title, stat, icon, change, changeType, description }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
      <HStack spacing={4}>
        <IconButton aria-label={title} icon={icon} size="lg" isRound />
        <VStack align="start">
          <Stat>
            <StatLabel>{title}</StatLabel>
            <StatNumber>{stat}</StatNumber>
            <StatHelpText>
              <StatArrow type={changeType} />
              {change}
            </StatHelpText>
          </Stat>
          <Text fontSize="sm" color="gray.500">
            {description}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Index;
