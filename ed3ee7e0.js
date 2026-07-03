const quizData = [
  {
    id: 1,
    question: "Qual é a relação entre a 'casa edificada sobre a rocha' e a perseverança?",
    options: [
      "A rocha representa a facilidade de construir sem grandes esforços.",
      "A casa sobre a rocha cai quando os ventos e rios são muito fortes.",
      "A perseverança é o caráter sólido que não cede às tempestades e crises.",
      "A perseverança é irrelevante se o alicerce for apenas emocional."
    ],
    answer: 2,
    explanation: "Jesus ensina que ouvir e praticar Sua palavra produz firmeza espiritual. A imagem da casa sobre a rocha aponta para uma vida sustentada por obediência e perseverança, capaz de resistir às provações.",
    reference: "Mateus 7:24-25; Lucas 6:47-48"
  },
  {
    id: 2,
    question: "Qual é a principal função da segunda besta (a que surge da terra)?",
    options: [
      "Prover sustento econômico para os fiéis.",
      "Destruir a primeira besta para assumir o controle.",
      "Usar persuasão e engano para forçar a adoração à primeira besta.",
      "Atuar como um líder político militar supremo."
    ],
    answer: 2,
    explanation: "A segunda besta exerce um papel religioso e propagandístico. Ela realiza sinais e engana os habitantes da terra para levá-los a adorar a primeira besta.",
    reference: "Apocalipse 13:11-15"
  },
  {
    id: 3,
    question: "O que acontece quando a primeira taça é derramada sobre a Terra?",
    options: [
      "As águas dos rios tornam-se sangue.",
      "Escuridão total sobre o trono da besta.",
      "Úlceras malignas e dolorosas nos adoradores da besta.",
      "O sol torna-se abrasador."
    ],
    answer: 2,
    explanation: "Na primeira taça, o juízo recai sobre os que têm a marca da besta, trazendo úlceras dolorosas. O texto destaca um castigo específico sobre os adoradores da besta.",
    reference: "Apocalipse 16:2"
  },
  {
    id: 4,
    question: "O que garante que a salvação é um presente da Graça?",
    options: [
      "A obediência aos líderes da igreja.",
      "A qualidade das obras do crente.",
      "A ausência de pecados após a conversão.",
      "O sacrifício vicário de Jesus."
    ],
    answer: 3,
    explanation: "A salvação não é conquistada por mérito humano, mas concedida por Deus com base na obra substitutiva de Cristo. Jesus morreu em favor dos pecadores, tornando possível a redenção pela graça.",
    reference: "Efésios 2:8-9; Romanos 5:8; 1 Pedro 3:18"
  },
  {
    id: 5,
    question: "Quem irá comparecer para o julgamento diante do Grande Trono Branco?",
    options: [
      "Apenas os que não aceitaram a Cristo.",
      "Apenas os mártires que sofreram na Grande Tribulação.",
      "Todos os mortos, grandes e pequenos.",
      "Apenas os cristãos que morrem antes da Grande Tribulação."
    ],
    answer: 2,
    explanation: "A cena do Grande Trono Branco apresenta os mortos, sem distinção de posição, diante de Deus. O texto enfatiza a universalidade desse comparecimento no juízo final.",
    reference: "Apocalipse 20:11-13"
  },
  {
    id: 6,
    question: "Qual é o principal instrumento utilizado por Deus para o processo de santificação, segundo João 17?",
    options: [
      "As experiências emocionais intensas.",
      "O isolamento social.",
      "A Sua Palavra.",
      "A disciplina da meditação silenciosa."
    ],
    answer: 2,
    explanation: "Na oração sacerdotal, Jesus pede ao Pai que santifique os discípulos na verdade. Em seguida, declara claramente que a palavra de Deus é a verdade.",
    reference: "João 17:17"
  },
  {
    id: 7,
    question: "No Sermão do Monte, a quem Jesus compara aquele que ouve e pratica as Suas Palavras?",
    options: [
      "A um servo que multiplica os talentos recebidos do seu senhor.",
      "A um semeador que espalha sementes em terra boa.",
      "A um homem prudente que constrói sua casa sobre a rocha.",
      "A um mercador que encontra uma pérola de grande valor."
    ],
    answer: 2,
    explanation: "Jesus conclui o Sermão do Monte com a ilustração dos dois fundamentos. O homem prudente representa quem ouve e pratica as palavras de Cristo.",
    reference: "Mateus 7:24"
  },
  {
    id: 8,
    question: "Sobre o tema da morte e destino final, como o texto contrapõe o Novo Testamento ao conceito de reencarnação?",
    options: [
      "O Novo Testamento afirma que os homens morrem apenas uma vez.",
      "O Novo Testamento defende o retorno sucessivo para purificação, semelhante ao Karma.",
      "A ressurreição é vista no texto como um evento que ocorre após múltiplas encarnações.",
      "A reencarnação é apresentada como uma forma de perdão cristão para resolver o passado."
    ],
    answer: 0,
    explanation: "O ensino bíblico destaca uma única morte seguida de juízo. Em vez de reencarnação, o Novo Testamento fala de ressurreição e prestação de contas diante de Deus.",
    reference: "Hebreus 9:27; João 5:28-29"
  },
  {
    id: 9,
    question: "O que representam as taças de ouro transbordando de incenso que os anciãos seguram?",
    options: [
      "As orações contínuas dos santos na terra.",
      "A punição reservada aos ímpios.",
      "As ofertas de dinheiro dos crentes na terra.",
      "Os selos do livro que o Cordeiro irá abrir."
    ],
    answer: 0,
    explanation: "O próprio texto interpreta o símbolo ao afirmar que o incenso nas taças corresponde às orações dos santos. Trata-se de linguagem simbólica, mas com explicação direta no contexto.",
    reference: "Apocalipse 5:8"
  },
  {
    id: 10,
    question: "Qual foi a declaração feita pelo Pai no momento do Batismo de Jesus?",
    options: [
      "Que o Reino de Deus havia finalmente chegado através de João Batista.",
      "Declara que Jesus é o Seu Filho amado em quem se compraz.",
      "Ordena que os discípulos abandonem suas redes para segui-lo.",
      "Que Jesus deveria agora seguir para o deserto para ser tentado."
    ],
    answer: 1,
    explanation: "No batismo, o Pai testemunha publicamente a identidade de Jesus como Seu Filho amado. Essa declaração confirma tanto a filiação divina quanto o agrado do Pai em Cristo.",
    reference: "Mateus 3:16-17; Lucas 3:21-22"
  },
  {
    id: 11,
    question: "Na Parábola do Fariseu e do Publicano (Lucas 18:9-14), qual atitude impede a verdadeira comunhão com o Reino de Deus?",
    options: [
      "A decisão de orar no Templo, que já não era mais considerado um local sagrado por Jesus.",
      "A prática do jejum e do dízimo, que Jesus declarou serem pecados no Novo Testamento.",
      "A autossuficiência e o orgulho religioso, que tratam a santidade como um mérito acumulado através de obras.",
      "A falta de conhecimento teológico profundo por parte do cobrador de impostos."
    ],
    answer: 2,
    explanation: "A parábola foi dirigida aos que confiavam em si mesmos como justos. O problema central do fariseu não era orar, mas depender do próprio mérito e desprezar os outros.",
    reference: "Lucas 18:9-14"
  },
  {
    id: 12,
    question: "O que a história de Zaqueu nos ensina?",
    options: [
      "Zaqueu foi escolhido por Jesus justamente por sua riqueza, que deveria ser usada para o Reino.",
      "Jesus coagiu Zaqueu a doar seus bens para provar sua sinceridade perante a multidão.",
      "A conversão de Zaqueu manteve-se restrita à sua vida espiritual, sem interferir na sua economia pessoal.",
      "A salvação provocou uma mudança interior que se manifestou naturalmente em ações de restituição e justiça."
    ],
    answer: 3,
    explanation: "Depois do encontro com Jesus, Zaqueu demonstra arrependimento prático. A mudança do coração aparece em atitudes concretas de generosidade e restituição.",
    reference: "Lucas 19:1-10"
  },
  {
    id: 13,
    question: "Qual foi a expressão exclamada por Cristo no alto da cruz que selou a obra da redenção antes de Seu espírito ser entregue?",
    options: [
      "Por que me abandonaste?",
      "Eu sou a ressurreição e a vida.",
      "Está consumado.",
      "Hosana ao Filho de Davi!"
    ],
    answer: 2,
    explanation: "Ao dizer 'Está consumado', Jesus declara o cumprimento de Sua obra redentora. A expressão aponta para algo plenamente realizado antes de entregar o espírito.",
    reference: "João 19:30"
  },
  {
    id: 14,
    question: "O que significa a expressão 'cingir os lombos' citada no contexto da vigilância cristã?",
    options: [
      "Abandonar as responsabilidades terrenas para focar apenas no céu.",
      "Esconder-se das tentações do mundo.",
      "Prender a túnica no cinto para ter liberdade total de movimento.",
      "Preparar-se para um período de descanso prolongado."
    ],
    answer: 2,
    explanation: "A expressão tem origem no costume de prender a roupa para caminhar, trabalhar ou lutar com prontidão. No contexto bíblico, comunica preparo, vigilância e disposição para agir.",
    reference: "Lucas 12:35; Efésios 6:14; 1 Pedro 1:13"
  },
  {
    id: 15,
    question: "Como se encerra o Evangelho de Lucas?",
    options: [
      "Com o sepultamento de Jesus feito em um túmulo lacrado por José de Arimateia.",
      "Com a aparição silenciosa aos onze apóstolos unicamente nas praias da Galileia.",
      "Com o julgamento de Jesus perante o Sinédrio, Pilatos e o rei Herodes.",
      "Com a Ascensão de Jesus em Betânia, sendo elevado ao céu após abençoar Seus seguidores."
    ],
    answer: 3,
    explanation: "Lucas encerra seu Evangelho com a ascensão de Jesus. O texto mostra Cristo abençoando os discípulos e sendo elevado ao céu.",
    reference: "Lucas 24:50-53"
  },
  {
    id: 16,
    question: "Qual é a missão dos gafanhotos na quinta trombeta?",
    options: [
      "Atormentar apenas os homens que não possuem o selo de Deus.",
      "Destruir os recursos naturais para causar fome.",
      "Adorar a besta que sobe do abismo.",
      "Matar a terça parte da humanidade."
    ],
    answer: 0,
    explanation: "Na quinta trombeta, os gafanhotos não recebem autorização para matar, mas para atormentar. O alvo são especificamente os homens sem o selo de Deus.",
    reference: "Apocalipse 9:1-5"
  },
  {
    id: 17,
    question: "Qual foi o elogio que a igreja de Éfeso recebeu da parte de Jesus?",
    options: [
      "Pelo trabalho árduo, perseverança e rejeição a falsos apóstolos.",
      "Por ter abraçado novos apóstolos para expandir a igreja.",
      "Por ter se tornado a maior igreja da província da Ásia.",
      "Por ter mantido seu primeiro amor intacto."
    ],
    answer: 0,
    explanation: "Jesus elogia Éfeso por suas obras, labor, perseverança e discernimento contra falsos apóstolos. O problema posterior da igreja não apaga esse elogio inicial.",
    reference: "Apocalipse 2:2-3"
  },
  {
    id: 18,
    question: "Qual é a reivindicação das almas dos mártires que estão debaixo do Altar?",
    options: [
      "Que o mundo seja perdoado imediatamente.",
      "Que Jesus retorne naquele exato momento.",
      "Vingança e justiça divina contra os habitantes da terra.",
      "Um tempo de descanso imediato e eterno."
    ],
    answer: 2,
    explanation: "Os mártires clamam para que Deus julgue e vingue o seu sangue. O foco do pedido é justiça divina contra os habitantes da terra.",
    reference: "Apocalipse 6:9-11"
  },
  {
    id: 19,
    question: "Como o apóstolo Paulo classifica as práticas de ascetismo e privações físicas extremas mencionadas em Colossenses?",
    options: [
      "Como uma mera e perigosa aparência de sabedoria.",
      "Como a forma bíblica de demonstrar gratidão a Deus.",
      "Como o caminho mais eficaz para alcançar a santidade absoluta.",
      "Como os mandamentos de Deus para que o crente seja aceito."
    ],
    answer: 0,
    explanation: "Paulo reconhece que tais práticas podem parecer sábias, mas afirma que não têm valor real contra os impulsos da carne. Ou seja, existe aparência religiosa sem poder verdadeiro de transformação.",
    reference: "Colossenses 2:20-23"
  }
];

