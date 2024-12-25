import { PlaceFotosType } from "../model/PlacesFotos"

const prefix = '/assets/500/';
const sPrefix = '/assets/500s/';

export const SingleGallery: React.FC<PlaceFotosType> = ({ place, fotos }) => {

    function getMiniatures() {

        const res = fotos.map(n => {
            let placeExt = `${n}.jpg`;
            return `<img src="${sPrefix}${placeExt}" alt="${place}" class="miniatures" detail-img-src="${prefix}${placeExt}">`
        })
        return res.join('');
    }

    function fillSection( ) {
        return `<div class="span-section"><span class="span-title">${place}</span></div>${getMiniatures()}`
    }

    return (
        <>
            {fillSection() }
        </>
    )
}