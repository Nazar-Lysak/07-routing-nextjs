import Link from "next/link";

function SidebarNotes() {

    const tags: string[] = ["Todo", "Work", "Personal", "Meeting", "Shopign"]

    return (
        <ul>
            <li>
                <Link href="/notes/filter/all">All</Link>
            </li>
            {tags.map((el) => (
                <li key={el}>
                    <Link href={`/notes/filter/${el}`}>{el}</Link>
                </li>
            ))}
        </ul>
    )
}

export default SidebarNotes;