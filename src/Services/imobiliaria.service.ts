import { Model } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";
import { Imobiliaria } from "./interfaces/imobiliaria.interface";
import { CreateImobiliariaDto } from "../Data/DTOs/create-imobiliaria.dto";
import { ImobiliariaFilterDto } from "../Data/DTOs/filter-imobiliaria.dto";

@Injectable()
export class ImobiliariasService {
  constructor(
    @Inject('IMOBILIARIA_MODEL')
    private readonly imobiliariaModel: Model<Imobiliaria>
  ) {}

  async create(createImobiliariaDto: CreateImobiliariaDto): Promise<Imobiliaria> {
    const createdImobiliaria = this.imobiliariaModel.create(createImobiliariaDto);
    return createdImobiliaria;
  }

  async findAll(filterImobiliariaDto?: ImobiliariaFilterDto): Promise<Imobiliaria[]> {
    console.log(filterImobiliariaDto);
    const query: any = {};

    if (filterImobiliariaDto?.minPreco) {
      query.price = { $gte: filterImobiliariaDto.minPreco };
    }
    if (filterImobiliariaDto?.maxPreco) {
      query.price = { ...query.price, $lte: filterImobiliariaDto.maxPreco };
    }
    if (filterImobiliariaDto?.typeImovel) {
      query.type = filterImobiliariaDto.typeImovel;
    }

    return this.imobiliariaModel.find(query).exec();
  }
}