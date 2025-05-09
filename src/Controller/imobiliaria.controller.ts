import { Controller, Get, Post, Body, Query, Res } from '@nestjs/common';
import { ImobiliariasService } from '../Services/imobiliaria.service';
import { CreateImobiliariaDto } from '../Data/DTOs/create-imobiliaria.dto';
import { ImobiliariaFilterDto } from 'src/Data/DTOs/filter-imobiliaria.dto';

@Controller('api/v1/imobiliaria')
export class ImobiliariaController {
  constructor(private readonly imobiliariaService: ImobiliariasService) {}

  @Get("FindAll")
  async getAllImobiliarias(@Res() res: any, @Query() filterImobiliaria: ImobiliariaFilterDto) {
    res.setHeader('Content-Type', 'application/json');
    const { minPreco, maxPreco } = filterImobiliaria;
    console.log(typeof filterImobiliaria.maxPreco);
    if (minPreco && maxPreco) {
      if (this.minPrecoEMaiorQueMaximo(minPreco, maxPreco)) {
        return res.status(400).json({ message: "O valor mínimo não pode ser maior que o máximo." });
      }
    }
    const imobiliarias = await this.imobiliariaService.findAll(filterImobiliaria)
    return res.status(200).json(imobiliarias);
  }

  @Post()
  async createImobiliaria(@Body() createImobiliariaDto: CreateImobiliariaDto) {
    return this.imobiliariaService.create(createImobiliariaDto)
  }

  private minPrecoEMaiorQueMaximo(minPreco: number, maxPreco: number): boolean {
    return minPreco > maxPreco;
  }
}