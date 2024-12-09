import React from 'react';
import Cover_div from './Cover_div';
import Season_Collections from './Season_Collections.jsx';
import Best_Seller from './Best_Seller.jsx';
import Get_50_Off from './Get_50%_Off.jsx';
import OurProduct from './OurProduct.jsx'
import Our_Featured_Collections from './Our_Featured_Collections.jsx';
import What_They_Said from './What_They_Said.jsx';
import Contact_Us from './Contact_Us.jsx';
import Footer from './Footer.jsx';

function Home() {
  return (
    <div>
      <Cover_div/>
      <Season_Collections/>
      <Best_Seller/>
      <Get_50_Off/>
      <OurProduct/>
      <Our_Featured_Collections/>
      <What_They_Said/>
      <Contact_Us/>
      <Footer/>
    </div>
  )
};

export default Home;