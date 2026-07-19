import css from "./page.module.css";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NotesClient from "./Notes.client";

interface FilterNotesProps {
  params: Promise<{ slug: string[] }>
}

async function FilterNotes({ params }: FilterNotesProps) {

  const queryClient = new QueryClient();
  const { slug } = await params;

  const currentCategory = slug[0].toLocaleLowerCase() === "all" ? undefined : slug[0]

  return (
    <div className={css.notes}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient category={currentCategory} />
      </HydrationBoundary>
    </div>
  );
}

export default FilterNotes;