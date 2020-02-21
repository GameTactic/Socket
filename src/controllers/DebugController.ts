import {Controller, Get, Render} from 'routing-controllers';

@Controller()
export class DebugController {
    @Get('/')
    @Render('index.twig')
    public debugAction(): string {
        return ;
    }
}
