import styled from 'styled-components'
import {motion} from 'framer-motion'

const StyledPanelBody = styled(motion.div)`
  && {
    padding: 0 ${({isFramed}) => isFramed ? '10px' : 0};
    overflow: hidden;

    > div {
      padding: ${({isFramed}) => isFramed ? '10px' : 0} 0 0 0;
    }

    table {
      position: static;
    }
  }
`
export default StyledPanelBody
