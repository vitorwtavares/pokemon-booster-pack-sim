import { Button, Flex } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { HEADER_HEIGHT } from './utils/constants'

const OpenPackButtonVariablesAndAnimations = css`
  --red: #f80e35;
  --yellow: #eedf10;
  --green: #21e985;
  --blue: #0dbde9;
  --violet: #c929f1;

  @keyframes animatedBackground {
    0% {
      background-image: repeating-linear-gradient(
        120deg,
        var(--yellow),
        var(--red),
        var(--violet),
        var(--blue),
        var(--green)
      );
    }
    20% {
      background-image: repeating-linear-gradient(
        120deg,
        var(--red),
        var(--violet),
        var(--blue),
        var(--green),
        var(--yellow)
      );
    }
    40% {
      background-image: repeating-linear-gradient(
        120deg,
        var(--violet),
        var(--blue),
        var(--green),
        var(--yellow),
        var(--red)
      );
    }
    60% {
      background-image: repeating-linear-gradient(
        120deg,
        var(--blue),
        var(--green),
        var(--yellow),
        var(--red),
        var(--violet)
      );
    }
    80% {
      background-image: repeating-linear-gradient(
        120deg,
        var(--green),
        var(--yellow),
        var(--red),
        var(--violet),
        var(--blue)
      );
    }
    100% {
      background-image: repeating-linear-gradient(
        120deg,
        var(--yellow),
        var(--red),
        var(--violet),
        var(--blue),
        var(--green)
      );
    }
  }
`

export const PageWrapper = styled(Flex)`
  width: 100%;
  gap: 50px;
  max-width: 1024px;
  height: calc(100vh - ${HEADER_HEIGHT});
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media only screen and (max-width: 991px) {
    height: 100%;
  }
`

export const OpenPackButton = styled(Button)`
  ${OpenPackButtonVariablesAndAnimations}

  width: 300px;
  color: #fff;

  background-image: repeating-linear-gradient(
    120deg,
    var(--yellow),
    var(--red),
    var(--violet),
    var(--blue),
    var(--green)
  );
  filter: saturate(90%);

  :hover {
    filter: saturate(100%);
    animation: animatedBackground 0.5s linear infinite;
  }
`
