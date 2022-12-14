import { useState } from "react";
import tas from './tas.png';
import kagit from './kagit.png';
import makas from './makas.png';


export const Ikikisi = () => {
    const [secimBir, setSecimBir] = useState('');
    const [secimIki, setSecimIki] = useState('');

    const handleChoiceBir = (e) => {
        setSecimBir(e.target.value);
        console.log("birinci oyuncu: "+e.target.value);
    }
    const handleChoiceIki = (e) => {
        setSecimIki(e.target.value);
        console.log("ikinci oyuncu: "+e.target.value);
    }
    const battle = () => {
        if(secimBir === '' || secimIki==='' ){
            alert("Eksik seçim yapıldı!")
            return;
        }

        const result =
        secimBir === secimIki
            ? "Berabere!"
            : secimBir === "TAS" && secimIki === "KAGIT"
            ? `Oyuncu 1: ${secimBir}\nOyuncu 2: ${secimIki}\nOyuncu 2 Kazandı!`
            : secimBir === "KAGIT" && secimIki === "MAKAS"
            ? `Oyuncu 1: ${secimBir}\nOyuncu 2: ${secimIki}\nOyuncu 2 Kazandı!`
            : secimBir === "MAKAS" && secimIki === "TAS"
            ? `Oyuncu 1: ${secimBir}\nOyuncu 2: ${secimIki}\nOyuncu 2 Kazandı!`
            : `Oyuncu 1: ${secimBir}\nOyuncu 2: ${secimIki}\nOyuncu 1 Kazandı!`;
        alert(result);
    }

    return(
        <div>


            <div style={{border:"1px solid purple"}}>
                <p>OYUNCU 1: Taş Kağıt Makas?</p>
                <div onChange={handleChoiceBir}>
                    <input type="radio" value="TAS" name="secimBir"/> Taş <img style={{width: "115px"}} src={tas} className="Resim" alt="Tas" />
                    <input type="radio" value="KAGIT" name="secimBir"/> Kağıt <img style={{width: "115px"}} src={kagit} className="Resim" alt="kagit" />
                    <input type="radio" value="MAKAS" name="secimBir"/>Makas <img style={{width: "115px"}} src={makas} className="Resim" alt="makas" />
                </div><br/>

            </div>


            <div style={{border:"1px solid blue"}}>
                <p>OYUNCU 2: Taş Kağıt Makas?</p>
                <div onChange={handleChoiceIki}>
                    <input type="radio" value="TAS" name="secimIki"/> Taş <img style={{width: "115px"}} src={tas} className="Resim" alt="Tas" />
                    <input type="radio" value="KAGIT" name="secimIki"/> Kağıt <img style={{width: "115px"}} src={kagit} className="Resim" alt="kagit" />
                    <input type="radio" value="MAKAS" name="secimIki"/>Makas <img style={{width: "115px"}} src={makas} className="Resim" alt="makas" />
                </div><br/>

            </div>
            
            <div style={{}}>
                    <button style={{fontSize: "25px", backgroundColor:"green",color:"white"}} onClick={battle}>
                            SAVAŞ!
                    </button>
            </div>
            <div style={{paddingTop: "35px"}}>
                <a href="/">
                    <button style={{fontSize: "20px"}}>Anasayfaya Dön</button>
                </a>
            </div>

      </div>

      
    )
}
