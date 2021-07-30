# Chatbot-Alien-Rails

# A Simple Chatbot (Chat to the Alien alquimistic) 👽 projeto de chatboot rails.

Luckdown, o alquimistic alienígena, pousou e quer falar com você!

Use o chatbot para selecionar suas respostas e veja se você pode aplacar Luckdown e salvar a humanidade.

Se você tiver sorte o suficiente para ter acesso de administrador, vá para a página / admin e crie algumas mensagens potenciais para seus usuários selecionarem. O nome de usuário é `admin` e a senha é` alienz` (guarde para você!).

## Getting started

Para clonar o repo e começar:
````
git clone ou realize donwload
cd rails-chatbot
bundle install
bin/rails db:create
bin/rails db:migrate

bundle exec rspec # Run the tests to ensure it works
bin/rails server # Start the server at localhost:3000
Navigate to `http://localhost:3000/
````

Para criar respostas para seus usuários humanos voltarem à sobrecarga alienígena (você precisará fazer isso para jogar o jogo!):
````
Navigate to `http://localhost:3000/messages`
Click `New Message`
Add a message and a threat level
Click `Create Message`
````

## Original Specification

Using:
* Ruby 2.4.1
* Rails 5.1.2
* Test framework: RSpec
* VCS: GIT

Um usuário acessa a página e envia a primeira mensagem pré-escrita para o bot (esta é a raiz da árvore), ele recebe uma resposta, para a qual são apresentados 2 a 3 possíveis mensagens pré-escritas opcionais para escolha entre para enviar de volta, cada um dos quais leva a uma nova 'resposta' do bot, e assim por diante.

Em determinados pontos, a resposta que eles escolherem também pode levar ao fim do jogo (o fim é simplesmente passar / reprovar).

Todas as rotas abaixo da árvore de mensagens devem terminar em aprovação / reprovação.

### Admin / backend:

* Sistema de autorização
* Capacidade de criar / visualizar / editar as mensagens e respostas que formam o fluxo do bate-papo
* Capacidade de marcar uma mensagem que o usuário recebe como desencadeadora do final do jogo (com sucesso ou falha), caso contrário, a mensagem recebida deve fornecer 2 a 3 respostas possíveis que o usuário poderá escolher.

### User / Front end:

* Primeira mensagem do bot mostrada ao usuário após um pequeno atraso
* As opções disponíveis de resposta podem ser alternadas, permitindo que o usuário escolha uma e 'envie'
* A mensagem de resposta correspondente retorna do bot após um pequeno atraso
* Repita as etapas acima até o final do jogo ser acionado por uma das respostas
* Apresentar a tela final do jogo (aprovado / reprovado) e opção de repetir.

