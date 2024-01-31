import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CurseTechniqueSchema } from './ct.schema';
import { CTController } from './ct.controller';
import { CTService } from './ct.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CursedTechnique', schema: CurseTechniqueSchema },
    ]),
  ],
  controllers: [CTController],
  providers: [CTService],
})
export class CTModule {}
