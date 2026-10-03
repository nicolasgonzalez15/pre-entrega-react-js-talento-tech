import Layout from './components/Layout/Layout'
import './App.css'
import Principal from './components/Secciones/Principal/Principal';
import TarjetaProductoContainer from './components/TarjetaProductoContainer/TarjetaProductoContainer';
import FormularioContainer from './components/FormularioABMProducto/FormularioContainer/FormularioContainer';
import TarjetaContactoContainer from './components/Secciones/Contactos/TarjetaContactoContainer/TarjetaContactoContainer';

function App() {

  return (
    <>
       <Layout>
        <Principal titulo="TECHMARKET" subtitulo="Encontrá todos los productos que necesitás"/>
        <TarjetaProductoContainer/>
        <FormularioContainer/>
        <TarjetaContactoContainer/>
       </Layout>
    </>
  )
}

export default App
