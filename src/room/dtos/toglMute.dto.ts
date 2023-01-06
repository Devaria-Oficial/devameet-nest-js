import { IsBoolean } from "class-validator";
import { RoomMessagesHelper } from "../helpers/roommessages.helper";
import { JoinRoomDto } from "./joinroom.dto";

export class ToglMuteDto extends JoinRoomDto{   

    @IsBoolean({message: RoomMessagesHelper.MUTE_NOT_VALID})
    muted: boolean;
}