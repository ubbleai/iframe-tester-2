import { IconAlertCircle } from '@tabler/icons'

import { useSelector } from 'react-redux'

import { Alert, Paper } from '@mantine/core'

import { selectLogs } from '../store/slice'

export function LogsList () {
  const logs = useSelector(selectLogs)

  if (logs.length === 0) {
    return (
      <Alert
        icon={<IconAlertCircle size={16} />}
        title="No logs yet"
        color="gray"
      >
        You can see logs here after you interact with the iframe
      </Alert>
    )
  }

  return (
    <div>
      {logs.map((log) => (
        <Paper
          shadow="xs"
          p="md"
          mb="md"
          key={log.date}
          sx={(theme) => ({
            overflowX: 'scroll',
            backgroundColor: theme.colors.gray[0],
            fontSize: theme.fontSizes.sm
          })}
        >
          <pre>{log.content}</pre>
        </Paper>
      ))}
    </div>
  )
}
