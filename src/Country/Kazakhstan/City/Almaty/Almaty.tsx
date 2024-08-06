import '../../../../App.css'
import Navbar from '../../../../navbar.tsx'
import Slider from '../../../../Slider.tsx'
import Gallery from '../../../../Gallery.tsx';
import Footer from '../../../../Footer.tsx';
import City_Desc from '../City_Desck.tsx';
function Almaty() {
  const smallImages: string[] = []; 
  const largeImage: string = ''; 
  const Dest = {
    Uptext: "City of Apples",
    text:" Almaty, known as the 'City of Apples' is a vibrant and culturally rich city nestled in the foothills of the majestic Zailiysky Alatau mountains in southeastern Kazakhstan. As the largest city in Kazakhstan, Almaty is renowned for its natural beauty, historic significance, and dynamic cultural scene.The city's nickname, 'City of Apples' is derived from the Kazakh word 'Alma' which means apple. This reflects the region's historical significance as a key center for apple cultivation and its lush, green surroundings. Almaty is surrounded by verdant apple orchards and picturesque landscapes that contribute to its enchanting charm.Almaty is a cultural and economic hub, offering a unique blend of modernity and tradition. The city's skyline features a mix of contemporary high-rises and historic architecture, including the stunning Zenkov Cathedral, a wooden structure with intricate design, and the Central State Museum, which houses a vast collection of artifacts reflecting Kazakhstan's rich heritage.In addition to its cultural landmarks, Almaty is known for its vibrant street life and bustling markets. The Green Bazaar, a lively marketplace, offers a variety of local produce, spices, and traditional goods, making it a popular destination for both locals and tourists.The city's natural beauty is complemented by numerous outdoor recreational opportunities. The nearby Medeu skating rink, set at a high altitude, is famous for its exceptional ice quality, while the Shymbulak Ski Resort provides excellent skiing and snowboarding facilities. Almaty's proximity to the mountains also offers a range of hiking and outdoor activities, making it a gateway to the natural wonders of Kazakhstan.Overall, Almaty is a city where the past and present coexist harmoniously. Its blend of natural beauty, cultural richness, and modern amenities make it a vibrant and appealing destination, embodying the essence of Kazakhstan's diverse and dynamic character."
  }
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
        <h2>South Capital of Kazakhstan</h2>
        <City_Desc Uptext={Dest.Uptext} text={Dest.text} />
        <h2>Popular places</h2>
        <Gallery smallImages={smallImages} largeImage={largeImage} nums={1}/>
        <Gallery smallImages={smallImages} largeImage={largeImage} nums={2}/>
        <Footer/>
      </div>
    </>
  )
}

export default Almaty
