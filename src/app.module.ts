import { Module } from '@nestjs/common';
import { TesteController } from './api/teste-controller';
import { AppService } from './app.service';

/**
 * @description Módulo principal da aplicação.
 */
@Module({
  imports: [],
  controllers: [TesteController],
  providers: [AppService],
})
export class AppModule {}
