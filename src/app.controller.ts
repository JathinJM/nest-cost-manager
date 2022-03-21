import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
constructor(public readonly appService: AppService){
this.appService = appService;
};

@Get()
public hello(): string{
    return this.appService.getHello();
}
}
