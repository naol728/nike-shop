import {
  Hero,
  PopularProducts,
  Footer,
  Spacialoffer,
  Services,
  Subscibe,
  SuperQuality, 
  CustomerReviews
} from './sections'
import Nav from'./componets/Nav'
const App=()=>(
  <main className="relative">
     <Nav /> 
    <section className="xl:padding-1 wide:padding-r padding-b">
    <Hero />
    </section>

    <section className="padding">
<PopularProducts />
    </section>

  <section className="padding"> 
 < SuperQuality /> 
  </section>
  <section className="padding-x py-10">
  < Services />
  </section>

  <section className="padding">
   <Spacialoffer />
  </section>
  <section className="bg-pale-blue padding">
   <CustomerReviews />
  </section>
  <section className="padding-x sm:py-32 px-16 w-full">
   <Subscibe />
  </section>
  <section className="bg-black padding-x padding-t pb-8">
   <Footer />
  </section>

  </main>

);
export default App;
