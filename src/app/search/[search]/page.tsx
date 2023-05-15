const page = async ({params}: {params: {search: string}}) => {
  return (
    <div>
      <h1>Resultado da busca</h1>
      {params.search}
    </div>
  );
}

export default page;