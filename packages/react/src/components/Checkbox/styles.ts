import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  cursor: 'pointer',
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  
  width: '$6',
  height: '$6',
  
  border: '2px solid $gray900',
  borderRadius: '$xs',

  lineHeight: 0,
  backgroundColor: '$gray900',
  
  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',

  color: '$white',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})