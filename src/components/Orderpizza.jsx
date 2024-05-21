import React from 'react';

export default function Orderpizza() {
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

function Orderform() {
    return (
        <>
            <form action="" id="order-form"></form>
            <div className="div-order-form">
                <h2>Position Absolute Acı Pizza</h2>
                <p>85.50₺</p>
                <p>4.9</p>
                <p>(200)</p>
            </div>
            <div>
            <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yubarlar, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
            <h3>Boyut Seç <span>*</span></h3>
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
            <div>
                <h3>Hamur Seç<span>*</span></h3>
                <select onChange={(e) => handleTnickness(e.target.value)}>
                    <option disabled selected>Hamur Kalınlığı</option>
                    <option value="İnce">İnce</option>
                    <option value="Orta">Orta</option>
                    <option value="Kalın">Kalın</option>
                </select>
            </div>

        </>
    )
}
