import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from "@/actions";

interface SnippetShowPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnipppetShowPage(props: SnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 2000));
  const { id } = await props.params;
  const snipppet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });
  console.log(snipppet);
  if (!snipppet) return notFound();

  const deleteSnippetActions = actions.deleteSnippet.bind(null, snipppet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snipppet.title}</h1>
        <div className="flex gap-4">
          <Link href={`/snippets/${id}/edit`} className="p-2 border rounded">
            Edit
          </Link>
          <form action={deleteSnippetActions}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snipppet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: "" + snippet.id,
    };
  });
}
