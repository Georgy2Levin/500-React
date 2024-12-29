import { Link, Outlet } from "react-router-dom"
import { PlaceKeyPlaceNameType } from "model/PlaceFotos"
import { Divider, Drawer, List, ListItem } from "@mui/material";
import { useState } from "react";
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';


type Props = {
    placesKeysPlacesNames: PlaceKeyPlaceNameType[];
}

export const Layout: React.FC<Props> = ({ placesKeysPlacesNames }) => {

    const [flOpen, setFlOpen] = useState<boolean>(false)

    function getListItem(): JSX.Element[] {
        return placesKeysPlacesNames.map(({ placeKey, placeName }) => (
            <ListItem component={Link} to={`/${placeKey}`} key={placeKey} className="list-item-class">
                
                <MyLocationOutlinedIcon className="small-icon" />
                &emsp;
                {placeName}
            </ListItem>
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
                        <ListItem component={Link} to="/" className="list-item-class">
                            <HomeOutlinedIcon />
                            &nbsp;
                            Home
                        </ListItem>
                        <Divider className="divider-class" />
                        {getListItem()}
                        <Divider className="divider-class"/>
                        <ListItem component={Link} to="/all" className="list-item-class">
                            <CollectionsOutlinedIcon />
                            &nbsp;
                            Show all
                        </ListItem>
                    </List>
                </Drawer>
            </div>
            <div className="layout-outlet">
                <Outlet></Outlet>
            </div>
        </div>
    )
}