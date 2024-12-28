import { useState } from "react"
import { PlaceNameFotosType } from "model/PlaceFotos"
import { GalleryScreen } from "../GalleryScreen"
import { SingleGallery } from "../SingleGallery"

export const GalleryPage: React.FC<PlaceNameFotosType> = ({ placeName, fotos }) => {
    const [currentFoto, setCurrentFoto] = useState<string>();

    return (
        <div className="gallery-page-class">
            {currentFoto && <GalleryScreen foto_full_path={currentFoto} />}
            <SingleGallery placeName={placeName} fotos={fotos} setCurrentFoto={setCurrentFoto} />
        </div>

    )
}