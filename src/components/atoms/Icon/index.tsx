import { ColorValue } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { useSurfaceContext } from '../../../hooks/useSurfaceContext'

interface IconProps {
  name: 'play' | 'lock'
  color?: ColorValue
  size?: number
}

export function Icon({ name, size = 24, color }: IconProps) {
  const { contentColor } = useSurfaceContext()

  switch (name) {
    case 'play':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Path
            fill={color ?? contentColor}
            d="M8,5.14V19.14L19,12.14L8,5.14Z"
          />
        </Svg>
      )
    case 'lock':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Path
            fill={color ?? contentColor}
            d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
          />
        </Svg>
      )
    default:
      return null
  }
}
