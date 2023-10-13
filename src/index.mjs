const dadosAlunos = [
  {
    name: "Laura",
    primeiraNota: 8,
    segundaNota: 6,
  },
  {
    name: "Julia",
    primeiraNota: 8,
    segundaNota: 9,
  },
  {
    name: "Maria",
    primeiraNota: 6,
    segundaNota: 6,
  }
]

function media(primeiraNota, segundaNota){
  return (primeiraNota + segundaNota) / 2
}

function mediaAluno(dadoAluno){
  return `
    A media do aluno(a) ${dadoAluno.name} foi ${media(dadoAluno.primeiraNota, dadoAluno.segundaNota)}
  
  `
}

for(let dadoAluno of dadosAlunos){
  let messagem = mediaAluno(dadoAluno)
  if(media(dadoAluno.primeiraNota, dadoAluno.segundaNota) >= 7){
    alert(`${messagem}\n Parabens, ${dadoAluno.name}! Voce foi aprovada(o) no concurso`)
  }else {
    alert(`${messagem}\n Nao foi dessa vez, ${dadoAluno.name}! Tente novamente`)
  }
 
}


