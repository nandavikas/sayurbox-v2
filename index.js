var totalSelection = []
var count = 0

// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//     const params = new URLSearchParams(window.location.search)
//     var sender = ''
//     if (params.has('sender')) {
//         sender = params.get('sender')
//         document.querySelector('h4').innerHTML = `${sender}'s cart (8019790948)`
//     }
// });

function populate(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = '';
    var products = {
        "Sayuran": ["Edamame Conventional|Edamame Conventional", "Kentang Baby Conventional|Kentang Baby Conventional", "Red Beans Conventional|Red Beans Conventional", "Buncis Value|Buncis Value", "Jagung Manis Kupas (2pcs)|Jagung Manis Kupas (2pcs)", "Baby Spinach Hidroponik (100gr)|Baby Spinach Hidroponik (100gr)", "Paprika Kuning Value (1pcs)|Paprika Kuning Value (1pcs)", "Jamur Tiram Value|Jamur Tiram Value", "Curly Kale  (200 gram)|Curly Kale  (200 gram)", "Daun Parsley|Daun Parsley", "Kangkung Hidroponik (200gr)|Kangkung Hidroponik (200gr)", "Paprika Merah Potong|Paprika Merah Potong", "Ubi Pink Beniazuma|Ubi Pink Beniazuma", "Ubi Murasaki Ungu|Ubi Murasaki Ungu", "Kol Ungu Bulk|Kol Ungu Bulk", "Selada Romaine Hidroponik|Selada Romaine Hidroponik", "Jamur Kuping|Jamur Kuping", "Terong Ungu|Terong Ungu", "Cabai Hijau Keriting|Cabai Hijau Keriting", "Paprika Hijau Value (1pcs)|Paprika Hijau Value (1pcs)", "Paprika Merah Conventional|Paprika Merah Conventional", "Tomat Sayur Organik|Tomat Sayur Organik", "Kacang Panjang Value|Kacang Panjang Value", "Jalapeno Hidroponik|Jalapeno Hidroponik", "Kentang Dieng|Kentang Dieng", "Ubi Pink Imperfect|Ubi Pink Imperfect", "Kangkung Organik|Kangkung Organik", "Labu Siam Organik|Labu Siam Organik", "Ubi Murasaki (Ungu) - value|Ubi Murasaki (Ungu) - value", "Sawi Hijau|Sawi Hijau"],
        "Buah Segar": ['Mangga Budiraja|Mangga Budiraja', 'Anggur Red Globe (500gr)|Anggur Red Globe (500gr)', 'Apel Fuji|Apel Fuji', 'Jambu Kristal (500gr)|Jambu Kristal (500gr)', 'Pepaya California 1 pcs|Pepaya California 1 pcs', 'Pisang Cavendish|Pisang Cavendish', 'Mangga Indramayu|Mangga Indramayu', 'Jambu Biji Merah (500gr)|Jambu Biji Merah (500gr)', 'Lemon California Hijau (500gr)|Lemon California Hijau (500gr)', 'Nanas Madu|Nanas Madu', 'Rock Melon|Rock Melon', 'Apel Royal Gala|Apel Royal Gala', 'Nanas Honi|Nanas Honi', 'Raspberry Hydroponic|Raspberry Hydroponic', 'Alpukat Mentega Imperfect (1kg)|Alpukat Mentega Imperfect (1kg)', 'Kiwi Gold|Kiwi Gold', 'Mangga Harum Manis Imperfect (1kg)|Mangga Harum Manis Imperfect (1kg)', 'Harga Kebon - Alpukat Mentega Impefect|Harga Kebon - Alpukat Mentega Impefect', 'Pir Singo Import|Pir Singo Import', 'Apel Fuji  Import Imperfect|Apel Fuji  Import Imperfect', 'Mangga Harum Manis (1kg)|Mangga Harum Manis (1kg)', 'Jambu Kristal Imperfect (500gr)|Jambu Kristal Imperfect (500gr)', 'Anggur Hijau Import (500gr)|Anggur Hijau Import (500gr)', 'Nangka All Natural|Nangka All Natural', 'Lemon Lokal Imperfect 1 kg|Lemon Lokal Imperfect 1 kg', 'Durian Musangking|Durian Musangking', 'Golden Melon (1pcs)|Golden Melon (1pcs)', 'Semangka Golden (1pcs)|Semangka Golden (1pcs)', 'Mixed Berries Big Pack Hydroponic|Mixed Berries Big Pack Hydroponic', 'Blueberries Hydroponic|Blueberries Hydroponic'],
        "Karbohidrat": ['Cinnamon Swirl|Cinnamon Swirl', 'Agro Nusantara Beras Losari|Agro Nusantara Beras Losari', 'Granola Dark Choco Hazelnut - GoLite|Granola Dark Choco Hazelnut - GoLite', 'Almond Croissant|Almond Croissant', 'Agronusantara Beras Wanemo|Agronusantara Beras Wanemo', 'Whole Wheat Half Loaf|Whole Wheat Half Loaf', 'Sayurbox Beras Merah Organik|Sayurbox Beras Merah Organik', 'Sayurbox Beras Hitam Organik 1 Kg|Sayurbox Beras Hitam Organik 1 Kg', 'Agronusantara Beras Superboy|Agronusantara Beras Superboy', 'Wholesome Wheat|Wholesome Wheat', 'White Toast Half Loaf|White Toast Half Loaf', 'Raisin Danish|Raisin Danish', 'Butter Croissant|Butter Croissant', 'Pasta Gigli Rainbow Mix|Pasta Gigli Rainbow Mix', 'Sayurbox Beras Pandanwangi|Sayurbox Beras Pandanwangi', 'Pasta Gigli Basil|Pasta Gigli Basil', 'Pasta Fettucini|Pasta Fettucini', 'Roti Tawar gandum|Roti Tawar gandum', 'Fitmee Spaghetti Konnyaku Saus Carbonara|Fitmee Spaghetti Konnyaku Saus Carbonara', 'Sayurbox Sunflower Seed 250 gram|Sayurbox Sunflower Seed 250 gram', 'Tepung Terigu|Tepung Terigu', 'Fitmee Mie Shirataki Soto|Fitmee Mie Shirataki Soto', 'Sayurbox Kacang Mede Mentah|Sayurbox Kacang Mede Mentah', 'Mie Instan Kuah Rasa Ayam Bawang|Mie Instan Kuah Rasa Ayam Bawang', 'Sayurbox Pumpkin Seed 250 gram|Sayurbox Pumpkin Seed 250 gram', 'Sayurbox Chia Seed 250 gram|Sayurbox Chia Seed 250 gram', 'Agro Nusantara Beras Losari|Agro Nusantara Beras Losari', 'Sayurbox Flax Seed 250 gram|Sayurbox Flax Seed 250 gram', 'Blueberry Danish|Blueberry Danish', 'Mie Goreng Instan Alami|Mie Goreng Instan Alami'],
        "Terbaru": ['Ayam Utuh|Ayam Utuh', 'Paha Bawah Ayam|Paha Bawah Ayam', 'Sport Muesli|Sport Muesli', 'Boneless Paha Ayam|Boneless Paha Ayam', 'Snack Bar Macadamia &amp; Hazelnut|Snack Bar Macadamia &amp; Hazelnut', 'Australias Own Natural Rice Drink 1 liter|Australias Own Natural Rice Drink 1 liter', 'Ikan Salem|Ikan Salem', 'Susu Almond Asi Booster Vanilla|Susu Almond Asi Booster Vanilla', 'Healthy Egg Hypoallergenic|Healthy Egg Hypoallergenic', 'Susu Almond Asi Booster Strawberry|Susu Almond Asi Booster Strawberry', 'Susu Almond Asi Booster Dark Choco|Susu Almond Asi Booster Dark Choco', 'Gurita Takoyaki|Gurita Takoyaki', 'Ikan Kakap Merah Fillet|Ikan Kakap Merah Fillet', 'Tahu Taiwan - Tahu Sutera Padat|Tahu Taiwan - Tahu Sutera Padat', 'Gentong Rejeki Beras Premium|Gentong Rejeki Beras Premium', 'Couscous|Couscous', 'MCT Plus Red Ginger|MCT Plus Red Ginger', 'Chickpea|Chickpea', 'Tuna Tongol Chunk in Oil Premium|Tuna Tongol Chunk in Oil Premium', 'White Chia Seeds|White Chia Seeds', 'Tuna Bumbu Padang Cabai Hijau|Tuna Bumbu Padang Cabai Hijau', 'Tuna Bumbu Bali Pedas|Tuna Bumbu Bali Pedas', 'Andaliman Kering|Andaliman Kering', 'Truffle Sauce|Truffle Sauce', 'Madu Lontar Organik|Madu Lontar Organik', 'Kapulaga Lokal|Kapulaga Lokal', 'Ikan Cakalang Serut|Ikan Cakalang Serut', 'Gula Kelapa Organik|Gula Kelapa Organik', 'White Truffle Oil|White Truffle Oil', 'Bunga Lawang Utuh|Bunga Lawang Utuh'],
        "Spesial Promo": ['Pisang Cavendish|Pisang Cavendish', 'Selada Keriting Hidroponik|Selada Keriting Hidroponik', 'Ayam Utuh|Ayam Utuh', 'Nanas Madu|Nanas Madu', 'Suwe Ora Jamu Kayu Manis  Citrus|Suwe Ora Jamu Kayu Manis  Citrus', 'Sport Muesli|Sport Muesli', 'Mangga Harum Manis Imperfect (1kg)|Mangga Harum Manis Imperfect (1kg)', 'Alpukat Mentega Imperfect (1kg)|Alpukat Mentega Imperfect (1kg)', 'Harga Kebon - Alpukat Mentega Impefect|Harga Kebon - Alpukat Mentega Impefect', 'Kangkung Value|Kangkung Value', 'Bayam Hijau|Bayam Hijau', 'Alpukat Mentega Conventional (1kg)|Alpukat Mentega Conventional (1kg)', 'Muesli with Mango and Macadamia|Muesli with Mango and Macadamia', 'Semangka Merah|Semangka Merah', 'Tahu Premium|Tahu Premium', 'Sabun Cuci Sayur dan Buah|Sabun Cuci Sayur dan Buah', 'Wortel Conventional (500gram)|Wortel Conventional (500gram)', 'Australias Own Natural Rice Drink 1 liter|Australias Own Natural Rice Drink 1 liter', 'Blackberry Hydroponic 125gram|Blackberry Hydroponic 125gram', 'Fitmee Spaghetti Konnyaku Saus Carbonara|Fitmee Spaghetti Konnyaku Saus Carbonara', 'Agro Nusantara Beras Losari|Agro Nusantara Beras Losari', 'Mie Goreng Instan Alami|Mie Goreng Instan Alami', 'Tropicana Slim Minyak Jagung|Tropicana Slim Minyak Jagung', 'Herbs Crackers|Herbs Crackers', 'Tropicana Slim Santan Instan Bubuk|Tropicana Slim Santan Instan Bubuk', 'Tropicana Slim Kecap Manis|Tropicana Slim Kecap Manis', 'Tropicana Slim Gula Jawa Cair|Tropicana Slim Gula Jawa Cair', 'Tropicana Slim Sirup Cocopandan|Tropicana Slim Sirup Cocopandan', 'JJ Royal Coffee Toraja Arabica|JJ Royal Coffee Toraja Arabica', 'JJ Royal Coffee Lampung Robusta|JJ Royal Coffee Lampung Robusta'],
        "Terlaris": [],
        "Organik": ['Java Forest Raw Honey|Java Forest Raw Honey', 'Caisim Hidroponik|Caisim Hidroponik', 'Baby Bayam Hidroponik (200gr)|Baby Bayam Hidroponik (200gr)', 'Baby Pak Choy Hidroponik (200gr)|Baby Pak Choy Hidroponik (200gr)', 'Wortel Baby Organik|Wortel Baby Organik', 'Baby Spinach Hidroponik (100gr)|Baby Spinach Hidroponik (100gr)', 'Paket MPASI Puree Jagung Bayam|Paket MPASI Puree Jagung Bayam', 'Paket MPASI Bubur Bayi Wortel Jagung|Paket MPASI Bubur Bayi Wortel Jagung', 'Sayurbox Beras Merah Organik|Sayurbox Beras Merah Organik', 'Sayurbox Beras Hitam Organik 1 Kg|Sayurbox Beras Hitam Organik 1 Kg', 'Cotton Blossom Raw Honey|Cotton Blossom Raw Honey', 'Paket MPASI Puree Nasi Kentang Wortel|Paket MPASI Puree Nasi Kentang Wortel', 'Raspberry Hydroponic|Raspberry Hydroponic', 'Ecozest Organic Extra Virgin Olive Oil 500ml|Ecozest Organic Extra Virgin Olive Oil 500ml', 'Kangkung Hidroponik (200gr)|Kangkung Hidroponik (200gr)', 'Tahu Organik|Tahu Organik', 'Paket MPASI Bubur Bayi Brokoli Kentang|Paket MPASI Bubur Bayi Brokoli Kentang', 'Kecap Manis Organik|Kecap Manis Organik', 'Mixed Berries Big Pack Hydroponic|Mixed Berries Big Pack Hydroponic', 'Sayurbox Beras Pandanwangi|Sayurbox Beras Pandanwangi', 'Buncis Organik|Buncis Organik', 'Bayam Hijau Organik|Bayam Hijau Organik', 'Selada Romaine Hidroponik|Selada Romaine Hidroponik', 'Sereh Organik|Sereh Organik', 'Blueberries Hydroponic|Blueberries Hydroponic', 'Kentang Organik|Kentang Organik', 'Pak Choy Organik|Pak Choy Organik', 'Strawberry Hydroponic|Strawberry Hydroponic', 'Mixed Berries Hydroponic (170gram)|Mixed Berries Hydroponic (170gram)', 'Tomat Sayur Organik|Tomat Sayur Organik'],
        "Menu Sehat": ['Guacamole|Guacamole', 'Buah Pepaya Potong|Buah Pepaya Potong', 'Kimchi|Kimchi', 'Buah Nanas Potong|Buah Nanas Potong', 'Edamame Kupas|Edamame Kupas', 'Chicken Salad with Caesar Dressing|Chicken Salad with Caesar Dressing', 'Chicken Salad with Pesto Sauce|Chicken Salad with Pesto Sauce', 'A Fresh Farm Tuna Salad|A Fresh Farm Tuna Salad', 'Burrito Chicken Fajita|Burrito Chicken Fajita', 'Sandwich Ayam Roti Tawar|Sandwich Ayam Roti Tawar', 'Salad Buah|Salad Buah', 'Chicken Caesar Salad|Chicken Caesar Salad', 'Chicken Salad with Jakarta Dressing|Chicken Salad with Jakarta Dressing', 'Tahu Goreng Isi|Tahu Goreng Isi', 'Grilled Chicken Salad|Grilled Chicken Salad', 'Rujak Buah|Rujak Buah', 'A Chicken Salad|A Chicken Salad', 'All Veggie Salad|All Veggie Salad', 'Nasi Merah Telor Ayam|Nasi Merah Telor Ayam', 'Burrito Crunchy Chicken|Burrito Crunchy Chicken', 'Burrito Veggie|Burrito Veggie', 'Tempe Mendoan|Tempe Mendoan', 'Barley Telor Sambal Matah|Barley Telor Sambal Matah', 'Spaghetti Salad with Napolitan Sauce|Spaghetti Salad with Napolitan Sauce', 'Gado-Gado Salad|Gado-Gado Salad', 'Burrito Egg|Burrito Egg', 'Sayurbox Jus Kurma|Sayurbox Jus Kurma', 'Spaghetti Sambal Matah|Spaghetti Sambal Matah', 'Veggie Bowl|Veggie Bowl', 'Batagor|Batagor'],
        "Siap Santap": ['Cinnamon Swirl|Cinnamon Swirl', 'Dimsum Ayam|Dimsum Ayam', 'Blackmond Cookies|Blackmond Cookies', 'Snack Bar Fruit &amp; Nut Delight|Snack Bar Fruit &amp; Nut Delight', 'Pancake Durian Non Cream|Pancake Durian Non Cream', 'Almond Croissant|Almond Croissant', 'Cincau Hitam|Cincau Hitam', 'Whole Wheat Half Loaf|Whole Wheat Half Loaf', 'Kurma Ajwa|Kurma Ajwa', 'Snack Bar Almond &amp; Cashew|Snack Bar Almond &amp; Cashew', 'Ekstrak Temulawak Bubuk|Ekstrak Temulawak Bubuk', 'Cincau Madu|Cincau Madu', 'Sport Muesli|Sport Muesli', 'White Toast Half Loaf|White Toast Half Loaf', 'Raisin Danish|Raisin Danish', 'Butter Croissant|Butter Croissant', 'Snack Bar Macadamia &amp; Hazelnut|Snack Bar Macadamia &amp; Hazelnut', 'Vegan Chicken Katsu|Vegan Chicken Katsu', 'Bionic Farm Keripik Ubi Madu 50 gram|Bionic Farm Keripik Ubi Madu 50 gram', 'High Fibre Muesli|High Fibre Muesli', 'Vegan Gyoza|Vegan Gyoza', 'Cireng Crispy|Cireng Crispy', 'Mamasuka Rumput Laut Pedas|Mamasuka Rumput Laut Pedas', 'Kolang - Kaling|Kolang - Kaling', 'Vegan Mushroom Patty|Vegan Mushroom Patty', 'Cincau Hijau|Cincau Hijau', 'Selai Kacang|Selai Kacang', 'Sun Dried Tomatoes|Sun Dried Tomatoes', 'Tokpokki|Tokpokki', 'Donat Kentang|Donat Kentang'],
        "Minuman": ['Suwe Ora Jamu Asam Jawa 350 ml|Suwe Ora Jamu Asam Jawa 350 ml', 'Earl Grey Milk Tea|Earl Grey Milk Tea', 'Tukucur Cokelat|Tukucur Cokelat', 'Apple Cider Vinegar 250ml|Apple Cider Vinegar 250ml', 'Cincau Hitam|Cincau Hitam', 'Tukucur Kopi Susu Tetangga|Tukucur Kopi Susu Tetangga', 'Suwe Ora Jamu Kayu Manis  Citrus|Suwe Ora Jamu Kayu Manis  Citrus', 'Minuman Lidah Buaya|Minuman Lidah Buaya', 'Cendol Hijau|Cendol Hijau', 'Susu UHT Rasa Cokelat|Susu UHT Rasa Cokelat', 'ABC Squash Delight Leci|ABC Squash Delight Leci', 'Susu UHT Rendah Lemak|Susu UHT Rendah Lemak', 'Susu Diamond Full Cream|Susu Diamond Full Cream', 'Sayurbox Jus Kurma|Sayurbox Jus Kurma', 'Australias Own Natural Rice Drink 1 liter|Australias Own Natural Rice Drink 1 liter', 'Jus Pepaya (250mL)|Jus Pepaya (250mL)', 'Jus Strawberry|Jus Strawberry', 'Jus Wortel (250mL)|Jus Wortel (250mL)', 'Jus Seledri|Jus Seledri', 'Jamu Temulawak|Jamu Temulawak', 'Nestle Bear Brand Susu Steril Malt Putih|Nestle Bear Brand Susu Steril Malt Putih', 'Susu UHT Low Fat|Susu UHT Low Fat', 'Jus Mangga|Jus Mangga', 'Freshly Squeezed Orange Juice (Seasonal)|Freshly Squeezed Orange Juice (Seasonal)', 'Jus Seledri Apel|Jus Seledri Apel', 'Surio Pure Soy Milk Sweetened (350 ml)|Surio Pure Soy Milk Sweetened (350 ml)', 'Jamu Jahe|Jamu Jahe', 'Jamu Beras Kencur|Jamu Beras Kencur', 'Jamu Kunyit Asam|Jamu Kunyit Asam', 'Ultra Milk UHT Cokelat|Ultra Milk UHT Cokelat'],
        "Bumbu Dapur": ['Java Forest Raw Honey|Java Forest Raw Honey', 'Bumbu Gule (1pcs)|Bumbu Gule (1pcs)', 'Tempe Mendoan|Tempe Mendoan', 'Apple Cider Vinegar 250ml|Apple Cider Vinegar 250ml', 'Cotton Blossom Raw Honey|Cotton Blossom Raw Honey', 'Bumbu Lodeh|Bumbu Lodeh', 'Lada Hitam value (100gr)|Lada Hitam value (100gr)', 'Paket Masak Sayur Lodeh|Paket Masak Sayur Lodeh', 'Bumbu Rawon|Bumbu Rawon', 'Ecozest Organic Extra Virgin Olive Oil 500ml|Ecozest Organic Extra Virgin Olive Oil 500ml', 'Ekstrak Temulawak Bubuk|Ekstrak Temulawak Bubuk', 'Tahu Organik|Tahu Organik', 'Kecap Manis Organik|Kecap Manis Organik', 'Bumbu Lada Hitam|Bumbu Lada Hitam', 'Biji Lada Putih Value (100gr)|Biji Lada Putih Value (100gr)', 'Barco Coconut Cooking Oil|Barco Coconut Cooking Oil', 'Extra Light Olive Oil|Extra Light Olive Oil', 'Chili Pow Level 10|Chili Pow Level 10', 'Gula Aren Bubuk|Gula Aren Bubuk', 'Sambwal|Sambwal', 'Paket Masak Sayur Sop|Paket Masak Sayur Sop', 'ABC Squash Delight Leci|ABC Squash Delight Leci', 'Tahu Putih|Tahu Putih', 'Paket Masak Kentang Balado|Paket Masak Kentang Balado', 'Bumbu Opor Ayam|Bumbu Opor Ayam', 'Tahu Sutra Kuning|Tahu Sutra Kuning', 'Kunyit Bubuk|Kunyit Bubuk', 'Kembang Kol Pedas Manis|Kembang Kol Pedas Manis', 'Tropical Minyak Goreng Sawit (1L)|Tropical Minyak Goreng Sawit (1L)', 'Tahu Kuning|Tahu Kuning'],
        "Susu, Telur dan Keju": ['Tempe Mendoan|Tempe Mendoan', 'Telur Ayam Negeri Rendah Kolesterol|Telur Ayam Negeri Rendah Kolesterol', 'Telur Ayam Kampung Selenium|Telur Ayam Kampung Selenium', 'Telur Mori Tama Omega 3|Telur Mori Tama Omega 3', 'Pick Me Telur Puyuh|Pick Me Telur Puyuh', 'Sayurbox Telur Ayam Negeri|Sayurbox Telur Ayam Negeri', 'Tahu Organik|Tahu Organik', 'Susu UHT Rasa Cokelat|Susu UHT Rasa Cokelat', 'Tahu Putih|Tahu Putih', 'Tahu Sutra Kuning|Tahu Sutra Kuning', 'Susu UHT Rendah Lemak|Susu UHT Rendah Lemak', 'Susu Diamond Full Cream|Susu Diamond Full Cream', 'Telur Ayam Kampung Omega 3|Telur Ayam Kampung Omega 3', 'Tahu Kuning|Tahu Kuning', 'Tahu Premium|Tahu Premium', 'Telur Ayam Negeri Omega (Eggarnic)|Telur Ayam Negeri Omega (Eggarnic)', 'Tahu Cina|Tahu Cina', 'Tempe Papan|Tempe Papan', 'Nestle Bear Brand Susu Steril Malt Putih|Nestle Bear Brand Susu Steril Malt Putih', 'Susu UHT Low Fat|Susu UHT Low Fat', 'Telur Ayam Kampung (Eggcelent)|Telur Ayam Kampung (Eggcelent)', 'Surio Pure Soy Milk Sweetened (350 ml)|Surio Pure Soy Milk Sweetened (350 ml)', 'Ultra Milk UHT Cokelat|Ultra Milk UHT Cokelat', 'Susu UHT Choco Malt|Susu UHT Choco Malt', 'Pure Almond Milk|Pure Almond Milk', 'Susu Kambing Etawa Plus Royal Jelly|Susu Kambing Etawa Plus Royal Jelly', 'Susu UHT Skim|Susu UHT Skim', 'Krimer Kental Manis|Krimer Kental Manis', 'Susu Kental Manis Vanila|Susu Kental Manis Vanila', 'Ovaltine Susu UHT|Ovaltine Susu UHT'],
        "Seafood": ['Lele Siap Goreng|Lele Siap Goreng', 'Udang Laut Kupas Kulit Ekor Utuh|Udang Laut Kupas Kulit Ekor Utuh', 'Ikan Dori Fillet|Ikan Dori Fillet', 'Salmon Tasman|Salmon Tasman', 'Ikan Ekor Kuning|Ikan Ekor Kuning', 'Ikan Tenggiri Steak|Ikan Tenggiri Steak', 'Ikan Bawal Hitam Laut|Ikan Bawal Hitam Laut', 'Salmon Norwey Fillet|Salmon Norwey Fillet', 'Banda Ikan Tongkol|Banda Ikan Tongkol', 'Ikan Bandeng|Ikan Bandeng', 'Ikan Gindara Potongan Steak|Ikan Gindara Potongan Steak', 'Ikan Kue Bulet|Ikan Kue Bulet', 'Cumi Tube|Cumi Tube', 'Ikan Tenggiri Potongan Steak|Ikan Tenggiri Potongan Steak', 'Ikan Gurame|Ikan Gurame', 'Ikan Tongkol|Ikan Tongkol', 'Ikan Kerapu|Ikan Kerapu', 'Udang Vannamei|Udang Vannamei', 'Gurita Utuh size 30 50|Gurita Utuh size 30 50', 'Cumi Ring|Cumi Ring', 'Udang Black Tiger Size 40|Udang Black Tiger Size 40', 'Cumi Ring (500gram)|Cumi Ring (500gram)', 'Ikan Salem|Ikan Salem', 'Benoa Kerang Batik 500 Gram|Benoa Kerang Batik 500 Gram', 'Kepiting Soka|Kepiting Soka', 'Gurita Takoyaki|Gurita Takoyaki', 'Ikan Kakap Merah Fillet|Ikan Kakap Merah Fillet', 'Kerang Bambu|Kerang Bambu', 'Ikan Teri Medan Asin|Ikan Teri Medan Asin', 'Ikan Selar Asin|Ikan Selar Asin'],
        "Daging": ['Saikoro Beef|Saikoro Beef', 'Short Plate Sliced Beef|Short Plate Sliced Beef', 'Empal Suwir Serundeng Frozen|Empal Suwir Serundeng Frozen', 'Daging Potong Rendang Australia|Daging Potong Rendang Australia', 'Rendang Daging Sapi Original|Rendang Daging Sapi Original', 'Buntut Sapi|Buntut Sapi', 'Hati Sapi|Hati Sapi', 'Paru Sapi|Paru Sapi', 'Daging Sapi Has Dalam|Daging Sapi Has Dalam', 'Kibif Yakiniku Short Plate|Kibif Yakiniku Short Plate', 'Kibif Daging Sapi Soto Betawi Frozen 500 gram|Kibif Daging Sapi Soto Betawi Frozen 500 gram', 'Daging Sapi Suwir dan Sambalado|Daging Sapi Suwir dan Sambalado', 'Beef Burger|Beef Burger', 'Asaper Daging Sei Sapi|Asaper Daging Sei Sapi', 'Silly Fish Shabu Package 1 kg|Silly Fish Shabu Package 1 kg', 'Sosis Bockwurst|Sosis Bockwurst', 'Bakso Daging Sapi|Bakso Daging Sapi', 'Beef Pepperoni|Beef Pepperoni', 'Moncis Sosis Sapi Beefwurst|Moncis Sosis Sapi Beefwurst', 'Bu Narti Oseng Oseng Mercon Sapi 300 gram|Bu Narti Oseng Oseng Mercon Sapi 300 gram', 'PopSo Sapi Lada Hitam|PopSo Sapi Lada Hitam', 'Rendang Sapi Basah Original|Rendang Sapi Basah Original', 'Dendeng Balado Merah|Dendeng Balado Merah', 'Kornet Daging Sapi|Kornet Daging Sapi', 'Kornet Daging Sapi|Kornet Daging Sapi'],
        "Ayam": ['Ayam Utuh|Ayam Utuh', 'Paha Bawah Ayam|Paha Bawah Ayam', 'Boneless Paha Ayam|Boneless Paha Ayam', 'Paha Atas Ayam Frozen|Paha Atas Ayam Frozen', 'Ayam Broiler Frozen|Ayam Broiler Frozen', 'Ayam Kungpao Frozen|Ayam Kungpao Frozen', 'Etanee Paha Ayam Tanpa Tulang (1kg)|Etanee Paha Ayam Tanpa Tulang (1kg)', 'Ceker Ayam Frozen|Ceker Ayam Frozen', 'Ayam Suwir Bumbu Bali|Ayam Suwir Bumbu Bali', 'Ayam Broiler Potong 10|Ayam Broiler Potong 10', 'Sierad Kulit Ayam 500 Gram|Sierad Kulit Ayam 500 Gram', 'Puyuh Ungkep Mas Yogi|Puyuh Ungkep Mas Yogi', 'Bebek Box Mas Yogi|Bebek Box Mas Yogi', 'Bu Narti Oseng Oseng Mercon Ayam 300 gram|Bu Narti Oseng Oseng Mercon Ayam 300 gram', 'Crispy Chicken Burger|Crispy Chicken Burger', 'Daging Ayam Marinasi|Daging Ayam Marinasi', 'Ayam Panggang Hongkong Style|Ayam Panggang Hongkong Style', 'Ceker Ayam Dimsum|Ceker Ayam Dimsum', 'Sayap Ayam Marinasi|Sayap Ayam Marinasi', 'Gyoza Ayam Frozen|Gyoza Ayam Frozen'],
        "Semua Produk": ['Cinnamon Swirl|Cinnamon Swirl', 'Agro Nusantara Beras Losari|Agro Nusantara Beras Losari', 'Java Forest Raw Honey|Java Forest Raw Honey', 'Dimsum Ayam|Dimsum Ayam', 'Blackmond Cookies|Blackmond Cookies', 'Snack Bar Fruit &amp; Nut Delight|Snack Bar Fruit &amp; Nut Delight', 'Guacamole|Guacamole', 'Suwe Ora Jamu Asam Jawa 350 ml|Suwe Ora Jamu Asam Jawa 350 ml', 'Earl Grey Milk Tea|Earl Grey Milk Tea', 'Granola Dark Choco Hazelnut - GoLite|Granola Dark Choco Hazelnut - GoLite', 'Pancake Durian Non Cream|Pancake Durian Non Cream', 'Saikoro Beef|Saikoro Beef', 'Caisim Hidroponik|Caisim Hidroponik', 'Jambu Kristal (500gr)|Jambu Kristal (500gr)', 'Kembang Kol|Kembang Kol', 'Tempe Mendoan|Tempe Mendoan', 'Edamame Conventional|Edamame Conventional', 'Baby Bayam Hidroponik (200gr)|Baby Bayam Hidroponik (200gr)', 'Pepaya California 1 pcs|Pepaya California 1 pcs', 'Bumbu Gule (1pcs)|Bumbu Gule (1pcs)', 'Mangga Budiraja|Mangga Budiraja', 'Green Romaine Value (250gr)|Green Romaine Value (250gr)', 'Sawi Putih 1 kg|Sawi Putih 1 kg', 'Short Plate Sliced Beef|Short Plate Sliced Beef', 'Pisang Cavendish|Pisang Cavendish', 'Anggur Red Globe (500gr)|Anggur Red Globe (500gr)', 'Apel Fuji|Apel Fuji', 'Tukucur Cokelat|Tukucur Cokelat', 'Agronusantara Beras Wanemo|Agronusantara Beras Wanemo', 'Lele Siap Goreng|Lele Siap Goreng'],
    }
    for (var product in products[s1.value]) {
        var pair = products[s1.value][product].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
        value++;
        document.getElementById('number').value = value;
    }
}

function decrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
        value--;
        document.getElementById('number').value = value;
    }

}

function add() {
    const product = document.getElementById("product").value
    const quantity = document.getElementById("number").value
    const $selectionTemplate = document.querySelector('#selection-template').innerHTML
    const $selection = document.querySelector("#selection")
    if (product !== "") {
        count += 1
        const html = Mustache.render($selectionTemplate, {
            product,
            quantity,
            "pId": `p-${count}`,
            "editId": `edit-${count}`,
            "deleteId": `delete-${count}`,
            "quantityId": `quantity-${count}`
        })
        $selection.insertAdjacentHTML('beforeend', html)
        totalSelection.push({
            product,
            quantity
        })
        const number = document.getElementById("number")
        number.value = "1"
        // console.log("Selected Product",product)
        // console.log("Selected Quantity",quantity)
    }
}

function editElement() {
    const editId = this.event.target.id
    const number = editId.split("-")[1]
    const quantityId = `quantity-${number}`
    console.log(`Edit button ID --> ${editId}`)
    var quantity = document.getElementById(quantityId)
    try {
        console.log("In if", "Quantity ID is not null")
        document.getElementById(editId).innerHTML = "&#xe013;"
        var quantityInput = document.createElement("input")
        console.log("quantity value", quantity.innerHTML)
        quantityInput.setAttribute("id", `qi-${number}`)
        quantityInput.setAttribute("class", "quantity-input")
        quantityInput.setAttribute("type", "number")
        quantityInput.setAttribute('value', quantity.innerHTML)
        quantity.parentNode.replaceChild(quantityInput, quantity)
    }
    catch (e) {
        console.log("In catch")
        document.getElementById(editId).innerHTML = "&#x270f;"
        const newQuantity = document.getElementById(`qi-${number}`)
        console.log("New Quantity", newQuantity.value)
        const newSpan = document.createElement("span")
        newSpan.setAttribute("id", quantityId)
        newSpan.innerHTML = newQuantity.value
        newQuantity.parentNode.replaceChild(newSpan, newQuantity)
    }
}

