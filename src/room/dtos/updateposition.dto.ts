import { IsNumber, IsString, Max, Min } from "class-validator";
import { MeetMessagesHelper } from "src/meet/helpers/meetmessages.helper";
import { JoinRoomDto } from "./joinroom.dto";

export class UpdateUserPositionDto extends JoinRoomDto{    
    @IsNumber({}, {message: MeetMessagesHelper.UPDATE_XY_NOT_VALID})
    @Min(0, {message: MeetMessagesHelper.UPDATE_XY_NOT_VALID})
    @Max(8, {message: MeetMessagesHelper.UPDATE_XY_NOT_VALID})
    x: number;

    @IsNumber({}, {message: MeetMessagesHelper.UPDATE_XY_NOT_VALID})
    @Min(0, {message: MeetMessagesHelper.UPDATE_XY_NOT_VALID})
    @Max(8, {message: MeetMessagesHelper.UPDATE_XY_NOT_VALID})
    y: number;

    @IsString({message: MeetMessagesHelper.UPDATE_ORIENTATION_NOT_VALID})
    orientation: string;
}