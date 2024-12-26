import { useState } from "react";
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import { Paper } from "@mui/material";

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
                    <Paper                
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
                        <img src={foto_full_path} className="details-image" />
                    </Paper>
                </> :
                <ImageSearchOutlinedIcon onClick={() => showDetails(true)} className="icon-class"/>}
        </div>
    )
}