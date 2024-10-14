# Idea Media Platform

In short IMP,it is not a social media platform but rather it is an idea media platform (obviously).This project is a part of our organization because as our community grow we will accept ideas of project, apps, website & all. So, this platform will be used to share ideas, discuss about them, and also to get feedback from the community. Based on the response we will decide whether to allow the start of project or not.

## Who is building this?

Answer is `Community` | Hacktoberfest if ramping up and what could be the best time other than this.Go Check the Issues and start contributing. Before that have a look at the [CONTRIBUTING.md](CONTRIBUTING.md) file and [Discussions](https://github.com/blockx3/imp/discussions)

## Features to implement in IMP

- Registration with a username (username can be anything available).
- People can write a post with the idea. The post will be MarkDown formatted.
- Community can UP VOTE, DOWN VOTE, and COMMENT on the post.
- The post can be tagged with a label. eg. `#webdev`, `#MobileApp`, `#AI`, `#BlockChain`, etc.
- People can search for posts based on the label.
- Very minimal and clean UI.
- [More...](https://github.com/blockx3/imp/discussions/3)

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

> [!IMPORTANT]
> ## Guidelines
> - Any reusable kind of UI component is to be created in the `UI` package in the folder `packages/ui` which uses `shadcn-ui` and `tailwindcss` for styling.

