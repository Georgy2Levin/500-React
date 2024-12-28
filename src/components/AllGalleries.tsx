import { PlaceNameFotosType } from "model/PlaceFotos"
import { SingleGallery } from "./SingleGallery"

type Props = {
    placesFotos: PlaceNameFotosType[];
    setCurrentFoto: (name: string) => void;
}

export const AllGalleries = ({ placesFotos, setCurrentFoto }: Props): JSX.Element => {

    function getGalleries(): JSX.Element[] {
        return placesFotos.map((e) => <SingleGallery key={e.placeName}
            placeName={e.placeName} fotos={e.fotos} setCurrentFoto={setCurrentFoto} />)
    }

    return (
        <div className="all-galleries-class">
            {getGalleries()}
        </div>
    )
}