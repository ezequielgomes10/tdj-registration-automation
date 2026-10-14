
const CONFIG = {
  SOURCE_SHEET: 'Respostas ao formulário 1',

  TECHNICAL_HEADER: '_COOPSPORTES_RAW_ROW',
  STABLE_ID_HEADER: '_COOPSPORTES_ID',

  PAIR_GAMES: ['Counter-Strike 2', 'Fortnite', 'Free Fire', 'Truco'],

  ADMIN: {
    OBSERVATIONS: 'Observações',
    OBSERVATIONS_ALIASES: ['Observação'],
    GROUP: 'Grupo',
    PAIR: 'Dupla',
    BRACKET: 'Chave',
    CHALLENGER_LINK: 'Link Challenger',
    CHALLENGER_STATUS: 'Status Challenger',
    CHALLENGER_TEAM: 'Equipe Challenger',
    GROUP_STATES: ['Saiu', 'Enviado', 'Entrou', 'Inalterado'],
    CHALLENGER_STATES: [
      'Inalterado',
      'Enviado',
      'Confirmado',
      'Não aceito',
    ],
  },

  PROPERTIES: {
    LAST_PROCESSED_ROW: 'COOPSPORTES_ULTIMA_LINHA_PROCESSADA',
    ID_MIGRATION_VERSION: 'COOPSPORTES_IDS_PERSISTENTES_2026_08_11_V1',
    ADMIN_CLEANUP_VERSION:
      'COOPSPORTES_LIMPEZA_ADMINISTRATIVA_2026_08_11_V4',
  },

  GAME_ORDER: [
    'Clash Royale',
    'Counter-Strike 2',
    'EA FC 26',
    'Fortnite',
    'Free Fire',
    'League of Legends',
    'Sinuca',
    'Valorant',
    'Truco',
    'Xadrez',
    'Dama',
  ],

  SOURCE_FIELDS: {
    timestamp: { header: 'Carimbo de data/hora' },
    relationshipType: { header: 'Você é:' },
    playerName: { header: 'Nome completo do(a) jogador(a):' },
    playerWhatsapp: { header: 'Número do WhatsApp do(a) jogador(a):' },
    playerEmail: { header: 'E-mail do(a) jogador(a):' },
    birthDate: { header: 'Data de nascimento do(a) jogador(a):' },
    playerCpf: { header: 'CPF do(a) jogador(a):' },
    gender: { header: 'Gênero do(a) jogador(a):' },
    city: { header: 'Cidade:' },
    education: { header: 'Nível de escolaridade do(a) jogador(a):' },
    disability: { header: 'Possui alguma deficiência? Se sim, qual?' },
    playerCooperative: { header: 'Cooperativa do jogador:' },
    position: { header: 'Cargo:' },
    modality: { header: 'Qual modalidade você vai jogar?' },

    linkedName: { header: 'Nome completo do cooperado/funcionário:' },
    linkedWhatsapp: { header: 'Número do WhatsApp do cooperado/funcionário:' },
    linkedCpf: { header: 'CPF do cooperado/funcionário:' },
    linkedCooperative: { header: 'Cooperativa do cooperado/funcionário:' },

    eaNickname: {
      header: 'Nickname do(a) jogador(a):',
      occurrence: 1,
      totalOccurrences: 9,
    },
    eaPlatform: { header: 'Qual console você costuma jogar:' },

    sinucaNickname: {
      header: 'Nickname do(a) jogador(a):',
      occurrence: 2,
      totalOccurrences: 9,
    },
    sinucaId: { header: 'ID do(a) jogador(a):' },

    chessAccount: { header: 'Você possui conta no site Chess.com?' },
    chessNickname: {
      header: 'Nickname do(a) jogador(a):',
      occurrence: 3,
      totalOccurrences: 9,
    },

    trucoNickname: {
      header: 'Nickname do(a) jogador(a):',
      occurrence: 4,
      totalOccurrences: 9,
    },
    trucoPartnerName: { header: 'Nome completo do(a) parceiro(a) de Truco:' },
    trucoPartnerWhatsapp: {
      header: 'Número do WhatsApp do(a) parceiro(a) de Truco:',
    },
    trucoPartnerCooperative: {
      header: 'Cooperativa do parceiro(a) do truco:',
    },

    damaNickname: {
      header: 'Nickname do(a) jogador(a):',
      occurrence: 5,
      totalOccurrences: 9,
    },

    freeFireNickname: { header: 'Informe o seu Nickname do Free Fire:' },
    freeFireId: { header: 'Informe o seu ID:' },
    freeFirePartnerName: {
      header: 'Nome completo do(a) seu/sua dupla:',
      occurrence: 1,
      totalOccurrences: 3,
    },
    freeFirePartnerWhatsapp: {
      header: 'Número do WhatsApp do(a) seu/sua dupla:',
      occurrence: 1,
      totalOccurrences: 3,
    },
    freeFirePartnerCooperative: {
      header: 'Cooperativa do parceiro(a) do Free Fire:',
    },

    valorantNicknameTag: { header: 'Nickname com tag do(a) jogador(a):' },

    clashNickname: {
      header: 'Nickname do(a) jogador(a):',
      occurrence: 6,
      totalOccurrences: 9,
    },

    lolNickname: {
      header: 'Nickname do(a) jogador(a):',
      occurrence: 7,
      totalOccurrences: 9,
    },

    fortniteNickname: {
      header: 'Nickname do(a) jogador(a):',
      occurrence: 8,
      totalOccurrences: 9,
    },
    fortnitePlatform: { header: 'Qual plataforma você costuma jogar?' },
    fortnitePartnerName: {
      header: 'Nome completo do(a) seu/sua dupla:',
      occurrence: 2,
      totalOccurrences: 3,
    },
    fortnitePartnerWhatsapp: {
      header: 'Número do WhatsApp do(a) seu/sua dupla:',
      occurrence: 2,
      totalOccurrences: 3,
    },
    fortnitePartnerCooperative: {
      header: 'Cooperativa do parceiro(a) do Fortnite:',
    },

    cs2Nickname: {
      header: 'Nickname do(a) jogador(a):',
      occurrence: 9,
      totalOccurrences: 9,
    },
    cs2SteamLink: { header: 'Link da Steam do(a) jogador(a):' },
    cs2ChallengerAccount: {
      header: 'Você tem conta na plataforma Challengermode?',
    },
    cs2ChallengerLink: {
      header:
        'Caso já possua conta na plataforma ChallengerMode, coloque abaixo o link da sua conta:',
    },
    cs2PartnerName: {
      header: 'Nome completo do(a) seu/sua dupla:',
      occurrence: 3,
      totalOccurrences: 3,
    },
    cs2PartnerWhatsapp: {
      header: 'Número do WhatsApp do(a) seu/sua dupla:',
      occurrence: 3,
      totalOccurrences: 3,
    },
    cs2PartnerCooperative: {
      header: 'Cooperativa do parceiro(a) do Counter-Strike 2:',
    },
    cs2PartnerSteamLink: {
      header: 'Link da Steam do(a) seu/sua dupla:',
      optional: true,
    },

    relationshipDocument: { header: 'Termo de Vínculo:' },
    guardianDocument: {
      header:
        'Termo de Autorização do Responsável (somente se for menor de idade):',
    },
  },

  COMMON_OUTPUT_FIELDS: [
    { label: 'Data/Hora da inscrição', source: 'timestamp' },
    { label: 'Tipo de vínculo / Você é', source: 'relationshipType' },
    { label: 'Nome completo do jogador', source: 'playerName' },
    { label: 'WhatsApp do jogador', source: 'playerWhatsapp' },
    { label: 'E-mail do jogador', source: 'playerEmail' },
    { label: 'Data de nascimento', source: 'birthDate' },
    { label: 'CPF', source: 'playerCpf' },
    { label: 'Gênero', source: 'gender' },
    { label: 'Cidade', source: 'city' },
    { label: 'Nível de escolaridade', source: 'education' },
    {
      label: 'Possui alguma deficiência? Se sim, qual?',
      source: 'disability',
    },
    { label: 'Cooperativa do jogador', source: 'playerCooperative' },
    { label: 'Cargo', source: 'position' },
    { label: 'Modalidade', source: 'modality' },
    {
      label: 'Nome completo do cooperado/funcionário vinculado',
      source: 'linkedName',
    },
    {
      label: 'WhatsApp do cooperado/funcionário vinculado',
      source: 'linkedWhatsapp',
    },
    {
      label: 'CPF do cooperado/funcionário vinculado',
      source: 'linkedCpf',
    },
    {
      label: 'Cooperativa do cooperado/funcionário vinculado',
      source: 'linkedCooperative',
    },
  ],

  DOCUMENT_OUTPUT_FIELDS: [
    { label: 'Termo de Vínculo', source: 'relationshipDocument' },
    {
      label: 'Termo de Autorização do Responsável',
      source: 'guardianDocument',
    },
  ],

  GAMES: {
    'Clash Royale': {
      sheetName: 'Clash Royale',
      aliasPrefixes: ['Clash Royale'],
      fields: [{ label: 'Nickname do jogador', source: 'clashNickname' }],
    },

    'Counter-Strike 2': {
      sheetName: 'Counter-Strike 2',
      aliasPrefixes: ['Counter-Strike 2'],
      fields: [
        { label: 'Nickname', source: 'cs2Nickname' },
        { label: 'Link da Steam do jogador', source: 'cs2SteamLink' },
        {
          label: 'Possui conta na Challengermode?',
          source: 'cs2ChallengerAccount',
        },
        {
          label: 'Link da conta Challengermode',
          source: 'cs2ChallengerLink',
        },
        { label: 'Nome completo da dupla', source: 'cs2PartnerName' },
        { label: 'WhatsApp da dupla', source: 'cs2PartnerWhatsapp' },
        {
          label: 'Cooperativa da dupla',
          source: 'cs2PartnerCooperative',
        },
        {
          label: 'Link da Steam da dupla',
          source: 'cs2PartnerSteamLink',
          optional: true,
        },
      ],
    },

    'EA FC 26': {
      sheetName: 'EA FC 26',
      aliasPrefixes: ['EA FC 25', 'EA FC 26'],
      fields: [
        { label: 'Nickname do jogador', source: 'eaNickname' },
        {
          label: 'Console/plataforma que costuma jogar',
          source: 'eaPlatform',
        },
      ],
    },

    Fortnite: {
      sheetName: 'Fortnite',
      aliasPrefixes: ['Fortnite'],
      fields: [
        { label: 'Nickname', source: 'fortniteNickname' },
        { label: 'Plataforma', source: 'fortnitePlatform' },
        { label: 'Nome completo da dupla', source: 'fortnitePartnerName' },
        { label: 'WhatsApp da dupla', source: 'fortnitePartnerWhatsapp' },
        {
          label: 'Cooperativa da dupla',
          source: 'fortnitePartnerCooperative',
        },
      ],
    },

    'Free Fire': {
      sheetName: 'Free Fire',
      aliasPrefixes: ['Free Fire'],
      fields: [
        { label: 'Nickname do Free Fire', source: 'freeFireNickname' },
        { label: 'ID do Free Fire', source: 'freeFireId' },
        { label: 'Nome completo da dupla', source: 'freeFirePartnerName' },
        { label: 'WhatsApp da dupla', source: 'freeFirePartnerWhatsapp' },
        {
          label: 'Cooperativa da dupla',
          source: 'freeFirePartnerCooperative',
        },
      ],
    },

    'League of Legends': {
      sheetName: 'League of Legends',
      aliasPrefixes: ['League of Legends'],
      fields: [{ label: 'Nickname do jogador', source: 'lolNickname' }],
    },

    Sinuca: {
      sheetName: 'Sinuca',
      aliasPrefixes: ['Sinuca on-line', 'Sinuca online', 'Sinuca'],
      fields: [
        { label: 'Nickname', source: 'sinucaNickname' },
        { label: 'ID do jogador', source: 'sinucaId' },
      ],
    },

    Valorant: {
      sheetName: 'Valorant',
      aliasPrefixes: ['VALORANT'],
      fields: [
        { label: 'Nickname + TAG', source: 'valorantNicknameTag' },
      ],
    },

    Truco: {
      sheetName: 'Truco',
      aliasPrefixes: ['Truco on-line', 'Truco online', 'Truco'],
      fields: [
        { label: 'Nickname do jogador', source: 'trucoNickname' },
        { label: 'Nome completo do parceiro', source: 'trucoPartnerName' },
        { label: 'WhatsApp do parceiro', source: 'trucoPartnerWhatsapp' },
        {
          label: 'Cooperativa do parceiro',
          source: 'trucoPartnerCooperative',
        },
      ],
    },

    Xadrez: {
      sheetName: 'Xadrez',
      aliasPrefixes: ['Xadrez on-line', 'Xadrez online', 'Xadrez'],
      fields: [
        { label: 'Possui conta no Chess.com?', source: 'chessAccount' },
        { label: 'Nickname no Chess.com', source: 'chessNickname' },
      ],
    },

    Dama: {
      sheetName: 'Dama',
      aliasPrefixes: ['Dama on-line', 'Dama online', 'Dama'],
      fields: [{ label: 'Nickname do jogador', source: 'damaNickname' }],
    },
  },

  FORMATTING: {
    HEADER_BACKGROUND: '#1B2559',
    HEADER_FONT_COLOR: '#FFFFFF',
    BODY_FONT_COLOR: '#202124',
    BODY_BACKGROUND: '#FFFFFF',
    HEADER_ROW_HEIGHT: 42,
    FONT_FAMILY: 'Inter',
    ADMIN_GRAY: '#D9D9D9',
    PAIR_BACKGROUND: '#F3F3F3',
    GROUP_ENTERED_FONT_COLOR: '#000000',
  },
};


function onOpen() {
  const ui = SpreadsheetApp.getUi();

  ui.createMenu('COOPSPORTES')
    .addItem('Atualizar novos registros', 'atualizarNovosRegistros')
    .addItem(
      'Reconstruir todas as modalidades',
      'reconstruirTodasModalidades'
    )
    .addSeparator()
    .addItem('Gerar guia contatos', 'gerarGuiaContatosCoopsportes')
    .addToUi();

  ui.createMenu('BI / INSIGHTS')
    .addItem('Abrir painel executivo', 'abrirBiInsightsCoopsportes')
    .addItem('Recalcular indicadores', 'abrirBiInsightsCoopsportes')
    .addToUi();
}


function atualizarNovosRegistros() {
  const ui = SpreadsheetApp.getUi();
  const lock = LockService.getDocumentLock();
  const timer = criarMedidorTempo_('ATUALIZACAO_INCREMENTAL');
  let lockObtido = false;
  let temporarySheet = null;
  let timerFinalizado = false;

  try {
    if (!lock) {
      throw new Error(
        'Não foi possível obter o bloqueio do documento. Confirme que este script está vinculado à planilha do Google Sheets.'
      );
    }
    lockObtido = lock.tryLock(30000);
    if (!lockObtido) {
      throw new Error(
        'Já existe outra operação do COOPSPORTES em andamento. Aguarde e tente novamente.'
      );
    }

    validarConfiguracao_();
    timer.mark('bloqueio e configuração');
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    excluirAbasTemporariasOrfas_(spreadsheet);
    const sourceSheet = obterAbaOrigem_(spreadsheet);
    garantirIdsPersistentesRaw_(sourceSheet);
    timer.mark('identificadores RAW');

    const leitura = lerRegistrosOrigem_(sourceSheet);
    const ultimaLinhaAtual = leitura.lastRow;
    timer.mark('leitura RAW em bloco');

    if (leitura.grouping.unknown.length) {
      ui.alert(
        'COOPSPORTES - modalidade não reconhecida',
        montarAvisoModalidadesDesconhecidas_(leitura.grouping.unknown),
        ui.ButtonSet.OK
      );
      return;
    }

    let migracaoEstrutural = false;
    let mapasDasAbas = null;
    try {
      mapasDasAbas = validarAbasParaAtualizacaoIncremental_(
        spreadsheet,
        leitura.headerMap
      );
    } catch (structureError) {
      prepararEstruturasDasAbas_(spreadsheet, sourceSheet, leitura.headerMap);
      mapasDasAbas = validarAbasParaAtualizacaoIncremental_(
        spreadsheet,
        leitura.headerMap
      );
      migracaoEstrutural = true;
    }
    timer.mark('validação estrutural');

    const deveMigrarIds =
      migracaoEstrutural || !migracaoIdsConcluida_();
    const migracaoIds = deveMigrarIds
      ? migrarIdentificadoresDerivados_(spreadsheet, leitura, mapasDasAbas)
      : { forcedGames: {}, migrated: 0, unsafe: 0 };
    timer.mark('migração de identificadores');
    const indice = lerIndiceDerivado_(spreadsheet, leitura, mapasDasAbas);
    timer.mark('leitura das guias em bloco');

    const forcedGames = migracaoIds.forcedGames;
    if (migracaoEstrutural) {
      CONFIG.GAME_ORDER.forEach(function (gameName) {
        forcedGames[gameName] = true;
      });
    }
    const plano = planejarAtualizacaoIncremental_(
      leitura,
      indice,
      forcedGames
    );
    const modalidadesAfetadas = CONFIG.GAME_ORDER.filter(function (gameName) {
      return !!plano.structuralGames[gameName];
    });
    Logger.log(
      '[COOPSPORTES][PLANO] diretas=%s | reconstruídas=%s | novas=%s | atualizadas=%s | movidas=%s | removidas=%s',
      plano.directUpdates.length,
      modalidadesAfetadas.join(', ') || 'nenhuma',
      plano.summary.newRecords,
      plano.summary.updated,
      plano.summary.moved,
      plano.summary.removed
    );
    timer.mark('comparação e planejamento');

    const preservacao = capturarManuaisPorId_(
      spreadsheet,
      leitura,
      modalidadesAfetadas
    );
    temporarySheet = preservacao.tempSheet;
    timer.mark('preservação manual seletiva');

    const estadoSincronizacao = sincronizarModalidadesAfetadas_(
      spreadsheet,
      sourceSheet,
      leitura,
      preservacao,
      modalidadesAfetadas
    );
    timer.mark('reconstrução das modalidades afetadas');

    atualizarRegistrosDiretos_(spreadsheet, plano.directUpdates, mapasDasAbas);
    sincronizarNumerosRawEmBloco_(
      spreadsheet,
      plano.currentById,
      mapasDasAbas,
      indice,
      plano.structuralGames
    );
    timer.mark('atualizações diretas e IDs técnicos');

    const limpezaCompleta = !limpezaAdministrativaConcluida_();
    if (modalidadesAfetadas.length) {
      aplicarModelosAdministrativosOtimizado_(
        spreadsheet,
        estadoSincronizacao,
        limpezaCompleta,
        modalidadesAfetadas
      );
      removerPreenchimentosDeColunasNeutras_(
        spreadsheet,
        estadoSincronizacao,
        limpezaCompleta,
        modalidadesAfetadas
      );
    }
    if (limpezaCompleta) {
      limparFormatacaoForaDaAreaUsada_(spreadsheet, estadoSincronizacao);
    }
    timer.mark('formatação somente da área usada');

    if (migracaoEstrutural) {
      ordenarAbasDerivadas_(spreadsheet, sourceSheet);
    }
    SpreadsheetApp.flush();
    if (limpezaCompleta) {
      marcarLimpezaAdministrativaConcluida_();
    }

    definirUltimaLinhaProcessada_(ultimaLinhaAtual);
    if (deveMigrarIds) {
      marcarMigracaoIdsConcluida_();
    }
    const totalMs = timer.finish();
    timerFinalizado = true;

    ui.alert(
      'COOPSPORTES',
      montarResumoAtualizacao_(
        plano.summary,
        leitura.grouping.unknown,
        ultimaLinhaAtual,
        preservacao.unsafeManualCount + migracaoIds.unsafe,
        modalidadesAfetadas,
        totalMs
      ),
      ui.ButtonSet.OK
    );
  } catch (error) {
    registrarErro_(error);
    ui.alert(
      'Erro ao atualizar novos registros',
      obterMensagemErro_(error) +
        '\n\nO controle da última linha não foi avançado. Corrija a causa e execute a atualização novamente. A rotina é idempotente.',
      ui.ButtonSet.OK
    );
  } finally {
    if (!timerFinalizado) {
      timer.finish();
    }
    if (temporarySheet) {
      excluirAbaTemporaria_(temporarySheet);
    }
    if (lockObtido) {
      lock.releaseLock();
    }
  }
}


