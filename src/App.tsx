import { ReactNode, useEffect, useState } from 'react';
import './styles/App.css';
import { PlaceNameFotosType, PlaceKeyPlaceNameType, PlaceKeyPlaceNameFotosType } from 'model/PlaceFotos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GalleryPage } from './components/pages/GalleryPage';
import { Layout } from './components/navigators/Layout';
import { Home } from './components/pages/Home';
import { GalleriesPage } from './components/pages/GalleriesPage';
import config from 'config/common-config.json'


function App() {
  const [placesNamesFotos, setPlacesNamesFotos] = useState<PlaceNameFotosType[]>([]);
  const [keysNamesFotos, setKeysNamesFotos] = useState<PlaceKeyPlaceNameFotosType[]>([]);
  const [placesKeysPlacesNames, setPlacesKeysPlacesNames] = useState<PlaceKeyPlaceNameType[]>([]);
  const [fotos, setFotos] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  

  useEffect(() => {
    const fetchContent = async () => {
      const fotos_json = config.fotos_json;
      try {
        const awaitFetch = await fetch(fotos_json);
        if (!awaitFetch.ok) {
          throw new Error(`HTTP error! status: ${awaitFetch.status}`);
        }
        const awaitJson = await awaitFetch.json();
        let collectorPlacesFotos: PlaceNameFotosType[] = [];
        let collectorKeysNamesFotos: PlaceKeyPlaceNameFotosType[] = [];
        let collectorKeysNames: PlaceKeyPlaceNameType[] = [];
        let collectorFotos: string[] = [];        

        for (const key in awaitJson) {
          const name = key.replace("-s-", "'s-").replace(/-/g, " ");
          const fotos = awaitJson[key];
          collectorPlacesFotos.push({ placeName: name, fotos });
          collectorKeysNamesFotos.push({ placeKey: key, placeName: name, fotos });
          collectorKeysNames.push({ placeKey: key, placeName: name });
          collectorFotos.push(...fotos);
        }

        setPlacesNamesFotos(collectorPlacesFotos);
        setKeysNamesFotos(collectorKeysNamesFotos);
        setPlacesKeysPlacesNames(collectorKeysNames);
        setFotos(collectorFotos);

      } catch (e: any) {
        setError(e.toString());
      }
    };
    fetchContent();
  }, [])

  function getRoutes(): ReactNode[] {
    return keysNamesFotos.map(({ placeKey, placeName, fotos }) => (
      <Route key={placeKey} path={placeKey}
        element={<GalleryPage placeName={placeName} fotos={fotos} />} />
    ))
  }

  return (
    <div className="App">
      {error ? <div className='error-class'>{error}</div> :
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout placesKeysPlacesNames={placesKeysPlacesNames} />}>
              <Route index element={<Home fotos={fotos} />} />
              {getRoutes()}
              <Route path='all' element={<GalleryPage placeName='Moscow' fotos={fotos} />} />              
            </Route>
          </Routes>
        </BrowserRouter>
      }    
    </div>
  );
}

export default App;
