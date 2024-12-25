import { GalleryScreen } from "../GalleryScreen"
export const Home = (): JSX.Element => {

    return (
        <>
            <GalleryScreen foto_full_path="/assets/500/224.jpg" />
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