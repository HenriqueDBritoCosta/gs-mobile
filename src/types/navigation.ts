export type RootStackParamList = {
  CadastroLocalizacao: undefined;
  CadastroInterrupcao: { novoEvento: { local: string } };
  CadastroPrejuizos: {
    novoEvento: { local: string; horaInicio: string; duracao: string };
  };
  PanoramaGeral: undefined;
};
