import Link from "next/link";
import getUsers from "../../../services/getUsers";
export default async function Page() {
  const users = await getUsers();

  return (
    <main>
      <h1>Fetch Data with API in Server Component</h1>
      {users.map((user) => (
        <h2 key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h2>
      ))}
    </main>
  );
}
