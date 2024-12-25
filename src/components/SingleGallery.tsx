import { PlaceFotosType } from "../model/PlaceFotos"
import config from "./config/common-config.json"

const prefix = config.dir500;
const sPrefix = config.dir500s;

type Props = PlaceFotosType & {
    setCurrentFoto: (name: string) => void;
}

export const SingleGallery: React.FC<Props> = ({ place, fotos, setCurrentFoto }) => {

    function setFoto(name: string) {
        setCurrentFoto(name);
    }

    function getMiniatures(): JSX.Element[] {

        const res = fotos.map(n => {
            let fotoExt = `${n}.jpg`;
            let fotoFullPath = `${prefix}${fotoExt}`;
            return <img src={`${sPrefix}${fotoExt}`} alt={place}
                        className="miniatures" onClick={() => setFoto(fotoFullPath)} />
        })
        return res;
    }

    function fillSection(): JSX.Element {
        return <>
            <div className="span-section"><span className="span-title">${place}</span></div>
            {getMiniatures()}
        </>
    }

    return (
        <>
            {fillSection()}
        </>
    )
}