function reconstruirTodasModalidades() {
  const ui = SpreadsheetApp.getUi();
  const timer = criarMedidorTempo_('RECONSTRUCAO_COMPLETA');
  const resposta = ui.alert(
    'Reconstruir todas as modalidades',
    'Esta operação reconstruirá todas as abas de modalidades a partir da aba original de respostas.\n\n' +
      'Os campos do formulário serão reconstruídos. Colunas administrativas serão preservadas quando puderem ser relacionadas com segurança.\n\n' +
      'A aba original de respostas NÃO será alterada.\n\n' +
      'Deseja continuar?',
    ui.ButtonSet.YES_NO
  );

  if (resposta !== ui.Button.YES) {
    return;
  }

  const lock = LockService.getDocumentLock();
  let lockObtido = false;
  let temporarySheet = null;

  try {
    if (!lock) {
      throw new Error(
        'Não foi possível obter o bloqueio do documento. Confirme que este script está vinculado à planilha do Google Sheets.'
      );
    }
    lockObtido = lock.tryLock(30000);
    if (!lockObtido) {
      throw new Error(
        'Já existe outra operação do COOPSPORTES em andamento. Aguarde e tente novamente.'
      );
    }

    validarConfiguracao_();

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    excluirAbasTemporariasOrfas_(spreadsheet);
    const sourceSheet = obterAbaOrigem_(spreadsheet);
    garantirIdsPersistentesRaw_(sourceSheet);
    const leitura = lerRegistrosOrigem_(sourceSheet);
    timer.mark('leitura RAW e identificadores');

    prepararEstruturasDasAbas_(
      spreadsheet,
      sourceSheet,
      leitura.headerMap
    );
    migrarIdentificadoresDerivados_(spreadsheet, leitura);
    timer.mark('estrutura e migração');
    const preservacao = capturarManuaisPorId_(
      spreadsheet,
      leitura,
      CONFIG.GAME_ORDER
    );
    temporarySheet = preservacao.tempSheet;
    timer.mark('preservação manual');

    const estadoSincronizacao = sincronizarModalidadesAfetadas_(
      spreadsheet,
      sourceSheet,
      leitura,
      preservacao,
      CONFIG.GAME_ORDER
    );
    timer.mark('reconstrução das modalidades');
    const limpezaCompleta = !limpezaAdministrativaConcluida_();
    aplicarModelosAdministrativosOtimizado_(
      spreadsheet,
      estadoSincronizacao,
      limpezaCompleta
    );
    removerPreenchimentosDeColunasNeutras_(
      spreadsheet,
      estadoSincronizacao,
      limpezaCompleta
    );
    if (limpezaCompleta) {
      limparFormatacaoForaDaAreaUsada_(spreadsheet, estadoSincronizacao);
    }
    timer.mark('formatação da área usada');

    ordenarAbasDerivadas_(spreadsheet, sourceSheet);
    SpreadsheetApp.flush();
    if (limpezaCompleta) {
      marcarLimpezaAdministrativaConcluida_();
    }

    definirUltimaLinhaProcessada_(leitura.lastRow);
    marcarMigracaoIdsConcluida_();
    const totalMs = timer.finish();

    ui.alert(
      'COOPSPORTES',
      montarResumoReconstrucao_(
        leitura.grouping.counts,
        leitura.grouping.unknown,
        leitura.lastRow,
        preservacao.unsafeManualCount,
        totalMs
      ),
      ui.ButtonSet.OK
    );
  } catch (error) {
    registrarErro_(error);
    ui.alert(
      'Erro ao reconstruir as modalidades',
      obterMensagemErro_(error) +
        '\n\nO controle da última linha não foi atualizado. Corrija a causa informada e execute "Reconstruir todas as modalidades" novamente.',
      ui.ButtonSet.OK
    );
  } finally {
    if (temporarySheet) {
      excluirAbaTemporaria_(temporarySheet);
    }
    if (lockObtido) {
      lock.releaseLock();
    }
  }
}


function diagnosticarUltimaLinhaProcessada() {
  const valor = obterUltimaLinhaProcessada_();
  const texto =
    valor === null
      ? 'A propriedade ainda não foi definida.'
      : CONFIG.PROPERTIES.LAST_PROCESSED_ROW + ' = ' + valor;
  Logger.log(texto);
  SpreadsheetApp.getUi().alert('Diagnóstico COOPSPORTES', texto);
}


function validarConfiguracao_() {
  if (!CONFIG.SOURCE_SHEET) {
    throw new Error('CONFIG.SOURCE_SHEET não foi definido.');
  }

  const nomes = {};
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    const game = CONFIG.GAMES[gameName];
    if (!game) {
      throw new Error('Configuração ausente para a modalidade: ' + gameName);
    }
    if (game.sheetName === CONFIG.SOURCE_SHEET) {
      throw new Error(
        'Uma aba derivada não pode ter o mesmo nome da aba original: ' +
          game.sheetName
      );
    }
    if (nomes[game.sheetName]) {
      throw new Error('Nome de aba derivada duplicado: ' + game.sheetName);
    }
    nomes[game.sheetName] = true;
  });
}


function obterAbaOrigem_(spreadsheet) {
  const sourceSheet = spreadsheet.getSheetByName(CONFIG.SOURCE_SHEET);
  if (!sourceSheet) {
    const disponiveis = spreadsheet
      .getSheets()
      .map(function (sheet) {
        return sheet.getName();
      })
      .join(', ');
    throw new Error(
      'A aba original "' +
        CONFIG.SOURCE_SHEET +
        '" não foi encontrada. Abas disponíveis: ' +
        disponiveis
    );
  }
  return sourceSheet;
}


function obterMapaDeCabecalhos_(headers) {
  const occurrencesByHeader = {};

  headers.forEach(function (header, zeroBasedIndex) {
    const normalized = normalizarCabecalho_(header);
    if (!normalized) {
      return;
    }
    if (!occurrencesByHeader[normalized]) {
      occurrencesByHeader[normalized] = [];
    }
    occurrencesByHeader[normalized].push(zeroBasedIndex);
  });

  const map = {};
  const errors = [];

  Object.keys(CONFIG.SOURCE_FIELDS).forEach(function (fieldName) {
    const spec = CONFIG.SOURCE_FIELDS[fieldName];
    const normalized = normalizarCabecalho_(spec.header);
    const indexes = occurrencesByHeader[normalized] || [];
    const occurrence = spec.occurrence || 1;

    if (spec.optional && indexes.length < occurrence) {
      map[fieldName] = null;
      return;
    }

    if (spec.totalOccurrences && indexes.length !== spec.totalOccurrences) {
      errors.push(
        '"' +
          spec.header +
          '": esperadas ' +
          spec.totalOccurrences +
          ' ocorrências, encontradas ' +
          indexes.length
      );
      return;
    }

    if (!spec.occurrence && indexes.length > 1) {
      errors.push(
        '"' +
          spec.header +
          '": cabeçalho ficou ambíguo (' +
          indexes.length +
          ' ocorrências)'
      );
      return;
    }

    if (indexes.length < occurrence) {
      errors.push(
        '"' +
          spec.header +
          '": ocorrência ' +
          occurrence +
          ' não encontrada'
      );
      return;
    }

    map[fieldName] = indexes[occurrence - 1];
  });

  if (errors.length) {
    throw new Error(
      'A estrutura da aba original não corresponde ao formulário analisado.\n' +
        errors.join('\n')
    );
  }

  return map;
}


function normalizarCabecalho_(value) {
  return String(value === null || value === undefined ? '' : value)
    .normalize('NFC')
    .replace(/\s+/g, ' ')
    .trim();
}


function normalizarTextoParaComparacao_(value) {
  return String(value === null || value === undefined ? '' : value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}


function normalizarModalidade_(value) {
  const normalizedValue = normalizarTextoParaComparacao_(value);
  if (!normalizedValue) {
    return null;
  }

  for (let i = 0; i < CONFIG.GAME_ORDER.length; i += 1) {
    const gameName = CONFIG.GAME_ORDER[i];
    const game = CONFIG.GAMES[gameName];
    for (let j = 0; j < game.aliasPrefixes.length; j += 1) {
      const prefix = normalizarTextoParaComparacao_(game.aliasPrefixes[j]);
      if (
        normalizedValue === prefix ||
        normalizedValue.indexOf(prefix + ' ') === 0
      ) {
        return gameName;
      }
    }
  }

  return null;
}


function agruparRegistrosPorModalidade_(
  rawRows,
  displayRows,
  headerMap,
  firstSourceRow,
  stableIdIndex
) {
  const groups = {};
  const counts = {};
  const unknown = [];

  CONFIG.GAME_ORDER.forEach(function (gameName) {
    groups[gameName] = [];
    counts[gameName] = 0;
  });

  rawRows.forEach(function (rawRow, index) {
    const displayRow = displayRows[index];
    const modalityValue = obterValorFonte_(
      rawRow,
      displayRow,
      headerMap.modality,
      false
    );
    const gameName = normalizarModalidade_(modalityValue);
    const sourceRowNumber = firstSourceRow + index;

    if (!gameName) {
      const item = {
        row: sourceRowNumber,
        value: String(modalityValue || ''),
      };
      unknown.push(item);
      Logger.log(
        'Modalidade não reconhecida na linha %s: %s',
        item.row,
        item.value || '(vazia)'
      );
      return;
    }

    const outputRow = montarLinhaDaModalidade_(
      rawRow,
      displayRow,
      headerMap,
      gameName,
      sourceRowNumber,
      stableIdIndex
    );
    groups[gameName].push(outputRow);
    counts[gameName] += 1;
  });

  return { groups: groups, counts: counts, unknown: unknown };
}


function montarLinhaDaModalidade_(
  rawRow,
  displayRow,
  headerMap,
  gameName,
  sourceRowNumber,
  stableIdIndex
) {
  const valuesBySource = {};
  const displayBySource = {};

  Object.keys(CONFIG.SOURCE_FIELDS).forEach(function (sourceName) {
    const sourceIndex = headerMap[sourceName];
    const preserveDate =
      sourceName === 'timestamp' || sourceName === 'birthDate';
    valuesBySource[sourceName] = obterValorFonte_(
      rawRow,
      displayRow,
      sourceIndex,
      preserveDate
    );
    displayBySource[sourceName] = obterValorFonte_(
      displayRow,
      displayRow,
      sourceIndex,
      false
    );
  });

  return {
    rawRow: sourceRowNumber,
    stableId:
      Number.isInteger(stableIdIndex) && stableIdIndex >= 0
        ? String(rawRow[stableIdIndex] || '').trim()
        : '',
    gameName: gameName,
    valuesBySource: valuesBySource,
    displayBySource: displayBySource,
  };
}


function obterValorFonte_(rawRow, displayRow, zeroBasedIndex, preserveDate) {
  if (!Number.isInteger(zeroBasedIndex) || zeroBasedIndex < 0) {
    return '';
  }
  const rawValue = rawRow[zeroBasedIndex];
  const displayValue = displayRow[zeroBasedIndex];

  if (rawValue === null || rawValue === undefined || rawValue === '') {
    return '';
  }

  if (preserveDate && rawValue instanceof Date && !isNaN(rawValue.getTime())) {
    return rawValue;
  }

  const textValue =
    displayValue === null || displayValue === undefined
      ? String(rawValue)
      : String(displayValue);

  return textValue.charAt(0) === '=' ? "'" + textValue : textValue;
}


function garantirIdsPersistentesRaw_(sourceSheet) {
  const lastRow = sourceSheet.getLastRow();
  let lastColumn = sourceSheet.getLastColumn();
  const headers = lastColumn
    ? sourceSheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0]
    : [];
  const normalizedHeader = normalizarTextoParaComparacao_(
    CONFIG.STABLE_ID_HEADER
  );
  const matches = [];
  headers.forEach(function (header, index) {
    if (normalizarTextoParaComparacao_(header) === normalizedHeader) {
      matches.push(index + 1);
    }
  });
  if (matches.length > 1) {
    throw new Error(
      'A aba RAW possui mais de uma coluna "' +
        CONFIG.STABLE_ID_HEADER +
        '". Mantenha apenas uma para continuar.'
    );
  }

  let column = matches.length ? matches[0] : null;
  let createdColumn = false;
  if (!column) {
    column = lastColumn + 1;
    if (column > sourceSheet.getMaxColumns()) {
      sourceSheet.insertColumnAfter(sourceSheet.getMaxColumns());
    }
    sourceSheet.getRange(1, column).setValue(CONFIG.STABLE_ID_HEADER);
    lastColumn = column;
    createdColumn = true;
  }

  if (lastRow >= 2) {
    const range = sourceSheet.getRange(2, column, lastRow - 1, 1);
    const values = range.getValues();
    const rowsById = {};
    const usedIds = {};
    let changed = false;
    values.forEach(function (row, index) {
      let id = String(row[0] || '').trim();
      if (!id) {
        do {
          id = Utilities.getUuid();
        } while (usedIds[id]);
        row[0] = id;
        changed = true;
      }
      usedIds[id] = true;
      (rowsById[id] || (rowsById[id] = [])).push(index + 2);
    });

    const duplicatedIds = Object.keys(rowsById).filter(function (id) {
      return rowsById[id].length > 1;
    });
    if (duplicatedIds.length) {
      const preferredRows = obterLinhasPreferidasParaIdsDuplicados_(
        sourceSheet.getParent(),
        duplicatedIds
      );
      duplicatedIds.forEach(function (duplicatedId) {
        const rawRows = rowsById[duplicatedId];
        const preferredCandidates = preferredRows[duplicatedId] || [];
        const keepRow =
          preferredCandidates.filter(function (rowNumber) {
            return rawRows.indexOf(rowNumber) >= 0;
          })[0] || rawRows[0];
        rawRows.forEach(function (rowNumber) {
          if (rowNumber === keepRow) {
            return;
          }
          let newId = '';
          do {
            newId = Utilities.getUuid();
          } while (usedIds[newId]);
          values[rowNumber - 2][0] = newId;
          usedIds[newId] = true;
          changed = true;
          Logger.log(
            '[COOPSPORTES][UUID] Cópia da RAW na linha %s recebeu novo identificador. ID duplicado original: %s',
            rowNumber,
            duplicatedId
          );
        });
      });
    }
    if (changed) {
      range.setValues(values);
    }
    if (changed || createdColumn) {
      range.setNumberFormat('@');
    }
  }
  sourceSheet.hideColumns(column);
  return column;
}


