import { PulseLoader } from 'react-spinners'

import { colors } from '../../styles/styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <>
      <Container>
        <PulseLoader color={colors.colorFontMain} />
      </Container>
    </>
  )
}

export default Loader
