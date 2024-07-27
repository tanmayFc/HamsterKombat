import React from 'react'
import Bottombar from './component/bottombar'
import Headerbar from './component/headerbar';
const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
      <Headerbar/>{children}
    <Bottombar/></div>
  )
}

export default layout