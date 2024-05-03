import {
  Link,
  Tooltip,
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
          {urlList.author.accounts.map((item, index) => (
            <MotionBox whileHover={{ scale: 1.2 }} rounded="full">
              <Tooltip label={item.label}>
              <IconButton
                key={index}
                as={Link}
                isExternal
                href={item.url}
                aria-label={item.label}
                colorScheme={item.type}
                icon={item.icon}
                rounded="full"
                {...iconProps}
              />
              </Tooltip>
            </MotionBox>
          ))}
        </Center>
  )
};

export default MyUrls;