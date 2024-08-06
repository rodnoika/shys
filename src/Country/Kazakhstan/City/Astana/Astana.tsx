import '../../../../App.css'
import Navbar from '../../../../navbar.tsx'
import Slider from '../../../../Slider.tsx'
import Gallery from '../../../../Gallery.tsx';
import Footer from '../../../../Footer.tsx';
import City_Desc from '../City_Desck.tsx';
function Astana() {
  const smallImages: string[] = []; 
  const largeImage: string = ''; 
  const Dest = {
    Uptext: "City of the Future",
    text:" Astana,has earned the moniker 'City of the Future' owing to its astonishing transformation into a cutting-edge urban hub characterized by avant-garde architecture and innovative urban planning. As Kazakhstan's capital, this city stands as a testament to the country's bold vision for modernization and progress. The city's skyline is a canvas of futuristic designs, prominently featuring landmarks such as the Bayterek Tower, an iconic symbol of the nation's aspirations, and the Khan Shatyr, a giant tent-like structure that serves as both a shopping mall and a leisure complex.The urban landscape of Astana is a striking blend of high-tech infrastructure and traditional cultural elements. Its architecture is a mix of gleaming skyscrapers and futuristic structures, designed to symbolize the nation's forward-looking ethos while maintaining a connection to its cultural roots. The cityscape is punctuated by monumental buildings like the Palace of Peace and Reconciliation, which reflects the nation's commitment to intercultural dialogue, and the National Museum of Kazakhstan, which showcases the rich historical and cultural heritage of the region.Astana's urban planning emphasizes sustainability and functionality, with green spaces, modern transportation systems, and efficient public services integrated into its design. The city is renowned for its innovative approach to urban development, including its climate-responsive buildings and smart city technologies. The fusion of sleek, modern design with traditional Kazakh motifs creates a unique and vibrant environment that embodies Kazakhstan's ambition to be a leading player on the global stage.In essence, Astana is not just a city but a living example of Kazakhstan's future aspirations. It serves as a dynamic blend of futuristic vision and cultural depth, representing a new chapter in the nation's history as it moves towards a prosperous and modern future."
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
        <h2>Capital of Kazakhstan</h2>
        <City_Desc Uptext={Dest.Uptext} text={Dest.text} />
        <h2>Popular places</h2>
        <Gallery smallImages={smallImages} largeImage={largeImage} nums={1}/>
        <Gallery smallImages={smallImages} largeImage={largeImage} nums={2}/>
        <Footer/>
      </div>
    </>
  )
}

export default Astana
