import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { AppShell, Divider, Loader, Navbar } from '@mantine/core'

import { Header } from './features/commons/components/header'
import { Iframe } from './features/iframe/components/Iframe'
import { IframeCode } from './features/iframe/components/iframe-code'
import { IframeError } from './features/iframe/components/iframe-error'
import { IframeSettings } from './features/iframe/components/iframe-settings'
import { selectIframeProps } from './features/iframe/store/slice'
import { LogsDrawer } from './features/logs/components/logs-drawer'

const SDK_URL =
  'https://oos.eu-west-2.outscale.com/public-ubble-ai/iframe-sdk-0.0.3.js'

declare global {
  interface Window {
    onUbbleReady: () => void
  }
}

function App () {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  const iframeProps = useSelector(selectIframeProps)
  useEffect(() => {
    (async () => {
      const awaitUbbleLoaded = new Promise<void>((resolve, reject) => {
        window.onUbbleReady = () => {
          resolve()
        }
      })

      await Promise.all([await import(SDK_URL), awaitUbbleLoaded])
      setScriptLoaded(true)
    })()
  }, [])

  return (
    <AppShell
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!navbarOpen}
          width={{ sm: 200, lg: 400 }}
        >
          <IframeSettings />

          <Divider mt="xl" mb="xl" />
          <IframeCode />
        </Navbar>
      }
      header={
        <Header
          title="Iframe tester"
          opened={navbarOpen}
          setOpened={setNavbarOpen}
        />
      }
    >
      <IframeError key={JSON.stringify(iframeProps)}>
        {scriptLoaded ? <Iframe /> : <Loader />}
      </IframeError>

      <LogsDrawer />
    </AppShell>
  )
}

export default App
