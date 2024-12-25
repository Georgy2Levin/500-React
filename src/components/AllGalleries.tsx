import { PlaceFotosType } from "../model/PlaceFotos"
import { SingleGallery } from "./SingleGallery"

type Props = {
    placesFotos: PlaceFotosType[];
    setCurrentFoto: (name: string) => void;
}

export const AllGalleries = ({ placesFotos, setCurrentFoto }: Props): JSX.Element => {

    function getGalleries(): JSX.Element[] {
        return placesFotos.map((e) => <SingleGallery key={e.place}
            place={e.place} fotos={e.fotos} setCurrentFoto={setCurrentFoto} />)
    }

    return (
        <>
            {getGalleries()}
        </>
    )
}