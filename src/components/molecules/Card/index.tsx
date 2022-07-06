import { useFluidContext } from '../../../hooks/useFluidContext'
import { Surface, SurfaceProps } from '../../atoms/Surface'

export interface CardProps extends SurfaceProps {}

export function Card({ children, elevation = 1, style, ...rest }: CardProps) {
  const { tokens } = useFluidContext()

  return (
    <Surface
      elevation={elevation}
      style={[{ ...tokens.borderRadius.medium.all }, style]}
      {...rest}
    >
      {children}
    </Surface>
  )
}
