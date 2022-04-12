import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  BadRequestException,
  Put,
  Req,
  Delete,
} from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Role } from 'src/common/enums/role.enum';
import { Roles } from 'src/common/decorators/role.decorator';
import { RolesGuard } from 'src/common/guards/role.guard';
import { Request } from 'express';

@Roles(Role.Admin)
@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @UseGuards(RolesGuard)
  @Post()
  async create(@Body() createParticipantDto: CreateParticipantDto) {
    if (!createParticipantDto.email)
      throw new BadRequestException('Email is required');

    const participant = await this.participantService.findByEmail(
      createParticipantDto.email.trim(),
    );

    if (participant) return participant;

    createParticipantDto.status = 'not participate';
    return await this.participantService.create(createParticipantDto);
  }

  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.participantService.findAll();
  }

  @Put()
  async update(@Req() req: Request) {
    const user = req.user;

    const participant = await this.participantService.findByEmail(
      user.email.trim(),
    );

    if (!participant) {
      return await this.participantService.create({
        email: user.email,
        status: 'participated',
      });
    }

    return await this.participantService.update(participant.refDoc, {
      status: 'participated',
      email: user.email,
    });
  }

  @UseGuards(RolesGuard)
  @Put('/:id')
  async updateById(
    @Param('id') id: string,
    @Body() updateParticipantDto: UpdateParticipantDto,
  ) {
    const participant = await this.participantService.findOne(id);

    if (!participant) {
      throw new BadRequestException('Participant not found');
    }

    return await this.participantService.create({
      email: updateParticipantDto.email,
      status: 'participated',
    });
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    if (!id) throw new BadRequestException('Id is required');

    const participant = await this.participantService.findOne(id);

    if (!participant) throw new BadRequestException('Participant not found');

    return await this.participantService.remove(id);
  }
}