const form = document.getElementById("quizForm");
const questionsContainer = document.getElementById("questionsContainer");
const resultado = document.getElementById("resultado");
const resultadoTitulo = document.getElementById("resultadoTitulo");
const resultadoResumo = document.getElementById("resultadoResumo");
const resultadoBadge = document.getElementById("resultadoBadge");
const acertosTopo = document.getElementById("acertosTopo");
const percentualTopo = document.getElementById("percentualTopo");
const totalQuestoes = document.getElementById("totalQuestoes");
const themeToggle = document.querySelector("[data-theme-toggle]");

let currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
document.documentElement.setAttribute("data-theme", currentTheme);
updateThemeButton();

totalQuestoes.textContent = quizData.length;
renderQuestions();

function renderQuestions() {
  questionsContainer.innerHTML = quizData.map((item) => {
    const optionsHtml = item.options.map((option, index) => {
      const letter = String.fromCharCode(65 + index);
      return `
        <div class="option-item">
          <input type="radio" name="question-${item.id}" id="question-${item.id}-option-${index}" value="${index}">
          <label class="option-label" for="question-${item.id}-option-${index}">
            <span class="option-letter">${letter}</span>
            <span class="option-text">${option}</span>
          </label>
        </div>
      `;
    }).join("");

    return `
      <article class="question-card" id="card-${item.id}">
        <h3>${item.id}. ${item.question}</h3>
        <div class="options-list" role="radiogroup" aria-label="Questão ${item.id}">
          ${optionsHtml}
        </div>
        <div class="question-feedback" id="feedback-${item.id}">
          <span class="feedback-status"></span>
          <p class="feedback-answer"></p>
          <p class="feedback-explanation"></p>
          <p class="feedback-reference"></p>
        </div>
      </article>
    `;
  }).join("");
}

