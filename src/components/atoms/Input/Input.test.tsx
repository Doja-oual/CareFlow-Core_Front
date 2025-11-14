import { describe, it, expect } from 'vitest'
import { render, screen } from '@/tests/utils/test-utils'
import { Input } from './Input'

describe('Input Component', () => {
  it('should render input', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('should apply error styles', () => {
    render(<Input error placeholder="Error input" />)
    const input = screen.getByPlaceholderText('Error input')
    expect(input).toHaveClass('border-danger-500')
  })

  it('should be disabled', () => {
    render(<Input disabled placeholder="Disabled" />)
    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled()
  })

  it('should accept different types', () => {
    const { rerender } = render(<Input type="email" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')

    rerender(<Input type="password" />)
    expect(screen.getByRole('textbox', { hidden: true })).toHaveAttribute('type', 'password')
  })
})