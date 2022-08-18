const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for (let i = 0; i < filmes.length; i++){
  console.log(`${filme[i].titulo}`)
  console.log(filme.ano[0])
  console.log(filme.diretor[0])
    for(let j = 0; j < filmes.length; j++) {
      console.log(filme.elenco)
    }
}  

// for (let i in filmes) {
//   console.log(`filme ${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);
//   for (let j in filmes) {
//     console.log(`Tem no elenco: ${filmes[i].elenco}`);
//   }
// } 