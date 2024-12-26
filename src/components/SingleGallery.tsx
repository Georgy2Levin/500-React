import { PlaceNameFotosType } from "model/PlaceFotos"
import config from "config/common-config.json"
import { Box, Paper } from "@mui/material";


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
            return (
                <Paper
                    key={n}
                    elevation={8} // Adjust the shadow level as needed
                    sx={{
                        borderRadius: 1, // Optional: add border radius
                        overflow: 'hidden', // Ensure the image fits within the Paper component
                        padding: 0,
                        margin: 1,
                        '&:hover': {
                            boxShadow: 12, // Increase shadow on hover
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
        return <>
            <div className="span-section"><span className="span-title">{placeName}</span></div>
            <div className="miniatures-class">
                {getMiniatures()}
            </div>
        </>
    }

    return (
        <div className="gallery-class">
            {fillSection()}
        </div>
    )
}