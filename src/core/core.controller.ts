import { Controller, Get, Req, Post, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { CoreService } from "./core.service";

@Controller('core')
export class CoreController{
    constructor(private readonly _coreService: CoreService){}
    
    @Get('/')
    async placeholder(@Res() res: Response, @Req() req: Request){
        let coreResp = await this._coreService.getCore()

        return res.status(!coreResp.error ? 403 : 200).json({
            error: null,
            message: coreResp.message,
            data: coreResp.data
        });
    }

}