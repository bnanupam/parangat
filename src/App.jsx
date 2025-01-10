import Headernav from './component/Headernav'
import Header from './component/Header'
import Iconcontainer from './component/Iconcontainer'
import Elementor from './component/Elementor'
import Card from './component/Card'
import Aboutus from './component/Aboutus'
import Services from './component/Services'
import Servicecard from './component/Servicecard'
import Footerlink from './component/Footerlink'
import Footer from './component/Footer'
import Examplecarousel from './component/Examplecarousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {

  return (
    <>
      <Headernav />
      <Header />
      <Iconcontainer />
      <Elementor />
      <Card />
      <Examplecarousel />
      <Aboutus />
      <Services />
      <Servicecard />
      <Footerlink />
      <Footer />

    </>
  )
}

export default App
