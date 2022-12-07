import { useSelector } from 'react-redux'

import { Prism } from '@mantine/prism'

import { selectIframeProps } from '../store/slice'

const CODE = `


new Ubble.IDV(<div id="iframe"></div>, {
    identificationUrl: "{identificationUrl}",
    height: "{height}",
    width: "{width}",
    allowCamera: {allowCamera},
    events: {
        onComplete: () => {
            // ...
        },
        onAbort: () => {
            // ... 
        },
        onExpired: () => {
            // ...
        }
    }
});`

export function IframeCode () {
  const ubbleProps = useSelector(selectIframeProps)

  const formattedCode = CODE.replaceAll(
    '{identificationUrl}',
    ubbleProps.identificationUrl || ''
  )
    .replaceAll('{height}', ubbleProps.height || '')
    .replaceAll('{width}', ubbleProps.width || '')
    .replaceAll('{allowCamera}', ubbleProps.allowCamera.toString())

  return <Prism language="tsx">{formattedCode}</Prism>
}
