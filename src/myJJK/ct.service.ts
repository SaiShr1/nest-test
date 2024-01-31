import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CursedTechnique } from './ct.interface';
import { CreateCursedTechniqueDto } from './create-ct.dto';

@Injectable()
export class CTService {
  constructor(
    @InjectModel('CursedTechnique')
    private cursedTechniqueModel: Model<CursedTechnique>,
  ) {}

  async create(
    createCursedTechniqueDto: CreateCursedTechniqueDto,
  ): Promise<CursedTechnique> {
    const createdCursedTechnique = new this.cursedTechniqueModel(
      createCursedTechniqueDto,
    );
    return createdCursedTechnique.save();
  }

  async findOne(id: string): Promise<CursedTechnique> {
    // Replace 'CursedTechnique' with the actual return type
    return await this.cursedTechniqueModel.findById(id).exec();
  }

  async findAll(): Promise<CursedTechnique[]> {
    // Replace 'CursedTechnique[]' with the actual return type
    return await this.cursedTechniqueModel.find().exec();
  }
}
