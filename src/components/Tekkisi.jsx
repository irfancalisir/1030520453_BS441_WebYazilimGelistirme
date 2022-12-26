import { useState } from "react";
import tas from '../fotolar/tas.png';
import kagit from '../fotolar/kagit.png';
import makas from '../fotolar/makas.png';


export const Tekkisi = () => {
    const [secim, setSecim] = useState('');

    const handleChoice = (e) => {
        setSecim(e.target.value);
        console.log(e.target.value);
    }
    const battle = () => {
        if(secim === ''){
            alert("Seçim Yapmadın!")
            return;
        }
        const pcChoice = Math.floor(Math.random() * 3);
        const pcArray = ["TAS", "KAGIT", "MAKAS"];
        const pc = pcArray[pcChoice];
        const result =
        secim === pc
            ? "Berabere!"
            : secim === "TAS" && pc === "KAGIT"
            ? `Seçimin: ${secim}\nPC: ${pc}\nPC Kazandı!`
            : secim === "KAGIT" && pc === "MAKAS"
            ? `Seçimin: ${secim}\nPC: ${pc}\nPC Kazandı!`
            : secim === "MAKAS" && pc === "TAS"
            ? `Seçimin: ${secim}\nPC: ${pc}\nPC Kazandı!`
            : `Seçimin: ${secim}\nPC: ${pc}\nKAZANDIN!`;
        alert(result);
    }

    return(
        <div>
            <div>
                <p>Taş Kağıt Makas?</p>
                <div onChange={handleChoice}>
                    <input type="radio" value="TAS" name="sec"/> Taş <img style={{width: "150px"}} src={tas} className="Resim" alt="Tas" />
                    <input type="radio" value="KAGIT" name="sec"/> Kağıt <img style={{width: "150px"}} src={kagit} className="Resim" alt="kagit" />
                    <input type="radio" value="MAKAS" name="sec"/>Makas <img style={{width: "150px"}} src={makas} className="Resim" alt="makas" />
                </div>
            </div>
            <div style={{paddingTop: "8px"}}>
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
