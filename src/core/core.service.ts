import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService{
    constructor(){
    }

    async getCore(){
        return await {
            data: [{state: "starter"}],
            message: "Core found",
            error: null
        };
    }


}