import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Raymond Santos</p>
      <p>
        <Link
          href="https://github.com/ragustinesantos"
          className="hover:text-cyan-300 hover:underline"
        >
          https://github.com/ragustinesantos
        </Link>
      </p>
    </div>
  );
}
