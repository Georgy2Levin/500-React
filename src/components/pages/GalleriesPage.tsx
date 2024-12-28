import { useState } from "react"
import { PlaceNameFotosType } from "model/PlaceFotos"
import { GalleryScreen } from "../GalleryScreen"
import { AllGalleries } from "../AllGalleries"

type Props = {
    placesFotos: PlaceNameFotosType[];
}

export const GalleriesPage: React.FC<Props> = ({placesFotos}) => {
    const [currentFoto, setCurrentFoto] = useState<string>('');
    const [toogleVisible, setToogleVisible] = useState<boolean>(false);

    return (
        <>
            {currentFoto && <GalleryScreen foto_full_path={currentFoto} 
                toogleVisible={toogleVisible} setToogleVisible={setToogleVisible}/>}
            <AllGalleries placesFotos={placesFotos} setCurrentFoto={setCurrentFoto} setToogleVisible={setToogleVisible} />
        </>
    )
}