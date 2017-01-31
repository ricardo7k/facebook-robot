- 1 - Criar um App e uma Page no Facebook, o nome e imagem da sua Page será o nome e a imagem do seu Bot.
- 2 - Instalar o node.js ```>= 4.0.0```.
- 3 - Adicione no seu App um Produto>Messenger.
- 4 - Na geração de Token, selecione a Página que vai adicionar o Bot e copie o Token.
- 5 - Substitua no app.js o Bot.Token pelo gerado.
- 6 - Crie um Webhook, insira o Bot.verify do app.js no Verification token do Webhook no facebook.
- 7 - Selecione os Campos de assinatura: messages e messaging_postbacks
- 8 - Rodar Local usando tunel com ngrok
    - 8.1 - Levante o servidor node.js na sua máquina
    ```$ node app.js ```
    - 8.2 - Inicie o tunel com a sua máquina usando o ngrok
    ```$ './ngrok http 3000 ```
    - 8.3 - Copie o endereço https de Fowarding
- 9 - Insira na URL de retorno de chamada o endereço da sua aplicação
- 10 - Entre na página do facebook e clique em enviar mensagem