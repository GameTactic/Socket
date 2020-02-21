import {Get, JsonController} from 'routing-controllers';

@JsonController()
export class HealthController {
    @Get('/')
    public healthAction(): object {
        return { health: true };
    }
}
