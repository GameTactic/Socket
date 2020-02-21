import {Controller, Get} from 'routing-controllers';

@Controller()
export class HealthController {
    @Get('/')
    public health(): string {
        return 'OK';
    }
}
