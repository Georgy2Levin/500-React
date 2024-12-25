import { PlaceNameFotosType } from "../model/PlaceFotos"
import config from "../config/common-config.json"

const prefix = config.dir500;
const sPrefix = config.dir500s;

type Props = PlaceNameFotosType & {
    setCurrentFoto: (name: string) => void;
}

export const SingleGallery: React.FC<Props> = ({ placeName, fotos, setCurrentFoto }) => {

    function setFoto(name: string) {
        setCurrentFoto(name);
    }

    function getMiniatures(): JSX.Element[] {

        const res = fotos.map(n => {
            let fotoExt = `${n}.jpg`;
            let fotoFullPath = `${prefix}${fotoExt}`;
            return <img src={`${sPrefix}${fotoExt}`} alt={placeName}
                        className="miniatures" onClick={() => setFoto(fotoFullPath)} />
        })
        return res;
    }

    function fillSection(): JSX.Element {
        return <>
            <div className="span-section"><span className="span-title">{placeName}</span></div>
            {getMiniatures()}
        </>
    }

    return (
        <>
            {fillSection()}
        </>
    )
}