const legumes = {
    Frutos:	['Abóbora', 'Berinjela','Chuchu', 'Tomate', 'Pepino'],
    Raízes:	['Beterraba', 'Cenoura', 'Mandioca', 'Cebola'],
    Tubérculos:	['Batata-Inglesa'],
    Leguminosas: ['Feijão', 'Grão de Bico', 'Ervilha', 'Soja'],
    Cereais: ['Arroz', 'Trigo', 'Milho'],
    Oleaginosas:	['Castanha-de-caju', 'Castanha-do-pará', 'Nozes', 'Amêndoas']
}
console.log('Exemplos de Categorias e Tipos de legumes')
for (legume in legumes){
console.log(legume+':')
for (leg of legumes[legume])
    console.log('- '+leg)}