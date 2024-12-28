import { useState } from "react";
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
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
        <div className="top-container flex-center">
            {isVisible ?
                <div className="details-container">
                    <CloseOutlinedIcon className="button-close" onClick={() => showDetails(false)} />
                    <Paper                
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
                        <img src={foto_full_path} className="details-image" />
                    </Paper>
                </div> :
                <ImageSearchOutlinedIcon onClick={() => showDetails(true)} className="icon-class"/>}
        </div>
    )
}