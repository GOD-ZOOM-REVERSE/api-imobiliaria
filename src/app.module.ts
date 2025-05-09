import { Module } from '@nestjs/common';
import { AppController } from './Controller/app.controller';
import { AppService } from './app.service';
import { ImobiliariasModule } from './imobiliaria/imobiliarias.module';

@Module({
  imports: [ImobiliariasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
