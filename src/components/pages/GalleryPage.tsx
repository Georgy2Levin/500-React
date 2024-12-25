import { useState } from "react"
import { PlaceFotosType } from "../../model/PlaceFotos"
import { GalleryScreen } from "../GalleryScreen"
import { SingleGallery } from "../SingleGallery"

export const GalleryPage: React.FC<PlaceFotosType> = ({ place, fotos }) => {
    const [currentFoto, setCurrentFoto] = useState<string>();

    return (
        <>
            {currentFoto && <GalleryScreen foto_full_path={currentFoto} />}
            <SingleGallery place={place} fotos={fotos} setCurrentFoto={setCurrentFoto} />
        </>

    )
}