function obterLinhasPreferidasParaIdsDuplicados_(spreadsheet, duplicatedIds) {
  const targets = {};
  duplicatedIds.forEach(function (id) {
    targets[id] = true;
  });
  const result = {};
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    if (!sheet || sheet.getLastRow() < 2 || sheet.getLastColumn() < 1) {
      return;
    }
    const map = obterMapaCabecalhosAba_(sheet);
    const idColumn = obterColunaCabecalho_(map, CONFIG.STABLE_ID_HEADER);
    const rawColumn = obterColunaCabecalho_(map, CONFIG.TECHNICAL_HEADER);
    if (!idColumn || !rawColumn) {
      return;
    }
    const startColumn = Math.min(idColumn, rawColumn);
    const columnCount = Math.abs(idColumn - rawColumn) + 1;
    const values = sheet
      .getRange(2, startColumn, sheet.getLastRow() - 1, columnCount)
      .getValues();
    values.forEach(function (row) {
      const id = String(row[idColumn - startColumn] || '').trim();
      if (!targets[id]) {
        return;
      }
      const rawRow = normalizarIdentificadorRaw_(
        row[rawColumn - startColumn]
      );
      if (rawRow) {
        (result[id] || (result[id] = [])).push(rawRow);
      }
    });
  });
  return result;
}


function lerRegistrosOrigem_(sourceSheet) {
  const lastRow = sourceSheet.getLastRow();
  const lastColumn = sourceSheet.getLastColumn();
  if (lastRow < 1 || lastColumn < 1) {
    throw new Error('A aba original não possui uma linha de cabeçalhos válida.');
  }

  const range = sourceSheet.getRange(1, 1, lastRow, lastColumn);
  const rawValues = range.getValues();
  const displayValues = range.getDisplayValues();
  const headerMap = obterMapaDeCabecalhos_(displayValues[0]);
  const stableIdIndex = displayValues[0].findIndex(function (header) {
    return (
      normalizarTextoParaComparacao_(header) ===
      normalizarTextoParaComparacao_(CONFIG.STABLE_ID_HEADER)
    );
  });
  const grouping = agruparRegistrosPorModalidade_(
    rawValues.slice(1),
    displayValues.slice(1),
    headerMap,
    2,
    stableIdIndex
  );
  const records = [];
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    Array.prototype.push.apply(records, grouping.groups[gameName]);
  });

  return {
    lastRow: lastRow,
    lastColumn: lastColumn,
    headerMap: headerMap,
    stableIdIndex: stableIdIndex,
    grouping: grouping,
    records: records,
  };
}


function obterCamposFonteDaModalidade_(gameName, sourceHeaderMap) {
  const fields = CONFIG.COMMON_OUTPUT_FIELDS.concat(
    CONFIG.GAMES[gameName].fields,
    CONFIG.DOCUMENT_OUTPUT_FIELDS
  );
  return fields.filter(function (field) {
    if (!field.optional) {
      return true;
    }
    return Number.isInteger(sourceHeaderMap[field.source]);
  });
}


function obterCabecalhosDaModalidade_(gameName, sourceHeaderMap) {
  return obterCamposFonteDaModalidade_(gameName, sourceHeaderMap).map(
    function (field) {
      return field.label;
    }
  );
}


function obterCabecalhosAdministrativos_(gameName) {
  const admin = CONFIG.ADMIN;
  if (gameName === 'Counter-Strike 2') {
    return [
      admin.CHALLENGER_LINK,
      admin.CHALLENGER_STATUS,
      admin.CHALLENGER_TEAM,
      admin.PAIR,
      admin.GROUP,
      admin.OBSERVATIONS,
    ];
  }
  if (gameName === 'Free Fire') {
    return [
      admin.PAIR,
      admin.BRACKET,
      admin.GROUP,
      admin.OBSERVATIONS,
    ];
  }
  if (gameName === 'Fortnite' || gameName === 'Truco') {
    return [admin.PAIR, admin.GROUP, admin.OBSERVATIONS];
  }
  if (gameName === 'EA FC 26') {
    return [admin.BRACKET, admin.GROUP, admin.OBSERVATIONS];
  }
  return [admin.GROUP, admin.OBSERVATIONS];
}


function obterCabecalhosTecnicos_() {
  return [CONFIG.STABLE_ID_HEADER, CONFIG.TECHNICAL_HEADER];
}


function ehCabecalhoTecnico_(header) {
  const normalized = normalizarTextoParaComparacao_(header);
  return obterCabecalhosTecnicos_().some(function (technicalHeader) {
    return (
      normalized === normalizarTextoParaComparacao_(technicalHeader)
    );
  });
}


function obterOuCriarAba_(spreadsheet, sheetName) {
  return spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
}


function prepararEstruturasDasAbas_(spreadsheet, sourceSheet, sourceHeaderMap) {
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    const sheet = obterOuCriarAba_(
      spreadsheet,
      CONFIG.GAMES[gameName].sheetName
    );
    if (sheet.getSheetId() === sourceSheet.getSheetId()) {
      throw new Error(
        'Bloqueio de segurança: tentativa de alterar a aba original de respostas.'
      );
    }
    prepararEstruturaAbaModalidadeOtimizada_(sheet, gameName, sourceHeaderMap);
  });
}


function prepararEstruturaAbaModalidadeOtimizada_(
  sheet,
  gameName,
  sourceHeaderMap
) {
  desfazerMesclagensDeDados_(sheet);
  let filterRemoved = false;
  function removeFilterForStructureChange() {
    if (filterRemoved) {
      return;
    }
    const filter = sheet.getFilter();
    if (filter) {
      filter.remove();
    }
    filterRemoved = true;
  }

  let map = obterMapaCabecalhosAba_(sheet);
  const hasObservationAlias = CONFIG.ADMIN.OBSERVATIONS_ALIASES.some(
    function (alias) {
      return !!(map.byNormalized[normalizarTextoParaComparacao_(alias)] || [])
        .length;
    }
  );
  if (hasObservationAlias) {
    removeFilterForStructureChange();
    migrarObservacoes_(sheet);
    map = obterMapaCabecalhosAba_(sheet);
  }

  const desiredHeaders = obterCamposFonteDaModalidade_(gameName, sourceHeaderMap)
    .map(function (field) {
      return field.label;
    })
    .concat(obterCabecalhosAdministrativos_(gameName), obterCabecalhosTecnicos_());
  const missingHeaders = desiredHeaders.filter(function (header, index, all) {
    return (
      !obterColunaCabecalho_(map, header) &&
      all
        .map(normalizarTextoParaComparacao_)
        .indexOf(normalizarTextoParaComparacao_(header)) === index
    );
  });
  if (missingHeaders.length) {
    removeFilterForStructureChange();
    const oldLastColumn = sheet.getLastColumn();
    const startColumn = oldLastColumn + 1;
    const requiredLastColumn = startColumn + missingHeaders.length - 1;
    if (requiredLastColumn > sheet.getMaxColumns()) {
      sheet.insertColumnsAfter(
        sheet.getMaxColumns(),
        requiredLastColumn - sheet.getMaxColumns()
      );
    }
    if (oldLastColumn > 0) {
      sheet
        .getRange(1, 1)
        .copyFormatToRange(
          sheet.getSheetId(),
          startColumn,
          requiredLastColumn,
          1,
          1
        );
    }
    sheet
      .getRange(1, startColumn, 1, missingHeaders.length)
      .setValues([missingHeaders]);
    missingHeaders.forEach(function (header, index) {
      sheet.setColumnWidth(
        startColumn + index,
        obterLarguraDaColuna_(header)
      );
    });
    map = obterMapaCabecalhosAba_(sheet);
  }

  const adminHeaders = obterCabecalhosAdministrativos_(gameName);
  if (!ordemAdministrativaCorreta_(map, adminHeaders)) {
    removeFilterForStructureChange();
    adminHeaders.forEach(function (header) {
      moverColunaAntesDe_(sheet, header, 'Nome completo do jogador');
    });
    map = obterMapaCabecalhosAba_(sheet);
  }

  const technicalColumns = obterCabecalhosTecnicos_().map(function (header) {
    return obterColunaCabecalho_(map, header);
  });
  if (
    technicalColumns.some(function (column) { return !column; }) ||
    technicalColumns[0] !== sheet.getLastColumn() - 1 ||
    technicalColumns[1] !== sheet.getLastColumn()
  ) {
    removeFilterForStructureChange();
    garantirColunaTecnicaNoFinal_(sheet);
  } else {
    sheet.hideColumns(technicalColumns[0], 2);
  }
}


function ordemAdministrativaCorreta_(map, adminHeaders) {
  const nameColumn = obterColunaCabecalho_(map, 'Nome completo do jogador');
  if (!nameColumn || nameColumn <= adminHeaders.length) {
    return false;
  }
  const firstAdminColumn = nameColumn - adminHeaders.length;
  return adminHeaders.every(function (header, index) {
    return obterColunaCabecalho_(map, header) === firstAdminColumn + index;
  });
}


function desfazerMesclagensDeDados_(sheet) {
  const lastColumn = sheet.getLastColumn();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2 || lastColumn < 1) {
    return;
  }
  const mergedRanges = sheet
    .getRange(2, 1, lastRow - 1, lastColumn)
    .getMergedRanges();
  mergedRanges.forEach(function (mergedRange) {
    mergedRange.breakApart();
  });
}


function excluirAbasTemporariasOrfas_(spreadsheet) {
  spreadsheet.getSheets().forEach(function (sheet) {
    if (sheet.getName().indexOf('_COOPSPORTES_TMP_') === 0) {
      spreadsheet.deleteSheet(sheet);
    }
  });
}


function prepararEstruturaAbaModalidade_(sheet, gameName, sourceHeaderMap) {
  const filter = sheet.getFilter();
  if (filter) {
    filter.remove();
  }

  migrarObservacoes_(sheet);

  obterCamposFonteDaModalidade_(gameName, sourceHeaderMap).forEach(
    function (field) {
      garantirCabecalho_(sheet, field.label);
    }
  );
  obterCabecalhosAdministrativos_(gameName).forEach(function (header) {
    garantirCabecalho_(sheet, header, 'Nome completo do jogador');
  });

  obterCabecalhosAdministrativos_(gameName).forEach(function (header) {
    moverColunaAntesDe_(sheet, header, 'Nome completo do jogador');
  });

  garantirColunaTecnicaNoFinal_(sheet);
}


function garantirCabecalho_(sheet, header, referenceHeader) {
  let map = obterMapaCabecalhosAba_(sheet);
  const existing = obterColunaCabecalho_(map, header);
  if (existing) {
    return existing;
  }

  const newColumn = sheet.getLastColumn() + 1;
  if (newColumn > sheet.getMaxColumns()) {
    sheet.insertColumnAfter(sheet.getMaxColumns());
  }

  let referenceColumn = null;
  if (referenceHeader) {
    referenceColumn = obterColunaCabecalho_(map, referenceHeader);
  }
  if (!referenceColumn && sheet.getLastColumn() > 0) {
    referenceColumn = 1;
  }
  if (referenceColumn) {
    sheet
      .getRange(1, referenceColumn)
      .copyFormatToRange(sheet.getSheetId(), newColumn, newColumn, 1, 1);
  }
  sheet.getRange(1, newColumn).setValue(header);
  sheet.setColumnWidth(newColumn, obterLarguraDaColuna_(header));
  return newColumn;
}


function migrarObservacoes_(sheet) {
  let map = obterMapaCabecalhosAba_(sheet);
  let canonicalColumn = obterColunaCabecalho_(
    map,
    CONFIG.ADMIN.OBSERVATIONS
  );
  const aliasColumns = [];
  CONFIG.ADMIN.OBSERVATIONS_ALIASES.forEach(function (alias) {
    const normalized = normalizarTextoParaComparacao_(alias);
    (map.byNormalized[normalized] || []).forEach(function (column) {
      aliasColumns.push(column);
    });
  });

  if (!canonicalColumn && aliasColumns.length) {
    canonicalColumn = aliasColumns.shift();
    sheet.getRange(1, canonicalColumn).setValue(CONFIG.ADMIN.OBSERVATIONS);
  }
  if (!canonicalColumn || !aliasColumns.length) {
    return;
  }

  aliasColumns
    .sort(function (a, b) {
      return b - a;
    })
    .forEach(function (aliasColumn) {
      let conflict = false;
      const lastRow = Math.max(sheet.getLastRow(), 1);
      for (let row = 2; row <= lastRow; row += 1) {
        const source = sheet.getRange(row, aliasColumn);
        const target = sheet.getRange(row, canonicalColumn);
        const sourceHasData =
          source.getValue() !== '' ||
          source.getFormula() !== '' ||
          source.getNote() !== '';
        const targetHasData =
          target.getValue() !== '' ||
          target.getFormula() !== '' ||
          target.getNote() !== '';
        if (sourceHasData && !targetHasData) {
          source.copyTo(
            target,
            SpreadsheetApp.CopyPasteType.PASTE_NORMAL,
            false
          );
        } else if (sourceHasData && targetHasData) {
          conflict = true;
        }
      }
      if (conflict) {
        sheet.getRange(1, aliasColumn).setValue('Observação legado (não migrada)');
      } else {
        sheet.deleteColumn(aliasColumn);
        if (aliasColumn < canonicalColumn) {
          canonicalColumn -= 1;
        }
      }
    });
}


function obterMapaCabecalhosAba_(sheet) {
  const lastColumn = sheet.getLastColumn();
  const headers = lastColumn
    ? sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0]
    : [];
  const byNormalized = {};
  headers.forEach(function (header, index) {
    const normalized = normalizarTextoParaComparacao_(header);
    if (!normalized) {
      return;
    }
    if (!byNormalized[normalized]) {
      byNormalized[normalized] = [];
    }
    byNormalized[normalized].push(index + 1);
  });
  return { headers: headers, byNormalized: byNormalized };
}


function obterColunaCabecalho_(map, header) {
  const columns =
    map.byNormalized[normalizarTextoParaComparacao_(header)] || [];
  return columns.length ? columns[0] : null;
}


function moverColunaAntesDe_(sheet, header, anchorHeader) {
  let map = obterMapaCabecalhosAba_(sheet);
  const sourceColumn = obterColunaCabecalho_(map, header);
  const anchorColumn = obterColunaCabecalho_(map, anchorHeader);
  if (!sourceColumn || !anchorColumn || sourceColumn === anchorColumn - 1) {
    return;
  }
  sheet.moveColumns(
    sheet.getRange(1, sourceColumn, 1, 1),
    anchorColumn
  );
}


function garantirColunaTecnicaNoFinal_(sheet) {
  obterCabecalhosTecnicos_().forEach(function (header) {
    const map = obterMapaCabecalhosAba_(sheet);
    const columns =
      map.byNormalized[normalizarTextoParaComparacao_(header)] || [];
    if (!columns.length) {
      garantirCabecalho_(sheet, header);
    } else if (columns.length > 1) {
      throw new Error(
        'Cabeçalho técnico duplicado em "' + sheet.getName() + '": ' + header
      );
    }
  });

  obterCabecalhosTecnicos_().forEach(function (header) {
    const map = obterMapaCabecalhosAba_(sheet);
    const column = obterColunaCabecalho_(map, header);
    if (column !== sheet.getLastColumn()) {
      const destinationColumn = sheet.getLastColumn() + 1;
      if (destinationColumn > sheet.getMaxColumns()) {
        sheet.insertColumnAfter(sheet.getMaxColumns());
      }
      sheet.moveColumns(
        sheet.getRange(1, column, 1, 1),
        destinationColumn
      );
    }
  });
  const finalMap = obterMapaCabecalhosAba_(sheet);
  obterCabecalhosTecnicos_().forEach(function (header) {
    sheet.hideColumns(obterColunaCabecalho_(finalMap, header));
  });
}


function validarAbasParaAtualizacaoIncremental_(spreadsheet, sourceHeaderMap) {
  const errors = [];
  const mapsByGame = {};
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    if (!sheet) {
      errors.push('Aba ausente: ' + CONFIG.GAMES[gameName].sheetName);
      return;
    }
    const map = obterMapaCabecalhosAba_(sheet);
    mapsByGame[gameName] = map;
    const required = obterCabecalhosDaModalidade_(
      gameName,
      sourceHeaderMap
    ).concat(
      obterCabecalhosAdministrativos_(gameName),
      obterCabecalhosTecnicos_()
    );
    required.forEach(function (header) {
      if (!obterColunaCabecalho_(map, header)) {
        errors.push('Cabeçalho ausente em "' + sheet.getName() + '": ' + header);
      }
    });
    const stableColumn = obterColunaCabecalho_(map, CONFIG.STABLE_ID_HEADER);
    const rawColumn = obterColunaCabecalho_(map, CONFIG.TECHNICAL_HEADER);
    if (
      stableColumn &&
      rawColumn &&
      (stableColumn !== sheet.getLastColumn() - 1 ||
        rawColumn !== sheet.getLastColumn())
    ) {
      errors.push(
        'Colunas técnicas fora da posição final em "' + sheet.getName() + '".'
      );
    }
  });
  if (errors.length) {
    throw new Error(
      'Não foi possível preparar as abas derivadas.\n' + errors.join('\n')
    );
  }
  return mapsByGame;
}


