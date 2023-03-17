const produto = [
  {
    id: 0,
    imagem: "src/img/pizza-frango.png",
    title: "Pizza de Frango",
    preco: 32,
  },

  {
    id: 1,
    imagem: "src/img/pizza-presunto.png",
    title: "Pizza de Presunto",
    preco: 36,
  },

  {
    id: 2,
    imagem: "src/img/pizza-bufallo.png",
    title: "Pizza de Bufallo",
    preco: 43,
  },

  {
    id: 3,
    imagem: "src/img/suco-laranja.png",
    title: "Suco de Laranja",
    preco: 2,
  },

  {
    id: 4,
    imagem: "src/img/pepsi.png",
    title: "Pepsi",
    preco: 4,
  },

  {
    id: 5,
    imagem: "src/img/coca-cola.png",
    title: "Coca-Cola",
    preco: 4,
  },

  {
    id: 6,
    imagem: "src/img/Cheeseburger.png",
    title: "Cheeseburger",
    preco: 12,
  },

  {
    id: 7,
    imagem: "src/img/hamburger-whopper.png",
    title: "Hamburger Whopper",
    preco: 13,
  },

  {
    id: 8,
    imagem: "src/img/hamburger-whopper.png",
    title: "Hamburger Whopper",
    preco: 13,
  },
];

const categorias = [...new Set(produto.map((item) => item.title))];

let i = 0;
let count = 0;

document.querySelector(".root").innerHTML = categorias
  .map((item) => {
    const itemProduto = produto.find((produto) => produto.title === item);
    const { imagem, title, preco } = itemProduto;
    return (
      `<div class="box">
        <div class='img-box'>
        <img class='imagens' src=${imagem}> </img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${preco}.00</h2>` +
      "<button class='btnComprar' onclick='adicionarCarrinho(" +
      i++ +
      ")'>Comprar</button>" +
      `</div>
        </div>`
    );
  })
  .join("");

const cart = [];

function adicionarCarrinho(a) {
  const itemProduto = produto.find(
    (produto) => produto.title === categorias[a]
  );
  cart.push({
    imagem: itemProduto.imagem,
    title: itemProduto.title,
    preco: itemProduto.preco,
  });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function formularioCompra() {
  const formularioPedido = document.querySelector(".formularioPedido");
  formularioPedido.style.visibility = "visible";
}

const formularioPedido = document.querySelector(".formularioPedido");
const closeForm = document.querySelector(".closeForm");
closeForm.addEventListener("click", function () {
  formularioPedido.style.visibility = "hidden";
});
function botaoFinalizar() {
  const carrinhoComItem = document.querySelector(".carrinhoComItem");
  let el = `  <i class='fa fa-cart-plus' style="font-size: 30px;" onclick='formularioCompra()'></i>
 `;
  carrinhoComItem.innerHTML = el;
}

function displaycart() {
  let j = 0;
  document.querySelector(".count").innerHTML = cart.length;
  let total = 0;
  if (cart.length > 0) {
    botaoFinalizar();
  }

  if (cart.length == 0) {
    document.querySelector(".carrinhoItem").innerHTML =
      "Seu carrinho está vazio";
    document.querySelector(".total").textContent = "R$00";
  } else {
    document.querySelector(".carrinhoItem").innerHTML = cart
      .map((item) => {
        var { imagem, title, preco } = item;
        total += preco;
        return `<div class="carrinhoItem">
                    <div>
                        <img class='rowimg' src=${imagem}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:12px;'>R$ ${preco}.00</h2>
                    <i class='fa fa-trash-o' onclick='delElement(${j})'></i>
                </div>`;
      })
      .join("");
    document.querySelector(".total").textContent = `R$ ${total}.00`;
  }
}

const atendimentoButton = document.querySelector(".atendimento-usuario");
atendimentoButton.addEventListener("click", () => {
  location.href = "atendimento.html";
});
