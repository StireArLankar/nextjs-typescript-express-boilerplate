import React, { Fragment } from 'react'

interface IProps {
  children: React.ReactNode
}

const Layout = (props: IProps) => {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

export default Layout
