import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { VaidateMiddleware } from 'src/common/middlewares/validate.middleware';
import { AuthModule } from 'src/auth/auth.module';
import { FirebaseModule } from 'src/firebase/firebase.module';

@Module({
  imports: [AuthModule, FirebaseModule],
  controllers: [ParticipantController],
  providers: [ParticipantService],
})
export class ParticipantModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VaidateMiddleware).forRoutes('participant');
  }
}
