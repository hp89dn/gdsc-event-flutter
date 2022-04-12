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
      .collection('participants')
      .doc(participantRef.id)
      .get();

    return {
      refDoc: participantRef.id,
      ...participant.data(),
    };
  }

  async findAll() {
    const participantRef = await this.firebaseService
      .getFirestore()
      .collection('participants')
      .get();

    const listParticipants = [];

    participantRef.forEach((doc) => {
      listParticipants.push({
        refDoc: doc.id,
        ...doc.data(),
      });
    });

    return listParticipants;
  }

  async findOne(refDoc: string) {
    const participantRef = await this.firebaseService
      .getFirestore()
      .collection('participants')
      .doc(refDoc)
      .get();

    if (!participantRef.exists) return null;

    return {
      refDoc: refDoc,
      ...participantRef.data(),
    };
  }

  async findByEmail(email: string) {
    const participantRef = await this.firebaseService
      .getFirestore()
      .collection('participants')
      .where('email', '==', email)
      .get();

    if (participantRef.empty) {
      return null;
    }

    return {
      refDoc: participantRef.docs[0].id,
      ...participantRef.docs[0].data(),
    };
  }

  async update(refDoc: string, updateParticipantDto: UpdateParticipantDto) {
    const participantRef = await this.firebaseService
      .getFirestore()
      .collection('participants')
      .doc(refDoc)
      .update({
        email: updateParticipantDto.email,
        status: updateParticipantDto.status,
      });

    const participant = await this.firebaseService
      .getFirestore()
      .collection('participants')
      .doc(refDoc)
      .get();

    return {
      refDoc: refDoc,
      ...participant.data(),
    };
  }

  async remove(refDoc: string) {
    const participantRef = await this.firebaseService
      .getFirestore()
      .collection('participants')
      .doc(refDoc)
      .delete();

    const participant = await this.firebaseService
      .getFirestore()
      .collection('users')
      .doc(refDoc)
      .get();

    return {
      refDoc: refDoc,
      ...participant.data(),
    };
  }
}
