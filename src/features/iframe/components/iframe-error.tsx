import { Component, ErrorInfo, ReactNode } from 'react'

import { Alert, Code, Text } from '@mantine/core'

interface IframeErrorProps {
  children: ReactNode
}

interface IframeErrorState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class IframeError extends Component<IframeErrorProps, IframeErrorState> {
  constructor (props: IframeErrorProps) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
    this.setState({ hasError: true, error, errorInfo })
  }

  render () {
    if (this.state.hasError) {
      return (
        <Alert color="red">
          <Code>{this.state.error?.toString()}</Code>
          <br />

          <Code>
            {this.state.errorInfo?.componentStack.split('\n').map((v) => v)}
          </Code>
        </Alert>
      )
    }

    return this.props.children
  }
}
