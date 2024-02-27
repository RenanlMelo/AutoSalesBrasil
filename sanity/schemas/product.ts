export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'modelo',
      type: 'string',
      title: 'Modelo do veiculo',
    },
    {
      name: 'imagens',
      type: 'array',
      title: 'Imagens do veiculo',
      of: [{type: 'image'}],
    },
    {
      name: 'ano',
      type: 'number',
      title: 'Ano do veículo',
    },
    {
      name: 'km',
      type: 'number',
      title: 'Quilometragem',
    },
    {
      name: 'combustivel',
      type: 'text',
      title: 'Tipo de combustivel',
    },
    {
      name: 'potencia',
      type: 'text',
      title: 'Potência do veiculo',
    },
    {
      name: 'cor',
      type: 'text',
      title: 'Cor do veiculo',
    },
    {
      name: 'descricao',
      type: 'text',
      title: 'Descricao do veiculo',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'modelo',
      },
    },
    {
      name: 'preco',
      type: 'number',
      title: 'Preco',
    },
    {
      name: 'categoria',
      title: 'Categoria do veiculo',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}
