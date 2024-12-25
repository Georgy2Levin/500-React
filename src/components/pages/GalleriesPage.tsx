import { useState } from "react"
import { PlaceFotosType } from "../../model/PlaceFotos"
import { GalleryScreen } from "../GalleryScreen"
import { AllGalleries } from "../AllGalleries"

export const GalleriesPage: React.FC<PlaceFotosType[]> = (placesFotos) => {
    const [currentFoto, setCurrentFoto] = useState<string>();

    return (
        <>
            {currentFoto && <GalleryScreen foto_full_path={currentFoto} />}
            <AllGalleries placesFotos={placesFotos} setCurrentFoto={setCurrentFoto} />
        </>
    )
}