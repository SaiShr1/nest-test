import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CTService } from './ct.service';
import { CreateCursedTechniqueDto } from './create-ct.dto';

@Controller('cursed_energy')
export class CTController {
  constructor(private readonly ctService: CTService) {}

  @Get()
  async findAll() {
    return this.ctService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.ctService.findOne(id);
  }

  @Post()
  async create(@Body() createCTDto: CreateCursedTechniqueDto) {
    return this.ctService.create(createCTDto);
  }

  // other endpoints...
}
