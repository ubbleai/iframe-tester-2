import { IconRefresh } from '@tabler/icons'

import { useDispatch, useSelector } from 'react-redux'

import { Checkbox, TextInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'

import { selectIframeProps, setProps } from '../store/slice'

export function IframeSettings () {
  const dispatch = useDispatch()

  const baseProps = useSelector(selectIframeProps)

  const form = useForm({
    initialValues: {
      identificationUrl: baseProps.identificationUrl || '',
      height: baseProps.height || '',
      width: baseProps.width || '',
      allowCamera: baseProps.allowCamera || false
    }
  })

  return (
    <form
      className="iframe-settings"
      onSubmit={form.onSubmit((values) => {
        dispatch(setProps(values))
      })}
    >
      <TextInput
        label="Identification URL"
        placeholder="https://id.ubble.ai/11111111-1111-1111-1111-111111111111"
        {...form.getInputProps('identificationUrl')}
      />
      <TextInput
        label="Height"
        placeholder="500"
        {...form.getInputProps('height')}
      />
      <TextInput
        label="Width"
        placeholder="500"
        {...form.getInputProps('width')}
      />

      <Checkbox
        mt="md"
        label="Allow Camera"
        {...form.getInputProps('allowCamera', {
          type: 'checkbox'
        })}
      />

      <Button type="submit" disabled={form.isTouched() && !form.isValid()}>
        <IconRefresh />
        Refresh
      </Button>
    </form>
  )
}
