import { IconList } from '@tabler/icons'

import { useDispatch, useSelector } from 'react-redux'

import { Indicator, Button, ActionIcon } from '@mantine/core'

import { openDrawer, selectLogs } from '../store/slice'

export function LogsCounter () {
  const logs = useSelector(selectLogs)
  const dispatch = useDispatch()

  return (
    <Indicator disabled={logs.length === 0} label={logs.length}>
      <ActionIcon
        onClick={() => {
          dispatch(openDrawer())
        }}
      >
        <IconList />
      </ActionIcon>
    </Indicator>
  )
}
