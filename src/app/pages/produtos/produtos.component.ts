import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
produtos = [
  {
      id: 1, //Id do produto
      nome: "Camisa Real Madrid 2010", //Nome do produto
      preco: "259.90", //Preço do produto
      imagem: "../../../assets/images/camisa do realmadrid 2010.jpg", //Caminho da imagem
      linkimagem: "/real2010" 
  },
  {
      id: 2,
      nome: "Camisa Real Madrid 2011",
      preco: "259.90",
      imagem: "../../../assets/images/camisa do realmadrid 2011.jpg",
      linkimagem: "/real2011"
  },
  {
      id: 3,
      nome: "Camisa Real Madrid 2013",
      preco: "259.90",
      imagem: "../../../assets/images/camisa do realmadrid 2013.jpg",
      linkimagem: "/real2013"
  },
  {
      id: 4,
      nome: "Camisa Real Madrid 2014",
      preco: "259.90",
      imagem: "../../../assets/images/camisa do realmadrid 2014.png",
      linkimagem: "/real2014"
  },    {
      id: 5,
      nome: "Camisa Real Madrid 2015",
      preco: "259.90",
      imagem: "../../../assets/images/camisa do realmadrid 2015.jpg",
      linkimagem: "/real2015"
  },
  {
      id: 6,
      nome: "Camisa Real Madrid 2017",
      preco: "290.90",
      imagem: "../../../assets/images/camisa do realmadrid 2017.jpg",
      linkimagem: "/real2017"
  },    
  {
      id: 7,
      nome: "Camisa do Real Madrid 2009",
      preco: "259.90",
      imagem: "../../../assets/images/camisa realmadrid 2009.jpg",
      linkimagem: "/real2009"
  },
  {
      id: 8,
      nome: "Camisa do Real Madrid 2012",
      preco: "259.90",
      imagem: "../../../assets/images/camisa realmadrid 2012.jpg",
      linkimagem: "/real2012"
  },    
  {
      id: 9,
      nome: "Camisa do Real Madrid 2018",
      preco: "259.90",
      imagem: "../../../assets/images/camisa realmadrid 2018.jpg",
      linkimagem: "/real2018"
  },
  {
    id: 10,
    nome: "Viceroy Hombre - Acero",
    preco: "259.90",
    imagem: "../../../assets/acessorios/reloj-viceroy-hombre-42311-07-real-madrid-acero-800x800.jpeg",
    linkimagem: "/hombreacero"
  },
  { //*
    id: 11, 
    nome: "Viceroy Cadete - Nylon Preto",
    preco: "259.90",
    imagem: "../../../assets/acessorios/reloj-viceroy-hombre-42307-57-real-madrid-nylon-negro-800x800.jpeg",
    linkimagem: "cadetepreto"
  },
  { //*
    id: 12,
    nome: "Viceroy Cadete - Nylon Azul",
    preco: "259.90",
    imagem: "../../../assets/acessorios/reloj-viceroy-hombre-40969-39-real-madrid-nylon-azul-800x800.jpeg",
    linkimagem: "cadeteazul"
  },
  { //*
    id: 13,
    nome: "Viceroy Cadete - Acero",
    preco: "259.90",
    imagem: "../../../assets/acessorios/reloj-viceroy-cadete-42300-07-real-madrid-acero-800x800.jpeg",
    linkimagem: "cadeteacero"
  },
  {
    id: 14,
    nome: "Acessório para cama Real Madrid",
    preco: "240.90",
    imagem: "../../../assets/acessorios/Acessorios-para-cama-Real-Madrid-Acessorios-para-a-cama-Real-Madrid-115466-l.jpg",
    linkimagem: "camarealmadrid"
  },
  {
    id: 15,
    nome: "Boné Real Madrid preto",
    preco: "250.90",
    imagem: "../../../assets/acessorios/bone real madrid preto.webp",
    linkimagem: "bonepreto"
  },
  {
    id: 16,
    nome: "Meião Azul Real Madrid",
    preco: "233.30",
    imagem: "../../../assets/acessorios/real_madrid_meiao_2022_uniforme_reserva_11429_1_ae250709af4c18032689805c46318244.webp",
    linkimagem: "meiaoazul"
  }
];
}
