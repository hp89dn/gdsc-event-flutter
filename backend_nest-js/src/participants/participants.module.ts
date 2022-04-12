import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ParticipantService } from './participants.service';
import { ParticipantController } from './participants.controller';
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
    consumer
      .apply(VaidateMiddleware)
      .exclude({ path: 'participants', method: 2 })
      .forRoutes('participants');
  }
}
