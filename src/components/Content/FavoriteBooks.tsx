import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaBookmark } from "react-icons/fa";
import { GrInProgress } from "react-icons/gr";

interface StatsCardProps {
  author: string;
  title: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { author, title, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      bg='gray.700' 
      >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {title}
          </StatNumber>
          <StatLabel fontWeight={'medium'} isTruncated>
            {author}
          </StatLabel>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

function FavoriteBooks() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} paddingBottom="2em">
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
        >
        Favorite Books
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          author={'Robert C. Martin'}
          title={'The Clean Coder'}
          icon={<FaBookmark size={'3em'} />}
        />
        <StatsCard
          author={'Jon Yablonski'}
          title={'Laws of UX'}
          icon={<FaBookmark size={'3em'} />}
        />
        <StatsCard
          author={'David Farley - (Currently listening on Audible)'}
          title={'Modern Software Engineering'}
          icon={<GrInProgress size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}

export default FavoriteBooks;