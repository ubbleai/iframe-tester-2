import { RefObject, useEffect } from 'react'

import { UbbleProps } from '../types'

declare const Ubble: any

type UbbleCallback = (event: any) => void

interface UseUbbleIframeProps {
  ref: RefObject<HTMLDivElement>
  ubbleProps: UbbleProps
  onComplete?: UbbleCallback
  onAbort?: UbbleCallback
  onExpired?: UbbleCallback
}

export function useUbbleIframe<T> ({
  ubbleProps,
  onAbort,
  ref,
  onExpired,
  onComplete
}: UseUbbleIframeProps) {
  useEffect(() => {
    const iframe = new Ubble.IDV(ref.current, {
      height: ubbleProps.height,
      width: ubbleProps.width,
      identificationUrl: ubbleProps.identificationUrl,
      allowCamera: ubbleProps.allowCamera,
      events: {
        onComplete,
        onAbort,
        onExpired
      }
    })

    return () => {
      iframe.destroy()
    }
  }, [ref.current, ubbleProps, onComplete, onAbort, onExpired])
}
