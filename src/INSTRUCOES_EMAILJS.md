# 📧 Instruções para Configurar o EmailJS

O formulário de contato está pronto e configurado para enviar emails usando o **EmailJS**. Siga os passos abaixo para ativar o envio de emails:

## 📝 Passo 1: Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em **Sign Up** (é GRATUITO - até 200 emails/mês)
3. Crie sua conta com email ou Google

## 🔧 Passo 2: Configurar o Serviço de Email

1. Após fazer login, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha **Gmail** (recomendado)
4. Conecte sua conta: **agenciadigitallumina@gmail.com**
5. Copie o **Service ID** (exemplo: `service_abc1234`)

## 📄 Passo 3: Criar o Template de Email

1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com as seguintes variáveis:

**Subject (Assunto):**
```
Nova mensagem de contato - {{from_name}}
```

**Content (Conteúdo do Email):**
```
Você recebeu uma nova mensagem de contato do site da LÚMINA:

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do site.
```

4. Em **To Email**, coloque: `agenciadigitallumina@gmail.com`
5. Salve e copie o **Template ID** (exemplo: `template_xyz5678`)

## 🔑 Passo 4: Obter a Public Key

1. Vá em **Account** (no menu superior)
2. Na seção **General**, copie a **Public Key**

## 💻 Passo 5: Atualizar o Código

Abra o arquivo `/components/ContactSection.tsx` e substitua:

```typescript
// Linha ~36-38
const serviceId = "service_lumina"; // ← SUBSTITUA pelo seu Service ID
const templateId = "template_lumina"; // ← SUBSTITUA pelo seu Template ID
const publicKey = "SUA_PUBLIC_KEY_AQUI"; // ← SUBSTITUA pela sua Public Key
```

### Exemplo:
```typescript
const serviceId = "service_abc1234";
const templateId = "template_xyz5678";
const publicKey = "xK9mP2nQ7rL3sT8v";
```

## ✅ Passo 6: Testar o Formulário

1. Abra o site
2. Vá até a seção de **Contato**
3. Preencha o formulário com seus dados de teste
4. Clique em **Enviar mensagem**
5. Verifique se o email chegou em: **agenciadigitallumina@gmail.com**

## 🎉 Pronto!

Agora o formulário está funcionando perfeitamente! Quando os clientes preencherem:
- ✅ Nome
- ✅ Email
- ✅ Mensagem

O email será enviado automaticamente para **agenciadigitallumina@gmail.com**!

---

## 🆘 Problemas Comuns

### Não está recebendo emails?
1. Verifique a pasta de **Spam**
2. Confirme que conectou o email correto no EmailJS
3. Verifique se os IDs estão corretos no código

### Erro "Failed to send"?
1. Verifique se a **Public Key** está correta
2. Confirme que o **Service ID** e **Template ID** estão corretos
3. Verifique se tem internet e o EmailJS está online

---

**Suporte:** Se precisar de ajuda, entre em contato com o suporte do EmailJS em https://www.emailjs.com/docs/
