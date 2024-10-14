import { Button } from "@/components/ui/button";
// import { PG_PRISMA_CLIENT, MONGO_PRISMA_CLIENT } from "@repo/database"; // Example of importing Prisma clients
export default async function Home() {
  return (
    <div>
      <div className="text-red-500">Hello world!!</div>
      <Button>Button</Button>
    </div>
  );
}
