# Gerador de QR Code ou Senha Aleatória

Este projeto permite que o usuário escolha, através do terminal, entre duas opções:

1. **Gerar um QR Code** a partir de um link fornecido.
2. **Gerar uma senha aleatória**, que pode ser configurada conforme preferências do usuário (comprimento, tipos de caracteres).

## Funcionalidades

- **Gerar QR Code a partir de um link**: O usuário fornece um link, e o sistema gera um QR Code correspondente.
- **Gerar senha aleatória**: O sistema gera uma senha aleatória com base em configurações predefinidas no arquivo `.env` (como comprimento da senha e tipos de caracteres).

## Tecnologias Utilizadas

- **Node.js**: A plataforma de execução do JavaScript no servidor.
- **QRCode**: Biblioteca para gerar QR Codes.
- **dotenv**: Para carregar as variáveis de ambiente.
- **Inquirer**: Biblioteca para interatividade via terminal.

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
