import { PlaceFotosType } from "../model/PlacesFotos"
import { SingleGallery } from "./SingleGallery"

export const AllGalleries = (placesFotos: PlaceFotosType[]): JSX.Element => {

    function getGalleries(): JSX.Element[] {
        return placesFotos.map((e) => <SingleGallery key={e.place} place={e.place} fotos={e.fotos} />)
    }

    return (
        <>
            {getGalleries()}
        </>
    )
}