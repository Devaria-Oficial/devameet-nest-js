import { Body, Controller, Delete, Get, HttpCode, Param, Post, Request } from '@nestjs/common';
import { CreateMeetDto } from './dtos/createmeet.dto';
import { GetMeetDto } from './dtos/getmeet.dto';
import { MeetService } from './meet.service';

@Controller('meet')
export class MeetController {
    constructor(
        private readonly service: MeetService
    ){}

    @Get()
    async getUser(@Request() req){
        const { userId } = req?.user;

        const result = await this.service.getMeetsByUser(userId);

        return result.map(m => ({
            id: m._id.toString(),
            name: m.name,
            color: m.color,
            link: m.link
        }) as GetMeetDto);
    }

    @Post()
    async createMeet(@Request() req, @Body() dto: CreateMeetDto){
        const { userId } = req?.user;
        await this.service.createMeet(userId, dto);
    }

    @Delete(':id')
    async deleteMeet(@Request() req, @Param() params){
        const { userId } = req?.user;
        const { id } = params;
        await this.service.deleteMeetByUser(userId, id);
    }
}
