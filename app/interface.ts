export interface simplifiedProduct {
  _id: string;
  categoria: string;
  imageUrl: string;
  modelo: string;
  preco: number;
  slug: string;
}

export interface ProductWithFormattedPrice extends simplifiedProduct {
  formattedPrice: string;
}


export interface fullProduct {
  _id: string;
  ano: number;
  categoria: string;
  modelo: string;
  combustivel: string;
  cor: string;
  descricao: string;
  imagens: any;
  km: number;
  nome: string;
  potencia: string;
  preco: number;
  slug: string;
}

export interface imageProduct {
  _id: string;
  imageUrl: {
    url: string;
  };
}