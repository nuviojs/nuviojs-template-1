# Nazarajs

Nazarajs is a fully open-source, self-hostable, developer-first ecommerce framework built entirely with Next.js and shadcn/ui. It gives you full control over your storefront, admin panel, and backend functionality — all in a single, composable, monorepo structure.

Inspired by open platforms like Linux and shadcn/ui, Nazarajs is designed to be elegant, extendable, and truly yours.

## Features

- Built with Next.js (App Router)
- Fully customizable UI using shadcn/ui and Tailwind CSS
- Modular product, cart, order, and user management
- REST and Server Actions for full backend flexibility
- Admin dashboard prebuilt with Tailwind and Radix components
- Easily extendable with custom models, routes, or pages
- PostgreSQL with Prisma (or add your own DB layer)
- Clean monorepo architecture for fast scaling
- Self-hostable or deploy to Vercel/Render/any Node.js host
- MIT Licensed and free forever

## Tech Stack

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS + shadcn/ui
- ORM: Prisma
- Database: PostgreSQL (default) – easily swappable
- Authentication: NextAuth.js (or Clerk, custom)
- Backend: Next.js API routes + server actions

## Folder Structure

nazarajs/
├── apps/
│ ├── storefront/ → Public storefront (Next.js)
│ └── admin/ → Admin dashboard (Next.js)
├── packages/
│ ├── ui/ → Shared UI components (shadcn/ui)
│ └── config/ → Shared config, env, utils
├── prisma/ → Prisma schema and seed files
├── .env.example → Sample environment config

bash
Copy
Edit

## Getting Started

1. Clone the repository


git clone https://github.com/your-org/nazarajs.git
cd nazarajs

## Install dependencies
pnpm install

## Setup environment
cp .env.example .env

## Initialize database
pnpm db:push
pnpm db:seed


## Run the development server
pnpm dev