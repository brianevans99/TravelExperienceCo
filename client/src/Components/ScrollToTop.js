import React, { Fragment, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function ScrollToTop(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return <Fragment>{props.children}</Fragment>
}

export default withRouter(ScrollToTop)
