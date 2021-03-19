import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default Layout