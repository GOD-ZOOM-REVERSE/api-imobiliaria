import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsEnum, IsNumber } from 'class-validator';

export class ImobiliariaFilterDto {
  @IsOptional()
  @ApiProperty({ required: false, title: 'minPreco' })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  minPreco?: number = 0;

  @IsOptional()
  @ApiProperty({ required: false, title: 'maxPreco' })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  maxPreco?: number = 0;

  @IsOptional()
  @IsEnum(['HOME', 'APARTMENT', 'KITNET'])
  @ApiProperty({ required: false, enum: ['HOME', 'APARTMENT', 'KITNET'] })
  typeImovel?: string; // valor padrão
}