import { useEffect, useState } from "react";
import { PlaceKeyPlaceNameType } from "../../model/PlaceFotos"
import { GalleryScreen } from "../GalleryScreen"
import config from 'config/common-config.json'

type Props = {
   fotos: string[];
}
export const Home = ({fotos}: Props): JSX.Element => {
    const dir500 = config.dir500;
    const length = fotos.length;
    const [currentFoto, setCurrentFoto] = useState<string>(`${dir500}224.jpg`);

    function getRandomFoto() {
        const randomNumber = Math.floor(Math.random()*(length + 1));
        const randomName = fotos[randomNumber];
        setCurrentFoto(`${dir500}${randomName}.jpg`);
    }

    setInterval(getRandomFoto, 3000);

    return (
        <>
            <GalleryScreen foto_full_path={currentFoto} />
            <div className="about">
                <span className="about-span">
                    I had the telephoto lens <i>Samyang 500mm f/6.3 Mirror</i> for several years.<br />
                    This is a especial instrument, and peculiar photos were taken with it.<br />
                    I lived in Moscow and photographed Moscow.<br />
                    I've collected what turned out on this page.<br />
                </span>
                <div>
                    <img src="/assets/me.jpg" className="me" />
                </div>
            </div>
        </>

    )
}