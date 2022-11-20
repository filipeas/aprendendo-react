export function GeraMega(qtd){
  const mega = [];
  for(let i = 0; i < qtd; i++){
    mega.push(parseInt(Math.random() * (60 - 1)) + 1);
  }

  return mega;
}