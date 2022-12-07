import { Dispatch, SetStateAction } from 'react'

import {
  Burger,
  Header as MantineHeader,
  MediaQuery,
  useMantineTheme,
  Text,
  Image,
  Box
} from '@mantine/core'

import ubble from '../../../assets/ubble.png'
import { LogsCounter } from '../../logs/components/logs-counter'

interface HeaderProps {
  title: string
  setOpened: Dispatch<SetStateAction<boolean>>
  opened: boolean
}

export function Header ({ title, setOpened, opened }: HeaderProps) {
  const theme = useMantineTheme()
  return (
    <MantineHeader height={{ base: 50, md: 70 }} p="md" sx={{ color: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o: boolean) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Box
          sx={{
            color: '#662df4',
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Image src={ubble} height={32} sx={{ objectFit: 'contain' }} />

          <Text ml="xl" sx={{ flex: 1, minWidth: '200px' }}>
            {title}
          </Text>
        </Box>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <LogsCounter />
        </div>
      </div>
    </MantineHeader>
  )
}
