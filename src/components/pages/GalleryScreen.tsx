import { useState } from "react";
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';

type Props = {
    foto_name: string;
}

export const GalleryScreen: React.FC<Props> = (foto_name) => {

    const [isVisible, setIsVisible] = useState<boolean>(true);

    function showDetails(fl: boolean) {
        setIsVisible(fl);
    }

    return (
        <div className="details-container">
            {isVisible ?
                <>
                    <ImageNotSupportedOutlinedIcon className="button-close" onClick={() => showDetails(false)} />
                    <img src={`/assets/500/${foto_name}.jpg`} className="details-image" />
                </> :
                <ImageSearchOutlinedIcon onClick={() => showDetails(true)} />}
        </div>
    )
}