function deleteElement() {
    const deleteId = this.event.target.id
    console.log(`Delete button ID --> ${deleteId}`)

    //Get number of element
    const number = deleteId.split("-")[1]
    const deleteButton = document.getElementById(deleteId);
    const editButton = document.getElementById(`edit-${number}`);
    const paragraph = document.getElementById(`p-${number}`);
    delete totalSelection[number - 1]
    console.log(totalSelection)

    //Remove details of the selected item
    deleteButton.remove()
    editButton.remove()
    paragraph.remove()
}

function submit() {
    console.log("Total Selection Array", totalSelection)
    document.getElementById("submit-button").disabled = true;
    document.getElementById("add-button").disabled = true;
    document.getElementById("clear-cart").disabled = true;
    document.getElementById("increase").disabled = true;
    document.getElementById("decrease").disabled = true;
    document.getElementById("category").disabled = true;
    document.getElementById("product").disabled = true;
    console.log("sender ID", sender)

    window.parent.postMessage(
        JSON.stringify({
            event_code: "ym-client-event",
            data: JSON.stringify({
                event: {
                    code: "data",
                    data: {
                        res: totalSelection,
                    },
                },
            }),
        }),
        "*"
    );
}

function clearCart() {
    const cart = document.getElementById("selection")
    cart.innerHTML = ""
    count = 0
}
