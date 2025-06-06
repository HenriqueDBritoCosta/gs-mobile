type PrejuizoItem = {
  id: string;
  descricao: string;
  data: string;
};
type Evento = {
  id: string;
  data: string;
  localizacao: string;
  tempoInterrupcao: string;
  prejuizos: string;
};
type Resumo = {
  Tempo: string,
  local: string,
  prejuizo: string,
}

export  {PrejuizoItem, Evento, Resumo}