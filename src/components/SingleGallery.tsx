import { PlaceNameFotosType } from "model/PlaceFotos"
import config from "config/common-config.json"
import { Paper } from "@mui/material";


const prefix = config.dir500;
const sPrefix = config.dir500s;

type Props = PlaceNameFotosType & {
    setCurrentFoto: (name: string) => void;
    setToogleVisible: (toogle: boolean) => void;
}

export const SingleGallery: React.FC<Props> = ({ placeName, fotos, setCurrentFoto, setToogleVisible }) => {

    function setFoto(name: string) {
        setCurrentFoto(name);
        setToogleVisible(true);
    }

    function getMiniatures(): JSX.Element[] {

        const res = fotos.map(n => {
            let fotoExt = `${n}.jpg`;
            let fotoFullPath = `${prefix}${fotoExt}`;
            return (
                <Paper
                    key={n}
                    elevation={8} 
                    sx={{
                        borderRadius: 1,
                        overflow: 'hidden',
                        padding: 0,
                        margin: 1,
                        '&:hover': {
                            boxShadow: 12,
                        },
                    }}
                >
            <img src={`${sPrefix}${fotoExt}`} alt={placeName} key={n}
                        className="miniatures" onClick={() => setFoto(fotoFullPath)} />
                        </Paper>
                        );
        })
        return res;
    }

    function fillSection(): JSX.Element {
        return <div className="gallery-class">
            <div className="span-section flex-center">                
                <span className="span-title">{placeName}</span>                
            </div>
            <div className="miniatures-class">
                {getMiniatures()}
            </div>
        </div>
    }

    return (
        <div className="gallery-class">
            {fillSection()}
        </div>
    )
}