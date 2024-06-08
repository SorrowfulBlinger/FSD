# This has 2 projects
## my-turborepo is the default nextjs FE that calls BE 
## my-backend simple express , which is called from abv FE
## docker composed both, FE is nextJS and does SSG so it needs BE up and running before npm build , so NTRYPOINT concept used
## ENV var not able insert in nto nextjs code.tsx , its needed at build time aain die to SSG/SSR