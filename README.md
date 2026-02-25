💈 BarberApp - Sistema de Agendamento Online
Este é um projeto de SaaS (Software as a Service) focado no gerenciamento de barbearias, desenvolvido como parte da graduação em Análise e Desenvolvimento de Sistemas na UNINASSAU. O sistema permite que clientes realizem agendamentos em tempo real e oferece uma interface administrativa para o proprietário gerenciar o faturamento e horários.

👤 Autor
Nome: Danilo Oliveira

Curso: Análise e Desenvolvimento de Sistemas (4º Período)

Instituição: UNINASSAU

🚀 Tecnologias Utilizadas
O projeto utiliza a stack mais moderna do ecossistema JavaScript:

Framework: Next.js 14+ (App Router)

Linguagem: TypeScript (Tipagem estática para maior segurança)

ORM: Prisma (Modelagem e manipulação de dados)

Banco de Dados: PostgreSQL hospedado no NeonDB

Autenticação: NextAuth.js com Google Login

Estilização: Tailwind CSS e Shadcn/ui

Deploy: Vercel

🛠️ Funcionalidades e Conceitos Aplicados (CRUD)
O sistema demonstra o domínio das operações fundamentais de software (CRUD):

Create: Registro de novos agendamentos via formulário interativo com validação de horários.

Read: Listagem dinâmica de barbearias, serviços e agendamentos confirmados consumindo dados do PostgreSQL via Prisma.

Update: Gerenciamento de estado para seleção de datas e horários disponíveis.

Delete: Cancelamento de reservas com remoção lógica do registro no banco de dados.

⚙️ Como rodar o projeto localmente
Clone o repositório:

Bash
git clone https://github.com/Danilo4665Oliveira/barber-app.git
Instale as dependências:

Bash
npm install
Configure o arquivo .env:
Crie um arquivo .env na raiz do projeto seguindo o modelo do .env.example:

Plaintext
DATABASE_URL="sua_url_do_neon_db"
GOOGLE_CLIENT_ID="seu_id_do_google"
GOOGLE_CLIENT_SECRET="sua_secret_do_google"
NEXTAUTH_SECRET="sua_secret_gerada"
Gere o Prisma Client:

Bash
npx prisma generate
Inicie o servidor de desenvolvimento:

Bash
npm run dev
🌐 Deploy e Visualização
O projeto está em produção e pode ser acessado através da Vercel no link abaixo:
👉 (https://barber-app-rose.vercel.app/)
