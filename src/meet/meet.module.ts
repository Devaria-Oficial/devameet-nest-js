import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { MeetController } from './meet.controller';
import { MeetService } from './meet.service';
import { Meet, MeetSchema } from './schemas/meet.schema';
import { MeetObject, MeetObjectSchema } from './schemas/meetobject.schema';

@Module({
  imports: [UserModule, MongooseModule.forFeature([
    {name: Meet.name, schema: MeetSchema},
    {name: MeetObject.name, schema: MeetObjectSchema},
  ])],
  controllers: [MeetController],
  providers: [MeetService],
  exports:[MongooseModule, MeetService]
})
export class MeetModule {}
