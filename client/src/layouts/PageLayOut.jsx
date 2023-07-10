import { Outlet } from "react-router-dom";

import { PageNavigations } from '../components/header/Navigation'

export const PageLayOut = () => {
  return (
<>
      <PageNavigations />
      <Outlet />
</>
      
  )
}


