import { Module } from '@nestjs/common';
import { FirebaseModule } from './firebase/firebase.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    FirebaseModule,
    UsersModule,
    AuthModule,
    ParticipantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