function capturarEstadoEManuais_(spreadsheet, sourceSheet, leitura) {
  const recordByRawRow = {};
  leitura.records.forEach(function (record) {
    recordByRawRow[record.rawRow] = record;
  });

  const candidatesByRawRow = {};
  const noIdByGame = {};
  const technicalIdsSeen = {};
  const manualRowsToClearByGame = {};
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    noIdByGame[gameName] = [];
    manualRowsToClearByGame[gameName] = [];
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    const map = obterMapaCabecalhosAba_(sheet);
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    if (lastRow < 2 || lastColumn < 1) {
      return;
    }

    const dataRange = sheet.getRange(2, 1, lastRow - 1, lastColumn);
    const values = dataRange.getValues();
    const formulas = dataRange.getFormulas();
    const notes = dataRange.getNotes();
    const fields = obterCamposFonteDaModalidade_(gameName, leitura.headerMap)
      .filter(function (field) {
        return obterColunaCabecalho_(map, field.label);
      });
    const sourceLabels = {};
    fields.forEach(function (field) {
      sourceLabels[normalizarTextoParaComparacao_(field.label)] = true;
    });
    const fieldColumns = fields.map(function (field) {
      return obterColunaCabecalho_(map, field.label);
    });
    const manualHeaders = [];
    map.headers.forEach(function (header, zeroBasedColumn) {
      const normalized = normalizarTextoParaComparacao_(header);
      if (
        !normalized ||
        sourceLabels[normalized] ||
        ehCabecalhoTecnico_(header)
      ) {
        return;
      }
      manualHeaders.push({ label: header, column: zeroBasedColumn + 1 });
    });
    const technicalColumn = obterColunaCabecalho_(
      map,
      CONFIG.TECHNICAL_HEADER
    );

    values.forEach(function (rowValues, rowIndex) {
      const hasManagedData = fieldColumns.some(function (column) {
        return normalizarValorSincronizacao_(rowValues[column - 1]) !== '';
      });
      if (!hasManagedData) {
        return;
      }

      const hasManualData = manualHeaders.some(function (manualHeader) {
        const zeroBasedColumn = manualHeader.column - 1;
        return (
          normalizarValorSincronizacao_(rowValues[zeroBasedColumn]) !== '' ||
          formulas[rowIndex][zeroBasedColumn] !== '' ||
          notes[rowIndex][zeroBasedColumn] !== ''
        );
      });

      const candidate = {
        sheet: sheet,
        gameName: gameName,
        row: rowIndex + 2,
        lastColumn: lastColumn,
        map: map,
        fields: fields,
        values: rowValues,
        manualHeaders: manualHeaders,
        hasManualData: hasManualData,
      };
      manualRowsToClearByGame[gameName].push({
        row: candidate.row,
        lastColumn: lastColumn,
      });
      const rawRow = normalizarIdentificadorRaw_(
        rowValues[technicalColumn - 1]
      );
      if (rawRow && recordByRawRow[rawRow]) {
        technicalIdsSeen[rawRow] = true;
        if (!candidatesByRawRow[rawRow]) {
          candidatesByRawRow[rawRow] = [];
        }
        candidatesByRawRow[rawRow].push(candidate);
      } else {
        noIdByGame[gameName].push(candidate);
      }
    });
  });

  CONFIG.GAME_ORDER.forEach(function (gameName) {
    const rows = noIdByGame[gameName];
    if (!rows.length) {
      return;
    }
    const sourceBySignature = {};
    leitura.grouping.groups[gameName]
      .filter(function (record) {
        return !technicalIdsSeen[record.rawRow];
      })
      .forEach(function (record) {
        const signature = montarAssinaturaRegistro_(
          record,
          rows[0].fields
        );
        if (!sourceBySignature[signature]) {
          sourceBySignature[signature] = [];
        }
        sourceBySignature[signature].push(record);
      });
    const rowsBySignature = {};
    rows.forEach(function (candidate) {
      const signature = montarAssinaturaLinhaExistente_(candidate);
      if (!rowsBySignature[signature]) {
        rowsBySignature[signature] = [];
      }
      rowsBySignature[signature].push(candidate);
    });
    Object.keys(rowsBySignature).forEach(function (signature) {
      const sourceRecords = sourceBySignature[signature] || [];
      const existingRows = rowsBySignature[signature];
      if (sourceRecords.length === 1 && existingRows.length === 1) {
        const rawRow = sourceRecords[0].rawRow;
        if (!candidatesByRawRow[rawRow]) {
          candidatesByRawRow[rawRow] = [];
        }
        candidatesByRawRow[rawRow].push(existingRows[0]);
      }
    });
  });

  const existingByRawRow = {};
  const manualByRawRow = {};
  let tempSheet = null;
  let tempRow = 1;
  let unsafeManualCount = 0;
  const uniqueCandidates = {};

  Object.keys(candidatesByRawRow).forEach(function (rawRowText) {
    const candidates = candidatesByRawRow[rawRowText];
    if (candidates.length === 1) {
      uniqueCandidates[rawRowText] = candidates[0];
    } else {
      candidates.forEach(function (candidate) {
        if (candidate.hasManualData) {
          unsafeManualCount += 1;
        }
      });
    }
  });
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    noIdByGame[gameName].forEach(function (candidate) {
      const safelyMatched = Object.keys(uniqueCandidates).some(function (rawRow) {
        return uniqueCandidates[rawRow] === candidate;
      });
      if (!safelyMatched && candidate.hasManualData) {
        unsafeManualCount += 1;
      }
    });
  });

  const uniqueIds = Object.keys(uniqueCandidates);
  if (uniqueIds.length) {
    tempSheet = spreadsheet.insertSheet(
      '_COOPSPORTES_TMP_' + Utilities.getUuid().slice(0, 8)
    );
    tempSheet.hideSheet();
  }

  try {
    uniqueIds.forEach(function (rawRowText) {
      const rawRow = Number(rawRowText);
      const candidate = uniqueCandidates[rawRowText];
      const valuesByLabel = {};
      candidate.fields.forEach(function (field) {
        const column = obterColunaCabecalho_(candidate.map, field.label);
        valuesByLabel[field.label] = candidate.values[column - 1];
      });
      existingByRawRow[rawRow] = {
        gameName: candidate.gameName,
        valuesByLabel: valuesByLabel,
      };

      if (tempSheet.getMaxColumns() < candidate.lastColumn) {
        tempSheet.insertColumnsAfter(
          tempSheet.getMaxColumns(),
          candidate.lastColumn - tempSheet.getMaxColumns()
        );
      }
      if (tempRow > tempSheet.getMaxRows()) {
        tempSheet.insertRowsAfter(tempSheet.getMaxRows(), 1);
      }
      candidate.sheet
        .getRange(candidate.row, 1, 1, candidate.lastColumn)
        .copyTo(
          tempSheet.getRange(tempRow, 1, 1, candidate.lastColumn),
          SpreadsheetApp.CopyPasteType.PASTE_NORMAL,
          false
        );
      manualByRawRow[rawRow] = {
        tempSheet: tempSheet,
        tempRow: tempRow,
        gameName: candidate.gameName,
        lastColumn: candidate.lastColumn,
        manualHeaders: candidate.manualHeaders,
      };
      tempRow += 1;
    });
  } catch (error) {
    if (tempSheet) {
      excluirAbaTemporaria_(tempSheet);
    }
    throw error;
  }

  return {
    tempSheet: tempSheet,
    existingByRawRow: existingByRawRow,
    manualByRawRow: manualByRawRow,
    manualRowsToClearByGame: manualRowsToClearByGame,
    unsafeManualCount: unsafeManualCount,
  };
}


function montarAssinaturaRegistro_(record, fields) {
  return JSON.stringify(
    fields.map(function (field) {
      return normalizarValorSincronizacao_(
        record.valuesBySource[field.source]
      );
    })
  );
}


function montarAssinaturaLinhaExistente_(candidate) {
  return JSON.stringify(
    candidate.fields.map(function (field) {
      const column = obterColunaCabecalho_(candidate.map, field.label);
      return normalizarValorSincronizacao_(candidate.values[column - 1]);
    })
  );
}


function normalizarIdentificadorRaw_(value) {
  const number = Number(value);
  return Number.isInteger(number) && number >= 2 ? number : null;
}


function normalizarValorSincronizacao_(value) {
  if (value === null || value === undefined || value === '') {
    return '';
  }
  if (value instanceof Date && !isNaN(value.getTime())) {
    return 'DATE:' + value.getTime();
  }
  return String(value);
}


function criarMedidorTempo_(operationName) {
  const startedAt = Date.now();
  let previousAt = startedAt;
  const phases = [];
  return {
    mark: function (phaseName) {
      const now = Date.now();
      const elapsed = now - previousAt;
      phases.push({ name: phaseName, ms: elapsed });
      previousAt = now;
      Logger.log(
        '[COOPSPORTES][TEMPO][%s] %s: %s ms',
        operationName,
        phaseName,
        elapsed
      );
      return elapsed;
    },
    finish: function () {
      const total = Date.now() - startedAt;
      Logger.log(
        '[COOPSPORTES][TEMPO][%s] TOTAL: %s ms | %s',
        operationName,
        total,
        phases
          .map(function (phase) {
            return phase.name + '=' + phase.ms + 'ms';
          })
          .join(' | ')
      );
      return total;
    },
  };
}


function obterAssinaturaLinhaDerivada_(values, map, fields) {
  return JSON.stringify(
    fields.map(function (field) {
      const column = obterColunaCabecalho_(map, field.label);
      return normalizarValorSincronizacao_(column ? values[column - 1] : '');
    })
  );
}


function migrarIdentificadoresDerivados_(spreadsheet, leitura, mapsByGame) {
  const currentById = {};
  const currentByRawRow = {};
  const sourceByGameSignature = {};
  const sourceByTimestamp = {};
  leitura.records.forEach(function (record) {
    if (!record.stableId) {
      throw new Error('Resposta RAW sem identificador técnico na linha ' + record.rawRow + '.');
    }
    if (currentById[record.stableId]) {
      throw new Error('Identificador técnico duplicado na RAW: ' + record.stableId);
    }
    currentById[record.stableId] = record;
    currentByRawRow[record.rawRow] = record;
    const fields = obterCamposFonteDaModalidade_(record.gameName, leitura.headerMap);
    const signatureKey = record.gameName + '|' + montarAssinaturaRegistro_(record, fields);
    const timestampKey = normalizarValorSincronizacao_(
      record.valuesBySource.timestamp
    );
    (sourceByGameSignature[signatureKey] || (sourceByGameSignature[signatureKey] = [])).push(record);
    (sourceByTimestamp[timestampKey] || (sourceByTimestamp[timestampKey] = [])).push(record);
  });

  const usedIds = {};
  const forcedGames = {};
  let migrated = 0;
  let unsafe = 0;
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    if (!sheet || sheet.getLastRow() < 2) {
      return;
    }
    const map =
      (mapsByGame && mapsByGame[gameName]) || obterMapaCabecalhosAba_(sheet);
    const idColumn = obterColunaCabecalho_(map, CONFIG.STABLE_ID_HEADER);
    const rawColumn = obterColunaCabecalho_(map, CONFIG.TECHNICAL_HEADER);
    if (!idColumn || !rawColumn) {
      forcedGames[gameName] = true;
      return;
    }
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    const values = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
    const fields = obterCamposFonteDaModalidade_(gameName, leitura.headerMap).filter(
      function (field) {
        return obterColunaCabecalho_(map, field.label);
      }
    );
    const managedColumns = fields.map(function (field) {
      return obterColunaCabecalho_(map, field.label);
    });
    let changed = false;

    values.forEach(function (rowValues) {
      const hasManagedData = managedColumns.some(function (column) {
        return normalizarValorSincronizacao_(rowValues[column - 1]) !== '';
      });
      let id = String(rowValues[idColumn - 1] || '').trim();
      if (!hasManagedData && !id) {
        rowValues[rawColumn - 1] = '';
        return;
      }

      if (id) {
        if (usedIds[id]) {
          throw new Error('Identificador duplicado nas guias derivadas: ' + id);
        }
        usedIds[id] = true;
        if (currentById[id]) {
          const currentRawRow = currentById[id].rawRow;
          if (rowValues[rawColumn - 1] !== currentRawRow) {
            rowValues[rawColumn - 1] = currentRawRow;
            changed = true;
          }
        }
        return;
      }

      const legacyRawRow = normalizarIdentificadorRaw_(
        rowValues[rawColumn - 1]
      );
      if (!legacyRawRow) {
        return;
      }

      const signature = obterAssinaturaLinhaDerivada_(rowValues, map, fields);
      const rawRow = legacyRawRow;
      let candidate = null;
      const byRaw = rawRow ? currentByRawRow[rawRow] : null;
      if (
        byRaw &&
        byRaw.gameName === gameName &&
        !usedIds[byRaw.stableId] &&
        montarAssinaturaRegistro_(byRaw, fields) === signature
      ) {
        candidate = byRaw;
      }
      if (!candidate) {
        const signatureMatches =
          sourceByGameSignature[gameName + '|' + signature] || [];
        const available = signatureMatches.filter(function (record) {
          return !usedIds[record.stableId];
        });
        if (available.length === 1) {
          candidate = available[0];
        }
      }
      if (!candidate) {
        const timestampColumn = obterColunaCabecalho_(map, 'Data/Hora da inscrição');
        const timestamp = timestampColumn ? rowValues[timestampColumn - 1] : '';
        const timestampMatches =
          sourceByTimestamp[normalizarValorSincronizacao_(timestamp)] || [];
        const available = timestampMatches.filter(function (record) {
          return !usedIds[record.stableId];
        });
        if (timestamp && available.length === 1) {
          candidate = available[0];
        }
      }

      if (candidate) {
        id = candidate.stableId;
        rowValues[idColumn - 1] = id;
        rowValues[rawColumn - 1] = candidate.rawRow;
        usedIds[id] = true;
        migrated += 1;
        changed = true;
      } else {
        forcedGames[gameName] = true;
        unsafe += 1;
      }
    });

    if (changed) {
      sheet
        .getRange(2, idColumn, values.length, 2)
        .setValues(
          values.map(function (row) {
            return [row[idColumn - 1], row[rawColumn - 1]];
          })
        );
    }
  });
  return { forcedGames: forcedGames, migrated: migrated, unsafe: unsafe };
}


function lerIndiceDerivado_(spreadsheet, leitura, mapsByGame) {
  const existingById = {};
  const orphanRowsByGame = {};
  const technicalValuesByGame = {};
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    orphanRowsByGame[gameName] = [];
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    if (!sheet || sheet.getLastRow() < 2) {
      return;
    }
    const map =
      (mapsByGame && mapsByGame[gameName]) || obterMapaCabecalhosAba_(sheet);
    const idColumn = obterColunaCabecalho_(map, CONFIG.STABLE_ID_HEADER);
    const rawColumn = obterColunaCabecalho_(map, CONFIG.TECHNICAL_HEADER);
    const fields = obterCamposFonteDaModalidade_(gameName, leitura.headerMap).filter(
      function (field) {
        return obterColunaCabecalho_(map, field.label);
      }
    );
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    const values = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
    technicalValuesByGame[gameName] = values.map(function (rowValues) {
      return [
        idColumn ? rowValues[idColumn - 1] : '',
        rawColumn ? rowValues[rawColumn - 1] : '',
      ];
    });
    const managedColumns = fields.map(function (field) {
      return obterColunaCabecalho_(map, field.label);
    });
    values.forEach(function (rowValues, index) {
      const row = index + 2;
      const id = idColumn ? String(rowValues[idColumn - 1] || '').trim() : '';
      const hasManagedData = managedColumns.some(function (column) {
        return normalizarValorSincronizacao_(rowValues[column - 1]) !== '';
      });
      if (!id) {
        const legacyRawRow = rawColumn
          ? normalizarIdentificadorRaw_(rowValues[rawColumn - 1])
          : null;
        if (hasManagedData && legacyRawRow) {
          orphanRowsByGame[gameName].push(row);
        }
        return;
      }
      if (existingById[id]) {
        throw new Error('Identificador duplicado nas guias derivadas: ' + id);
      }
      const valuesByLabel = {};
      fields.forEach(function (field) {
        const column = obterColunaCabecalho_(map, field.label);
        valuesByLabel[field.label] = rowValues[column - 1];
      });
      existingById[id] = {
        stableId: id,
        gameName: gameName,
        row: row,
        rawRow: rawColumn
          ? normalizarIdentificadorRaw_(rowValues[rawColumn - 1])
          : null,
        valuesByLabel: valuesByLabel,
      };
    });
  });
  return {
    existingById: existingById,
    orphanRowsByGame: orphanRowsByGame,
    technicalValuesByGame: technicalValuesByGame,
  };
}


function campoExigeReagrupamentoDupla_(gameName, sourceName) {
  if (CONFIG.PAIR_GAMES.indexOf(gameName) < 0) {
    return false;
  }
  if (sourceName === 'playerName' || sourceName === 'playerWhatsapp') {
    return true;
  }
  const pairSources = obterFontesDupla_(gameName);
  return (
    sourceName === pairSources.name ||
    sourceName === pairSources.phone ||
    /Partner/.test(sourceName)
  );
}


