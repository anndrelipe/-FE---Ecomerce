let ref_card = document.getElementById('card');
let grid = document.getElementById('grid');
let row = document.getElementById('row');
let col = document.getElementById('col');


const lista_paises = [
    {
        "title": "Hotel em Paris",
        "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/195289876.jpg?k=2e05ef9e8bbe32751b1c8f4d9e4140aeecda533dbb370113f8b148593ad05463&o=&hp=1"
    },
    {
        "title": "Hotel em Londres",
        "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/47/a0/d4/president-hotel.jpg?w=700&h=-1&s=1"
    },
    {
        "title": "Hotel em Bangkok",
        "url": "https://graphhotels.com/wp-content/uploads/2022/12/graph-hotel-junior-suite-1.jpg"
    },
    {
        "title": "Hotel em Cingapura",
        "url": "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/40/89/40896_v5.jpeg"
    },
    {
        "title": "Hotel em Nova Iorque",
        "url": "https://equinox-hotels.com/wp-content/uploads/2019/12/premiersuite-bedroom-livingroom-mfrzd-scaled.jpg"
    },
    {
        "title": "Hotel em Istambul",
        "url": "https://content.r9cdn.net/rimg/himg/a2/5e/e9/expediav2-4068795-981926404-956199.jpg"
    },
    {
        "title": "Hotel em Kuala Lumpur",
        "url": "https://www.berjayahotel.com/sites/default/files/hotel-category-offers/kualalumpur/offers-room-berjaya-times-square-hotel-kuala-lumpur.jpg"
    },
    {
        "title": "Hotel em Hong Kong",
        "url": "https://hashtaglegend.com/wp-content/uploads/2020/06/best-hong-kong-hotel-suites-staycation-2020-3-2.jpg"
    },
    {
        "title": "Hotel em Barcelona",
        "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/346386537.jpg?k=0ab6c59d1536620e2aca5ae7368f57a390c679b192b3d2e74dc569185a22f2f1&o=&hp=1"
    },
    {
        "title": "Hotel em Rio de Janeiro",
        "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/465374907.jpg?k=636989f0fb144c8d84643414adfb679891e6717f7fced83bd5eade65b09ff125&o=&hp=1"
    },
    {
        "title": "Hotel em São Paulo",
        "url": "https://cache.marriott.com/content/dam/marriott-renditions/SAOBR/saobr-suite-8927-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
    },
    {
        "title": "Hotel em Brasília",
        "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484928052.jpg?k=72e10a8ff0f0154d1e5985fedea7f976714ab55f5da12ead27e2118057ce6d77&o=&hp=1"
    }
]



function carregar_first_row() {
    if (row.childElementCount > 0) {
        for (let k = row.childElementCount; k <= 3; k++) {
            row.innerHTML += `<div class="col">
                <div class="card" style="width: 18rem;" id="card">
                    <img src="${lista_paises[k].url}" class="card-img-top" alt="..." style="width:286px;height:181px;">
                    <div class="card-body">
                      <h5 class="card-title">${lista_paises[k].title}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
              </div>`
        }
    }
}

function create_other_rows() {
    for (let i = 0; i < 2; i++) {
        grid.innerHTML += `<div class="row" id="row${i + 1}"> </div>`
    }
}

function add_to_other_rows() {
    k = 1
    z = 4
    for (let i = 0; i < 2; i++) {
        let row_atual = document.getElementById(`row${k}`)
        for (let p = 0; p <4; p++) {
            row_atual.innerHTML += `<div class="col" style="margin-top: 5%">
            <div class="card" style="width: 18rem;" id="card">
                <img src="${lista_paises[z].url}" class="card-img-top" alt="..." style="width:286px;height:181px;">
                <div class="card-body">
                  <h5 class="card-title">${lista_paises[z].title}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
          </div>`    
          z++
        }
      k++
    }
}