function corrigirSimulado() {
  let correctCount = 0;

  quizData.forEach((item) => {
    const selected = form.querySelector(`input[name="question-${item.id}"]:checked`);
    const feedback = document.getElementById(`feedback-${item.id}`);
    const status = feedback.querySelector(".feedback-status");
    const answer = feedback.querySelector(".feedback-answer");
    const explanation = feedback.querySelector(".feedback-explanation");
    const reference = feedback.querySelector(".feedback-reference");

    feedback.className = "question-feedback is-visible";

    if (!selected) {
      feedback.classList.add("is-empty");
      status.textContent = "Não respondida";
      answer.innerHTML = `<strong>Resposta correta:</strong> ${formatOption(item.answer, item.options[item.answer])}`;
      explanation.innerHTML = `<strong>Explicação:</strong> ${item.explanation}`;
      reference.innerHTML = `<strong>Referências bíblicas:</strong> ${item.reference}`;
      return;
    }

    const selectedIndex = Number(selected.value);

    if (selectedIndex === item.answer) {
      correctCount += 1;
      feedback.classList.add("is-correct");
      status.textContent = "Resposta correta";
      answer.innerHTML = `<strong>Sua resposta:</strong> ${formatOption(selectedIndex, item.options[selectedIndex])}`;
    } else {
      feedback.classList.add("is-wrong");
      status.textContent = "Resposta incorreta";
      answer.innerHTML = `<strong>Resposta correta:</strong> ${formatOption(item.answer, item.options[item.answer])}`;
    }

    explanation.innerHTML = `<strong>Explicação:</strong> ${item.explanation}`;
    reference.innerHTML = `<strong>Referências bíblicas:</strong> ${item.reference}`;
  });

  const percentage = Math.round((correctCount / quizData.length) * 100);
  resultado.hidden = false;
  resultadoTitulo.textContent = `Você acertou ${correctCount} de ${quizData.length}`;
  resultadoResumo.textContent = `Percentual de acertos: ${percentage}%`;
  resultadoBadge.textContent = `${percentage}%`;
  acertosTopo.textContent = String(correctCount);
  percentualTopo.textContent = `${percentage}%`;

  resultado.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function limparRespostas() {
  form.reset();
  resultado.hidden = true;
  acertosTopo.textContent = "0";
  percentualTopo.textContent = "0%";

  document.querySelectorAll(".question-feedback").forEach((feedback) => {
    feedback.className = "question-feedback";
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function formatOption(index, text) {
  return `${String.fromCharCode(65 + index)}. ${text}`;
}

function updateThemeButton() {
  const isDark = currentTheme === "dark";
  themeToggle.setAttribute("aria-label", isDark ? "Mudar para tema claro" : "Mudar para tema escuro");
  themeToggle.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "◐";
}

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeButton();
});

document.getElementById("corrigirTopo").addEventListener("click", corrigirSimulado);
document.getElementById("corrigirBase").addEventListener("click", corrigirSimulado);
document.getElementById("limparTopo").addEventListener("click", limparRespostas);
document.getElementById("limparBase").addEventListener("click", limparRespostas);
document.getElementById("resetarTopo").addEventListener("click", limparRespostas);
