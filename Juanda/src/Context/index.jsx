import { createContext, useState, useEffect } from "react";// 1-importo Contexto

export const ShoppingCartContext = createContext(); //2-creo un contexto usando createContext

export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0); //4-creo un estado


  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //detalle producto
  const [productToShow, setProductToShow] = useState({});


  //detalle producto
  const [cardProducts, setCardProducts] = useState([]);

  // shoping card . Order.

  const [order, setOrder] = useState([]);

  //ChecKout Side Menu
  const [isChecKoutSideMenu, setChecKoutSideMenu] = useState(false);
  const openChecKoutSideMenu = () => setChecKoutSideMenu(true);
  const closeChecKoutSideMenu = () => setChecKoutSideMenu(false);


  // Get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://apimocha.com/product-juancho/posts")
      .then(response => response.json())
      .then(data => setItems(data.products))
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }


  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

  return (
    <ShoppingCartContext.Provider  //3-uso mi componete creado y le digo que va a proveer un valor, en valor enviar el valor que quiera
      value={
        {
          count, // 5-evio ese estado 
          setCount,
          openProductDetail,
          closeProductDetail,
          isProductDetailOpen,
          setIsProductDetailOpen,
          productToShow,
          setProductToShow,
          cardProducts,
          setCardProducts,
          isChecKoutSideMenu,
          openChecKoutSideMenu,
          closeChecKoutSideMenu,
          order,
          setOrder,
          items,
          setItems,
          searchByTitle,
          setSearchByTitle,
          filteredItems,
          setFilteredItems,
          searchByCategory,
          setSearchByCategory

        }
      }
    >
      {children}
    </ShoppingCartContext.Provider>
  )

}