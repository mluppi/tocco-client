import React from 'react'
import PropTypes from 'prop-types'
import {Typography, theme} from 'tocco-ui'
import styled from 'styled-components'

import ToccoLogo from '../../../../assets/tocco_red.svg'

const StyledDashBoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.color('paper')}
`

const InnerWrapper = styled.div`
  width: 600px;
  height: 50px;
  position: relative;
  left: -320px
`

const StyledDashBoard = styled.div`
  display: flex;
  height: 75%;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: -180px;
  
  && {
    * {
      color: ${theme.color('primary')};
      font-size: 10rem;
      letter-spacing: .5rem;
    }
    
    ${InnerWrapper} {
      * {font-size: 3rem;}
      text-align: right;
    }
  }
`

const Dashboard = () => {
  const packageJson = require('../../../../../package')
  return <StyledDashBoardWrapper>
    <StyledDashBoard>
      <Typography.H1>Welcome</Typography.H1>
      <InnerWrapper>
        <img src={ToccoLogo} alt="tocco-logo"/>
        <Typography.H3>beta v{packageJson.version}</Typography.H3>
      </InnerWrapper>
    </StyledDashBoard>
  </StyledDashBoardWrapper>
}

Dashboard.propTypes = {
  match: PropTypes.object
}

export default React.memo(Dashboard, () => true)
