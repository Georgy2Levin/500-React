import { useState } from "react";
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';

type Props = {
    foto_full_path: string;
}

export const GalleryScreen: React.FC<Props> = ({foto_full_path}) => {

    const [isVisible, setIsVisible] = useState<boolean>(true);

    function showDetails(fl: boolean) {
        setIsVisible(fl);
    }

    return (
        <div className="details-container">
            {isVisible ?
                <>
                    <ImageNotSupportedOutlinedIcon className="button-close" onClick={() => showDetails(false)} />
                    <img src={foto_full_path} className="details-image" />
                </> :
                <ImageSearchOutlinedIcon onClick={() => showDetails(true)} />}
        </div>
    )
}