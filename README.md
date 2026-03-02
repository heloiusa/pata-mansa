# 🐾 Pata Mansa - Sistema de Gestão para PetShop

O **Pata Mansa** é uma aplicação web desenvolvida para facilitar o dia a dia de petshops. Com ele, é possível gerenciar o catálogo de serviços (Banhos e Tosas) e realizar o agendamento de clientes, mantendo tudo sincronizado através de uma API simulada.

## 🚀 Funcionalidades

* **Gerenciamento de Serviços:**
* Cadastro, edição, listagem e exclusão de tipos de banho e tosa.
* Definição de valores e descrições detalhadas.


* **Sistema de Agendamentos:**
* Formulário inteligente com validação de campos obrigatórios.
* Busca dinâmica de tipos de banho cadastrados.
* Cálculo automático de valor baseado no serviço selecionado.


* **Interface Responsiva:**
* Navbar adaptável para dispositivos móveis.
* Tabelas com scroll horizontal e busca em tempo real.


* **Persistência de Dados:**
* Integração total com `JSON Server` para simular uma API REST.



## 🛠️ Tecnologias Utilizadas

* **Angular 19+**: Framework principal.
* **Tailwind CSS**: Estilização moderna e responsiva.
* **FontAwesome**: Biblioteca de ícones.
* **JSON Server**: Simulação de backend e banco de dados (db.json).
* **TypeScript**: Tipagem estática para maior segurança no código.

## 📦 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/heloiusa/pata-mansa.git
cd pata-mansa

```

### 2. Instalar as dependências

```bash
npm install

```

### 3. Subir a API (JSON Server)

Em um terminal separado, execute o servidor que simula o banco de dados:

```bash
npx json-server --watch api/db.json --port 3000

```

### 4. Rodar o Front-end

Em outro terminal, inicie a aplicação Angular:

```bash
ng serve

```

Acesse: `http://localhost:4200`

## 📂 Estrutura do Banco de Dados (`db.json`)

O projeto utiliza duas coleções principais:

```json
{
  "banhos": [
    { "id": "1", "nome": "Banho Simples", "descricao": "Lavagem e secagem", "valor": 50 }
  ],
  "agendamentos": [
    {
      "id": "1",
      "nomeTutor": "João Silva",
      "nomeAnimal": "Rex",
      "tipoBanho": "Banho Simples",
      "data": "2024-05-20",
      "hora": "14:00",
      "valor": 50
    }
  ]
}

```

