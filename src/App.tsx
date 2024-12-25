import { ReactNode, useEffect, useState } from 'react';
import './styles/idrawso.css';
import { PlaceNameFotosType, PlaceKeyPlaceNameType, PlaceKeyPlaceNameFotosType } from './model/PlaceFotos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GalleryPage } from './components/pages/GalleryPage';
import { Layout } from './components/navigators/Layout';
import { Home } from './components/pages/Home';
import { GalleriesPage } from './components/pages/GalleriesPage';

function App() {
  const [placesNamesFotos, setPlacesNamesFotos] = useState<PlaceNameFotosType[]>([]);
  const [keysNamesFotos, setKeysNamesFotos] = useState<PlaceKeyPlaceNameFotosType[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const awaitFetch = await fetch("/assets/fotos.json");
        const awaitJson = await awaitFetch.json();
        let collectorPlacesFotos: PlaceNameFotosType[] = [];
        let collectorKeysNamesFotos: PlaceKeyPlaceNameFotosType[] = [];

        for (const key in awaitJson) {
          const name = key.replace("-s-", "&#10076;s-").replace(/-/g, " ");
          const fotos = awaitJson[key];
          collectorPlacesFotos.push({ placeName: name, fotos });

          collectorKeysNamesFotos.push({ placeKey: key, placeName: name, fotos });
        }

        setPlacesNamesFotos(collectorPlacesFotos);
        setKeysNamesFotos(collectorKeysNamesFotos);
      } catch (e: any) {
        setError(e.txt());
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
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              {getRoutes()}
              <Route path='all' element={<GalleriesPage placesFotos={placesNamesFotos} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      }

    </div>
  );
}

export default App;
