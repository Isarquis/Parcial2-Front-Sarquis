export class Anime {
    id:number;
    name:string;
    Rating: number;
    categorie: string;
    img:string;
    description:string;
    episode:number;
    studio:string

    constructor(
        id: number, description:string, episode: number, studio: string, name:string, rating:number, image:string, categoria:string){
            this.id=id;
            this.name=name;
            this.Rating=rating;
            this.categorie=categoria;
            this.img=image;
            this.description=description;
            this.episode=episode;
            this.studio=studio;
        }
}
