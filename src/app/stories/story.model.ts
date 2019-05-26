import { Like } from '../shared/like.model';

export class Story {
    private name: string;
    private description: string;
    private imagePath: string;
    private likes: Like[];

    constructor(name: string, desc: string, imagePath: string, likes: Like[]) {
        this.description = desc;
        this.name = name;
        this.imagePath = imagePath;
        this.likes = likes;
    }
}
