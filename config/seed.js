require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Rolex', sortOrder: 10},
    {name: 'Omega', sortOrder: 20},
    {name: 'Cartier', sortOrder: 30},
    {name: 'Patek Philippe', sortOrder: 40},
    {name: 'Richard Mille', sortOrder: 60},
    {name: 'Audemars Piguet', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Day-Date', image: 'https://s3.amazonaws.com/ISHOWIMAGES/rolex/watch_assets_front_facing/landscape_assets/m128238-0069_modelpage_front_facing_landscape.png', category: categories[0], price: 21000},
    {name: 'Submariner', image: 'https://s3.amazonaws.com/ISHOWIMAGES/rolex/watch_assets_front_facing/landscape_assets/m126610lv-0002_modelpage_front_facing_landscape.png', category: categories[0], price: 17000},
    {name: 'Daytona', image: 'https://m.media-amazon.com/images/I/71PwU1M+poL._AC_UY1000_.jpg', category: categories[0], price: 38000},
    {name: 'Speedmaster', image: 'https://www.omegawatches.com/media/catalog/product/cache/a4ad538c5757ad57bdde03d2a9013f91ccf9c7a598439668c455840068fe7472/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001002-198df2.png', category: categories[1], price: 14.95},
    {name: 'Seamaster', image: 'https://www.omegawatches.com/media/catalog/product/cache/a4ad538c5757ad57bdde03d2a9013f91ccf9c7a598439668c455840068fe7472/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422003001-5c4934.png', category: categories[1], price: 13.95},
    {name: 'Speedmaster', image: 'https://www.omegawatches.com/media/catalog/product/cache/a4ad538c5757ad57bdde03d2a9013f91ccf9c7a598439668c455840068fe7472/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31060425099002-9cf9a8.png', category: categories[1], price: 25.95},
    {name: 'Santos de Cartier', image: 'https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwdea14555/images/large/ab421ed7d4355cda90cda269108e7dc0.png?sw=750&sh=750&sm=fit&sfrm=png', category: categories[2], price: 1.95},
    {name: 'Tank', image: 'https://int.cartier.com/content/dam/rcq/car/22/89/87/7/2289877.png.scale.600.high.tank-louis-cartier-watch-yellow-gold.png', category: categories[2], price: 4.95},
    {name: 'Nautilus', image: 'https://cdn2.chrono24.com/images/uhren/30539454-6jbctm23jhuivvzbsr1uj2vz-ExtraLarge.jpg', category: categories[3], price: 3.95},
    {name: 'Nautilus', image: 'https://da8t9y7300ntx.cloudfront.net/wp-content/uploads/sites/15/2020/07/5990_1A_001_1.jpg', category: categories[3], price: 7.95},
    {name: 'Geneve', image: 'https://sothebys-com.brightspotcdn.com/48/a6/cd/0cec6b74245662de5090f2afac7b856a0b7e3e8434e23236d31b3ce522/060ge1804-9y8bx-1-39-5mm.jpg', category: categories[3], price: 1.95},
    {name: 'Chronograph', image: 'https://luxurywatchesusa.com/wp-content/uploads/2022/04/RM-35-02-all-red.jpg.webp', category: categories[4], price: 2.95},
    {name: 'Blue RM56', image: 'https://media.gq-magazine.co.uk/photos/5d13a6e3976fa3901af3ad10/master/w_1600%2Cc_limit/jay-z-03-gq-15may19_b.jpg', category: categories[4], price: 3.95},
    {name: 'Royal Oak', image: 'https://media.gq-magazine.co.uk/photos/5d13a6e3976fa3901af3ad10/master/w_1600%2Cc_limit/jay-z-03-gq-15may19_b.jpg', category: categories[5], price: 1.95},
    {name: 'Royal Oak', image: 'https://images.watchfinder.co.uk/imgv2/stock/231756/AudemarsPiguet-RoyalOak-15450ST.OO.1256ST.03-231756-1-221121-121332.jpg', category: categories[5], price: 0.95},
    {name: 'Royal Oak', image: 'https://www.berrysjewellers.co.uk/cdn/shop/files/7W6A2135.jpg?v=1695906636&width=1024', category: categories[5], price: 2.95},
  ]);

  console.log(items)

  process.exit();

})();