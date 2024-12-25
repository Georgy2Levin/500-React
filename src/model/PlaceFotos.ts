export type PlaceNameFotosType = {
    placeName: string;
    fotos: string[];
}

export type PlaceKeyPlaceNameType = {
    placeKey: string;
    placeName: string;
}

export type PlaceKeyPlaceNameFotosType = PlaceKeyPlaceNameType & PlaceNameFotosType