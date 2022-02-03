import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaTwitter,
} from 'react-icons/fa'
import { Section } from '../components/Section'
import { MostReadItem } from '../components/MostReadItem'
import Layout from '../components/Layout'
import { listPostContent, PostContent } from '../lib/posts'

const BlogTags = ({ tags }: { tags: string[] }) => {
  return (
    <HStack spacing={2} wrap="wrap" rowGap={2}>
      {tags.map((tag) => {
        return (
          <Tag
            size={'md'}
            variant="outline"
            color="bege"
            borderColor="bege"
            borderWidth={2}
            key={tag}
            textTransform={'uppercase'}
          >
            <TagLabel>{tag}</TagLabel>
          </Tag>
        )
      })}
    </HStack>
  )
}

interface PostProps {
  lastPosts: PostContent[]
}

const Post: NextPage<PostProps> = ({ lastPosts }) => {
  return (
    <Layout>
      <Box h="250px" pos="relative" w="full">
        <Image
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          layout="fill"
          objectFit="cover"
          alt="article's image"
        />
      </Box>
      <Box bg="azul.500" color="bege" p={6}>
        <VStack spacing={4} alignItems={'stretch'}>
          <Heading>
            Caranguejo-ferradura, Sangue Azul, Ameaça de Extinção, Vacinas,
            Dependência dos Recursos Naturais e Pandemia da COVID-19
          </Heading>
          <Flex justifyContent={'space-between'}>
            <Text>12.08.2021</Text>
            <Text>Por: Rute Maria Gonçalves-de-Andrade</Text>
          </Flex>
          <HStack spacing={4} alignItems={'flex-start'}>
            <Text color="laranja.500" fontWeight={'bold'}>
              TAGS
            </Text>
            <Flex flex={1}>
              <BlogTags
                tags={[
                  'Analise',
                  'Caranguejo-ferradura',
                  'COVID-19',
                  'Recursos Naturais',
                  'Sangue Azul',
                ]}
              />
            </Flex>
          </HStack>
        </VStack>
      </Box>
      <Stack spacing={4} bg="bege" p={6}>
        <Text>
          Devemos pensar a COVID-19 como um fenômeno socioambiental, afinal, uma
          doença não é um problema relacionado, exclusivamente, à Saúde Pública.
          Antes disso, sua presença e dinâmica estão associadas às alterações
          antrópicas promovidas nos ambientes naturais e resultantes do estilo
          de vida adotado pelos grupamentos humanos. Esta é a base para
          refletirmos sobre a Eco-epidemiologia da Pandemia da COVID-19, visto
          que, se por um lado os fenômenos estudados pela epidemiologia estão
          vinculados ao âmbito coletivo, remetendo ao social, por outro lado,
          não faz sentido pensar em algum processo biológico que seja
          independente do contexto social. Não é possível pensar o indivíduo
          isolado, desenraizado da sociedade em que vive [1], sendo pertinente
          considerarmos os apontamentos do editor do periódico científico The
          Lancet — Richard Horton — proponente da ideia de que a COVID-19
          passasse a ser tratada como uma SINDEMIA, em vez de PANDEMIA, face aos
          seus inúmeros contextos relativos às formas de viver das sociedades
          ocupantes dos territórios urbanizados, em especial [2]. O termo
          SINDEMIA foi desenhado pelo antropólogo e médico americano Merrill
          Singer, em 1990, para explicar a circunstância em que “duas ou mais
          doenças interagem de tal forma que causam danos maiores do que a mera
          soma dessas duas doenças” [3]. E, de fato, criamos situações oportunas
          para gerar doenças, afinal, temos interferido, de forma incansável, e,
          há muito, insustentável, no Meio Ambiente. Removemos vegetais
          endêmicos dos seus habitat por eles ocupados devido à sua longa
          história evolutiva, e os substituímos por extensas áreas de
          monoculturas agrícolas do agronegócio (que, definitivamente, não é
          pop). Promovemos a homogeneização do ambiente, condição mais do que
          favorável à proliferação de artrópodes que se alimentam de vegetais e
          que encontram, nas monoculturas, alimento em abundância concentrado no
          mesmo local. Para eliminá-los, pulverizamos as plantações com
          agrotóxicos envenenando os alimentos, a água de superfície, a dos
          lençóis freáticos, dos rios e oceanos, e também o ar que respiramos.
          Usamos animais como alimento, como pet e como fornecedores de
          matéria-prima para confecção de casacos, bolsas, cintos, sapatos,
          corantes, etc. Destruímos a natureza porque não nos enxergamos como
          parte dela. Nossa visão ainda é “o homem e a natureza” e não “o homem
          na natureza”, e neste sentido, há ainda a crença de que “a natureza
          existe para servir o homem”. Consideramos que com os produtos
          resultantes da tecnologia poderíamos amenizar as consequências das
          nossas alterações nos complexos ecossistemas, mas isto não procede,
          pois ainda necessitamos, demasiadamente, dos biomas terrestres para
          manter a vida saudável e para controlar as doenças que nos afetam ao
          nível endêmico e epidêmico.
        </Text>
        <Text>
          Mas você, leitor, deve estar pensando: Ah! Está bem, mas afinal, qual
          a relação destas colocações com caranguejos-ferradura, com vacinas e
          pandemia? E afinal, o que é um caranguejo-ferradura?
        </Text>
        <Text>
          A ideia de trazer este conhecimento alusivo à nossa relação totalmente
          equivocada com a natureza para destacar a importância do respeito ao
          meio ambiente em todas as circunstâncias, já povoava meus pensamentos
          desde o início da pandemia da COVID-19 e como estudiosa dos
          artrópodes, não poderia deixar de me lembrar deles quando os projetos
          das candidatas às vacinas contra a COVID-19 começaram a ser
          noticiados. Neste ínterim, saiu na National Geographic [4] uma matéria
          sobre o tema que vou abordar e, alguns meses depois, minha amiga Nurit
          Bensusan, bióloga que desistiu de ser humana, segundo, ela mesma
          refere, estava com um projeto incrível, um quadro denominado “A
          Pandemia Nossa de Cada Dia” no canal do YouTube do ISA (Instituto
          Socioambiental) onde ela trabalha. No episódio do dia 10 de dezembro
          de 2020: “Levando 2020 na alma” [5] ela referiu-se a este tema
          (aproveite para assistir aos episódios de toda a série dela, são
          geniais!).
        </Text>
        <Text>
          Mas vamos entender do que se trata. Não há como falar em vacinas,
          usufruir dos seus efeitos benéficos e pensar que elas salvam vidas sem
          reverenciar alguns atores, em especial espécies de Limulus. Quem são
          eles? Para responder vamos fazer uma viagem à Zoologia.
        </Text>
        <Text>
          Limulus (Arthropoda, Chelicerata, Xiphosura, Limulidae) são
          invertebrados conhecidos como caranguejos-ferradura, embora não sejam
          caranguejos, alcunhados de fósseis vivos, expressão usada por Darwin
          [6] para designar gêneros e espécies atuais pertencentes a táxons tais
          como Classes ou Ordens que, no passado geológico da Terra, foram muito
          mais abundantes e diversificados que na atualidade. Darwin fez esta
          menção ao abordar, em sua obra principal, a discussão sobre as
          circunstâncias favoráveis à Seleção Natural. No caso dos artrópodes do
          grupo dos caranguejos-ferradura a referida denominação se deve à sua
          presença na Terra há 470 milhões de anos e por permanecerem, desde
          então, sem alterações estruturais significativas [7].
        </Text>
        <Text>
          As espécies de Limulus e dos outros dois gêneros, Tachypleus e
          Carcinoscorpius são os representantes atuais da Classe Xiphosura que é
          composta também por espécies fósseis. Limulus polyphemus vive na Costa
          Atlântica da América do Norte e os demais na Ásia, Coreia, sul do
          Japão, Filipinas e Indonésia. São filogeneticamente próximos das
          aranhas, dos escorpiões e dos insetos. Vivem em águas marítimas rasas
          deslocando-se no sedimento em busca de itens alimentares.{' '}
        </Text>
        <Text>
          São abundantes nas praias na época de reprodução, momento a partir do
          qual decorre esta triste história: a população de Limulus está em
          declínio. Em algumas áreas, onde são endêmicos, os efeitos das
          mudanças climáticas e a ação antrópica podem estar acelerando este
          processo de redução populacional. Esta hipótese foi avaliada, já em
          2010, por Faurby e col. [8], que para compreender a variação na
          história demográfica da espécie da América do Norte, Limulus
          polyphemus analisaram a variação no DNA microssatélite, um marcador
          molecular importante para estudos filogeográficos (populacionais). As
          análises sugeriram que mudanças na distribuição destes artrópodes
          ocorreram não só devido ao repovoamento após a última glaciação (Era
          do gelo), mas também por efeitos antropogênicos, como a colheita
          excessiva ocorrida no passado para usá-los como fertilizante na
          agricultura, isca para pesca de enguias e como alimento para o gado.
          Neste estudo, os autores destacam a importância de se considerar
          conjuntamente as mudanças climáticas e as ações antrópicas, como a
          coleta excessiva, para compreender a dinâmica populacional dos
          caranguejos-ferradura e seu rápido decréscimo. Adiciona-se a estes
          fatores, a coleta anual também para extração do seu sangue azul!
        </Text>
        <Text>Coletar o sangue do caranguejo ferradura? Para quê?</Text>
        <Text>
          Tudo começou quando Bang estudava a circulação do sangue usando como
          modelo, para suas análises, o caranguejo ferradura. Em um dado
          momento, um deles morreu e, ao investigar a morte, o cientista
          constatou que a mesma ocorrera devido a uma infecção pela bactéria
          Vibrio. Mas o que intrigou o cientista, neste episódio, foi que a
          infecção bacteriana provocou uma solidificação de quase todo o volume
          de sangue do Limulus. E tão intrigante quanto esta ocorrência foi que
          outras bactérias não provocaram esta reação. Suas análises o levaram a
          constatar que a coagulação no sangue destes artrópodes ocorria quando
          eram infectados por bactérias gram negativas como a Vibrio. Para
          esclarecer melhor, as gram negativas são bactérias responsáveis por
          numerosas doenças conhecidas nossas tais como infecções urinárias,
          diarreia, bacteremia (bactérias circulando no sangue), peste, cólera,
          febre tifóide, entre outras. Algumas das gram negativas estão
          presentes na nossa flora intestinal em comensalismo.
        </Text>
        <Text>
          Voltando ao Limulus, a história dessa descoberta é muito interessante
          e poderá ser lida com mais detalhes na referência citada [9], porque
          neste artigo vamos sintetizá-la para que, por meio destas informações,
          possamos alcançar nossa principal finalidade ao Divulgar a Ciência
          sobre a COVID-19: salvar vidas, inclusive a dos caranguejos-ferradura!
          Sim, porque a existência deles também está ameaçada com a Pandemia
          decorrente da infecção pelo SARS-CoV-2! Isto porque a descoberta de
          Bang nos trouxe o conhecimento sobre o fato de o sangue azul (devido à
          presença de cobre) do caranguejo-ferradura coagular também na presença
          de endotoxinas bacterianas. Vale ressaltar que a descoberta sobre a
          coagulação deste sangue azul na presença de alguns compostos já havia
          ocorrido em 1885, porém as informações acerca desta descoberta não
          estão disponíveis de forma completa [10].
        </Text>
        <Text>
          Vamos entender melhor. Resumidamente, as endotoxinas são
          polissacarídeos presentes no interior das células de bactérias gram
          negativas. O sangue azul do Limulus é a única fonte natural conhecida,
          até o momento, que tem a propriedade de detectar a endotoxina, mesmo
          em quantidades mínimas. Na presença da endotoxina o sangue coagula.
          Sendo assim, o uso do sangue deste artrópode permite constatar, com
          toda certeza, que preparações que serão injetadas em nosso corpo
          estejam estéreis, pois nem nas vacinas, nem nas drogas injetáveis, nem
          nas próteses pode haver sequer traços das endotoxinas, já que esta
          presença pode ser fatal. Isto é trágico porque estamos num ponto em
          que, praticamente, todas as empresas voltadas à produção destes itens
          dependem dos Limulus! Já existe uma alternativa sintética desde 2016,
          porém não usada ainda em larga escala, pois não há ainda confiança de
          que seja 100% eficaz. Em decorrência disso, o sangue deste animal
          tornou-se um dos produtos mais caros do mundo (cerca de R $80 mil o
          litro)!
        </Text>
        <Text>
          Qual é o método para se coletar, de forma abundante, este sangue tão
          precioso?
        </Text>
        <Text>
          Todos os anos, desde 1997 (quando o uso do sangue deste artrópode foi
          aprovado pelo Food and Drug Administration dos EUA para o teste de
          esterilidade de medicamentos e outros produtos utilizados para
          tratamentos de doenças em humanos), na época da reprodução, incluindo
          a postura dos ovos, quando estão em significativa concentração nas
          praias, são capturados cerca de meio milhão de Limulus. Para colher o
          sangue, a carapaça é perfurada perto do coração e a partir deste
          orifício são retirados 30% de seu sangue azul. Após este procedimento,
          os sobreviventes são devolvidos à natureza. A mortalidade devida ao
          procedimento está entre 10% a 30%. As fêmeas são afetadas no tocante à
          reprodução, o que é mais um fator para a redução populacional desses
          animais. Especialistas já estão começando a se preocupar com a
          diminuição rápida na quantidade de exemplares da espécie devido a esta
          incessante intervenção antrópica na vida destes animais.
        </Text>
        <Text>
          Até 1990, este processo de coletar o sangue dos Limulus não parecia
          causar danos significativos, pois as indústrias farmacêuticas que
          usavam este insumo biológico informavam que morriam 3% dos caranguejos
          sangrados. À época, os estudos populacionais apontavam a abundância
          deles e os conservacionistas, por não conhecerem com detalhes toda a
          rede alimentar no contexto desta situação, não se debruçaram tanto
          sobre avaliar o status de conservação dos Limulidae [4]. Já nos anos
          2000, o quadro diferia, pois, a contagem de caranguejos-ferradura na
          época de desova revelou números inferiores e preocupantes de
          espécimes. Em decorrência destes fatores, está clara a perturbação na
          cadeia alimentar: ovos de caranguejo-ferradura são fonte de alimento
          para peixes como o robalo e o linguado, também em declínio pela pesca
          “recreativa” (aspas nossa) e, em parte devido à redução de sua fonte
          alimentar; as tartarugas-de-diamante, réptil em situação de
          vulnerabilidade ao risco de extinção também necessitam dos Limulus
          para se nutrir; aves migratórias, como as seixoeiras e as
          rolas-do-mar, fazem uma parada na Baía de Delaware (Costa Nordeste dos
          Estados Unidos) durante sua jornada de 24 mil Km quando saem da Tierra
          del Fuego, no Chile, e vão com destino ao Ártico para reprodução e
          devido a esta longa jornada necessitam de abundantes quantidades de
          calorias encontradas nos nutritivos ovos do caranguejo-ferradura [4].
          Se um elo desta cadeia alimentar faltar, no caso, o
          caranguejo-ferradura, quantas espécies serão prejudicadas, se
          examinarmos somente neste pequeno exemplo, sem considerar todas as
          micro-teias alimentares adjacentes a esta? Precisamos repensar nossa
          relação com a natureza! Atentemos para o alerta do biólogo Niles:
          “Esta luta não se limita apenas aos caranguejos-ferradura. Trata-se de
          manter os ecossistemas produtivos” [4].
        </Text>
        <Text>
          E por fim, chega a COVID-19, necessitamos de vacinas! Precisamos do
          sangue do Limulus para detectar se a vacina que será aplicada está
          livre da endotoxina, ou seja, se está totalmente segura para ser usada
          em toda a população mundial! Na matéria da National Geographic consta
          que para a produção em massa da vacina contra o novo coronavírus foi
          estimado, com os três principais laboratórios que comercializam ou
          fabricam o derivado do sangue azul para os testes de esterilidade, que
          para fazer 5 bilhões de doses da vacina seriam usados 600 mil testes
          por dia, correspondente à quantidade diária produzida pelas empresas.
          Pensando em reduzir este impacto ambiental algumas das fabricantes
          anunciaram, à época do início da fabricação das vacinas, fixar um
          limite para a quantidade diária de lisado aplicada, ressaltando seu
          “empenho em proteger o bem-estar do caranguejo-ferradura”, por
          exemplo, apoiando ativamente os esforços de conservação” [4]. Outro
          fabricante do produto resultante do uso do sangue azul, revelou criar
          caranguejos-ferradura em incubadoras para libertá-los no oceano.
          Afirmou ainda que prefere usar o produto sintético, porém a decisão da
          Farmacopeia Americana em não usar o produto sintético na fabricação
          das vacinas para evitar o desenvolvimento da COVID-19 é uma barreira à
          proteção do Limulus. Enquanto isso, o caranguejo-ferradura encontra-se
          em vias de extinção. Necessitamos preservar esta espécie que
          representa uma história evolutiva de 470 milhões de anos, que
          antecedeu os dinossauros em 200 milhões de anos e é elemento crucial
          na cadeia alimentar do ecossistema em que habitam e, ainda, salvam
          nossas vidas [4].
        </Text>
        <Text>
          A Pandemia não acabou, outras acontecerão, precisamos salvar as vidas
          que nos salvam, precisamos ter uma relação harmoniosa e respeitosa com
          todos os seres que habitam o planeta. A extinção pode acontecer para
          todos nós seres viventes.{' '}
        </Text>
        <Text>
          E para finalizar: use máscara e evite aglomerações em solidariedade ao
          exaustivo trabalho dos profissionais que atendem os pacientes com
          COVID-19; vá se vacinar e no momento em que estiver recebendo a vacina
          pense na contribuição da Natureza por meio do caranguejo -ferradura
          que literalmente dá o seu sangue para que se tenha total segurança
          quanto à esterilidade da vacina que será aplicada; nos cientistas que
          se debruçaram nos projetos para sua produção; evite a desinformação, e
          busque conteúdos corretos produzidos Divulgadores da Ciência da
          Pandemia da COVID-19.
        </Text>
        <Divider />
        <Text fontStyle={'italic'}>
          Rute Maria Gonçalves-de-Andrade – Bióloga pela FFCLRP/USP,
          Especialista em Entomologia Médica pela FSP/USP, Doutora em Saúde
          Pública pela FSP/USP, Pesquisadora da FUMDHAM (Fundação Museu do Homem
          Americano, São Raimundo Nonato, Piauí). Membro da Rede Análise
          COVID-19, da Rede Brasileira de Mulheres Cientistas, da SBPC
          (Sociedade Brasileira para o Progresso da Ciência), Colunista do
          Jornal da Cultura, Rádio Cultura FM 105,9 MHz de São Raimundo Nonato,
          Piauí com a coluna Pandemia ComCiência, Ambientalista.
        </Text>
      </Stack>
      <VStack spacing={2} bg="laranja.500" color="azul.500" p={6}>
        <Heading size="md">Compartilhe nas suas redes!</Heading>
        <HStack>
          <IconButton
            variant={'ghost'}
            aria-label="compartilhar no facebook"
            icon={<Icon as={FaFacebookF} />}
          />
          <IconButton
            variant={'ghost'}
            aria-label="compartilhar no twitter"
            icon={<Icon as={FaTwitter} />}
          />
          <IconButton
            variant={'ghost'}
            aria-label="compartilhar no linkedin"
            icon={<Icon as={FaLinkedinIn} />}
          />
          <IconButton
            variant={'ghost'}
            aria-label="compartilhar via email"
            icon={<Icon as={FaRegEnvelope} />}
          />
        </HStack>
      </VStack>
      <Section title="Comentários" bg="bege">
        <Text>Form</Text>
        <Text>Comments</Text>
      </Section>
      <Section title="Posts Relacionados" bg="laranja.500">
        <VStack>
          {lastPosts.map((postContent) => (
            <MostReadItem key={postContent.slug} postContent={postContent} />
          ))}
        </VStack>
      </Section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastPosts = listPostContent(1, 5)
  return {
    props: {
      lastPosts,
    },
  }
}

export default Post
