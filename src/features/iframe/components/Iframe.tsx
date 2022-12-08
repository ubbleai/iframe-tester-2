import { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createStyles } from '@mantine/core';

import { addLog } from '../../logs/store/slice';
import { useUbbleIframe } from '../hooks/use-ubble-iframe';
import { selectIframeProps } from '../store/slice';

const useStyles = createStyles({
  iframe: {
    height: '100%',
    width: '100%',
  },
});

export function Iframe() {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const iframeRef = createRef<HTMLDivElement>();

  const handleEvent = (event: any) => {
    console.log(`Received event: ${event.type}: ${JSON.stringify(event)}`);
    dispatch(addLog(JSON.stringify(event, null, 4)));
  };

  const ubbleProps = useSelector(selectIframeProps);
  useUbbleIframe({
    ref: iframeRef,
    ubbleProps,
    onAbort: handleEvent,
    onComplete: handleEvent,
    onExpired: handleEvent,
  });

  return <div className={classes.iframe} ref={iframeRef} />;
}
