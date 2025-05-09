import { Module } from "@nestjs/common";
import { ImobiliariaController } from "../Controller/imobiliaria.controller";
import { ImobiliariasService } from "../Services/imobiliaria.service";
import { imobiliariaProviders } from "./imobiliaria.providers";
import { DatabaseModule } from "../db/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [ImobiliariaController],
  providers: [ImobiliariasService, ...imobiliariaProviders],
})
export class ImobiliariasModule {}