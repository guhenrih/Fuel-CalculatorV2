// Ao carregar a página, aplica o modo escuro conforme a preferência salva
document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
  updateToggleButtons();
});

// Atualiza o texto dos botões de alternância do modo
function updateToggleButtons() {
  document.querySelectorAll('#mode-toggle').forEach(btn => {
    btn.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
  });
}

// Alterna entre modo claro e escuro, salvando a preferência
document.querySelectorAll('#mode-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    updateToggleButtons();
  });
});

// Alterna o menu hamburger para dispositivos móveis
document.getElementById('hamburger-menu')?.addEventListener('click', () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('open');
});

/* Funções de cálculo continuam iguais */

// Função 1: Calcular Distância com Valor Específico
function calcularDistancia() {
  const valor = parseFloat(document.getElementById('valor')?.value);
  const preco = parseFloat(document.getElementById('precoCombustivel')?.value);
  const consumo = parseFloat(document.getElementById('consumoMedio')?.value);
  const idaVolta = document.getElementById('idaVolta')?.checked;
  
  if (isNaN(valor) || isNaN(preco) || isNaN(consumo) || preco === 0) {
    document.getElementById('resultadoDistancia').innerText = 'Por favor, preencha os campos corretamente.';
    return;
  }
  
  const litros = valor / preco;
  let distancia = litros * consumo;
  if (idaVolta) { distancia /= 2; }
  
  document.getElementById('resultadoDistancia').innerText = 'Você pode percorrer aproximadamente ' + distancia.toFixed(2) + ' km' + (idaVolta ? ' (ida e volta)' : '');
}

// Função 2: Calcular Consumo Médio
function calcularConsumoMedio() {
  const km = parseFloat(document.getElementById('kmRodados')?.value);
  const litros = parseFloat(document.getElementById('litrosAbastecidos')?.value);
  
  if (isNaN(km) || isNaN(litros) || litros === 0) {
    document.getElementById('resultadoConsumo').innerText = 'Por favor, preencha os campos corretamente.';
    return;
  }
  
  const consumoMedio = km / litros;
  document.getElementById('resultadoConsumo').innerText = 'Consumo médio: ' + consumoMedio.toFixed(2) + ' km/l';
}

// Função 3: Comparação Gasolina x Álcool
function compararCombustiveis() {
  const precoGasolina = parseFloat(document.getElementById('precoGasolina')?.value);
  const precoAlcool = parseFloat(document.getElementById('precoAlcool')?.value);
  
  if (isNaN(precoGasolina) || isNaN(precoAlcool) || precoGasolina === 0) {
    document.getElementById('resultadoComparacao').innerText = 'Por favor, preencha os campos corretamente.';
    return;
  }
  
  document.getElementById('resultadoComparacao').innerText = precoAlcool < precoGasolina * 0.7 ? 
    'É mais vantajoso utilizar Álcool.' : 'É mais vantajoso utilizar Gasolina.';
}

// Função 4: Calcular Custo por Km Rodado
function calcularCustoPorKm() {
  const preco = parseFloat(document.getElementById('precoPorKmPreco')?.value);
  const consumo = parseFloat(document.getElementById('consumoPorKm')?.value);
  
  if (isNaN(preco) || isNaN(consumo) || consumo === 0) {
    document.getElementById('resultadoCustoKm').innerText = 'Por favor, preencha os campos corretamente.';
    return;
  }
  
  const custoPorKm = preco / consumo;
  document.getElementById('resultadoCustoKm').innerText = 'Custo por km rodado: R$ ' + custoPorKm.toFixed(2);
}

// Função 5: Calcular Gasto de Viagem
function calcularViagem() {
  const distancia = parseFloat(document.getElementById('distanciaViagem')?.value);
  const preco = parseFloat(document.getElementById('precoCombustivelViagem')?.value);
  const consumo = parseFloat(document.getElementById('consumoViagem')?.value);
  const idaVolta = document.getElementById('idaVoltaViagem')?.checked;
  
  if (isNaN(distancia) || isNaN(preco) || isNaN(consumo) || consumo === 0) {
    document.getElementById('resultadoViagem').innerText = 'Por favor, preencha os campos corretamente.';
    return;
  }
  
  const distanciaTotal = idaVolta ? distancia * 2 : distancia;
  const litrosNecessarios = distanciaTotal / consumo;
  const gastoTotal = litrosNecessarios * preco;
  
  document.getElementById('resultadoViagem').innerText = 'O gasto estimado para a viagem é de R$ ' + gastoTotal.toFixed(2);
}
