import React from 'react';

export default function Orderpizza(props) {
    const {
        handleTnickness, handleChangeCheckbox
    } = props;
    return (
        <>
            <header>
                <div className='div-order'>
                    <h1>Teknolojik Yemekler</h1>
                    <p>Anasayfa - <span className='order'>Sipariş Oluştur</span></p>
                </div>
            </header>
            <Orderform />
        </>
    )
}

const checkBox = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jelepeno",
    "Sucuk"
];

function Orderform() {
    return (
        <>
            <form action="" id="order-form"></form>
            <div className="div-order-form">
                <h2 className="topic">Position Absolute Acı Pizza</h2>
                <div className="order-price">
                <p className="pizza-price">85.50₺</p>
                <div className="info-stock">
                <p>4.9</p>
                <p>(200)</p>
                </div>
            </div>
            
            <div className="option-order-div">
                <div className="option-order">
            <p className="product-desc">Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yubarlar, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
            <div className="container">
            <div className="div-size">
            <h3 className="size">Boyut Seç <span style={{color: "red"}}>*</span></h3>
            </div>
            <div className="radio-button">
                <input type="radio" id="Kucuk" name="boyut" onChange={() => handleChange("Küçük")} />
                <label htmlFor="Kucuk">Küçük</label>
            </div>
            <div className="radio-button">
                <input type="radio" id="Orta" name="boyut" onChange={() => handleChange("Orta")} />
                <label htmlFor="Orta">Orta</label>
            </div>
            <div className="radio-button">
                <input type="radio" id="Buyuk" name="boyut" onChange={() => handleChange("Büyük")} />
                <label htmlFor="Buyuk">Büyük</label>
            </div>
            </div>
            <div>
                <h3 className="size dough">Hamur Seç<span>*</span></h3>
                <select onChange={(e) => handleTnickness(e.target.value)}>
                    <option disabled selected>Hamur Kalınlığı</option>
                    <option value="İnce" className="option-size">İnce</option>
                    <option value="Orta" className="option-size">Orta</option>
                    <option value="Kalın" className="option-size">Kalın</option>
                </select>
            </div>
            </div>
            <div>
                <h3>Ek Malzemeler</h3>
                <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            </div>
            <div className="options">
          {checkBox.map((item,index) => {
            return (
            <div key={index}>
              <input 
              type="checkbox" 
              id={item} 
              onChange={(event) => handleChangeCheckbox(event, item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>)
          })}
          </div>
          </div>
          <div className="siparis-notu-container">
            <h3 className="size">Sipariş Notu</h3>
            <input type="text" placeholder="Siparişine eklemek istediğin bir not var mı?" />
          </div>
          </div>
        </>
    )
}
