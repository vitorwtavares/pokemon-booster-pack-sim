import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BackdropContainer = styled(Box)`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  background-color: #0c0d10;
  background-image: radial-gradient(
    circle at 50% 50%,
    #2a2d33 0%,
    #1a1c20 40%,
    #0c0d10 80%
  );
`
