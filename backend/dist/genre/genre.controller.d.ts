import { GenreService } from './genre.service';
export declare class GenreController {
    private genreService;
    constructor(genreService: GenreService);
    create(dto: any): Promise<void>;
}
