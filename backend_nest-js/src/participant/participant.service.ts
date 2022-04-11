import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class ParticipantService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async create(createParticipantDto: CreateParticipantDto) {
    const participantRef = await this.firebaseService
      .getFirestore()
      .collection('participants')
      .add(createParticipantDto);

    const participant = await this.firebaseService
      .getFirestore()
      .collection('users')
      .doc(participantRef.id)
      .get();

    return {
      refDoc: participantRef.id,
      ...participant,
    };
  }

  findAll() {
    return `This action returns all participant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} participant`;
  }

  update(id: number, updateParticipantDto: UpdateParticipantDto) {
    return `This action updates a #${id} participant`;
  }

  remove(id: number) {
    return `This action removes a #${id} participant`;
  }
}
