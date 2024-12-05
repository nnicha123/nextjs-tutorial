import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnipppetShowPage(props: SnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 2000));
  const { id } = await props.params;
  const snipppet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });
  console.log(snipppet);
  if (!snipppet) return notFound();
  return <div>{snipppet.title}</div>;
}
