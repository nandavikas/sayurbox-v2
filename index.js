<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Product List</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.min.js"></script>
    <script src="index.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body style="margin-left: 20px; margin-top: 10px;">
    <div style="width: 450px;">
        <!-- <div class="cart-header">
            <h3>User cart(Mobile Number)</h3>
            <button>Clear cart</button>
          </div> -->
        <div class="cart-header">
            <h4 style="margin-bottom: 15px;">
                User cart(Mobile Number)
            </h4>
            <input type="button" onclick="clearCart()" value="Clear cart" class="btn btn-danger btn-sm" id="clear-cart"/>
        </div>
        <div id="selection" style="width: 85%;"></div>
        <select class="select-css" name="category" value="Select Category" id="category" style="margin-bottom: 5px;"
            onchange="populate(this.id,'product')">
            <option value="Category" disabled selected>Select Category</option>
            <option value="Sayuran">Sayuran</option>
            <option value="Buah Segar">Buah Segar</option>
            <option value="Karbohidrat">Karbohidrat</option>
            <option value="Terbaru">Terbaru</option>
            <option value="Spesial Promo">Spesial Promo</option>
            <!-- <option value="Terlaris">Terlaris</option> -->
            <option value="Organik">Organik</option>
            <option value="Menu Sehat">Menu Sehat</option>
            <option value="Siap Santap">Siap Santap</option>
            <option value="Minuman">Minuman</option>
            <option value="Bumbu Dapur">Bumbu Dapur</option>
            <option value="Susu, Telur dan Keju">Susu, Telur dan Keju</option>
            <option value="Seafood">Seafood</option>
            <option value="Daging">Daging</option>
            <option value="Ayam">Ayam</option>
            <option value="Semua Produk">Semua Produk</option>
        </select>
        <select class="select-css" name="product" id="product">
            <option value="" disabled selected>Select Product</option>
        </select>
        <div class="container" style="text-align: left;width: 100%;margin-left: 0px;">
            <input type="button" onclick="decrementValue()" value="-" style="width: 10%;margin-left: 0px;" class="btn btn-primary" id="decrease"/>
            <input type="text" name="quantity" value="1" maxlength="2" max="10" size="1" id="number"
                style="width: 40%;" />
            <input type="button" onclick="incrementValue()" value="+" style="width: 10%;" class="btn btn-primary" id="increase"/>
            <input type="button" value="Add to cart" id="add-button" onclick="add()"
                style="margin-left: 10px;width: 25%;" class="btn btn-primary" />
        </div>
        <input type="button" value="Send to customer" id="submit-button" onclick="submit()"
            style="width: 70%;margin-top: 5px;" class="btn btn-primary" />
    </div>

    <script id="selection-template" type="text/html">
    <p style="width: 95%;font-family: sans-serif;margin:0px" id={{pId}}>{{product}} : &nbsp <span class="quantity" id={{quantityId}}>{{quantity}}</span><span onmouseup="deleteElement()" class="glyphicon" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='black'" id={{deleteId}}>&#xe020;</span><span onmouseup="editElement()" class="glyphicon" id={{editId}} onMouseOver="this.style.color='green'" onMouseOut="this.style.color='black'">&#x270f;</span></p>
    </script>
</body>

</html>