function planejarAtualizacaoIncremental_(leitura, indice, forcedGames) {
  const currentById = {};
  const structuralGames = {};
  const directUpdates = [];
  const summary = {
    newRecords: 0,
    updated: 0,
    moved: 0,
    removed: 0,
    unchanged: 0,
  };
  Object.keys(forcedGames || {}).forEach(function (gameName) {
    if (forcedGames[gameName]) {
      structuralGames[gameName] = true;
    }
  });
  Object.keys(indice.orphanRowsByGame || {}).forEach(function (gameName) {
    if (indice.orphanRowsByGame[gameName].length) {
      structuralGames[gameName] = true;
      summary.removed += indice.orphanRowsByGame[gameName].length;
    }
  });

  leitura.records.forEach(function (record) {
    currentById[record.stableId] = record;
    const existing = indice.existingById[record.stableId];
    if (!existing) {
      summary.newRecords += 1;
      structuralGames[record.gameName] = true;
      return;
    }
    if (existing.gameName !== record.gameName) {
      summary.moved += 1;
      structuralGames[existing.gameName] = true;
      structuralGames[record.gameName] = true;
      return;
    }
    const fields = obterCamposFonteDaModalidade_(record.gameName, leitura.headerMap);
    const changedFields = fields.filter(function (field) {
      return (
        normalizarValorSincronizacao_(existing.valuesByLabel[field.label]) !==
        normalizarValorSincronizacao_(record.valuesBySource[field.source])
      );
    });
    if (!changedFields.length) {
      summary.unchanged += 1;
      return;
    }
    summary.updated += 1;
    if (
      changedFields.some(function (field) {
        return campoExigeReagrupamentoDupla_(record.gameName, field.source);
      })
    ) {
      structuralGames[record.gameName] = true;
    } else {
      directUpdates.push({ record: record, existing: existing, fields: changedFields });
    }
  });

  Object.keys(indice.existingById).forEach(function (id) {
    if (!currentById[id]) {
      summary.removed += 1;
      structuralGames[indice.existingById[id].gameName] = true;
    }
  });

  return {
    currentById: currentById,
    structuralGames: structuralGames,
    directUpdates: directUpdates.filter(function (update) {
      return !structuralGames[update.record.gameName];
    }),
    summary: summary,
  };
}


function calcularResumoSincronizacao_(leitura, existingByRawRow, lastProcessedRow) {
  const summary = { newRecords: 0, updated: 0, moved: 0, unchanged: 0 };
  leitura.records.forEach(function (record) {
    if (record.rawRow > lastProcessedRow) {
      summary.newRecords += 1;
      return;
    }
    const existing = existingByRawRow[record.rawRow];
    if (!existing) {
      summary.updated += 1;
      return;
    }
    if (existing.gameName !== record.gameName) {
      summary.moved += 1;
      return;
    }
    const fields = obterCamposFonteDaModalidade_(
      record.gameName,
      leitura.headerMap
    );
    const changed = fields.some(function (field) {
      return (
        normalizarValorSincronizacao_(existing.valuesByLabel[field.label]) !==
        normalizarValorSincronizacao_(record.valuesBySource[field.source])
      );
    });
    if (changed) {
      summary.updated += 1;
    } else {
      summary.unchanged += 1;
    }
  });
  return summary;
}


function sincronizarTodasAbas_(
  spreadsheet,
  sourceSheet,
  leitura,
  manualByRawRow,
  manualRowsToClearByGame
) {
  const state = {
    recordRowsByGame: {},
    cleanupEndRowsByGame: {},
    pairBlocksByGame: {},
    manualRowsByGame: {},
  };
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    const result = reconstruirAbaModalidadeOtimizada_(
      spreadsheet,
      sourceSheet,
      gameName,
      leitura.grouping.groups[gameName],
      leitura.headerMap,
      manualByRawRow,
      manualRowsToClearByGame[gameName]
    );
    state.recordRowsByGame[gameName] = result.recordRows;
    state.cleanupEndRowsByGame[gameName] = result.cleanupEndRow;
    state.pairBlocksByGame[gameName] = result.pairBlocks;
    state.manualRowsByGame[gameName] = result.manualRows || [];
  });
  return state;
}


function capturarManuaisPorId_(spreadsheet, leitura, gameNames) {
  const selected = gameNames || [];
  const currentById = {};
  leitura.records.forEach(function (record) {
    currentById[record.stableId] = record;
  });
  const manualByRecordKey = {};
  const manualRowsToClearByGame = {};
  const manualRowsByGame = {};
  let tempSheet = null;
  let tempRow = 1;
  let unsafeManualCount = 0;

  function capturarLinhaCompleta(sheet, row, lastColumn, gameName, manualHeaders) {
    if (!tempSheet) {
      tempSheet = spreadsheet.insertSheet(
        '_COOPSPORTES_TMP_' + Utilities.getUuid().slice(0, 8)
      );
      tempSheet.hideSheet();
    }
    if (tempSheet.getMaxColumns() < lastColumn) {
      tempSheet.insertColumnsAfter(
        tempSheet.getMaxColumns(),
        lastColumn - tempSheet.getMaxColumns()
      );
    }
    if (tempRow > tempSheet.getMaxRows()) {
      tempSheet.insertRowsAfter(tempSheet.getMaxRows(), 1);
    }
    sheet
      .getRange(row, 1, 1, lastColumn)
      .copyTo(
        tempSheet.getRange(tempRow, 1, 1, lastColumn),
        SpreadsheetApp.CopyPasteType.PASTE_NORMAL,
        false
      );
    const snapshot = {
      tempSheet: tempSheet,
      tempRow: tempRow,
      originalRow: row,
      gameName: gameName,
      lastColumn: lastColumn,
      manualHeaders: manualHeaders,
    };
    tempRow += 1;
    return snapshot;
  }

  selected.forEach(function (gameName) {
    manualRowsToClearByGame[gameName] = [];
    manualRowsByGame[gameName] = [];
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    if (!sheet || sheet.getLastRow() < 2) {
      return;
    }
    desfazerMesclagensDeDados_(sheet);
    const map = obterMapaCabecalhosAba_(sheet);
    const fields = obterCamposFonteDaModalidade_(gameName, leitura.headerMap).filter(
      function (field) {
        return obterColunaCabecalho_(map, field.label);
      }
    );
    const sourceLabels = {};
    fields.forEach(function (field) {
      sourceLabels[normalizarTextoParaComparacao_(field.label)] = true;
    });
    const manualHeaders = [];
    map.headers.forEach(function (header, index) {
      const normalized = normalizarTextoParaComparacao_(header);
      if (!normalized || sourceLabels[normalized] || ehCabecalhoTecnico_(header)) {
        return;
      }
      manualHeaders.push({ label: header, column: index + 1 });
    });
    const idColumn = obterColunaCabecalho_(map, CONFIG.STABLE_ID_HEADER);
    const rawColumn = obterColunaCabecalho_(map, CONFIG.TECHNICAL_HEADER);
    const fieldColumns = fields.map(function (field) {
      return obterColunaCabecalho_(map, field.label);
    });
    const lastRow = sheet.getLastRow();
    const lastColumn = sheet.getLastColumn();
    const dataRange = sheet.getRange(2, 1, lastRow - 1, lastColumn);
    const values = dataRange.getValues();
    const formulas = dataRange.getFormulas();
    const notes = dataRange.getNotes();

    values.forEach(function (rowValues, index) {
      const row = index + 2;
      const id = idColumn ? String(rowValues[idColumn - 1] || '').trim() : '';
      const rawRow = rawColumn
        ? normalizarIdentificadorRaw_(rowValues[rawColumn - 1])
        : null;
      const hasManagedData = fieldColumns.some(function (column) {
        return normalizarValorSincronizacao_(rowValues[column - 1]) !== '';
      });
      const hasAnyContent = rowValues.some(function (value, columnIndex) {
        return (
          normalizarValorSincronizacao_(value) !== '' ||
          formulas[index][columnIndex] !== '' ||
          notes[index][columnIndex] !== ''
        );
      });
      if (!hasAnyContent && !id && !rawRow) {
        return;
      }
      if (!id && !rawRow && hasAnyContent) {
        manualRowsByGame[gameName].push(
          capturarLinhaCompleta(
            sheet,
            row,
            lastColumn,
            gameName,
            manualHeaders
          )
        );
        return;
      }

      manualRowsToClearByGame[gameName].push({
        row: row,
        lastColumn: lastColumn,
      });

      if (!id || !currentById[id]) {
        if (manualHeaders.some(function (item) {
          return normalizarValorSincronizacao_(rowValues[item.column - 1]) !== '';
        })) {
          unsafeManualCount += 1;
        }
        return;
      }
      manualByRecordKey[id] = capturarLinhaCompleta(
        sheet,
        row,
        lastColumn,
        gameName,
        manualHeaders
      );
    });
  });

  return {
    tempSheet: tempSheet,
    manualByRecordKey: manualByRecordKey,
    manualRowsByGame: manualRowsByGame,
    manualRowsToClearByGame: manualRowsToClearByGame,
    unsafeManualCount: unsafeManualCount,
  };
}


function sincronizarModalidadesAfetadas_(
  spreadsheet,
  sourceSheet,
  leitura,
  preservation,
  gameNames
) {
  const state = {
    recordRowsByGame: {},
    cleanupEndRowsByGame: {},
    pairBlocksByGame: {},
    manualRowsByGame: {},
  };
  gameNames.forEach(function (gameName) {
    const result = reconstruirAbaModalidadeOtimizada_(
      spreadsheet,
      sourceSheet,
      gameName,
      leitura.grouping.groups[gameName],
      leitura.headerMap,
      preservation.manualByRecordKey,
      preservation.manualRowsToClearByGame[gameName],
      preservation.manualRowsByGame[gameName]
    );
    state.recordRowsByGame[gameName] = result.recordRows;
    state.cleanupEndRowsByGame[gameName] = result.cleanupEndRow;
    state.pairBlocksByGame[gameName] = result.pairBlocks;
    state.manualRowsByGame[gameName] = result.manualRows || [];
  });
  return state;
}


function atualizarRegistrosDiretos_(spreadsheet, updates, mapsByGame) {
  updates.forEach(function (update) {
    const gameName = update.record.gameName;
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    const map =
      (mapsByGame && mapsByGame[gameName]) || obterMapaCabecalhosAba_(sheet);
    const descriptors = update.fields
      .map(function (field) {
        return {
          column: obterColunaCabecalho_(map, field.label),
          source: field.source,
          label: field.label,
        };
      })
      .filter(function (descriptor) {
        return !!descriptor.column;
      });
    agruparDescritoresPorColuna_(descriptors).forEach(function (group) {
      const values = [
        group.items.map(function (descriptor) {
          return update.record.valuesBySource[descriptor.source];
        }),
      ];
      const range = sheet.getRange(
        update.existing.row,
        group.start,
        1,
        group.items.length
      );
      range
        .setValues(values)
        .setFontFamily(CONFIG.FORMATTING.FONT_FAMILY)
        .setBackground(CONFIG.FORMATTING.BODY_BACKGROUND);
    });
    aplicarFormatosDeTipo_(
      sheet,
      update.fields,
      [update.existing.row],
      map
    );
  });
}


function sincronizarNumerosRawEmBloco_(
  spreadsheet,
  currentById,
  mapsByGame,
  existingIndex,
  structuralGames
) {
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    if (structuralGames && structuralGames[gameName]) {
      return;
    }
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    if (!sheet || sheet.getLastRow() < 2) {
      return;
    }
    const map =
      (mapsByGame && mapsByGame[gameName]) || obterMapaCabecalhosAba_(sheet);
    const rawColumn = obterColunaCabecalho_(map, CONFIG.TECHNICAL_HEADER);
    const idColumn = obterColunaCabecalho_(map, CONFIG.STABLE_ID_HEADER);
    if (!rawColumn || !idColumn || rawColumn !== idColumn + 1) {
      return;
    }
    const range = sheet.getRange(2, idColumn, sheet.getLastRow() - 1, 2);
    const cached =
      existingIndex &&
      existingIndex.technicalValuesByGame &&
      existingIndex.technicalValuesByGame[gameName];
    const values = cached || range.getValues();
    let changed = false;
    values.forEach(function (row) {
      const id = String(row[0] || '').trim();
      const desired = id && currentById[id] ? currentById[id].rawRow : '';
      if (normalizarValorSincronizacao_(row[1]) !== normalizarValorSincronizacao_(desired)) {
        row[1] = desired;
        changed = true;
      }
    });
    if (changed) {
      range.setValues(values);
    }
  });
}


function ehLinhaManualLivre_(item) {
  return !!(item && item.__coopsportesManualRow === true);
}


function ehRegistroDerivado_(item) {
  return !!item && !ehLinhaManualLivre_(item);
}


function obterLinhasManuaisDoLayout_(ordered) {
  const rows = [];
  ordered.forEach(function (item, index) {
    if (ehLinhaManualLivre_(item)) {
      rows.push(index + 2);
    }
  });
  return rows;
}


function inserirLinhasManuaisNoLayout_(gameName, orderedRecords, manualRows) {
  if (!manualRows.length) {
    return orderedRecords.slice();
  }
  const pending = manualRows
    .slice()
    .sort(function (a, b) {
      return a.originalRow - b.originalRow;
    })
    .map(function (snapshot) {
      return {
        desiredIndex: Math.max(snapshot.originalRow - 2, 0),
        token: {
          __coopsportesManualRow: true,
          snapshot: snapshot,
        },
      };
    });

  const blocks = [];
  if (CONFIG.PAIR_GAMES.indexOf(gameName) >= 0) {
    let current = [];
    orderedRecords.forEach(function (item) {
      current.push(item);
      if (!item) {
        blocks.push(current);
        current = [];
      }
    });
    if (current.length) {
      blocks.push(current);
    }
  } else {
    orderedRecords.forEach(function (item) {
      blocks.push([item]);
    });
  }

  const output = [];
  let manualIndex = 0;
  blocks.forEach(function (block) {
    while (manualIndex < pending.length) {
      const manual = pending[manualIndex];
      const blockEnd = output.length + block.length - 1;
      if (
        manual.desiredIndex < output.length ||
        manual.desiredIndex > blockEnd
      ) {
        break;
      }
      while (output.length < manual.desiredIndex) {
        output.push(null);
      }
      output.push(manual.token);
      manualIndex += 1;
    }
    Array.prototype.push.apply(output, block);
  });

  while (manualIndex < pending.length) {
    const manual = pending[manualIndex];
    while (output.length < manual.desiredIndex) {
      output.push(null);
    }
    output.push(manual.token);
    manualIndex += 1;
  }
  return output;
}


function restaurarLinhasManuaisLivres_(sheet, ordered) {
  const restoredRows = [];
  ordered.forEach(function (item, index) {
    if (!ehLinhaManualLivre_(item)) {
      return;
    }
    const snapshot = item.snapshot;
    const targetRow = index + 2;
    const columnCount = Math.min(snapshot.lastColumn, sheet.getLastColumn());
    snapshot.tempSheet
      .getRange(snapshot.tempRow, 1, 1, columnCount)
      .copyTo(
        sheet.getRange(targetRow, 1, 1, columnCount),
        SpreadsheetApp.CopyPasteType.PASTE_NORMAL,
        false
      );
    restoredRows.push(targetRow);
  });
  return restoredRows;
}


function reconstruirAbaModalidadeOtimizada_(
  spreadsheet,
  sourceSheet,
  gameName,
  records,
  sourceHeaderMap,
  manualByRawRow,
  manualRowsToClear,
  freeManualRows
) {
  const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
  if (sheet.getSheetId() === sourceSheet.getSheetId()) {
    throw new Error(
      'Bloqueio de seguranca: tentativa de reconstruir a aba original de respostas.'
    );
  }

  const oldLastRow = sheet.getLastRow();
  const orderedRecords = ordenarRegistrosDaModalidade_(gameName, records);
  const ordered = inserirLinhasManuaisNoLayout_(
    gameName,
    orderedRecords,
    freeManualRows || []
  );
  const protectedManualRows = obterLinhasManuaisDoLayout_(ordered);
  const pairLayout = montarLayoutNumeracaoDuplas_(gameName, ordered);
  const requiredRows = ordered.length + 1;
  if (sheet.getMaxRows() < requiredRows) {
    sheet.insertRowsAfter(
      sheet.getMaxRows(),
      requiredRows - sheet.getMaxRows()
    );
  }

  const map = obterMapaCabecalhosAba_(sheet);
  const fields = obterCamposFonteDaModalidade_(gameName, sourceHeaderMap);
  const cleanupEndRow = Math.max(oldLastRow, requiredRows);

  limparLinhasAntigasComRegistro_(sheet, manualRowsToClear);
  limparCamposGerenciados_(
    sheet,
    map,
    fields
      .map(function (field) {
        return field.label;
      })
      .concat(obterCabecalhosAdministrativos_(gameName), obterCabecalhosTecnicos_()),
    cleanupEndRow,
    protectedManualRows
  );

  restaurarLinhasManuais_(
    sheet,
    gameName,
    ordered,
    map,
    fields,
    manualByRawRow
  );
  escreverCamposGerenciadosEmBlocos_(sheet, map, fields, ordered);
  escreverNumeracaoDuplas_(sheet, map, pairLayout.values, ordered);

  const recordRows = [];
  const managedFormatRows = [];
  ordered.forEach(function (record, index) {
    if (!ehLinhaManualLivre_(record)) {
      managedFormatRows.push(index + 2);
    }
    if (ehRegistroDerivado_(record)) {
      recordRows.push(index + 2);
    }
  });
  formatarAba_(
    sheet,
    gameName,
    fields,
    ordered.length,
    recordRows,
    managedFormatRows
  );
  const freeManualTargetRows = restaurarLinhasManuaisLivres_(sheet, ordered);
  limparFormatacaoGerenciadaAposFim_(
    sheet,
    map,
    fields
      .map(function (field) {
        return field.label;
      })
      .concat(obterCabecalhosAdministrativos_(gameName), obterCabecalhosTecnicos_()),
    requiredRows + 1,
    cleanupEndRow
  );
  return {
    recordRows: recordRows,
    cleanupEndRow: cleanupEndRow,
    pairBlocks: pairLayout.blocks,
    manualRows: freeManualTargetRows,
  };
}


