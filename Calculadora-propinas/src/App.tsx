import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import TipPercentajeForms from "./components/TipPercentajeForms"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderTotals from './components/OrderTotals';


function App() {

  const { order, addItem,removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
     <header className="bg-teal-500 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de calorias y consumo</h1>
     </header>
      <main className=" max-w-7xl mx-auto py-20 grid grid-cols-2">
          <div className="space-y-3 mt-10">
            <h2 className="font-black text-4xl">Menu</h2>
            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>

          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            {order.length > 0 ? (
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}/>

                    <TipPercentajeForms 
                    setTip={setTip}
                    tip={tip}
                    />
                  
                  <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                  />
              </>
            ): (
               <p className="text-center"> La order esta vacia</p>
            )}
           
          </div>
      </main>
    </> 
  )
}

export default App
