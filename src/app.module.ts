import { LivrosService } from './livros.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './livro.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BD,
      password: process.env.SENHA_BD,
      database: 'test',
      models: [],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro]),
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