function limparFormatacaoGerenciadaAposFim_(
  sheet,
  map,
  headers,
  startRow,
  endRow
) {
  if (startRow > endRow || endRow < 2) {
    return;
  }
  const columns = headers
    .map(function (header) {
      return obterColunaCabecalho_(map, header);
    })
    .filter(function (column, index, all) {
      return column && all.indexOf(column) === index;
    });
  agruparNumerosConsecutivos_(columns).forEach(function (interval) {
    sheet
      .getRange(startRow, interval.start, endRow - startRow + 1, interval.count)
      .clearFormat()
      .clearDataValidations();
  });
}


function limparLinhasAntigasComRegistro_(sheet, rowsToClear) {
  const items = rowsToClear || [];
  if (!items.length) {
    return;
  }
  const lastColumn = items.reduce(function (largest, item) {
    return Math.max(largest, item.lastColumn || 0);
  }, 0);
  if (!lastColumn) {
    return;
  }
  const rows = items.map(function (item) {
    return item.row;
  });
  agruparLinhasConsecutivas_(rows).forEach(function (interval) {
    sheet
      .getRange(interval.start, 1, interval.count, lastColumn)
      .clearContent()
      .clearNote();
  });
}


function limparCamposGerenciados_(
  sheet,
  map,
  headers,
  cleanupEndRow,
  protectedRows
) {
  if (cleanupEndRow < 2) {
    return;
  }
  const columns = headers
    .map(function (header) {
      return obterColunaCabecalho_(map, header);
    })
    .filter(function (column, index, all) {
      return column && all.indexOf(column) === index;
    });
  const writableRows = obterIntervalosSemRegistro_(
    protectedRows || [],
    2,
    cleanupEndRow
  );
  agruparNumerosConsecutivos_(columns).forEach(function (interval) {
    writableRows.forEach(function (rowInterval) {
      sheet
        .getRange(
          rowInterval.start,
          interval.start,
          rowInterval.count,
          interval.count
        )
        .clearContent()
        .clearNote();
    });
  });
}


function restaurarLinhasManuais_(
  sheet,
  gameName,
  ordered,
  map,
  fields,
  manualByRawRow
) {
  const managedSourceLabels = {};
  fields.forEach(function (field) {
    managedSourceLabels[normalizarTextoParaComparacao_(field.label)] = true;
  });
  ordered.forEach(function (record, index) {
    if (!ehRegistroDerivado_(record)) {
      return;
    }
    const recordKey = record ? record.stableId || record.rawRow : null;
    const snapshot = record
      ? manualByRawRow[recordKey] || manualByRawRow[record.rawRow]
      : null;
    if (!record || !snapshot) {
      return;
    }
    const targetRow = index + 2;
    if (snapshot.gameName === gameName) {
      const columnCount = Math.min(snapshot.lastColumn, sheet.getLastColumn());
      snapshot.tempSheet
        .getRange(snapshot.tempRow, 1, 1, columnCount)
        .copyTo(
          sheet.getRange(targetRow, 1, 1, columnCount),
          SpreadsheetApp.CopyPasteType.PASTE_NORMAL,
          false
        );
      return;
    }

    snapshot.manualHeaders.forEach(function (manualHeader) {
      const normalized = normalizarTextoParaComparacao_(manualHeader.label);
      if (
        managedSourceLabels[normalized] ||
        ehCabecalhoTecnico_(manualHeader.label)
      ) {
        return;
      }
      const targetColumn = obterColunaCabecalho_(map, manualHeader.label);
      if (!targetColumn) {
        return;
      }
      const sourceCell = snapshot.tempSheet.getRange(
        snapshot.tempRow,
        manualHeader.column
      );
      const targetCell = sheet.getRange(targetRow, targetColumn);
      sourceCell.copyTo(
        targetCell,
        SpreadsheetApp.CopyPasteType.PASTE_NORMAL,
        false
      );
      targetCell.setNote(sourceCell.getNote());
      targetCell.setDataValidation(sourceCell.getDataValidation());
    });
  });
}


function escreverCamposGerenciadosEmBlocos_(sheet, map, fields, ordered) {
  if (!ordered.length) {
    return;
  }
  const descriptors = fields.map(function (field) {
    return {
      column: obterColunaCabecalho_(map, field.label),
      source: field.source,
      technical: false,
    };
  });
  descriptors.push({
    column: obterColunaCabecalho_(map, CONFIG.TECHNICAL_HEADER),
    source: null,
    technical: 'rawRow',
  });
  descriptors.push({
    column: obterColunaCabecalho_(map, CONFIG.STABLE_ID_HEADER),
    source: null,
    technical: 'stableId',
  });
  const writableIntervals = agruparLinhasConsecutivas_(
    ordered
      .map(function (record, index) {
        return ehLinhaManualLivre_(record) ? null : index + 2;
      })
      .filter(function (row) {
        return row !== null;
      })
  );
  agruparDescritoresPorColuna_(descriptors).forEach(function (group) {
    writableIntervals.forEach(function (rowInterval) {
      const startIndex = rowInterval.start - 2;
      const values = ordered
        .slice(startIndex, startIndex + rowInterval.count)
        .map(function (record) {
          return group.items.map(function (descriptor) {
            if (!ehRegistroDerivado_(record)) {
              return '';
            }
            if (descriptor.technical === 'rawRow') {
              return record.rawRow;
            }
            if (descriptor.technical === 'stableId') {
              return record.stableId || '';
            }
            return record.valuesBySource[descriptor.source];
          });
        });
      sheet
        .getRange(
          rowInterval.start,
          group.start,
          values.length,
          group.items.length
        )
        .setValues(values);
    });
  });
}


function montarLayoutNumeracaoDuplas_(gameName, ordered) {
  const values = ordered.map(function () {
    return [''];
  });
  const blocks = [];
  if (CONFIG.PAIR_GAMES.indexOf(gameName) < 0) {
    return { values: values, blocks: blocks };
  }

  let pairNumber = 0;
  let index = 0;
  while (index < ordered.length) {
    if (!ehRegistroDerivado_(ordered[index])) {
      index += 1;
      continue;
    }
    const startIndex = index;
    let recordCount = 0;
    while (index < ordered.length && ehRegistroDerivado_(ordered[index])) {
      recordCount += 1;
      index += 1;
    }
    if (recordCount === 2) {
      pairNumber += 1;
      const label = 'DUPLA ' + pairNumber;
      values[startIndex][0] = label;
      blocks.push({
        startRow: startIndex + 2,
        rowCount: recordCount,
        label: label,
      });
    }
  }
  return { values: values, blocks: blocks };
}


function escreverNumeracaoDuplas_(sheet, map, values, ordered) {
  if (!values.length) {
    return;
  }
  const pairColumn = obterColunaCabecalho_(map, CONFIG.ADMIN.PAIR);
  if (!pairColumn) {
    return;
  }
  if (!ordered) {
    sheet.getRange(2, pairColumn, values.length, 1).setValues(values);
    return;
  }
  const writableRows = ordered
    .map(function (item, index) {
      return ehLinhaManualLivre_(item) ? null : index + 2;
    })
    .filter(function (row) {
      return row !== null;
    });
  agruparLinhasConsecutivas_(writableRows).forEach(function (interval) {
    const startIndex = interval.start - 2;
    sheet
      .getRange(interval.start, pairColumn, interval.count, 1)
      .setValues(values.slice(startIndex, startIndex + interval.count));
  });
}


function agruparDescritoresPorColuna_(descriptors) {
  const sorted = descriptors
    .filter(function (item) {
      return item.column;
    })
    .sort(function (a, b) {
      return a.column - b.column;
    });
  const groups = [];
  sorted.forEach(function (item) {
    const last = groups.length ? groups[groups.length - 1] : null;
    if (!last || item.column !== last.items[last.items.length - 1].column + 1) {
      groups.push({ start: item.column, items: [item] });
    } else {
      last.items.push(item);
    }
  });
  return groups;
}


function agruparNumerosConsecutivos_(numbers) {
  const sorted = numbers.slice().sort(function (a, b) {
    return a - b;
  });
  const result = [];
  sorted.forEach(function (number) {
    const last = result.length ? result[result.length - 1] : null;
    if (!last || number !== last.start + last.count) {
      result.push({ start: number, count: 1 });
    } else {
      last.count += 1;
    }
  });
  return result;
}


function agruparLinhasConsecutivas_(rows) {
  return agruparNumerosConsecutivos_(
    rows.filter(function (row, index, all) {
      return row >= 2 && all.indexOf(row) === index;
    })
  );
}


function reconstruirAbaModalidade_(
  spreadsheet,
  sourceSheet,
  gameName,
  records,
  sourceHeaderMap,
  manualByRawRow,
  manualRowsToClear
) {
  const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
  if (sheet.getSheetId() === sourceSheet.getSheetId()) {
    throw new Error(
      'Bloqueio de segurança: tentativa de reconstruir a aba original de respostas.'
    );
  }

  const ordered = ordenarRegistrosDaModalidade_(gameName, records);
  const requiredRows = ordered.length + 1;
  if (sheet.getMaxRows() < requiredRows) {
    sheet.insertRowsAfter(
      sheet.getMaxRows(),
      requiredRows - sheet.getMaxRows()
    );
  }

  const map = obterMapaCabecalhosAba_(sheet);
  const fields = obterCamposFonteDaModalidade_(gameName, sourceHeaderMap);
  const oldLastRow = sheet.getLastRow();
  const clearRows = Math.max(oldLastRow - 1, ordered.length);
  if (clearRows > 0) {
    fields.forEach(function (field) {
      const column = obterColunaCabecalho_(map, field.label);
      sheet.getRange(2, column, clearRows, 1).clearContent().clearNote();
    });
    obterCabecalhosTecnicos_().forEach(function (header) {
      const technicalColumnToClear = obterColunaCabecalho_(map, header);
      if (technicalColumnToClear) {
        sheet
          .getRange(2, technicalColumnToClear, clearRows, 1)
          .clearContent()
          .clearNote();
      }
    });
  }
  (manualRowsToClear || []).forEach(function (item) {
    item.manualHeaders.forEach(function (manualHeader) {
      const column = obterColunaCabecalho_(map, manualHeader.label);
      if (column) {
        sheet.getRange(item.row, column).clearContent().clearNote();
      }
    });
  });

  fields.forEach(function (field) {
    const column = obterColunaCabecalho_(map, field.label);
    const values = ordered.map(function (record) {
      return [record ? record.valuesBySource[field.source] : ''];
    });
    if (values.length) {
      sheet.getRange(2, column, values.length, 1).setValues(values);
    }
  });

  const technicalColumn = obterColunaCabecalho_(map, CONFIG.TECHNICAL_HEADER);
  if (ordered.length) {
    sheet
      .getRange(2, technicalColumn, ordered.length, 1)
      .setValues(
        ordered.map(function (record) {
          return [record ? record.rawRow : ''];
        })
      );
  }

  const managedSourceLabels = {};
  fields.forEach(function (field) {
    managedSourceLabels[normalizarTextoParaComparacao_(field.label)] = true;
  });
  ordered.forEach(function (record, index) {
    if (!record || !manualByRawRow[record.rawRow]) {
      return;
    }
    const snapshot = manualByRawRow[record.rawRow];
    snapshot.manualHeaders.forEach(function (manualHeader) {
      const normalized = normalizarTextoParaComparacao_(manualHeader.label);
      if (
        managedSourceLabels[normalized] ||
        ehCabecalhoTecnico_(manualHeader.label)
      ) {
        return;
      }
      const targetColumn = obterColunaCabecalho_(map, manualHeader.label);
      if (!targetColumn) {
        return;
      }
      const sourceCell = snapshot.tempSheet.getRange(
        snapshot.tempRow,
        manualHeader.column
      );
      const targetCell = sheet.getRange(index + 2, targetColumn);
      sourceCell.copyTo(
        targetCell,
        SpreadsheetApp.CopyPasteType.PASTE_NORMAL,
        false
      );
      targetCell.setNote(sourceCell.getNote());
      targetCell.setDataValidation(sourceCell.getDataValidation());
    });
  });

  formatarAba_(sheet, gameName, fields, ordered.length);
}


function ordenarRegistrosDaModalidade_(gameName, records) {
  if (CONFIG.PAIR_GAMES.indexOf(gameName) < 0) {
    return records.slice().sort(function (a, b) {
      return a.rawRow - b.rawRow;
    });
  }

  const orderedRecords = records.slice().sort(function (a, b) {
    return a.rawRow - b.rawRow;
  });
  const used = {};
  const result = [];
  orderedRecords.forEach(function (record) {
    if (used[record.rawRow]) {
      return;
    }
    used[record.rawRow] = true;
    result.push(record);
    const partner = encontrarParceiro_(gameName, record, orderedRecords, used);
    if (partner) {
      used[partner.rawRow] = true;
      result.push(partner);
    }
    result.push(null);
  });
  return result;
}


function encontrarParceiro_(gameName, record, records, used) {
  const pairSources = obterFontesDupla_(gameName);
  const playerPhone = normalizarTelefoneDupla_(
    record.valuesBySource.playerWhatsapp
  );
  const partnerPhone = normalizarTelefoneDupla_(
    record.valuesBySource[pairSources.phone]
  );
  let candidates = [];

  if (partnerPhone) {
    candidates = records.filter(function (candidate) {
      return (
        candidate.rawRow !== record.rawRow &&
        !used[candidate.rawRow] &&
        normalizarTelefoneDupla_(
          candidate.valuesBySource.playerWhatsapp
        ) === partnerPhone
      );
    });
    if (candidates.length) {
      const reciprocal = candidates.filter(function (candidate) {
        return (
          playerPhone &&
          normalizarTelefoneDupla_(
            candidate.valuesBySource[pairSources.phone]
          ) === playerPhone
        );
      });
      return (reciprocal.length ? reciprocal : candidates)[0];
    }
  }

  const playerName = normalizarNomeDupla_(record.valuesBySource.playerName);
  const partnerName = normalizarNomeDupla_(
    record.valuesBySource[pairSources.name]
  );
  if (!partnerName) {
    return null;
  }
  candidates = records.filter(function (candidate) {
    return (
      candidate.rawRow !== record.rawRow &&
      !used[candidate.rawRow] &&
      normalizarNomeDupla_(candidate.valuesBySource.playerName) === partnerName
    );
  });
  if (!candidates.length) {
    return null;
  }
  const reciprocalByName = candidates.filter(function (candidate) {
    return (
      playerName &&
      normalizarNomeDupla_(candidate.valuesBySource[pairSources.name]) ===
        playerName
    );
  });
  return (reciprocalByName.length ? reciprocalByName : candidates)[0];
}


function obterFontesDupla_(gameName) {
  if (gameName === 'Counter-Strike 2') {
    return { name: 'cs2PartnerName', phone: 'cs2PartnerWhatsapp' };
  }
  if (gameName === 'Fortnite') {
    return { name: 'fortnitePartnerName', phone: 'fortnitePartnerWhatsapp' };
  }
  if (gameName === 'Free Fire') {
    return { name: 'freeFirePartnerName', phone: 'freeFirePartnerWhatsapp' };
  }
  return { name: 'trucoPartnerName', phone: 'trucoPartnerWhatsapp' };
}


function normalizarTelefoneDupla_(value) {
  return String(value === null || value === undefined ? '' : value)
    .replace(/[\s()\-+]/g, '')
    .trim();
}


function normalizarNomeDupla_(value) {
  return String(value === null || value === undefined ? '' : value)
    .trim()
    .replace(/\s+/g, ' ')
    .toUpperCase();
}


function formatarAba_(
  sheet,
  gameName,
  fields,
  dataRowCount,
  recordRows,
  managedFormatRows
) {
  const map = obterMapaCabecalhosAba_(sheet);
  const lastColumn = sheet.getLastColumn();
  if (lastColumn > 0) {
    sheet
      .getRange(1, 1, 1, lastColumn)
      .setFontFamily(CONFIG.FORMATTING.FONT_FAMILY);
    agruparLinhasConsecutivas_(recordRows || []).forEach(function (interval) {
      sheet
        .getRange(interval.start, 1, interval.count, lastColumn)
        .setFontFamily(CONFIG.FORMATTING.FONT_FAMILY);
    });
  }

  const managedHeaders = fields
    .map(function (field) {
      return field.label;
    })
    .concat(
      obterCabecalhosAdministrativos_(gameName),
      obterCabecalhosTecnicos_()
    );
  const managedColumns = managedHeaders
    .map(function (header) {
      return obterColunaCabecalho_(map, header);
    })
    .filter(function (column, index, all) {
      return column && all.indexOf(column) === index;
    });
  agruparNumerosConsecutivos_(managedColumns).forEach(function (interval) {
    sheet
      .getRange(1, interval.start, 1, interval.count)
      .setBackground(CONFIG.FORMATTING.HEADER_BACKGROUND)
      .setFontColor(CONFIG.FORMATTING.HEADER_FONT_COLOR)
      .setFontWeight('bold')
      .setHorizontalAlignment('center')
      .setVerticalAlignment('middle')
      .setWrap(true)
      .setFontFamily(CONFIG.FORMATTING.FONT_FAMILY);
  });

  sheet.setRowHeight(1, CONFIG.FORMATTING.HEADER_ROW_HEIGHT);
  sheet.setFrozenRows(1);
  sheet.setHiddenGridlines(true);
  aplicarFundoBrancoCamposFonte_(
    sheet,
    map,
    fields,
    managedFormatRows || recordRows || []
  );
  aplicarFormatosDeTipo_(sheet, fields, recordRows || []);

  const filter = sheet.getFilter();
  if (dataRowCount > 0 && lastColumn > 0) {
    const filterRange = filter ? filter.getRange() : null;
    const filterIsCurrent =
      filterRange &&
      filterRange.getRow() === 1 &&
      filterRange.getColumn() === 1 &&
      filterRange.getNumRows() === dataRowCount + 1 &&
      filterRange.getNumColumns() === lastColumn;
    if (!filterIsCurrent) {
      if (filter) {
        filter.remove();
      }
      sheet.getRange(1, 1, dataRowCount + 1, lastColumn).createFilter();
    }
  } else if (filter) {
    filter.remove();
  }
  obterCabecalhosTecnicos_().forEach(function (header) {
    const technicalColumn = obterColunaCabecalho_(map, header);
    if (technicalColumn) {
      sheet.hideColumns(technicalColumn);
    }
  });
}


