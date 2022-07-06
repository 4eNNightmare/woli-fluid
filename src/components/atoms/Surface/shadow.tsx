import { AnyColor, colord } from 'colord'
import { useContext, useMemo } from 'react'
import {
  Shadow as RNShadow2,
  ShadowProps as RNShadow2Props
} from 'react-native-shadow-2'

import { useSurfaceContext } from '../../../hooks/useSurfaceContext'

const umbraMap = [
  [0, 0, 0, 0],
  [0, 2, 1, -1],
  [0, 3, 1, -2],
  [0, 3, 3, -2],
  [0, 2, 4, -1],
  [0, 3, 5, -1],
  [0, 3, 5, -1],
  [0, 4, 5, -2],
  [0, 5, 5, -3],
  [0, 5, 6, -3],
  [0, 6, 6, -3],
  [0, 6, 7, -4],
  [0, 7, 8, -4],
  [0, 7, 8, -4],
  [0, 7, 9, -4],
  [0, 8, 9, -5],
  [0, 8, 10, -5],
  [0, 8, 11, -5],
  [0, 9, 11, -5],
  [0, 9, 12, -6],
  [0, 10, 13, -6],
  [0, 10, 13, -6],
  [0, 10, 14, -6],
  [0, 11, 14, -7],
  [0, 11, 15, -7]
]

const penumbraMap = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 2, 2, 0],
  [0, 3, 4, 0],
  [0, 4, 5, 0],
  [0, 5, 8, 0],
  [0, 6, 10, 0],
  [0, 7, 10, 1],
  [0, 8, 10, 1],
  [0, 9, 12, 1],
  [0, 10, 14, 1],
  [0, 11, 15, 1],
  [0, 12, 17, 2],
  [0, 13, 19, 2],
  [0, 14, 21, 2],
  [0, 15, 22, 2],
  [0, 16, 24, 2],
  [0, 17, 26, 2],
  [0, 18, 28, 2],
  [0, 19, 29, 2],
  [0, 20, 31, 3],
  [0, 21, 33, 3],
  [0, 22, 35, 3],
  [0, 23, 36, 3],
  [0, 24, 38, 3]
]

const ambientMap = [
  [0, 0, 0, 0],
  [0, 1, 3, 0],
  [0, 1, 5, 0],
  [0, 1, 8, 0],
  [0, 1, 10, 0],
  [0, 1, 14, 0],
  [0, 1, 18, 0],
  [0, 2, 16, 1],
  [0, 3, 14, 2],
  [0, 3, 16, 2],
  [0, 4, 18, 3],
  [0, 4, 20, 3],
  [0, 5, 22, 4],
  [0, 5, 24, 4],
  [0, 5, 26, 4],
  [0, 6, 28, 5],
  [0, 6, 30, 5],
  [0, 6, 32, 5],
  [0, 7, 34, 6],
  [0, 7, 36, 6],
  [0, 8, 38, 7],
  [0, 8, 40, 7],
  [0, 8, 42, 7],
  [0, 9, 44, 8],
  [0, 9, 46, 8]
]

interface ShadowProps extends RNShadow2Props {
  elevation?: 0 | 1 | 2 | 3 | 4 | 5
}

export function Shadow({ children, elevation = 0, ...rest }: ShadowProps) {
  const { containerColor } = useSurfaceContext()
  const index = useMemo(() => Math.round((24 * elevation) / 5), [elevation])
  const umbra = useMemo(
    () => ({
      offset: {
        x: umbraMap[index][0],
        y: umbraMap[index][1]
      },
      blur: umbraMap[index][2],
      spread: umbraMap[index][3],
      opacity: 0.2
    }),
    [index]
  )
  const penumbra = useMemo(
    () => ({
      offset: {
        x: penumbraMap[index][0],
        y: penumbraMap[index][1]
      },
      blur: penumbraMap[index][2],
      spread: penumbraMap[index][3],
      opacity: 0.14
    }),
    [index]
  )
  const ambient = useMemo(
    () => ({
      offset: {
        x: ambientMap[index][0],
        y: ambientMap[index][1]
      },
      blur: ambientMap[index][2],
      spread: ambientMap[index][3],
      opacity: 0.12
    }),
    [index]
  )
  const average = useMemo(() => {
    return {
      offset: {
        x: (umbra.offset.x + penumbra.offset.x + ambient.offset.x) / 6,
        y: (umbra.offset.y + penumbra.offset.y + ambient.offset.y) / 6
      },
      blur: (umbra.blur + penumbra.blur + ambient.blur) / 6,
      // spread: (umbra.spread + penumbra.spread + ambient.spread) / 3,
      opacity: (umbra.opacity + penumbra.opacity + ambient.opacity) / 6
    }
  }, [umbra, penumbra, ambient])
  return (
    <RNShadow2
      distance={average.blur}
      startColor={colord('#000').alpha(average.opacity).toRgbString()}
      finalColor={colord((containerColor ?? '#000') as AnyColor)
        .alpha(0)
        .toRgbString()}
      offset={[average.offset.x, average.offset.y]}
      {...rest}
    >
      {children}
    </RNShadow2>
  )
}
