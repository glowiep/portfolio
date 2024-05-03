import {
  Link,
  VStack,
  IconButton,
  Center
} from '@chakra-ui/react';
import { urlList } from '../../constants/urlList.jsx'
import { MotionBox } from '../Motion.js';
const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const MyUrls = function() {
  return (
    <Center textAlign="center" bg='gray.300'rounded="full" gap="2em" py="0.7em" px="2em">
          {urlList.author.accounts.map((sc, index) => (
            <MotionBox whileHover={{ scale: 1.2 }} rounded="full">
              <IconButton
                key={index}
                as={Link}
                isExternal
                href={sc.url}
                aria-label={sc.label}
                colorScheme={sc.type}
                icon={sc.icon}
                rounded="full"
                {...iconProps}
              />
            </MotionBox>
          ))}
        </Center>
  )
};

export default MyUrls;