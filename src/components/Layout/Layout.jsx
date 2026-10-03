import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({children}) => {
  return (
    <>
        <main>
            <Header titulo="TECHMARKET"/>
            {children}
            <Footer/>
        </main>
    </>
  )
}

export default Layout