function aplicarFundoBrancoCamposFonte_(sheet, map, fields, recordRows) {
  if (!recordRows.length) {
    return;
  }
  const columns = fields
    .map(function (field) {
      return obterColunaCabecalho_(map, field.label);
    })
    .filter(function (column, index, all) {
      return column && all.indexOf(column) === index;
    });
  agruparNumerosConsecutivos_(columns).forEach(function (interval) {
    agruparLinhasConsecutivas_(recordRows).forEach(function (rowInterval) {
      sheet
        .getRange(
          rowInterval.start,
          interval.start,
          rowInterval.count,
          interval.count
        )
        .setBackground(CONFIG.FORMATTING.BODY_BACKGROUND);
    });
  });
}


function aplicarFormatosDeTipo_(sheet, fields, recordRows, existingMap) {
  if (!recordRows.length) {
    return;
  }
  const map = existingMap || obterMapaCabecalhosAba_(sheet);
  const descriptors = fields.map(function (field) {
    let numberFormat = '@';
    if (field.label === 'Data/Hora da inscrição') {
      numberFormat = 'dd/MM/yyyy HH:mm:ss';
    } else if (field.label === 'Data de nascimento') {
      numberFormat = 'dd/MM/yyyy';
    }
    return {
      column: obterColunaCabecalho_(map, field.label),
      numberFormat: numberFormat,
    };
  });
  const rowIntervals = agruparLinhasConsecutivas_(recordRows);
  const columnIntervals = agruparNumerosConsecutivos_(
    descriptors.map(function (item) {
      return item.column;
    })
  );
  rowIntervals.forEach(function (rowInterval) {
    columnIntervals.forEach(function (columnInterval) {
      sheet
        .getRange(
          rowInterval.start,
          columnInterval.start,
          rowInterval.count,
          columnInterval.count
        )
        .setFontFamily(CONFIG.FORMATTING.FONT_FAMILY)
        .setFontColor(CONFIG.FORMATTING.BODY_FONT_COLOR)
        .setVerticalAlignment('middle')
        .setHorizontalAlignment('left')
        .setWrap(true);
    });
    ['@', 'dd/MM/yyyy HH:mm:ss', 'dd/MM/yyyy'].forEach(function (format) {
      const formatColumns = descriptors
        .filter(function (item) {
          return item.numberFormat === format;
        })
        .map(function (item) {
          return item.column;
        });
      agruparNumerosConsecutivos_(formatColumns).forEach(function (interval) {
        sheet
          .getRange(
            rowInterval.start,
            interval.start,
            rowInterval.count,
            interval.count
          )
          .setNumberFormat(format);
      });
    });
  });
}


function aplicarModelosAdministrativosOtimizado_(
  spreadsheet,
  syncState,
  fullCleanup,
  gameNames
) {
  const selectedGames = gameNames || CONFIG.GAME_ORDER;
  const csSheet = spreadsheet.getSheetByName('Counter-Strike 2');
  if (!csSheet) {
    throw new Error(
      'A guia Counter-Strike 2 é necessária como modelo administrativo.'
    );
  }
  const csMap = obterMapaCabecalhosAba_(csSheet);
  const sourceGroupColumn = obterColunaCabecalho_(
    csMap,
    CONFIG.ADMIN.GROUP
  );
  const sourcePairColumn = obterColunaCabecalho_(csMap, CONFIG.ADMIN.PAIR);
  const sourceStatusColumn = obterColunaCabecalho_(
    csMap,
    CONFIG.ADMIN.CHALLENGER_STATUS
  );
  const sourceGroupCell = csSheet.getRange(2, sourceGroupColumn);
  const sourcePairCell = sourcePairColumn
    ? csSheet.getRange(2, sourcePairColumn)
    : null;
  const sourceStatusCell = sourceStatusColumn
    ? csSheet.getRange(2, sourceStatusColumn)
    : null;

  const groupValidation =
    obterPrimeiraValidacaoDaColuna_(csSheet, sourceGroupColumn) ||
    SpreadsheetApp.newDataValidation()
      .requireValueInList(CONFIG.ADMIN.GROUP_STATES, true)
      .setAllowInvalid(false)
      .build();
  const statusValidation =
    obterPrimeiraValidacaoDaColuna_(csSheet, sourceStatusColumn) ||
    SpreadsheetApp.newDataValidation()
      .requireValueInList(CONFIG.ADMIN.CHALLENGER_STATES, true)
      .setAllowInvalid(false)
      .build();
  const gamesWithCsLast = selectedGames
    .filter(function (gameName) {
      return gameName !== 'Counter-Strike 2';
    })
    .concat(
      selectedGames.indexOf('Counter-Strike 2') >= 0
        ? ['Counter-Strike 2']
        : []
    );

  gamesWithCsLast.forEach(function (gameName) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    const map = obterMapaCabecalhosAba_(sheet);
    const recordRows = syncState.recordRowsByGame[gameName] || [];
    const manualRows = (syncState.manualRowsByGame || {})[gameName] || [];
    const occupiedRows = recordRows.concat(manualRows);
    const cleanupEndRow = obterFimLimpezaAdministrativa_(
      sheet,
      syncState.cleanupEndRowsByGame[gameName],
      fullCleanup
    );
    limparConteudoAdministrativoSemRegistro_(
      sheet,
      map,
      gameName,
      occupiedRows,
      cleanupEndRow
    );

    const groupColumn = obterColunaCabecalho_(map, CONFIG.ADMIN.GROUP);
    limparAparenciaColunaSemRegistro_(
      sheet,
      groupColumn,
      occupiedRows,
      cleanupEndRow
    );
    aplicarFormatoModeloNasLinhas_(
      sourceGroupCell,
      sheet,
      groupColumn,
      recordRows
    );
    sheet.setColumnWidth(
      groupColumn,
      csSheet.getColumnWidth(sourceGroupColumn)
    );
    aplicarValidacaoNasLinhas_(sheet, groupColumn, recordRows, groupValidation);
    aplicarEstiloBaseAdministrativo_(sheet, groupColumn, recordRows, true);
    replicarRegrasCondicionaisParaLinhas_(
      sheet,
      groupColumn,
      CONFIG.ADMIN.GROUP_STATES,
      occupiedRows
    );
  });

  const pairGamesWithCsLast = CONFIG.PAIR_GAMES
    .filter(function (gameName) {
      return (
        selectedGames.indexOf(gameName) >= 0 &&
        gameName !== 'Counter-Strike 2'
      );
    })
    .concat(
      selectedGames.indexOf('Counter-Strike 2') >= 0
        ? ['Counter-Strike 2']
        : []
    );
  pairGamesWithCsLast.forEach(function (gameName) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    const map = obterMapaCabecalhosAba_(sheet);
    const pairColumn = obterColunaCabecalho_(map, CONFIG.ADMIN.PAIR);
    const recordRows = syncState.recordRowsByGame[gameName] || [];
    const manualRows = (syncState.manualRowsByGame || {})[gameName] || [];
    const occupiedRows = recordRows.concat(manualRows);
    const cleanupEndRow = obterFimLimpezaAdministrativa_(
      sheet,
      syncState.cleanupEndRowsByGame[gameName],
      fullCleanup
    );
    limparAparenciaColunaSemRegistro_(
      sheet,
      pairColumn,
      occupiedRows,
      cleanupEndRow
    );
    if (sourcePairCell) {
      aplicarFormatoModeloNasLinhas_(
        sourcePairCell,
        sheet,
        pairColumn,
        recordRows
      );
      sheet.setColumnWidth(
        pairColumn,
        csSheet.getColumnWidth(sourcePairColumn)
      );
    } else {
      obterRangesDeLinhas_(sheet, pairColumn, recordRows).forEach(function (range) {
        range
          .setBackground('#F3F3F3')
          .setHorizontalAlignment('left')
          .setVerticalAlignment('middle')
          .setWrap(true);
      });
    }
    aplicarEstiloVisualDuplas_(sheet, pairColumn, recordRows);
    aplicarMesclagensDuplas_(
      sheet,
      pairColumn,
      (syncState.pairBlocksByGame || {})[gameName] || [],
      cleanupEndRow,
      manualRows
    );
  });

  ['EA FC 26', 'Free Fire'].filter(function (gameName) {
    return selectedGames.indexOf(gameName) >= 0;
  }).forEach(function (gameName) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    const map = obterMapaCabecalhosAba_(sheet);
    const bracketColumn = obterColunaCabecalho_(map, CONFIG.ADMIN.BRACKET);
    const recordRows = syncState.recordRowsByGame[gameName] || [];
    const manualRows = (syncState.manualRowsByGame || {})[gameName] || [];
    const occupiedRows = recordRows.concat(manualRows);
    const cleanupEndRow = obterFimLimpezaAdministrativa_(
      sheet,
      syncState.cleanupEndRowsByGame[gameName],
      fullCleanup
    );
    limparAparenciaColunaSemRegistro_(
      sheet,
      bracketColumn,
      occupiedRows,
      cleanupEndRow
    );
    obterRangesDeLinhas_(sheet, bracketColumn, recordRows).forEach(function (range) {
      range
        .setBackground(CONFIG.FORMATTING.ADMIN_GRAY)
        .setFontFamily(CONFIG.FORMATTING.FONT_FAMILY)
        .setFontColor(CONFIG.FORMATTING.BODY_FONT_COLOR);
    });
  });

  if (
    sourceStatusColumn &&
    selectedGames.indexOf('Counter-Strike 2') >= 0
  ) {
    const recordRows = syncState.recordRowsByGame['Counter-Strike 2'] || [];
    const manualRows =
      (syncState.manualRowsByGame || {})['Counter-Strike 2'] || [];
    const occupiedRows = recordRows.concat(manualRows);
    const cleanupEndRow = obterFimLimpezaAdministrativa_(
      csSheet,
      syncState.cleanupEndRowsByGame['Counter-Strike 2'],
      fullCleanup
    );
    limparAparenciaColunaSemRegistro_(
      csSheet,
      sourceStatusColumn,
      occupiedRows,
      cleanupEndRow
    );
    if (sourceStatusCell) {
      aplicarFormatoModeloNasLinhas_(
        sourceStatusCell,
        csSheet,
        sourceStatusColumn,
        recordRows
      );
    }
    aplicarValidacaoNasLinhas_(
      csSheet,
      sourceStatusColumn,
      recordRows,
      statusValidation
    );
    aplicarEstiloBaseAdministrativo_(
      csSheet,
      sourceStatusColumn,
      recordRows,
      false
    );
    replicarRegrasCondicionaisParaLinhas_(
      csSheet,
      sourceStatusColumn,
      CONFIG.ADMIN.CHALLENGER_STATES,
      occupiedRows
    );
  }
}


function obterFimLimpezaAdministrativa_(sheet, previousEndRow, fullCleanup) {
  return Math.max(previousEndRow || sheet.getLastRow() || 1, 2);
}


function limparConteudoAdministrativoSemRegistro_(
  sheet,
  map,
  gameName,
  recordRows,
  endRow
) {
  const columns = obterCabecalhosAdministrativos_(gameName)
    .map(function (header) {
      return obterColunaCabecalho_(map, header);
    })
    .filter(function (column, index, all) {
      return column && all.indexOf(column) === index;
    });
  const blankRows = obterIntervalosSemRegistro_(recordRows, 2, endRow);
  agruparNumerosConsecutivos_(columns).forEach(function (columnInterval) {
    blankRows.forEach(function (rowInterval) {
      sheet
        .getRange(
          rowInterval.start,
          columnInterval.start,
          rowInterval.count,
          columnInterval.count
        )
        .clearContent()
        .clearNote();
    });
  });
}


function limparAparenciaColunaSemRegistro_(
  sheet,
  column,
  recordRows,
  endRow
) {
  if (!column || endRow < 2) {
    return;
  }
  obterIntervalosSemRegistro_(recordRows, 2, endRow).forEach(function (interval) {
    sheet
      .getRange(interval.start, column, interval.count, 1)
      .clearFormat()
      .clearDataValidations();
  });
}


function obterIntervalosSemRegistro_(recordRows, startRow, endRow) {
  if (endRow < startRow) {
    return [];
  }
  const occupied = {};
  recordRows.forEach(function (row) {
    if (row >= startRow && row <= endRow) {
      occupied[row] = true;
    }
  });
  const result = [];
  let currentStart = null;
  for (let row = startRow; row <= endRow + 1; row += 1) {
    const blank = row <= endRow && !occupied[row];
    if (blank && currentStart === null) {
      currentStart = row;
    } else if (!blank && currentStart !== null) {
      result.push({ start: currentStart, count: row - currentStart });
      currentStart = null;
    }
  }
  return result;
}


function obterRangesDeLinhas_(sheet, column, recordRows) {
  if (!column) {
    return [];
  }
  return agruparLinhasConsecutivas_(recordRows).map(function (interval) {
    return sheet.getRange(interval.start, column, interval.count, 1);
  });
}


function aplicarFormatoModeloNasLinhas_(sourceCell, sheet, column, recordRows) {
  if (!sourceCell || !column) {
    return;
  }
  agruparLinhasConsecutivas_(recordRows).forEach(function (interval) {
    sourceCell.copyFormatToRange(
      sheet.getSheetId(),
      column,
      column,
      interval.start,
      interval.start + interval.count - 1
    );
  });
}


function aplicarValidacaoNasLinhas_(sheet, column, recordRows, validation) {
  if (!validation) {
    return;
  }
  obterRangesDeLinhas_(sheet, column, recordRows).forEach(function (range) {
    range.setDataValidation(validation);
  });
}


function aplicarEstiloBaseAdministrativo_(
  sheet,
  column,
  recordRows,
  forceBlackFont
) {
  obterRangesDeLinhas_(sheet, column, recordRows).forEach(function (range) {
    range.setFontFamily(CONFIG.FORMATTING.FONT_FAMILY);
    if (forceBlackFont) {
      range.setFontColor(CONFIG.FORMATTING.GROUP_ENTERED_FONT_COLOR);
    }
  });
}


function aplicarEstiloVisualDuplas_(sheet, column, recordRows) {
  obterRangesDeLinhas_(sheet, column, recordRows).forEach(function (range) {
    range
      .setBackground(CONFIG.FORMATTING.PAIR_BACKGROUND)
      .setFontFamily(CONFIG.FORMATTING.FONT_FAMILY)
      .setFontColor(CONFIG.FORMATTING.BODY_FONT_COLOR)
      .setFontWeight('normal')
      .setHorizontalAlignment('center')
      .setVerticalAlignment('middle')
      .setWrap(true);
  });
}


function aplicarMesclagensDuplas_(
  sheet,
  column,
  pairBlocks,
  cleanupEndRow,
  protectedRows
) {
  if (!column || cleanupEndRow < 2) {
    return;
  }
  const protectedSet = {};
  (protectedRows || []).forEach(function (row) {
    protectedSet[row] = true;
  });
  sheet
    .getRange(2, column, cleanupEndRow - 1, 1)
    .getMergedRanges()
    .forEach(function (mergedRange) {
      let touchesProtectedRow = false;
      for (
        let row = mergedRange.getRow();
        row < mergedRange.getRow() + mergedRange.getNumRows();
        row += 1
      ) {
        if (protectedSet[row]) {
          touchesProtectedRow = true;
          break;
        }
      }
      if (!touchesProtectedRow) {
        mergedRange.breakApart();
      }
    });
  pairBlocks.forEach(function (block) {
    sheet
      .getRange(block.startRow, column, block.rowCount, 1)
      .merge()
      .setValue(block.label)
      .setBackground(CONFIG.FORMATTING.PAIR_BACKGROUND)
      .setFontFamily(CONFIG.FORMATTING.FONT_FAMILY)
      .setFontColor(CONFIG.FORMATTING.BODY_FONT_COLOR)
      .setFontWeight('normal')
      .setHorizontalAlignment('center')
      .setVerticalAlignment('middle')
      .setWrap(true);
  });
}


function replicarRegrasCondicionaisParaLinhas_(
  sheet,
  column,
  states,
  recordRows
) {
  const preserved = sheet.getConditionalFormatRules().filter(function (rule) {
    return !regraCondicionalGerenciada_(rule, column, states);
  });
  const targetRanges = obterRangesDeLinhas_(sheet, column, recordRows);
  const copied = targetRanges.length
    ? criarRegrasCondicionaisPadrao_(states, targetRanges)
    : [];
  sheet.setConditionalFormatRules(preserved.concat(copied));
}


function regraCondicionalContemEstado_(rule, state) {
  const condition = rule.getBooleanCondition();
  if (!condition) {
    return false;
  }
  const normalizedState = normalizarTextoParaComparacao_(state);
  return condition.getCriteriaValues().some(function (value) {
    return normalizarTextoParaComparacao_(value) === normalizedState;
  });
}


