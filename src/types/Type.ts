type PrejuizoItem = {
  id: string;
  descricao: string;
  data: string;
};
type Evento = {
  id: string;
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
  duracao: string;
  prejuizos: string[];
  dataRegistro: string;
  descricao?: string;
};
type Resumo = {
  Tempo: string;
  local: string;
  prejuizo: string;
};

export { PrejuizoItem, Evento, Resumo };