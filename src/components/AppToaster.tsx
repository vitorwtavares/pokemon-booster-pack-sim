import { Toaster, Toast, Stack } from '@chakra-ui/react'
import { toaster } from '~/utils/toaster'

const AppToaster = () => (
  <Toaster toaster={toaster}>
    {toast => (
      <Toast.Root key={toast.id}>
        <Toast.Indicator />
        <Stack gap="1" flex="1">
          {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
          {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
        </Stack>
        <Toast.CloseTrigger />
      </Toast.Root>
    )}
  </Toaster>
)

export default AppToaster