function criarRegrasCondicionaisPadrao_(states, targetRanges) {
  const styles = {
    SAIU: { background: '#85200C', font: '#FFFFFF' },
    ENVIADO: { background: '#FFFF00', font: '#000000' },
    ENTROU: { background: '#B7E1CD', font: '#000000' },
    INALTERADO: { background: '#D9D9D9', font: '#000000' },
    CONFIRMADO: { background: '#B7E1CD', font: '#000000' },
    'NAO ACEITO': { background: '#85200C', font: '#FFFFFF' },
  };
  return states.map(function (state) {
    const style =
      styles[normalizarTextoParaComparacao_(state)] ||
      { background: '#FFFFFF', font: '#000000' };
    return SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(state)
      .setBackground(style.background)
      .setFontColor(style.font)
      .setRanges(targetRanges)
      .build();
  });
}


function removerPreenchimentosDeColunasNeutras_(
  spreadsheet,
  syncState,
  fullCleanup,
  gameNames
) {
  (gameNames || CONFIG.GAME_ORDER).forEach(function (gameName) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    if (!sheet) {
      return;
    }
    const endRow = obterFimLimpezaAdministrativa_(
      sheet,
      syncState.cleanupEndRowsByGame[gameName],
      fullCleanup
    );
    if (endRow < 2) {
      return;
    }
    const map = obterMapaCabecalhosAba_(sheet);
    let headers = [
      'Data/Hora da inscrição',
      'Tipo de vínculo / Você é',
    ];
    if (fullCleanup) {
      headers = headers.concat(
        CONFIG.COMMON_OUTPUT_FIELDS.map(function (field) {
          return field.label;
        }),
        CONFIG.GAMES[gameName].fields.map(function (field) {
          return field.label;
        }),
        CONFIG.DOCUMENT_OUTPUT_FIELDS.map(function (field) {
          return field.label;
        })
      );
    }
    if (gameName === 'Counter-Strike 2') {
      headers.push(CONFIG.ADMIN.CHALLENGER_LINK);
    }
    const columns = headers
      .map(function (header) {
        return obterColunaCabecalho_(map, header);
      })
      .filter(function (column, index, all) {
        return column && all.indexOf(column) === index;
      });
    const recordRows = syncState.recordRowsByGame[gameName] || [];
    agruparNumerosConsecutivos_(columns).forEach(function (interval) {
      agruparLinhasConsecutivas_(recordRows).forEach(function (rowInterval) {
        sheet
          .getRange(
            rowInterval.start,
            interval.start,
            rowInterval.count,
            interval.count
          )
          .setBackground(CONFIG.FORMATTING.BODY_BACKGROUND);
      });
    });
  });
}


function limparFormatacaoForaDaAreaUsada_(spreadsheet, syncState) {
  CONFIG.GAME_ORDER.forEach(function (gameName) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    if (!sheet || sheet.getLastColumn() < 1) {
      return;
    }
    const logicalEnd = Math.max(
      sheet.getLastRow(),
      (syncState.cleanupEndRowsByGame || {})[gameName] || 1,
      1
    );
    if (logicalEnd >= sheet.getMaxRows()) {
      return;
    }
    sheet
      .getRange(
        logicalEnd + 1,
        1,
        sheet.getMaxRows() - logicalEnd,
        sheet.getLastColumn()
      )
      .clearFormat()
      .clearDataValidations();
  });
}


function limpezaAdministrativaConcluida_() {
  return (
    PropertiesService.getDocumentProperties().getProperty(
      CONFIG.PROPERTIES.ADMIN_CLEANUP_VERSION
    ) === '1'
  );
}


function marcarLimpezaAdministrativaConcluida_() {
  PropertiesService.getDocumentProperties().setProperty(
    CONFIG.PROPERTIES.ADMIN_CLEANUP_VERSION,
    '1'
  );
}


function migracaoIdsConcluida_() {
  return (
    PropertiesService.getDocumentProperties().getProperty(
      CONFIG.PROPERTIES.ID_MIGRATION_VERSION
    ) === '1'
  );
}


function marcarMigracaoIdsConcluida_() {
  PropertiesService.getDocumentProperties().setProperty(
    CONFIG.PROPERTIES.ID_MIGRATION_VERSION,
    '1'
  );
}


function aplicarModelosAdministrativos_(spreadsheet) {
  const csSheet = spreadsheet.getSheetByName('Counter-Strike 2');
  if (!csSheet) {
    throw new Error(
      'A guia Counter-Strike 2 é necessária como modelo administrativo.'
    );
  }
  const csMap = obterMapaCabecalhosAba_(csSheet);
  const sourceGroupColumn = obterColunaCabecalho_(
    csMap,
    CONFIG.ADMIN.GROUP
  );
  const sourcePairColumn = obterColunaCabecalho_(csMap, CONFIG.ADMIN.PAIR);
  const sourceStatusColumn = obterColunaCabecalho_(
    csMap,
    CONFIG.ADMIN.CHALLENGER_STATUS
  );

  const groupValidation =
    obterPrimeiraValidacaoDaColuna_(csSheet, sourceGroupColumn) ||
    SpreadsheetApp.newDataValidation()
      .requireValueInList(CONFIG.ADMIN.GROUP_STATES, true)
      .setAllowInvalid(false)
      .build();
  const groupRules = obterRegrasCondicionaisModelo_(
    csSheet,
    sourceGroupColumn,
    CONFIG.ADMIN.GROUP_STATES
  );
  const statusValidation = obterPrimeiraValidacaoDaColuna_(
    csSheet,
    sourceStatusColumn
  );
  const statusRules = obterRegrasCondicionaisModelo_(
    csSheet,
    sourceStatusColumn,
    CONFIG.ADMIN.CHALLENGER_STATES
  );

  CONFIG.GAME_ORDER.forEach(function (gameName) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    const map = obterMapaCabecalhosAba_(sheet);
    const groupColumn = obterColunaCabecalho_(map, CONFIG.ADMIN.GROUP);
    const groupRange = sheet.getRange(
      2,
      groupColumn,
      Math.max(sheet.getMaxRows() - 1, 1),
      1
    );
    csSheet
      .getRange(2, sourceGroupColumn)
      .copyFormatToRange(
        sheet.getSheetId(),
        groupColumn,
        groupColumn,
        2,
        sheet.getMaxRows()
      );
    sheet.setColumnWidth(
      groupColumn,
      csSheet.getColumnWidth(sourceGroupColumn)
    );
    groupRange
      .setDataValidation(groupValidation)
      .setFontFamily(CONFIG.FORMATTING.FONT_FAMILY);
    replicarRegrasCondicionais_(
      sheet,
      groupColumn,
      CONFIG.ADMIN.GROUP_STATES,
      groupRules
    );
  });

  CONFIG.PAIR_GAMES.forEach(function (gameName) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    const map = obterMapaCabecalhosAba_(sheet);
    const pairColumn = obterColunaCabecalho_(map, CONFIG.ADMIN.PAIR);
    const pairRange = sheet.getRange(
      2,
      pairColumn,
      Math.max(sheet.getMaxRows() - 1, 1),
      1
    );
    if (sourcePairColumn) {
      csSheet
        .getRange(2, sourcePairColumn)
        .copyFormatToRange(
          sheet.getSheetId(),
          pairColumn,
          pairColumn,
          2,
          sheet.getMaxRows()
        );
      sheet.setColumnWidth(
        pairColumn,
        csSheet.getColumnWidth(sourcePairColumn)
      );
    } else {
      pairRange
        .setBackground('#F3F3F3')
        .setHorizontalAlignment('left')
        .setVerticalAlignment('middle')
        .setWrap(true);
    }
    pairRange.setFontFamily(CONFIG.FORMATTING.FONT_FAMILY);
  });

  ['EA FC 26', 'Free Fire'].forEach(function (gameName) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    const map = obterMapaCabecalhosAba_(sheet);
    const bracketColumn = obterColunaCabecalho_(map, CONFIG.ADMIN.BRACKET);
    const technicalColumn = obterColunaCabecalho_(
      map,
      CONFIG.TECHNICAL_HEADER
    );
    const lastRow = Math.max(sheet.getLastRow(), 2);
    const technicalValues = sheet
      .getRange(2, technicalColumn, lastRow - 1, 1)
      .getValues();
    sheet
      .getRange(2, bracketColumn, lastRow - 1, 1)
      .setBackgrounds(
        technicalValues.map(function (row) {
          return [row[0] === '' ? null : CONFIG.FORMATTING.ADMIN_GRAY];
        })
      )
      .setFontFamily(CONFIG.FORMATTING.FONT_FAMILY);
  });

  if (sourceStatusColumn) {
    const statusRange = csSheet.getRange(
      2,
      sourceStatusColumn,
      Math.max(csSheet.getMaxRows() - 1, 1),
      1
    );
    if (statusValidation) {
      statusRange.setDataValidation(statusValidation);
    }
    statusRange.setFontFamily(CONFIG.FORMATTING.FONT_FAMILY);
    replicarRegrasCondicionais_(
      csSheet,
      sourceStatusColumn,
      CONFIG.ADMIN.CHALLENGER_STATES,
      statusRules
    );
  }
}


function obterPrimeiraValidacaoDaColuna_(sheet, column) {
  if (!column || sheet.getMaxRows() < 2) {
    return null;
  }
  const rowsToInspect = Math.min(
    Math.max(sheet.getLastRow() - 1, 1),
    100
  );
  const validations = sheet
    .getRange(2, column, rowsToInspect, 1)
    .getDataValidations();
  for (let row = 0; row < validations.length; row += 1) {
    if (validations[row][0]) {
      return validations[row][0];
    }
  }
  return null;
}


function obterRegrasCondicionaisModelo_(sheet, column, states) {
  return sheet.getConditionalFormatRules().filter(function (rule) {
    return regraCondicionalGerenciada_(rule, column, states);
  });
}


function regraCondicionalGerenciada_(rule, column, states) {
  const condition = rule.getBooleanCondition();
  if (!condition) {
    return false;
  }
  const normalizedStates = states.map(normalizarTextoParaComparacao_);
  const hasState = condition.getCriteriaValues().some(function (value) {
    return (
      normalizedStates.indexOf(normalizarTextoParaComparacao_(value)) >= 0
    );
  });
  if (!hasState) {
    return false;
  }
  return rule.getRanges().some(function (range) {
    return (
      range.getColumn() <= column && range.getLastColumn() >= column
    );
  });
}


function replicarRegrasCondicionais_(sheet, column, states, modelRules) {
  const preserved = sheet.getConditionalFormatRules().filter(function (rule) {
    return !regraCondicionalGerenciada_(rule, column, states);
  });
  const targetRange = sheet.getRange(
    2,
    column,
    Math.max(sheet.getMaxRows() - 1, 1),
    1
  );
  const copied = modelRules.map(function (rule) {
    return rule.copy().setRanges([targetRange]).build();
  });
  sheet.setConditionalFormatRules(preserved.concat(copied));
}


function excluirAbaTemporaria_(sheet) {
  try {
    sheet.getParent().deleteSheet(sheet);
  } catch (error) {
    Logger.log(
      'Não foi possível remover a aba temporária %s: %s',
      sheet.getName(),
      obterMensagemErro_(error)
    );
  }
}


function obterLarguraDaColuna_(header) {
  const normalized = normalizarTextoParaComparacao_(header);
  if (normalized.indexOf('TERMO DE') >= 0 || normalized.indexOf('LINK') >= 0) {
    return 260;
  }
  if (normalized.indexOf('NOME COMPLETO') >= 0) {
    return 230;
  }
  if (normalized.indexOf('COOPERATIVA') >= 0) {
    return 220;
  }
  if (normalized.indexOf('MODALIDADE') >= 0) {
    return 260;
  }
  if (normalized.indexOf('DEFICIENCIA') >= 0) {
    return 250;
  }
  if (normalized.indexOf('E MAIL') >= 0) {
    return 220;
  }
  if (normalized.indexOf('DATA HORA') >= 0) {
    return 165;
  }
  if (normalized.indexOf('NASCIMENTO') >= 0) {
    return 145;
  }
  if (
    normalized.indexOf('WHATSAPP') >= 0 ||
    normalized === 'CPF' ||
    normalized.indexOf('ID DO') >= 0
  ) {
    return 155;
  }
  if (normalized.indexOf('NICKNAME') >= 0) {
    return 190;
  }
  return 175;
}


function ordenarAbasDerivadas_(spreadsheet, sourceSheet) {
  CONFIG.GAME_ORDER.forEach(function (gameName, index) {
    const sheet = spreadsheet.getSheetByName(CONFIG.GAMES[gameName].sheetName);
    if (!sheet) {
      return;
    }
    const sourcePosition = spreadsheet.getSheets().indexOf(sourceSheet) + 1;
    const targetPosition = sourcePosition + index + 1;
    spreadsheet.setActiveSheet(sheet);
    spreadsheet.moveActiveSheet(targetPosition);
  });
  spreadsheet.setActiveSheet(sourceSheet);
}


function obterUltimaLinhaProcessada_() {
  const properties = PropertiesService.getDocumentProperties();
  if (!properties) {
    throw new Error(
      'Não foi possível acessar as propriedades deste documento. Verifique se o script está vinculado à planilha.'
    );
  }

  const rawValue = properties.getProperty(
    CONFIG.PROPERTIES.LAST_PROCESSED_ROW
  );
  if (rawValue === null) {
    return null;
  }

  const value = Number(rawValue);
  if (!Number.isInteger(value) || value < 1) {
    throw new Error(
      'A propriedade ' +
        CONFIG.PROPERTIES.LAST_PROCESSED_ROW +
        ' possui valor inválido: ' +
        rawValue
    );
  }
  return value;
}


function definirUltimaLinhaProcessada_(rowNumber) {
  if (!Number.isInteger(rowNumber) || rowNumber < 1) {
    throw new Error('Última linha inválida: ' + rowNumber);
  }

  const properties = PropertiesService.getDocumentProperties();
  if (!properties) {
    throw new Error(
      'Não foi possível acessar as propriedades deste documento.'
    );
  }
  properties.setProperty(
    CONFIG.PROPERTIES.LAST_PROCESSED_ROW,
    String(rowNumber)
  );
}


function montarResumoAtualizacao_(
  summary,
  unknown,
  lastProcessedRow,
  unsafeManualCount,
  affectedGames,
  totalMs
) {
  const lines = [
    'Atualização concluída.',
    '',
    'Novos registros: ' + summary.newRecords,
    'Registros atualizados: ' + summary.updated,
    'Registros movidos de modalidade: ' + summary.moved,
    'Registros removidos: ' + (summary.removed || 0),
    'Registros sem alteração: ' + summary.unchanged,
    'Modalidades não reconhecidas: ' + unknown.length,
  ];
  if (unsafeManualCount) {
    lines.push(
      'Dados manuais sem associação segura: ' + unsafeManualCount
    );
  }
  lines.push('');
  lines.push('Última linha processada: ' + lastProcessedRow);
  lines.push(
    'Modalidades reconstruídas: ' +
      ((affectedGames || []).length
        ? affectedGames.join(', ')
        : 'nenhuma')
  );
  if (Number.isFinite(totalMs)) {
    lines.push('Tempo total: ' + (totalMs / 1000).toFixed(2) + ' s');
  }

  if (unknown.length) {
    lines.push('');
    lines.push(
      'Consulte o registro de execução para ver as linhas não reconhecidas.'
    );
  }

  return lines.join('\n');
}


function montarAvisoModalidadesDesconhecidas_(unknown) {
  const preview = unknown.slice(0, 10).map(function (item) {
    return 'Linha ' + item.row + ': ' + (item.value || '(vazia)');
  });
  const lines = [
    'Foram encontradas ' +
      unknown.length +
      ' modalidade(s) não reconhecida(s) na fonte.',
    '',
  ].concat(preview);

  if (unknown.length > preview.length) {
    lines.push('... e mais ' + (unknown.length - preview.length) + '.');
  }

  lines.push('');
  lines.push('Nenhuma alteração foi gravada nas abas derivadas.');
  lines.push('O controle da última linha não foi avançado.');
  lines.push('Corrija a modalidade na fonte e tente novamente.');
  lines.push(
    'Se houve exclusão ou reorganização física de linhas, execute "Reconstruir todas as modalidades".'
  );

  return lines.join('\n');
}


function montarResumoReconstrucao_(
  counts,
  unknown,
  lastProcessedRow,
  unsafeManualCount,
  totalMs
) {
  const lines = ['Reconstrução concluída.', ''];
  let total = 0;

  CONFIG.GAME_ORDER.forEach(function (gameName) {
    lines.push(gameName + ': ' + counts[gameName]);
    total += counts[gameName];
  });

  lines.push('');
  lines.push('Total: ' + total);
  lines.push('Modalidades não reconhecidas: ' + unknown.length);
  if (unsafeManualCount) {
    lines.push(
      'Dados manuais sem associação segura: ' + unsafeManualCount
    );
  }
  lines.push('');
  lines.push('Controle atualizado até a linha: ' + lastProcessedRow);
  if (Number.isFinite(totalMs)) {
    lines.push('Tempo total: ' + (totalMs / 1000).toFixed(2) + ' s');
  }

  if (unknown.length) {
    lines.push('');
    lines.push(
      'Consulte o registro de execução para ver as linhas não reconhecidas.'
    );
  }

  return lines.join('\n');
}


function obterMensagemErro_(error) {
  if (error && error.message) {
    return error.message;
  }
  return String(error);
}


function registrarErro_(error) {
  const details = error && error.stack ? error.stack : String(error);
  console.error(details);
  Logger.log(details);
}
