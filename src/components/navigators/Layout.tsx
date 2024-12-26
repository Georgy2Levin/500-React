import { Link, Outlet } from "react-router-dom"
import { PlaceKeyPlaceNameType } from "model/PlaceFotos"
import { Drawer, List, ListItem } from "@mui/material";
import { ReactNode, useState } from "react";
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';

type Props = {
    placesKeysPlacesNames: PlaceKeyPlaceNameType[];
}

export const Layout: React.FC<Props> = ({ placesKeysPlacesNames }) => {

    const [flOpen, setFlOpen] = useState<boolean>(false)

    function getListItem(): ReactNode {
        return placesKeysPlacesNames.map(({ placeKey, placeName }) => (
            <ListItem component={Link} to={`/${placeKey}`} key={placeKey}>{placeName}</ListItem>
        ));
    }

    function toggleOpen() {
        setFlOpen(!flOpen);
    }

    return (
        <div className="layout-class">
            <div className="layout-menu">
                <ArtTrackOutlinedIcon onClick={toggleOpen} className="icon-class"/>
                <Drawer open={flOpen} onClose={toggleOpen}>
                    <List>
                        {getListItem()}
                        <ListItem component={Link} to="/all">Show all</ListItem>
                    </List>
                </Drawer>
            </div>
            <div className="layout-outlet">
                <Outlet></Outlet>
            </div>
        </div>
    )
}