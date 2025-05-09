import { ApiProperty } from '@nestjs/swagger';

import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsUUID,
  IsNumber,
} from 'class-validator';

export class CreateImobiliariaDto {
  @IsOptional()
  @IsUUID()
  @ApiProperty({ required: false })
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly description?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly address: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly price: any; // Pode ser string se vier do front-end como texto

  @IsEnum(['HOME', 'APARTMENT', 'KITNET'])
  @ApiProperty({ enum: ['HOME', 'APARTMENT', 'KITNET'] })
  readonly type: 'HOME' | 'APARTMENT' | 'KITNET';
}