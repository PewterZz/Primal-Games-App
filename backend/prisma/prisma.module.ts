import { Module, Global } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { TestService } from "./prisma.service";

@Global()
@Module({
  providers: [TestService, PrismaService],
  exports: [TestService, PrismaService],
})
export class PrismaModule {}
