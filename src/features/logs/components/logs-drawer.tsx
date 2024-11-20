import { useDispatch, useSelector } from 'react-redux'

import { Drawer } from '@mantine/core'

import { closeDrawer, selectDrawerOpen } from '../store/slice'
import { LogsList } from './logs-list'

export function LogsDrawer () {
  const drawerOpen = useSelector(selectDrawerOpen)
  const dispatch = useDispatch()
  return (
    <Drawer
      opened={drawerOpen}
      onClose={() => dispatch(closeDrawer())}
      title="Logs"
      padding="xl"
      size="xl"
      position="right"
    >
      <LogsList />
    </Drawer>
  )
}
