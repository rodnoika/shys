import React, { useState } from 'react';
import './Kaz_Map.css';
import { ReactComponent as KazakhstanMap } from "../../assets/kazakhstan.svg";


interface ContainerProps {
    hasImages: boolean;
    text: string;
}

function Container({ hasImages, text }: ContainerProps) {
    return (
      <div className="container">
        <div className="image-row">
          {hasImages ? (
            <>
              <img className="image" src="/path/to/image1.png" alt="Description 1" />
              <img className="image" src="/path/to/image2.png" alt="Description 2" />
              <img className="image" src="/path/to/image3.png" alt="Description 3" />
            </>
          ) : (
            <>
              <div className="image placeholder" />
              <div className="image placeholder" />
              <div className="image placeholder" />
            </>
          )}
        </div>
        <p className="text">{text}</p>
      </div>
    );
}

const Kaz_map: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [text, setText] = useState<string>('...');
    const [hasImages, setHasImages] = useState<boolean>(true);

    const handleClick = (id: string) => {
        console.log(id);
        switch (id) {
            case 'UZ':
                setSelectedImage('/path/to/image1.png');
                setText('Uzbekistan is a landlocked country in Central Asia, renowned for its rich cultural heritage and historical significance as a major stop along the Silk Road. The country is known for its ancient cities such as Samarkand and Bukhara, which are famous for their stunning Islamic architecture and historical monuments. Uzbekistan capital is Tashkent, and the country has a diverse landscape that includes deserts, mountains, and fertile valleys. The official language is Uzbek, and the majority of the population is of Uzbek ethnicity.');
                break;
            case 'KY':
                setSelectedImage('/path/to/image2.png');
                setText('Kyrgyzstan is a mountainous country in Central Asia, known for its stunning landscapes that include the Tien Shan mountain range, picturesque lakes, and lush valleys. The capital city is Bishkek, and the country is characterized by its nomadic culture and traditions. Kyrgyzstan is home to various ethnic groups, with Kyrgyz being the largest. The official languages are Kyrgyz and Russian, and the country is renowned for its natural beauty and outdoor activities such as hiking and horseback riding.');
                break;
            case 'KZ':
                setSelectedImage('/path/to/image3.png');
                setText('Kazakhstan is the largest landlocked country in the world and is located in Central Asia. It is known for its vast steppes, diverse landscapes, and rich natural resources, including significant oil and gas reserves. The capital city is Astana, and the country is characterized by its blend of modern cities and traditional nomadic culture. Kazakhstan has a diverse population with various ethnic groups and languages, including Kazakh and Russian.');
                break;
            default:
                setSelectedImage(null);
                setText('');
        }
    };

    return (
        <>
            <h1>Explore Kazakhstan on the map</h1>
            <div className="main-container">
                <Container hasImages={hasImages} text={text} />
                <KazakhstanMap className="Count" onClick={() => handleClick('KZ')} />
            </div>
        </>
    );
};



export default Kaz_map;
