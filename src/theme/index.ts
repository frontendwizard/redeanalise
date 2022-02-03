import { extendTheme } from '@chakra-ui/react'

// Foundational style overrides
import colors from './foundations/colors'
import fonts from './foundations/fonts'
import components from './components'

const overrides = {
  colors,
  fonts,
  components,
}

export default extendTheme(overrides)
