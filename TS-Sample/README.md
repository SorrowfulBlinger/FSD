## Express with TS

# Steps to build
- Write TS src and run tsc -b to get js files in dist folder then run node dist/index.js to start express server
- npm install -g typescript 

# With Prisma
- npm install prisma ts-node @types/node --save-dev
- npx prisma init (creates schema file) , update url and add models
- npx prisma generate (generates the PrismaClient used to connect to db)\
- npx prisma migrate dev (push migrations to db)