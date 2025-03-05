import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  boxSizing: 'border-box',
  
  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',

  backgroundColor: '$gray900',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'regular',
  color: '$gray400',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'regular',
  color: '$white',

  width: '100%',
  border: 0,
  background: 'transparent',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})