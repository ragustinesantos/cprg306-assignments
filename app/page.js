import Link from "next/link";

export default function Home() {
  return (
    <main className="p-20">
      <h1 className="text-4xl font-bold mb-5">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul>
        <li>
          <Link
            href="./week-2"
            className="hover:text-green-400 hover:underline"
          >
            Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link
            href="./week-3"
            className="hover:text-green-400 hover:underline"
          >
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link
            href="./week-4"
            className="hover:text-green-400 hover:underline"
          >
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link
            href="./week-5"
            className="hover:text-green-400 hover:underline"
          >
            Week 5 Assignment
          </Link>
        </li>
        <li>
          <Link
            href="./week-6"
            className="hover:text-green-400 hover:underline"
          >
            Week 6 Assignment
          </Link>
        </li>
        <li>
          <Link
            href="./week-7"
            className="hover:text-green-400 hover:underline"
          >
            Week 7 Assignment
          </Link>
        </li>
        <li>
          <Link
            href="./week-8"
            className="hover:text-green-400 hover:underline"
          >
            Week 8 Assignment
          </Link>
        </li>
        <li>
          <Link
            href="./week-9"
            className="hover:text-green-400 hover:underline"
          >
            Week 9 Assignment
          </Link>
        </li>
        <li>
          <Link
            href="./week-10"
            className="hover:text-green-400 hover:underline"
          >
            Week 10 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
