let cart = [];

function showProducts() {
    document.getElementById('product-section').scrollIntoView({ behavior: 'smooth' });
}

function addToCart(productName, productPrice) {
    const cartItem = {
        name: productName,
        price: productPrice,
    };

    cart.push(cartItem,);
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    var totalHTML = document.getElementById('total');
    var total = 0;
    cartItems.innerHTML = '';
    totalHTML.innerHTML = "Preço: R$" + total;

    if (cart.length === 0) {
        total.innerHTML = "Preço: R$" + total;
        cartItems.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            
            cartItemDiv.innerHTML = `
                <span>${item.name} - R$ ${item.price.toFixed(2)}</span>
                <button onclick="removeFromCart(${index})">Excluir</button>
            `;
            total += Number(item.price.toFixed(2));
            totalHTML.innerHTML = "Total: R$" + total;
            
            cartItems.appendChild(cartItemDiv);
        });
    }
}

function checkout() {
    if (cart.length === 0) {
        document.getElementById('modal_titulo').innerHTML = 'Cadastro Invalido';
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger';
        document.getElementById('modal_conteudo').innerHTML = "Há campos vazios ou invalidos!";
        document.getElementById('modal_btn').innerHTML = 'Voltar';
        document.getElementById('modal_btn').className = 'btn btn-danger';
        $('#modalAlert').modal('show'); // Exibe o modal
        modal = "";
        event.preventDefault();
    } else {
        alert('Compra realizada com sucesso!');
        cart = [];
        renderCart();
    }
}

function limpar_tudo() {
    document.getElementById('nome').value=("");
    document.getElementById('prod').value=("");
    document.getElementById('desc').value=("");
    document.getElementById('preco').value=("");
    document.getElementById('marca').value=("");
    }
    
    function validar(){
    nome = document.getElementById("nome").value;
    prod = document.getElementById("prod").value;
    desc = document.getElementById("desc").value;
    marca = document.getElementById("marca").value;
    preco = document.getElementById("preco").value;
        if(
            nome == "" ||
            prod == "" ||
            desc == "" ||
            preco == "" ||
            marca == "" 
        ){
            alert("Há campos vazios!");
            return;
        }
    }
    document.getElementById("btCadastrar").addEventListener('click', validar);
    document.getElementById("btLimpar").addEventListener('click', limpar_tudo);