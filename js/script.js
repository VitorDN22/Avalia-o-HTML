// script.js

// Seleciona o formulário e o elemento de feedback
const form = document.getElementById('form-contato');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede envio padrão para validação

  // Pega os valores dos campos
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const assunto = form.assunto.value.trim();
  const mensagem = form.mensagem.value.trim();

  // Função para validar e-mail (simples)
  function validarEmail(email) {
    // Regex básico para verificar formato de email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Limpa mensagens anteriores
  feedback.textContent = '';
  feedback.style.color = '';

  // Validações
  if (!nome || !email || !assunto || !mensagem) {
    feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
    feedback.style.color = 'red';
    return;
  }

  if (!validarEmail(email)) {
    feedback.textContent = 'Por favor, insira um e-mail válido.';
    feedback.style.color = 'red';
    return;
  }

  if (mensagem.length < 20) {
    feedback.textContent = 'A mensagem deve ter no mínimo 20 caracteres.';
    feedback.style.color = 'red';
    return;
  }

  // Se passou em todas as validações
  feedback.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
  feedback.style.color = 'green';

  // Aqui você pode resetar o formulário se quiser
  form.reset();
});