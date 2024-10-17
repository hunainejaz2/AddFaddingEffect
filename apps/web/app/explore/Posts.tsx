import MdxviewerComponent from "@/components/MdxViewer";
import { MONGO_PRISMA_CLIENT } from "@repo/database";

async function Explore_PostList() {
  const posts = await MONGO_PRISMA_CLIENT.idea.findMany();
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <MdxviewerComponent
            content={post.content}
            ClassName="bg-white  rounded-lg p-2 m-4"
          />
        </div>
      ))}
    </>
  );
}

export default Explore_PostList;
