# Welcome To BlockX3 Community 🚀  

By contributing to this repository, you will become member of our growth oriented community.🎉

## Tech Stack - But this does not restrict you to contribute

- NextJs
- ReactJs
- Prisma ORM
- [Auth.js](https://authjs.dev/)
- Shadcn UI (uses Tailwind CSS)
- PostgresSQL
- Docker, docker-compose

## What you can contribute to this repository

- You can contribute to the existing issues.
- You can create new issues.
- You can improve the documentation.
- You can improve the UI/UX.
- You can add new features.
- You can fix bugs.
- You can suggest app architecture.
- And what not...... sky is the limit.

## How to contribute ?

- If you choose to work on an issue then please comment on the issue so we can assign it to you.
- Fork the repository.Make your changes and test them (build should pass). Then create a pull request.
- If you want to add new features then create an issue and discuss it with the maintainers.

> [!IMPORTANT]
> ## Guidelines
> - Any reusable kind of UI component is to be created in the `UI` package in the folder `packages/ui` which uses `shadcn-ui` and `tailwindcss` for styling.

## Setting up the project

> [!IMPORTANT]
> run `pnpm install` in the root directory to install all the dependencies.

> ### 1. Setting up the database
>
> - Start a Postgres container in docker and copy the `.env-example` file to `.env` in `package/databse` folder as well as in `apps/web` and edit the database URL.
> - Get a mongodb cluster from [Mongodb Atlas](https://www.mongodb.com/products/platform/atlas-product-tour) add edit the database url in `.env` accordingly
> - Run `npm run prisma:generate` in the `packages/database`.
> - Run `npm run prisma:migrate:pg` in the `packages/database` to migrate schema to postgres database.

> ### 2. Running The Project
>
> - Fill the `.env` file with required environment variables.
> - Run `pnpm dev` in the root directory to start the development server.
