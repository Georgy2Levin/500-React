export type FotosType = {
    fotos: string[];
}

export type PlaceFotosType = {
    place: string;
    fotos: FotosType;
}

export type PlacesFotosType = {
    [places: string]: FotosType;
}