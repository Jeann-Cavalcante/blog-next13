import CardPosts from "./CardPosts";
import HeaderItem from "./HeaderItem";

const PopularPosts = ({data}: any) => {
  let popularPosts = []
  for (let i = 0; i < 3; i++) {
    const aleatory = Math.floor(Math.random() * data.length)
    popularPosts.push(data[aleatory])
  }
  var dataInicial = new Date("2021-01-01");
  var dataFinal = new Date("2023-12-31");

  // Calcula um timestamp aleatório entre as duas datas
  var timestamp =
    dataInicial.getTime() +
    Math.random() * (dataFinal.getTime() - dataInicial.getTime());

  // Cria um novo objeto de data usando o timestamp aleatório
  var dataAleatoria = new Date(timestamp);
var dataFormatada = new Intl.DateTimeFormat("pt-BR").format(dataAleatoria);
  // Imprime a data aleatória
  console.log(dataFormatada);

  return (
    <aside id="container-popular" className="w-[380px]">
      <HeaderItem title="Popular Posts" />
      <div className="flex flex-col gap-y-4">
        {popularPosts?.map((post: any) => (
          <div
            className="flex w-full bg-white shadow-xl items-center p-2 rounded-md"
            key={post.id}
          >
            <div className="bg-gray-400 h-20 min-w-[132px] rounded-md"></div>
            <div className="p-1 flex flex-col justify-between">
              <h1 className="leading-5 font-bold">{post.title}</h1>
              {dataFormatada && <h2 className="text-gray-800 text-sm">{dataFormatada}</h2>}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default PopularPosts;
