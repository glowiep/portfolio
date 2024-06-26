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

// import ReactGA from 'react-ga4';
import { handleGAClick } from "../../utils/googleAnalytics";

const MyUrls = function() {  
  return (
    <Center textAlign="center" bg='gray.300'rounded="full" gap="2em" py="0.7em" px={{ base: "0.6em", md:"2em"}}>
          {urlList.author.accounts.map((item, index) => (
            <MotionBox whileHover={{ scale: 1.2 }} rounded="full" key={index}>
              <Tooltip label={item.label}>
              <IconButton
                as={Link}
                isExternal
                href={item.url}
                aria-label={item.label}
                onClick={() => handleGAClick(item.label, 'Social Links')}
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