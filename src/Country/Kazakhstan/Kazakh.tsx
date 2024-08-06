import '../../App.css'
import Navbar from '../../navbar.tsx'
import Slider from '../../Slider.tsx'
import Gallery from '../../Gallery.tsx';
import Footer from '../../Footer.tsx';
import Kaz_Desc from './Kaz_Desc.tsx';
import Kaz_map from './Kaz_Map.tsx';
import Cities from './Cities.tsx';
function Kaz() {
  const smallImages: string[] = []; 
  const largeImage: string = ''; 

  const images = [
    '../src/assets/ex.jpg',
    '../src/assets/Astana_ex.png',
    '../src/assets/Almaty_ex.jpg',
];

  return (
    <>
      <div>
        <Navbar/>
        <Slider images={images}/>
        <Kaz_Desc/>
        <Kaz_map/>
        <h2>Explore Kazakhstan by cities</h2>
        <Cities/>
        <h2>Popular places</h2>
        <Gallery smallImages={smallImages} largeImage={largeImage} nums={1}/>
        <Gallery smallImages={smallImages} largeImage={largeImage} nums={2}/>
        <Footer/>

      </div>
    </>
  )
}

export default Kaz
