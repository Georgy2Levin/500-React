import { PlaceFotosType, PlacesFotosType } from "../../model/PlacesFotos"
import { SingleGallery } from "./SingleGallery"

export const AllGalleries = (placesFotos: PlacesFotosType): JSX.Element => {

    function getGalleries(placesFotos: PlacesFotosType): JSX.Element[] {
        return Object.entries(placesFotos).map(([place, fotos]) => <SingleGallery key={place} place={place} fotos={fotos} />)
    }

    return (
        <>
            {getGalleries(placesFotos)}
        </>
    )
}