export default function SingleClient({ params }: { params: { id: number } }) {
  console.log(params.id);

  return <div>{params.id}</div>;
}
