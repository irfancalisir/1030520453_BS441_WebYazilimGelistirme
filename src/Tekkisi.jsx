import { useState } from "react";
import tas from './tas.png';
import kagit from './kagit.png';
import makas from './makas.png';


export const Tekkisi = () => {
    const [secim, setSecim] = useState('');

    const handleChoice = (e) => {
        setSecim(e.target.value);
        console.log(e.target.value);
    }
    const battle = () => {
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
            <p>Taş Kağıt Makas?</p>
            <div onChange={handleChoice}>
                <input type="radio" value="TAS" name="sec"/> Taş <img style={{width: "150px"}} src={tas} className="Resim" alt="Tas" />
                <input type="radio" value="KAGIT" defaultChecked name="sec"/> Kağıt <img style={{width: "150px"}} src={kagit} className="Resim" alt="kagit" />
                <input type="radio" value="MAKAS" name="sec"/>Makas <img style={{width: "150px"}} src={makas} className="Resim" alt="makas" />
            </div><br/>
            <button onClick={battle}>
                SEÇ
            </button>

      </div>
    )
}
