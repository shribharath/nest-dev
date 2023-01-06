import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { User } from "./models/user.model";
import { UsersModule } from "./users-module/users-module.module";
import { UsersController } from "./users-module/users.controller";
import { UsersService } from "./users-module/users.service";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: "localhost",
      port: 8889,
      username: "root",
      password: "root",
      database: "nestapp",
      models: [User],
    }),
    UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
