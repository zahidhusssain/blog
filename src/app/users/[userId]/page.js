import getUsers from "../../../../services/getUsers";

export default async function Page(props) {
  const id = props.params.userId;
  const users = await getUsers();
  const user = users[id - 1];

  return (
    <div>
      <h1>user detail Page</h1>
      <p>{user.id}</p>
    </div>
  );
}
export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user) => {
    userId: user.id.toString();
  });
}
