const productos = [
    {
        id: "1",
        name: "Trek Marlin 5",
        price: 2800,
        category: "bicicleta",
        img: "/images/trek-marlin5.png",
        stock: 10,
        description: `2x11 traccion shimano`,
    },
    {
        id: "2",
        name: "samsung s21",
        price: 3200,
        category: "celular",
        img: "/images/samsungs21.png",
        stock: 30,
        description: "samsung s21 128gb 6gb ram"
    },
    {
        id: "3",
        name: "Ipad Mini 5",
        price: 4300,
        category: "tablet",
        img: "/images/ipadmini5.png",
        stock: 15,
        description: "ipad mini V 128gb"
    },
    {
        id: "4",
        name: "Audifonos Samsung",
        price: 95,
        category: "audio",
        img: "/images/audifonos-samsung.png",
        stock: 6,
        description: "Audifonos Samsung Earphones Tipo C"
    },
    {
        id: "5",
        name: "Iphone 12",
        price: 3500,
        category: "celular",
        img: "/images/iphone12.png",
        stock: 10,
        description: "iphone 12 64gb 4gb ram"
    },
    {
        id: "6",
        name: "Zapatillas DVS",
        price: 270,
        category: "zapatillas",
        img: "/images/zapatilla-dvs.png",
        stock: 15,
        description: "zapatillas dvs coleccion reggae"
    },
    {
        id: "7",
        name: "Audifonos Skullcandy",
        price: 320,
        category: "audio",
        img: "/images/audifonos-skullcandy.png",
        stock: 15,
        description: "Audifonos Wireless"
    },
    {
        id: "8",
        name: "Casaca Rockbros",
        price: 120,
        category: "bicicleta",
        img: "/images/casaca-rockbros.png",
        stock: 20,
        description: "Casaca antireflectante"
    },
    {
        id: "9",
        name: "Caliper Shimano",
        price: 100,
        category: "bicicleta",
        img: "/images/caliper-shimano.png",
        stock: 10,
        description: "Caliper mecanico tourney"
    },
    {
        id: "10",
        name: "Zapatilla Puma",
        price: 220,
        category: "zapatillas",
        img: "/images/zapatilla-puma.png",
        stock: 5,
        description: "Zapatilla puma hombre"
    },
    {
        id: "11",
        name: "Bicicleta Gravel",
        price: 2950,
        category: "bicicleta",
        img: "/images/bicicleta-gravel.png",
        stock: 3,
        description: 'Bicicleta Gravel Best CX 700" Gris'
    },
    {
        id: "12",
        name: "Samsung A32",
        price: 1800,
        category: "celular",
        img: "/images/samsunga32.png",
        stock: 7,
        description: "Samsung a32 128gb || 4gb ram azul negro"
    },
    {
        id: "13",
        name: "Audifonos JBL",
        price: 450,
        category: "audio",
        img: "/images/audifonos-jbl.png",
        stock: 5,
        description: "Audifonos JBL Tune 500BT"
    },
    {
        id: "14",
        name: "Casco Cairbull",
        price: 220,
        category: "bicicleta",
        img: "/images/casco-cairbull.png",
        stock: 10,
        description: "Casco Cairbull Trail XC"
    },
    {
        id: "15",
        name: "Catalina Shimano",
        price: 270,
        category: "bicicleta",
        img: "/images/catalina-shimano.png",
        stock: 6,
        description: "Catalina Shimano 3v Deore"
    }
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}

export const getProductById = (productId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        }, 1000)
    })
}
