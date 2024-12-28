import { useState } from "react";
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Paper } from "@mui/material";

type Props = {
    foto_full_path: string;
    toogleVisible: boolean;
    setToogleVisible: (toogle: boolean) => void;
}

export const GalleryScreen: React.FC<Props> = ({foto_full_path, toogleVisible, setToogleVisible}) => {

    // function showDetails(fl: boolean) {
    //     toogleVisible = fl;
    // }

    return (
        <div className="top-container flex-center">
            {toogleVisible ?
                <div className="details-container">
                    <CloseOutlinedIcon className="button-close" onClick={() => setToogleVisible(false)} />
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
                <ImageSearchOutlinedIcon onClick={() => setToogleVisible(true)} className="icon-class"/>}
        </div>
    )
}