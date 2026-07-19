"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";

export default function NotePreviewClient() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    const {
        data: note,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["note", id],
        queryFn: () => fetchNoteById(id),
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Oops, something went wrong...</p>;
    }

    if (!note) {
        return <p>Note not found.</p>;
    }

    return (
        <Modal onClose={() => router.back()}>
            <div>
                <button onClick={() => router.back()}>back</button>
                <h1>{note.id}</h1>
                <p>{note.content}</p>
            </div>
        </Modal>
    );
}