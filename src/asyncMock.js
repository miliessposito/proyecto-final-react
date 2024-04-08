export const products = [
    {
        id: 1,
        name: "Esmalte Semipermanente - Celeste",
        img: "https://res.cloudinary.com/dge6pbj4l/image/upload/v1710773715/miliEcomerce/x2plltmade4csntmxphw.jpg",
        price: 946,
        category: "semipermanente",
        description: "Un delicado esmalte de color celeste que evoca la serenidad y frescura del cielo en un día despejado. Su tono suave y brillante es perfecto para añadir un toque de elegancia y calma a tus uñas.",
        stock: 10
    },
    {
        id: 2,
        name: "Esmalte Común - Gris Claro",
        img: "https://res.cloudinary.com/dge6pbj4l/image/upload/v1710773715/miliEcomerce/njwbrtxqwpktgapnxj7p.jpg",
        price: 1035,
        category: "comun",
        description: "Un esmalte clásico de tono gris claro, ideal para un look sofisticado y versátil. Este esmalte aporta un toque de sobriedad y elegancia a tus uñas, perfecto para cualquier ocasión.",
        stock: 10
    },
    {
        id: 3,
        name: "Esmalte En Gel - Azul",
        img: "https://res.cloudinary.com/dge6pbj4l/image/upload/v1710773714/miliEcomerce/lu0vb8gu1omq3nmwt4mx.jpg",
        price: 849,
        category: "enGel",
        description: "Un vibrante esmalte en gel de color azul que destaca por su intensidad y brillo. Este tono azul profundo añade un toque de audacia y modernidad a tus uñas, creando un impacto visual llamativo.",
        stock: 10
    },
    {
        id: 4,
        name: "Esmalte Semipermanente - Gris Topo",
        img: "https://res.cloudinary.com/dge6pbj4l/image/upload/v1710773714/miliEcomerce/me7lcdn31pto1unqeje6.jpg",
        price: 100,
        category: "semipermanente",
        description: "Un esmalte semipermanente de tono gris topo, que combina la elegancia del gris con la calidez del topo. Este esmalte es ideal para un look sofisticado y moderno, perfecto para destacar tus uñas con estilo.",
        stock: 10
    },
    {
        id: 5,
        name: "Esmalte Común - Via Láctea",
        img: "https://res.cloudinary.com/dge6pbj4l/image/upload/v1710773715/miliEcomerce/m6shut8nkqvfrbrnj3ap.jpg",
        price: 179,
        category: "comun",
        description: "Un esmalte de tono vía láctea, que evoca la belleza y misterio del universo. Con destellos brillantes y un tono celestial, este esmalte es perfecto para añadir un toque de magia y brillo a tus uñas.",
        stock: 10
    },
    {
        id: 6,
        name: "Esmalte En Gel - Beige",
        img: "https://res.cloudinary.com/dge6pbj4l/image/upload/v1710773714/miliEcomerce/xj72ebtzc038mcsdtfth.jpg",
        price: 350,
        category: "enGel",
        description: "Un esmalte en gel de tono beige, que se destaca por su elegancia y sutileza. Este esmalte aporta un toque de sofisticación y neutralidad a tus uñas, ideal para un look refinado y moderno.",
        stock: 10
    },
    {
        id: 7,
        name: "Esmalte Semipermanente - Rosa Bebé",
        img: "https://res.cloudinary.com/dge6pbj4l/image/upload/v1710773714/miliEcomerce/ozzatnfrxk7jevxezhwg.jpg",
        price: 664,
        category: "semipermanente",
        description: "Un encantador esmalte semipermanente de color rosa bebé, que transmite dulzura y feminidad. Este tono suave y romántico es perfecto para añadir un toque de delicadeza y ternura a tus uñas.",
        stock: 10
    },
    {
        id: 8,
        name: "Esmalte Común - Marrón Claro",
        img: "https://res.cloudinary.com/dge6pbj4l/image/upload/v1710773714/miliEcomerce/faktp8jaz3dj0epnxxx4.jpg",
        price: 389,
        category: "comun",
        description: "Un esmalte clásico de tono marrón claro, que destaca por su calidez y versatilidad. Este esmalte es ideal para un look natural y elegante, perfecto para resaltar tus uñas con un toque cálido y acogedor.",
        stock: 10
    },
    {
        id: 9,
        name: "Esmalte En Gel - Rojo",
        img: "https://res.cloudinary.com/dge6pbj4l/image/upload/v1710773714/miliEcomerce/nlpo2rr0tnpy2m8zkxbp.jpg",
        price: 283,
        category: "enGel",
        description: "Un vibrante esmalte en gel de color rojo, que se caracteriza por su intensidad y pasión. Este tono rojo llamativo añade un toque de energía y sofisticación a tus uñas, creando un impacto audaz y elegante.",
        stock: 10
    }

]
export const getProducts = () => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        } else {
            reject('No hay productos')
        }
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            const item = products.find(product => product.id === id);
            setTimeout(() => {
                if (item) {
                    resolve(item)
                } else {
                    reject(`No se encuentra el producto con el id ${id}`)
                }
            }, 2000)

        } else {
            reject('No hay productos')
        }
    })
}