import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: "postgresql://teamops:teamops123@localhost:5432/teamops",
  },
});
