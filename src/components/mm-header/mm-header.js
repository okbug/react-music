import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import './mm-header.scss'

// header组件

const MmHeader = props => {
  const showHeader = /music|discover|video/.test(props.location.pathname)
  const open = function mmHeaderOpenDrawer() {
    props.onOpen(true)
  }
  const openSearch = function mmHeaderOpenDrawer() {
    props.history.push('/search')
  }
  return (
    showHeader && (
      <header className="mm-header">
        <div className="mm-header-left" onClick={open} />
        <div className="mm-header-title">
          {/*<NavLink className="mm-header-item music" to="/music"/>*/}
          <NavLink className="mm-header-item discover" to="/discover" />
          {/*<NavLink className="mm-header-item video" to="/video"/>*/}
        </div>
        <div className="mm-header-right" onClick={openSearch} />
      </header>
    )
  )
}

export default withRouter(MmHeader)
