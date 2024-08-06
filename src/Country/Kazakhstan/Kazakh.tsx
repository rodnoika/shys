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
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
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
