import '../App.css'
import Navbar from '../navbar.tsx'
import Slider from '../Slider.tsx'
import DescribeSection from './Describe_sectors.tsx';
import Map from './Map.tsx';
import Gallery from '../Gallery.tsx';
import Footer from '../Footer.tsx';

function App() {
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
        <DescribeSection/>
        <Map/>
        <h1>Popular places</h1>
        <Gallery smallImages={smallImages} largeImage={largeImage} nums={1}/>
        <Gallery smallImages={smallImages} largeImage={largeImage} nums={2}/>
        <Footer/>

      </div>
    </>
  )
}

export default App
