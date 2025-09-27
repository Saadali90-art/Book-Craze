import Plus from "lucide-react/dist/esm/icons/plus";
import Minus from "lucide-react/dist/esm/icons/minus";
import Trash2 from "lucide-react/dist/esm/icons/trash-2";
import minus from "../../../assets/Cart/minus.svg";

const CartList = ({
  handleDeleteItem,
  handleMinus,
  handlePlus,
  filteredArray,
}) => {
  return (
    <section className="flex gap-x-[10px] w-full mt-[10px]">
      <table className="w-full max-[520px]:hidden ">
        <thead className="w-full">
          <tr style={{ fontFamily: "Montserrat, sans-serif" }}>
            <th className=" text-[16px] text-left align-middle py-2 ">
              Product
            </th>
            <th className="text-[16px] text-center align-middle py-2">
              Quantity
            </th>
            <th className="text-[16px] text-center align-middle py-2">Price</th>
            <th className="text-[16px] text-right align-middle py-2">Total</th>
          </tr>
        </thead>

        <tbody style={{ fontFamily: "Archivo, sans-serif" }}>
          {filteredArray.map((item, index) => (
            <tr key={index}>
              <td className="py-2 w-[500px] max-[1257px]:w-[400px] max-[1102px]:w-[300px] max-[783px]:w-[200px] max-[580px]:w-[170px]">
                <div className="truncate   bg-pink- flex items-center gap-x-[8px]">
                  <button onClick={() => handleDeleteItem(index)}>
                    <img
                      src={minus}
                      className="min-w-[20px] h-[20px] cursor-pointer"
                      alt=""
                    />
                  </button>

                  <div className="min-w-[60px] h-[60px]">
                    <img
                      src={item.bookImage}
                      alt=""
                      className="w-[60px] h-[60px] object-cover"
                    />
                  </div>

                  <p className="truncate w-[500px] max-[1257px]:w-[400px] max-[1102px]:w-[300px] max-[783px]:w-[200px] max-[580px]:w-[170px] bg-yellow- text-[15px] capitalize">
                    {item.title}
                  </p>
                </div>
              </td>

              <td className="text-center align-middle py-2 ">
                <div className="flex items-center justify-center gap-x-[5px]">
                  <button onClick={() => handlePlus(index)}>
                    <Plus size={10} />
                  </button>

                  <p>{item.quantity}</p>

                  <button onClick={() => handleMinus(index)}>
                    <Minus size={10} />
                  </button>
                </div>
              </td>
              <td className="text-center align-middle py-2">
                <p>$ {item.price}</p>
              </td>
              <td className="text-right align-middle py-2">
                <p>$ {item.quantity * item.price}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* =========================== FOR MOBILE PHONES ====================== */}

      <section className="w-full hidden max-[520px]:flex max-[520px]:flex-col gap-y-[10px]">
        {filteredArray.length > 0 ? (
          filteredArray.map((item, index) => (
            <div key={index}>
              <div className="flex gap-x-[10px] mb-[10px]">
                <div className="w-[30%] h-[100px]">
                  <img src={item.bookImage} alt="" className="w-full h-full" />
                </div>

                <div
                  className="flex flex-col truncate w-[70%] relative"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  <p className=" truncate text-[15px] capitalize ">
                    {item.title}
                  </p>
                  <p className="text-orange-500 w-full font-[600] py-[5px]">
                    $ {item.price.toFixed(2)}
                  </p>

                  <div className="absolute bottom-0 flex  justify-between w-full">
                    <div className="flex gap-x-[5px] items-center">
                      <button onClick={() => handlePlus(index)}>
                        <Plus size={11} />
                      </button>
                      <p className="text-[16px]">{item.quantity}</p>
                      <button onClick={() => handleMinus(index)}>
                        <Minus size={11} />
                      </button>
                    </div>
                    <div>
                      <button onClick={() => handleDeleteItem(index)}>
                        <Trash2 color="#fb2c36" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow h-[1px] bg-gray-200"></div>
            </div>
          ))
        ) : (
          <div className="w-full flex items-center justify-center h-[100px] ">
            <p
              className="text-[16px] font-[400]"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              No Items Found
            </p>
          </div>
        )}
      </section>
    </section>
  );
};

export default CartList;
