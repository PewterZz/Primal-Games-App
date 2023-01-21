import { PlatformService } from './platform.service';
export declare class PlatformController {
    private PlatformService;
    constructor(PlatformService: PlatformService);
    create(dto: any): Promise<void>;
}
