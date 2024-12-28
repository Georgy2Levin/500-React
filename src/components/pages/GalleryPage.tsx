import { useState } from "react"
import { PlaceNameFotosType } from "model/PlaceFotos"
import { GalleryScreen } from "../GalleryScreen"
import { SingleGallery } from "../SingleGallery"

export const GalleryPage: React.FC<PlaceNameFotosType> = ({ placeName, fotos }) => {
    const [currentFoto, setCurrentFoto] = useState<string>();
    const [toogleVisible, setToogleVisible] = useState<boolean>(false);

    return (
        <div className="gallery-page-class">
            {currentFoto && <GalleryScreen foto_full_path={currentFoto} 
                toogleVisible={toogleVisible} setToogleVisible={setToogleVisible}/>}
            <SingleGallery placeName={placeName} fotos={fotos} setCurrentFoto={setCurrentFoto} 
                setToogleVisible={setToogleVisible}/>
        </div>

    )
}